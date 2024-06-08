// server.js

import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url'; // Import the fileURLToPath function
import initSocketIO from './services/service.js';

const __filename = fileURLToPath(import.meta.url); // Get the current filename
const __dirname = path.dirname(__filename); // Get the directory name

const app = express();
const server = http.createServer(app);
const port = 3000;

// Middleware
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html on root access
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Initialize Socket.IO
const io = initSocketIO(server);

// Start the server
server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default io;
