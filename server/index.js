require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');

const calendarRoutes = require('./routes/calendarRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/calendar', calendarRoutes);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
