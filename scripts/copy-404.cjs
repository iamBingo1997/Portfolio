const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const targetPath = path.join(distDir, "404.html");

if (!fs.existsSync(distDir)) {
  console.error("Dist directory not found:", distDir);
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in dist:", indexPath);
  process.exit(1);
}

fs.copyFileSync(indexPath, targetPath);
console.log("Created 404.html from index.html for GitHub Pages SPA fallback.");