#!/bin/bash

# Check if the dist directory exists
if [ ! -d "dist" ] && [ ! -d "dist/public" ]; then
  echo "⚠️ Build artifacts not found!"
  echo "Building the application first..."
  npm run build
fi

# Start the static server
echo "🚀 Starting static server..."
node static-server.js