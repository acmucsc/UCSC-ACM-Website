API Endpoints

Calendar

calendar/events will be a POST request that will return a 200 OK response or 400 error codes. Response content will be the resultant user as a json object.
    Request data:
        string date: date of requested week for events (in format <month/date/year>)
    Return data:
        {
            "title": "Test",
            "start": "2025-02-25T19:00:00-08:00",
            "end": "2025-02-25T20:00:00-08:00",
            "description": "this is a test",
            "location": "Jack Baskin Engineering, 606 Engineering Loop, Santa Cruz, CA 95064, USA",
            "created": "2025-02-25T01:44:06.000Z",
            "updated": "2025-02-25T02:47:49.841Z"
        }
    Validation:
        If no date given, will return 400 Bad Request error code
    Use:
        For getting events from the acm events calendar
    Note/BEHAVIOR:
        Normal HTTP request
