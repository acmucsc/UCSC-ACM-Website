const express = require('express');
const { getWeekEvents, getMonthEvents } = require('../controllers/calendarController');

const router = express.Router();

// router.get('/events', getEvents);

router.post('/events/week', getWeekEvents);
router.post('/events/month', getMonthEvents);

module.exports = router;
