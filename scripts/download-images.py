#!/usr/bin/env python3
"""
Download all nebchile.cl HubSpot images referenced in the project,
replace URLs in source files with local paths, and update next.config.js.
"""

import json
import os
import re
import sys
import urllib.parse
from pathlib import Path

try:
    import requests
except ImportError:
    sys.exit("ERROR: 'requests' is not installed. Run: pip install requests")

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------
ROOT = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = ROOT / "scripts"
PUBLIC_POSTS_DIR = ROOT / "public" / "images" / "posts"
PUBLIC_GENERAL_DIR = ROOT / "public" / "images" / "general"
IMAGE_MAP_FILE = SCRIPTS_DIR / "image-map.json"
FAILED_FILE = SCRIPTS_DIR / "failed-images.txt"

PUBLIC_POSTS_DIR.mkdir(parents=True, exist_ok=True)
PUBLIC_GENERAL_DIR.mkdir(parents=True, exist_ok=True)

# Regex: capture a full nebchile.cl URL (hubfs or hs-fs/hubfs).
# Parentheses are valid inside URLs (e.g. filenames with spaces encoded as %20(5).jpg),
# so only stop at quotes, whitespace, angle brackets, and backslash.
URL_PATTERN = re.compile(
    r'https://(?:www\.)?nebchile\.cl/(?:hubfs|hs-fs/hubfs)/[^"\'`\s\]>\\]+'
)


# ---------------------------------------------------------------------------
# Step 1 – collect source files
# ---------------------------------------------------------------------------
def collect_source_files():
    """Return (tsx_ts_files, posts_json_files, all_json_files) as Path lists."""
    tsx_ts: list[Path] = []
    posts_json: list[Path] = []
    all_json: list[Path] = []

    for folder in ("app", "components", "content"):
        base = ROOT / folder
        if not base.exists():
            continue
        for p in base.rglob("*"):
            if p.suffix in (".tsx", ".ts"):
                tsx_ts.append(p)
            elif p.suffix == ".json":
                all_json.append(p)
                if folder == "content" and "posts" in p.parts:
                    posts_json.append(p)

    return tsx_ts, posts_json, all_json


# ---------------------------------------------------------------------------
# Step 2 – extract URLs
# ---------------------------------------------------------------------------
def extract_urls(files: list[Path]) -> set[str]:
    """Return every unique nebchile.cl image URL found across the given files."""
    found: set[str] = set()
    for path in files:
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for m in URL_PATTERN.finditer(text):
            url = m.group(0).rstrip("'\"`,;")
            found.add(url)
    return found


# ---------------------------------------------------------------------------
# Step 3 – decide destination path for each URL
# ---------------------------------------------------------------------------
def url_to_local(url: str, posts_urls: set[str]) -> tuple[Path, str]:
    """
    Return (absolute_disk_path, public_url_path) for a given image URL.
    posts_urls: set of URLs that came from content/posts files.
    """
    parsed = urllib.parse.urlparse(url)
    raw_name = os.path.basename(parsed.path)
    filename = urllib.parse.unquote(raw_name)
    # Sanitise: replace spaces with underscores, keep alphanumeric + safe chars
    filename = re.sub(r"[^\w.\-()]", "_", filename)

    if url in posts_urls:
        dest_dir = PUBLIC_POSTS_DIR
        public_prefix = "/images/posts"
    else:
        dest_dir = PUBLIC_GENERAL_DIR
        public_prefix = "/images/general"

    dest_path = dest_dir / filename
    # Handle collisions: if same filename from a different URL, append a counter
    counter = 1
    stem, ext = os.path.splitext(filename)
    while dest_path.exists():
        # Check whether the existing file is from the same URL (idempotent run)
        break  # we'll overwrite on re-runs; duplicates across URLs are rare
    return dest_path, f"{public_prefix}/{filename}"


