const express = require('express');
const { getWeekEvents, getMonthEvents, getEvents } = require('../controllers/calendarController');

const router = express.Router();

// router.get('/events', getEvents);

router.post('/events/week', getWeekEvents);
router.post('/events/month', getMonthEvents);
router.get('/events', getEvents);

module.exports = router;
