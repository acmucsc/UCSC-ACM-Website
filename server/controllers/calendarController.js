const { google } = require('googleapis');
const { isValidDate, startOfWeek, endOfWeek } = require('../utils/dateUtils');

const jwtClient = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar.readonly']
);

// Get the calendar events for a given day's week 
const getEvents = async (req, res) => {
    console.log('/calendar/events requested');

    // Check if date was given and is a valid date
    let reqDate = req.body.date;
    if (!reqDate || !isValidDate(reqDate)) {
        res.status(400).send('Invalid request, valid date required.');
        return
    }

    try {
        await jwtClient.authorize();

        // Choose correct google calendar
        const calendar = google.calendar({ version: 'v3', auth: jwtClient });
        const calendarId = process.env.DEFAULT_CALENDAR_ID;

        const date = new Date(Date.parse(reqDate.trim()))

        // Request events
        const response = await calendar.events.list({
            calendarId,
            timeMin: startOfWeek(date).toISOString(),
            timeMax: endOfWeek(date).toISOString(),
            maxResults: 15,
            singleEvents: true,
            orderBy: 'startTime'
        });

        // Parse events for returning
        const events = response.data.items.map(event => ({
            title: event.summary || '',
            start: event.start?.dateTime || '',
            end: event.end?.dateTime || '',
            description: event.description || '',
            location: event.location || '',
            created: event.created || '',
            updated: event.updated || ''
        }));

        // Send correct status code
        if (events.length === 0) {
            res.status(204).send(events); 
        } else {
            res.status(200).send(events);
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Error fetching events');
    }
};

module.exports = { getEvents };
