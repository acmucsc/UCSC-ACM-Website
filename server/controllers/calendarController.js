const { google } = require('googleapis');
const { isValidDate, startOfWeek, endOfWeek } = require('../utils/dateUtils');

const jwtClient = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar.readonly']
);

// Get the calendar events for the week
const getEvents = async (req, res) => {
    try {
        await jwtClient.authorize();

        const calendar = google.calendar({ version: 'v3', auth: jwtClient });
        const calendarId = req.query.calendar ?? process.env.DEFAULT_CALENDAR_ID;

        const date = isValidDate(req.query.calendar) ? new Date(req.query.calendar) : new Date();

        const response = await calendar.events.list({
            calendarId,
            timeMin: startOfWeek(date).toISOString(),
            timeMax: endOfWeek(date).toISOString(),
            maxResults: 15,
            singleEvents: true,
            orderBy: 'startTime'
        });

        const events = response.data.items.map(event => ({
            title: event.summary || '',
            start: event.start?.dateTime || '',
            end: event.end?.dateTime || '',
            description: event.description || '',
            location: event.location || '',
            created: event.created || '',
            updated: event.updated || ''
        }));

        res.status(200).send(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Error fetching events');
    }
};

module.exports = { getEvents };
