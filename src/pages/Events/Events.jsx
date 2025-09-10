import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Bars } from 'react-loading-icons'

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import CalendarEvent from "../../components/CalendarEvent/CalendarEvent"

import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/calendar');
                // const response = await axios.get('http://localhost:8000/calendar/events'); 
                setEvents(response.data);
                setLoadingDone(true);
            } catch (err) {
                console.error('Error fetching events:', err);
            }
        };
    
        fetchEvents();
    }, []);

    const currentDate = new Date();

    let upcomingEvents = []
    let pastEvents = []
    if (events.length > 0) {
        upcomingEvents = events.filter(event => new Date(event.start) >= currentDate);
        pastEvents = events.filter(event => new Date(event.start) < currentDate);
    }
    

    return (
        <div>
            <div className="event-layout">
                <Navbar />
                <main className="event-main-content event-wrapper">
                    <section className="event-info-section">
                        <h1 className="event-header">Events</h1>
                        <div className="event-info-text-area">
                            <p className="event-info-text">Find all ACM events below and add them to your own calendar by clicking the button below!</p>
                        </div>
                        <a href="https://calendar.google.com/calendar/u/0/r?cid=santacruz.acm@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button className="event-calendar-button">Add Calendar</button>
                        </a>
                    </section>
                    
                    <section className="event-calendar-section">
                        <h2 className="event-calendar-quarter-text">Upcoming Events</h2>
                        <div className="event-calendar-quarter-container">
                            {upcomingEvents.length > 0 ? (
                                upcomingEvents.map((event, index) => {
                                    const startDate = new Date(event.start);
                                    const endDate = new Date(event.end);

                                    const dateString = `${startDate.getMonth() + 1}/${startDate.getDate()}/${startDate.getFullYear()}`;
                                    const timeString = `${formatTime(startDate)} - ${formatTime(endDate)}`;

                                    return (
                                        <CalendarEvent
                                            key={`upcoming-${index}`}
                                            title={event.title}
                                            date={dateString}
                                            time={timeString || ''}
                                            location={event.location || ''}
                                        />
                                    );
                                })
                            ) : (
                                loadingDone ? (
                                    <p className="no-events-text">No upcoming events.</p>
                                ) : (
                                    <Bars stroke="black" width={80} height={40} />
                                )
                            )}
                        </div>
                        <h2 className="event-calendar-past-text">Past Events</h2>
                        <div className="event-calendar-past-container">
                            {pastEvents.length > 0 ? (
                                pastEvents.map((event, index) => {
                                    const startDate = new Date(event.start);
                                    const endDate = new Date(event.end);

                                    const dateString = `${startDate.getMonth() + 1}/${startDate.getDate()}/${startDate.getFullYear()}`;
                                    const timeString = `${formatTime(startDate)} - ${formatTime(endDate)}`;

                                    return (
                                        <CalendarEvent
                                            key={`past-${index}`}
                                            title={event.title}
                                            date={dateString}
                                            time={timeString || ''}
                                            location={event.location || ''}
                                        />
                                        );
                                })
                            ) : (
                                loadingDone ? (
                                    <p className="no-events-text">No upcoming events.</p>
                                ) : (
                                    <Bars stroke="black" width={80} height={40} />
                                )
                            )}
                        </div>
                    </section>
                </main>
                
            </div>
            <Footer className="mt-auto" />
        </div>
    );
};

// Format the time into a more readable format
const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let ampm = '';
  
    if (hours >= 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }
  
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
  
    let minutesStr = '';
    if (minutes === 0) {
        minutesStr = '';
    } else {
        minutesStr = `:${minutes.toString().padStart(2, '0')}`;
    }
  
    return `${hours}${minutesStr}${ampm}`;
}

export default Events;