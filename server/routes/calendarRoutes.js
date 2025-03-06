const express = require('express');
const { getEvents } = require('../controllers/calendarController');

const router = express.Router();

router.get('/events', getEvents);

module.exports = router;
