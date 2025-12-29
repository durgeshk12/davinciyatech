#!/bin/bash

# Deployment script for tech.davinciya.com
# This script builds the frontend and restarts the backend

set -e

echo "🚀 Starting deployment for tech.davinciya.com..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Navigate to project root
cd /var/www/html/tech.davinciya.com

# Step 1: Install/update dependencies
echo -e "${YELLOW}📦 Installing frontend dependencies...${NC}"
cd client-src
npm install

echo -e "${YELLOW}📦 Installing backend dependencies...${NC}"
cd ../server
npm install

# Step 2: Build frontend
echo -e "${YELLOW}🏗️  Building frontend...${NC}"
cd ../client-src
npm run build

if [ ! -d "../frontend" ]; then
    echo "❌ Frontend build failed! frontend directory not found."
    exit 1
fi

echo -e "${GREEN}✅ Frontend built successfully!${NC}"

# Step 3: Restart backend with PM2
echo -e "${YELLOW}🔄 Restarting backend...${NC}"
cd ..
if command -v pm2 &> /dev/null; then
    pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js
    echo -e "${GREEN}✅ Backend restarted with PM2!${NC}"
    echo "View logs with: pm2 logs tech-davinciya-backend"
else
    echo -e "${YELLOW}⚠️  PM2 not found. Please restart the backend manually.${NC}"
    echo "Run: cd server && npm start"
fi

echo -e "${GREEN}🎉 Deployment complete!${NC}"

