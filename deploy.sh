#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and deploys the React app to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting GitHub Pages deployment..."

# Check if gh-pages is installed
if ! npm list gh-pages &> /dev/null; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your app should be available at: https://PriyanshuSharma23.github.io/alpaca-image-gen"
echo ""
echo "Note: It may take a few minutes for the changes to be visible."
