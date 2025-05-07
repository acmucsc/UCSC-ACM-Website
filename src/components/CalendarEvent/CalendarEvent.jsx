import React from "react";

import './CalendarEvent.css'

const CalendarEvent = ({title, date, time, location}) => {
    return (
        <div className="event-box">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-subtext">
                <p><b>Date:</b> {date}</p>
                {time && <p><b>Time:</b> {time}</p>}
                {location && <p><b>Location:</b> {location}</p>}
            </div>
        </div>
    );
};

export default CalendarEvent;