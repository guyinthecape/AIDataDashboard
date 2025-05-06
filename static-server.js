// @ts-check
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
// For Railway, use process.env.PORT; locally, use a different port to avoid conflicts
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

// Determine the correct path to the built files
let staticPath = path.join(__dirname, 'dist', 'public');
if (!fs.existsSync(staticPath)) {
  staticPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(staticPath)) {
    console.error('Error: Cannot find static files directory.');
    console.error('Please make sure you have run "npm run build" first.');
    process.exit(1);
  }
}

console.log(`Serving static files from: ${staticPath}`);

// Set CORS headers for all responses
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Serve static files
app.use(express.static(staticPath));

// For any other route, serve the index.html file (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
🚀 Static server running!
📂 Serving files from: ${staticPath}
🌐 Server accessible at: http://localhost:${PORT}
`);
});