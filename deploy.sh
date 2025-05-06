#!/bin/bash

# This script builds and deploys the static React application
# without requiring the full Node.js backend

echo "🛠️ SpecifiAI Static Deployment Script"
echo "==========================================="

# Step 1: Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Step 2: Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Step 3: Build the React application
echo "🏗️ Building React application..."
npm run build

# Step 4: Check if the build was successful
if [ ! -d "dist" ] && [ ! -d "dist/public" ]; then
    echo "❌ Build failed. Please check for errors above."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "🚀 To run the application, execute: node static-server.js"
echo "==========================================="