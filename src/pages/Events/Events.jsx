import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Bars } from 'react-loading-icons'

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Calendar from "../../components/Calendar/Calendar"

import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        document.title = "events | acm at ucsc";
        const fetchEvents = async () => {
            // ... existing fetch logic
            try {
                const response = await axios.get('/api/calendar');
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
            <Navbar />
            <div className="event-layout">
                <main className="event-main-content event-wrapper">
                    <section className="event-info-section">
                        <h1 className="event-header">events</h1>
                        <div className="event-info-text-area">
                            <p className="event-info-text">Find all ACM events below!</p>
                        </div>
                    </section>

                    <section className="event-calendar-section">
                        {loadingDone ? (
                            <Calendar events={events} />
                        ) : (
                            <div className="loading-container" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                                <Bars stroke="black" width={80} height={40} />
                            </div>
                        )}
                    </section>
                </main>

            </div>
            <Footer className="mt-auto" />
        </div>
    );
};

// Format the time into a more readable format


export default Events;