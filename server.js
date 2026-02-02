import express from 'express';
import calendarHandler from './api/calendar.js';
import authRoutes from './api/auth.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

// Resolve the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/acm-website')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// API Routes
app.all('/api/calendar', (req, res) => {
    calendarHandler(req, res);
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);

    // Check for missing env vars
    if (!process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY || !process.env.DEFAULT_CALENDAR_ID) {
        console.warn('WARNING: Missing Google Calendar env vars! Calendar features may not work.');
    }
    if (!process.env.MONGO_URI) {
        console.warn('WARNING: Missing MONGO_URI! Using localhost fallback.');
    }
});