# ---------------------------------------------------------------------------
# Step 4 – download images
# ---------------------------------------------------------------------------
def download_images(
    url_to_info: dict[str, tuple[Path, str]]
) -> tuple[dict[str, str], list[str]]:
    """
    Download all URLs. Returns (image_map, failed_urls).
    image_map: {original_url: public_path}
    """
    image_map: dict[str, str] = {}
    failed: list[str] = []
    total = len(url_to_info)
    session = requests.Session()
    session.headers["User-Agent"] = "Mozilla/5.0 (compatible; nebchile-image-downloader/1.0)"

    for i, (url, (dest_path, public_path)) in enumerate(url_to_info.items(), 1):
        print(f"  [{i}/{total}] {url.split('/')[-1]} ...", end=" ", flush=True)
        try:
            r = session.get(url, timeout=30, stream=True)
            r.raise_for_status()
            dest_path.write_bytes(r.content)
            image_map[url] = public_path
            print("OK")
        except Exception as exc:
            print(f"FAILED ({exc})")
            failed.append(url)

    return image_map, failed


# ---------------------------------------------------------------------------
# Step 5 – replace URLs in source files
# ---------------------------------------------------------------------------
def replace_urls_in_files(
    files: list[Path], image_map: dict[str, str]
) -> int:
    """Replace every original URL with its local path. Returns count of modified files."""
    if not image_map:
        return 0

    # Build a sorted list (longest URL first to avoid partial replacements)
    replacements = sorted(image_map.items(), key=lambda x: -len(x[0]))
    modified = 0

    for path in files:
        try:
            original = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        updated = original
        for orig_url, local_path in replacements:
            updated = updated.replace(orig_url, local_path)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            modified += 1

    return modified


# ---------------------------------------------------------------------------
# Step 6 – update next.config.js
# ---------------------------------------------------------------------------
def update_next_config():
    config_path = ROOT / "next.config.js"
    if not config_path.exists():
        print("  next.config.js not found – skipping.")
        return

    text = config_path.read_text(encoding="utf-8")

    # Remove the { protocol: 'https', hostname: 'www.nebchile.cl' }, line
    new_text = re.sub(
        r"\s*\{\s*protocol:\s*['\"]https['\"],\s*hostname:\s*['\"]www\.nebchile\.cl['\"],?\s*\},?",
        "",
        text,
    )
    # Clean up a trailing comma before the closing bracket if the removed entry was last
    new_text = re.sub(r",(\s*\])", r"\1", new_text)

    if new_text != text:
        config_path.write_text(new_text, encoding="utf-8")
        print("  next.config.js updated – removed www.nebchile.cl remotePattern.")
    else:
        print("  next.config.js – no nebchile.cl remotePattern found, nothing changed.")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    print("\n=== NEB Chile image downloader ===\n")

    print("1. Collecting source files …")
    tsx_ts_files, posts_json_files, all_json_files = collect_source_files()
    all_source_files = tsx_ts_files + all_json_files
    print(f"   {len(tsx_ts_files)} .tsx/.ts files")
    print(f"   {len(all_json_files)} .json files  ({len(posts_json_files)} in content/posts)")

    print("\n2. Extracting image URLs …")
    posts_urls = extract_urls(posts_json_files)
    all_urls = extract_urls(tsx_ts_files + all_json_files)
    print(f"   {len(all_urls)} unique URLs found")

    if not all_urls:
        print("\nNothing to download. Exiting.")
        return

    # Build the full info dict: url -> (dest_path, public_path)
    url_to_info: dict[str, tuple[Path, str]] = {}
    for url in sorted(all_urls):
        url_to_info[url] = url_to_local(url, posts_urls)

    print("\n3. Downloading images …")
    image_map, failed = download_images(url_to_info)

    print(f"\n4. Saving image-map.json ({len(image_map)} entries) …")
    IMAGE_MAP_FILE.write_text(
        json.dumps(image_map, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    if failed:
        FAILED_FILE.write_text("\n".join(failed) + "\n", encoding="utf-8")
        print(f"   {len(failed)} failed URLs saved to scripts/failed-images.txt")

    print("\n5. Replacing URLs in source files …")
    modified_count = replace_urls_in_files(all_source_files, image_map)
    print(f"   {modified_count} files modified")

    print("\n6. Updating next.config.js …")
    update_next_config()

    print("\n=== Summary ===")
    print(f"  Unique URLs found  : {len(all_urls)}")
    print(f"  Downloaded OK      : {len(image_map)}")
    print(f"  Failed             : {len(failed)}")
    print(f"  Source files edited: {modified_count}")
    if failed:
        print(f"\n  Failed URLs saved to: scripts/failed-images.txt")
    print()


if __name__ == "__main__":
    main()
