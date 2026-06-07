#!/bin/bash
# Download hero video from Mixkit (free stock video)
# Video: Family walking together at sunset
# License: Mixkit License - Free for commercial use

set -e

VIDEO_URL="https://assets.mixkit.co/videos/6213/6213-720.mp4"
OUTPUT_DIR="public/assets"
OUTPUT_FILE="$OUTPUT_DIR/hero-video.mp4"

echo "Creating output directory..."
mkdir -p "$OUTPUT_DIR"

echo "Downloading video from Mixkit..."
curl -L -o "$OUTPUT_FILE" "$VIDEO_URL"

echo "Video downloaded to $OUTPUT_FILE"
echo "Size: $(du -h "$OUTPUT_FILE" | cut -f1)"
