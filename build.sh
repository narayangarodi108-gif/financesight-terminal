#!/bin/bash
echo "--- STARTING NATIVE NEXTJS OVERRIDE BUILD ---"
npm install --include=dev
npx next build
mkdir -p .next/static/css
npx tailwindcss -i ./app/globals.css -o ./.next/static/css/app.css --minify
echo "--- BUILD OVERRIDE COMPLETE ---"
