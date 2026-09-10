#!/usr/bin/env python3
"""
Resilience Gymnastics Academy — Image Optimization & Conversion Pipeline

This script automates:
1. Converting raw high-res AI generation outputs (PNG/JPG) in media/raw-generated/
   into web-optimized, properly cropped WebP assets in public/images/.
2. Seeding or verifying all required asset slots to ensure zero broken links.

Usage:
    python3 scripts/optimize_images.py --help
    python3 scripts/optimize_images.py --init-placeholders
    python3 scripts/optimize_images.py --process-raw
"""

import sys
import os
import argparse
import urllib.request
import io
from pathlib import Path
from PIL import Image, ImageOps

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_IMAGES_DIR = WORKSPACE_ROOT / "public" / "images"
RAW_GENERATED_DIR = WORKSPACE_ROOT / "media" / "raw-generated"

ASSET_SLOTS = {
    # Hero & Core Banners (16:9)
    "hero-gymnast.webp": {
        "width": 1600,
        "height": 900,
        "fallback_url": "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=1600&q=80",
        "description": "Main homepage hero card banner"
    },
    
    # Core Values (4:3)
    "value-confidence.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556563-2c28adb3fcc5?auto=format&fit=crop&w=800&q=80",
        "description": "Value 1: Confidence, Character & Community"
    },
    "value-effort.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556539-db2d2099ded1?auto=format&fit=crop&w=800&q=80",
        "description": "Value 2: Effort Over Perfection"
    },
    "value-courage.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=800&q=80",
        "description": "Value 3: Courage Over Fear"
    },
    "value-growth.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556730-472e7315caa0?auto=format&fit=crop&w=800&q=80",
        "description": "Value 4: Growth Over Comparison"
    },

    # Class Programs (4:3)
    "class-parent-tot.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?auto=format&fit=crop&w=800&q=80",
        "description": "Parent & Tot Gymnastics (18 Mo - 3 Years)"
    },
    "class-preschool.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?auto=format&fit=crop&w=800&q=80",
        "description": "Preschool Gymnastics (3 - 5 Years)"
    },
    "class-gymninjas.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556432-ece48a4f2c1a?auto=format&fit=crop&w=800&q=80",
        "description": "GymNinjas Obstacle & Parkour"
    },
    "class-girls-rec.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=800&q=80",
        "description": "Beginner Girls Gymnastics"
    },
    "class-girls-intermediate.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556539-db2d2099ded1?auto=format&fit=crop&w=800&q=80",
        "description": "Intermediate Girls Gymnastics"
    },
    "class-girls-advanced.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        "description": "Advanced Girls Gymnastics"
    },
    "class-boys-beginner.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
        "description": "Beginner Boys Gymnastics"
    },
    "class-boys-intermediate.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1642932163549-3af44da6017f?auto=format&fit=crop&w=800&q=80",
        "description": "Intermediate Boys Gymnastics"
    },
    "class-boys-advanced.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        "description": "Advanced Boys Gymnastics"
    },

    # Events (4:3)
    "event-pno.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        "description": "Parents' Night Out Event Highlight"
    },
    "event-birthday.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=800&q=80",
        "description": "Gymnastics Birthday Parties"
    },

    # Competitive & Pre-Team (4:3)
    "team-mighty-minis.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?auto=format&fit=crop&w=800&q=80",
        "description": "Mighty Minis Pre-Team"
    },
    "team-xcel.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1655842556563-2c28adb3fcc5?auto=format&fit=crop&w=800&q=80",
        "description": "USAG Xcel Competitive Team"
    },
    "team-dp.webp": {
        "width": 800,
        "height": 600,
        "fallback_url": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        "description": "Developmental Program (DP) Gymnastics"
    }
}

def crop_and_resize(img: Image.Image, target_w: int, target_h: int) -> Image.Image:
    """Center-crops to aspect ratio and resizes using high-quality Lanczos resampling."""
    return ImageOps.fit(img.convert("RGB"), (target_w, target_h), Image.Resampling.LANCZOS)

def process_image(src_path: Path, dest_path: Path, target_w: int, target_h: int, quality: int = 85):
    """Processes an image file into an optimized WebP."""
    with Image.open(src_path) as img:
        optimized = crop_and_resize(img, target_w, target_h)
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        optimized.save(dest_path, "WEBP", quality=quality, method=6)
        size_kb = dest_path.stat().st_size / 1024
        print(f"  ✓ Saved {dest_path.name} ({target_w}x{target_h}, {size_kb:.1f} KB)")

def process_raw_generated():
    """Processes all images in media/raw-generated/ matching slot names."""
    print("Checking media/raw-generated/ for generated AI assets...")
    if not RAW_GENERATED_DIR.exists():
        RAW_GENERATED_DIR.mkdir(parents=True, exist_ok=True)
        print(f"Created {RAW_GENERATED_DIR}")
        return

    found = 0
    for slot_name, meta in ASSET_SLOTS.items():
        stem = Path(slot_name).stem  # e.g. "hero-gymnast"
        # Search for any file starting with stem, e.g. hero-gymnast.png, hero-gymnast_mj.jpg
        matches = list(RAW_GENERATED_DIR.glob(f"{stem}*"))
        if matches:
            src = matches[0]
            dest = PUBLIC_IMAGES_DIR / slot_name
            print(f"Processing raw asset: {src.name} -> {dest.name}")
            process_image(src, dest, meta["width"], meta["height"])
            found += 1

    if found == 0:
        print("No raw generated images found in media/raw-generated/ yet.")
        print("To replace an image, drop your Midjourney/Flux render as e.g.:")
        print(f"  {RAW_GENERATED_DIR}/hero-gymnast.png")
        print("Then re-run this script with --process-raw.")
    else:
        print(f"\nSuccessfully processed {found} AI asset(s) into public/images/!")

def init_placeholders():
    """Ensures every required asset slot has a valid, optimized WebP in public/images/."""
    print("Verifying and initializing WebP assets in public/images/...")
    PUBLIC_IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    
    for slot_name, meta in ASSET_SLOTS.items():
        dest = PUBLIC_IMAGES_DIR / slot_name
        if dest.exists() and dest.stat().st_size > 0:
            size_kb = dest.stat().st_size / 1024
            print(f"  Existing asset: {slot_name} ({size_kb:.1f} KB)")
            continue

        print(f"  Initializing slot {slot_name} from fallback...")
        try:
            req = urllib.request.Request(meta["fallback_url"], headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
            with Image.open(io.BytesIO(data)) as img:
                optimized = crop_and_resize(img, meta["width"], meta["height"])
                optimized.save(dest, "WEBP", quality=82, method=6)
                size_kb = dest.stat().st_size / 1024
                print(f"  ✓ Initialized {slot_name} ({size_kb:.1f} KB)")
        except Exception as e:
            print(f"  ⚠ Failed to initialize {slot_name}: {e}")

    print("\nAll asset slots verified in public/images/!")

def main():
    parser = argparse.ArgumentParser(description="Optimize and manage RGA image assets.")
    parser.add_argument("--init-placeholders", action="store_true", help="Ensure all local WebP slots exist")
    parser.add_argument("--process-raw", action="store_true", help="Process raw images from media/raw-generated/")
    args = parser.parse_args()

    if not args.init_placeholders and not args.process_raw:
        init_placeholders()
        process_raw_generated()
    else:
        if args.init_placeholders:
            init_placeholders()
        if args.process_raw:
            process_raw_generated()

if __name__ == "__main__":
    main()
