#!/bin/bash

# Deployment script for Jan Eberwein Portfolio on VPS
# Location on VPS: ~/apps/portfolio/deploy.sh
# Make it executable with: chmod +x deploy.sh

echo "Starting deployment for janeberwein.at..."

# 1. Pull the latest code
echo "Pulling latest code from GitHub..."
git pull origin main

# 2. Install dependencies
echo "Installing dependencies..."
npm install

# 3. Build the Next.js application
echo "Building the application..."
npm run build

# 4. Restart the application using PM2
echo "Restarting the application..."
pm2 restart ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production

echo "Deployment complete!"
