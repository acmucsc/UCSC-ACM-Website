import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import CalendarEvent from "../../components/CalendarEvent/CalendarEvent"

import './Events.css'

const Events = () => {
    return (
        <div className="event-layout">
            <Navbar />
            <main className="event-main-content event-wrapper">
                <section className="event-info-section">
                    <h1 className="event-header">Events</h1>
                    <div className="event-info-text-area">
                        <p className="event-info-text">Find all ACM events below and add them to your own calendar by clicking the button below! (or something along these line maybe)</p>
                    </div>
                    <a href="https://calendar.google.com/calendar/u/0/r?cid=53c94138c32b205f33adbe39d0cad9e11ff2fe006f97fe79e759d547ccd118a6@group.calendar.google.com" target="_blank" rel="noopener noreferrer">
                        <button className="event-calendar-button">Add Calendar</button>
                    </a>
                </section>
                
                <section className="event-calendar-section">
                    <h2 className="event-calendar-quarter-text">Upcoming Meetings</h2>
                    <div className="event-calendar-quarter-container">
                        <CalendarEvent title="Panda Express1" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express2" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express3" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express4" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express5" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express6" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express7" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express8" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express9" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express0" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                    </div>
                    <h2>Past Meetings</h2>
                    <div className="event-calendar-past-container">
                        <CalendarEvent title="Panda Express" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                        <CalendarEvent title="Panda Express" date="4/21/2025" time="5pm - 11pm" location="2121 Mission St, Santa Cruz, CA 95060"/>
                    </div>
                </section>
            </main>
            
            <Footer className="mt-auto" />
        </div>
    );
};

export default Events;