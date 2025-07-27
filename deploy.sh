#!/bin/bash

# Deploy script for GitHub Pages
echo "Building the project..."
npm run build

echo "Adding built files to git..."
git add docs/

echo "Committing changes..."
git commit -m "Update built files - $(date)"

echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete! Your changes should be live in a few minutes." 