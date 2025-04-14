require('dotenv').config({ path: './.env' });
const express = require('express');
const calendarRoutes = require('./routes/calendarRoutes');

const app = express();

app.use(express.json());

const PORT = 8000;

app.use('/calendar', calendarRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
