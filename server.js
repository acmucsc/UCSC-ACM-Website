import express from 'express';
import calendarHandler from './api/calendar.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = 3000;

// Resolve the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.all('/api/calendar', (req, res) => {
    calendarHandler(req, res);
});

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);

    // Check for missing env vars
    if (!process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY || !process.env.DEFAULT_CALENDAR_ID) {
        console.warn('WARNING: Missing environment variables in .env file!');
        console.warn('Make sure you have a .env file with CLIENT_EMAIL, PRIVATE_KEY, and DEFAULT_CALENDAR_ID');
    }
});
