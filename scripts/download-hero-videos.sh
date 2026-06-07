#!/bin/bash
# Download hero videos from Mixkit (free stock video)
# License: Mixkit License - Free for commercial use

set -e

OUTPUT_DIR="public/assets"

# Video 1: Family walking together at sunset (original)
VIDEO1_URL="https://assets.mixkit.co/videos/6213/6213-720.mp4"
VIDEO1_FILE="$OUTPUT_DIR/hero-video-1.mp4"

# Video 2: Parents playing with their little son in the park
VIDEO2_URL="https://assets.mixkit.co/videos/33784/33784-720.mp4"
VIDEO2_FILE="$OUTPUT_DIR/hero-video-2.mp4"

# Video 3: Family sitting on a hill watching the nature
VIDEO3_URL="https://assets.mixkit.co/videos/36631/36631-720.mp4"
VIDEO3_FILE="$OUTPUT_DIR/hero-video-3.mp4"

echo "Creating output directory..."
mkdir -p "$OUTPUT_DIR"

echo "Downloading video 1 (Family walking together at sunset)..."
curl -L -o "$VIDEO1_FILE" "$VIDEO1_URL"
echo "Video 1 downloaded to $VIDEO1_FILE"
echo "Size: $(du -h "$VIDEO1_FILE" | cut -f1)"

echo "Downloading video 2 (Parents playing with son in the park)..."
curl -L -o "$VIDEO2_FILE" "$VIDEO2_URL"
echo "Video 2 downloaded to $VIDEO2_FILE"
echo "Size: $(du -h "$VIDEO2_FILE" | cut -f1)"

echo "Downloading video 3 (Family sitting on a hill watching nature)..."
curl -L -o "$VIDEO3_FILE" "$VIDEO3_URL"
echo "Video 3 downloaded to $VIDEO3_FILE"
echo "Size: $(du -h "$VIDEO3_FILE" | cut -f1)"

echo "All hero videos downloaded successfully!"
