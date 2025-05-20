import { google } from 'googleapis';

const jwtClient = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar.readonly']
);

// Get the calendar events for a given day's week 
const getEvents = async (req, res) => {
    console.log('/calendar/events requested');
    console.log(process.env.PRIVATE_KEY.replace(/\\n/g, '\n'))

    try {
        await jwtClient.authorize();
        
        // Choose correct google calendar
        const calendar = google.calendar({ version: 'v3', auth: jwtClient });
        const calendarId = process.env.DEFAULT_CALENDAR_ID;

        const weekFuturePeriod = 10; // How many weeks after current week to show upcoming events
        const weekPastPeriod = 2;    // How many weeks before current week to show passed events

        const date = new Date();
        const weeksBefore = new Date(date.getTime() - weekPastPeriod * 7 * 24 * 60 * 60 * 1000);
        const weeksAfter = new Date(date.getTime() + weekFuturePeriod * 7 * 24 * 60 * 60 * 1000);

        // Request events
        const response = await calendar.events.list({
            calendarId,
            timeMin: weeksBefore.toISOString(),
            timeMax: weeksAfter.toISOString(),
            maxResults: 50,
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

const handler = async (req, res) => {
    if (req.method === 'POST' || req.method === 'GET') {
        await getEvents(req, res);
        return;
    }
    res.status(405).json({ error: 'Method not allowed' });
};

export default handler;

