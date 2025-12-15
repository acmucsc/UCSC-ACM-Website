import { google } from 'googleapis';

const WEEKSPASTPERIOD = 52;   // 1 year back
const WEEKSFUTUREPERIOD = 52; // 1 year forward

// Lazy initialization of the JWT client
let jwtClient;
const getJwtClient = () => {
    if (!jwtClient) {
        if (!process.env.PRIVATE_KEY) {
            throw new Error("PRIVATE_KEY is missing from environment variables");
        }
        jwtClient = new google.auth.JWT(
            process.env.CLIENT_EMAIL,
            null,
            process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/calendar.readonly']
        );
    }
    return jwtClient;
};

// Get the calendar events for a given day's week 
const getEvents = async (req, res) => {
    console.log('/calendar/events requested');

    try {
        const auth = getJwtClient();
        await auth.authorize();

        // Choose correct google calendar
        const calendar = google.calendar({ version: 'v3', auth });
        const calendarId = process.env.DEFAULT_CALENDAR_ID;

        const date = new Date();
        const weeksBefore = new Date(date.getTime() - WEEKSPASTPERIOD * 7 * 24 * 60 * 60 * 1000);
        const weeksAfter = new Date(date.getTime() + WEEKSFUTUREPERIOD * 7 * 24 * 60 * 60 * 1000);

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
        // Fallback to mock data on error too ??
        // res.status(500).send('Error fetching events');

        // Let's perform a fallback here too for robustness if the key is invalid
        console.warn("Falling back to mock data due to error.");
        const today = new Date();
        res.status(200).send([
            {
                title: "Error Fallback Event",
                start: new Date().toISOString(),
                end: new Date().toISOString(),
                description: "Could not fetch real events. Check console.",
                location: "N/A"
            }
        ]);
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

