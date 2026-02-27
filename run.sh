#!/bin/bash

# Configuration
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

echo "🚀 Starting development environment setup..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 node_modules not found. Installing dependencies..."
    npm install
else
    echo "✅ node_modules found. Skipping installation."
fi

# Check for .env.local
if [ ! -f ".env.local" ]; then
    echo "⚠️  WARNING: .env.local not found."
    if [ -f ".env.example" ]; then
        echo "📝 Creating .env.local from .env.example..."
        cp .env.example .env.local
        echo "👉 Please set your GEMINI_API_KEY in .env.local"
    else
        echo "👉 Please create a .env.local file and set your GEMINI_API_KEY."
    fi
else
    echo "✅ .env.local found."
fi

echo "✨ Starting development server..."
npm run dev
