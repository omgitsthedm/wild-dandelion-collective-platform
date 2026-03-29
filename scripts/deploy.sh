#!/bin/bash
# Production Deployment Script
# The Wild Dandelion Collective

set -e  # Exit on error

echo "🚀 Starting Production Deployment..."
echo "====================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

echo ""
echo "📦 Step 1: Installing dependencies..."
npm ci

echo ""
echo "🔍 Step 2: Running type check..."
npx tsc --noEmit

echo ""
echo "🏗️  Step 3: Building production..."
npm run build

echo ""
echo "✅ Build successful!"

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo ""
    echo "⚠️  Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Deploy to Netlify
echo ""
echo "🌐 Step 4: Deploying to Netlify..."
if [ "$1" == "--prod" ]; then
    echo "Deploying to PRODUCTION..."
    netlify deploy --prod --dir=.next
else
    echo "Deploying to DRAFT (use --prod for production)..."
    netlify deploy --dir=.next
fi

echo ""
echo "====================================="
echo "✅ Deployment Complete!"
echo "====================================="
echo ""
echo "Next steps:"
echo "1. Check the deploy URL"
echo "2. Test all forms and booking flow"
echo "3. Submit sitemap to Google Search Console"
echo "4. Update Google Business Profile with new site URL"
echo ""
