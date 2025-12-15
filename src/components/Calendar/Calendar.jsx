import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {
    const goToBack = () => {
        toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
        toolbar.onNavigate('NEXT');
    };

    const goToCurrent = () => {
        toolbar.onNavigate('TODAY');
    };

    const goToMonth = () => {
        toolbar.onView('month');
    };

    const goToWeek = () => {
        toolbar.onView('week');
    };

    const goToDay = () => {
        toolbar.onView('day');
    };

    const goToAgenda = () => {
        toolbar.onView('agenda');
    };

    const label = () => {
        const date = moment(toolbar.date);
        return (
            <span className="rbc-toolbar-label-text">
                <b>{date.format('MMMM')}</b> {date.format('YYYY')}
            </span>
        );
    };

    return (
        <div className="rbc-toolbar-container">
            <div className="rbc-toolbar-top-row">
                <div className="toolbar-search-group">
                    <input type="text" placeholder="Search Events" className="calendar-search-input" />
                    <button className="calendar-action-btn">search</button>
                    <button className="calendar-action-btn filter-btn">filter <span className="arrow-down">▼</span></button>
                </div>
                <span className="calendar-helper-text">click on an event to see more!</span>
            </div>

            <div className="rbc-toolbar-bottom-row">
                <div className="rbc-btn-group left-nav">
                    <button onClick={goToCurrent} className="nav-btn">today</button>
                    <button onClick={goToBack} className="nav-btn">back</button>
                    <button onClick={goToNext} className="nav-btn">next</button>
                </div>

                <div className="rbc-toolbar-label">
                    {label()}
                </div>

                <div className="rbc-btn-group right-views">
                    <button onClick={goToMonth} className={toolbar.view === 'month' ? 'view-btn active' : 'view-btn'}>month</button>
                    <button onClick={goToWeek} className={toolbar.view === 'week' ? 'view-btn active' : 'view-btn'}>week</button>
                    <button onClick={goToDay} className={toolbar.view === 'day' ? 'view-btn active' : 'view-btn'}>day</button>
                    <button onClick={goToAgenda} className={toolbar.view === 'agenda' ? 'view-btn active' : 'view-btn'}>agenda</button>
                </div>
            </div>
        </div>
    );
};

const Calendar = ({ events }) => {
    // Transform events to BigCalendar format (Date objects)
    const formattedEvents = events.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
        title: event.title
    }));

    // Custom styling for events
    const eventStyleGetter = (event, start, end, isSelected) => {
        let backgroundColor = '#2563eb'; // Default blue

        // Example: logic to change color based on event type if needed
        if (event.title.toLowerCase().includes('cyber')) backgroundColor = '#f1c40f'; // Yellowish for cyber
        if (event.title.toLowerCase().includes('guest')) backgroundColor = '#e91e63'; // Pinkish for guest

        const style = {
            backgroundColor: backgroundColor,
            borderRadius: '20px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block',
            fontSize: '0.8rem',
            padding: '2px 8px'
        };
        return {
            style: style
        };
    };

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="calendar-wrapper">
            <div className="event-side-panel">
                {selectedEvent ? (
                    <>
                        <h2 className="event-detail-title">{selectedEvent.title}</h2>

                        <div className="event-detail-item">
                            <span className="event-detail-icon">🕒</span>
                            <span className="event-detail-text">
                                {moment(selectedEvent.start).format('MMMM Do YYYY')}<br />
                                {moment(selectedEvent.start).format('h:mm a')} - {moment(selectedEvent.end).format('h:mm a')}
                            </span>
                        </div>

                        {selectedEvent.location && (
                            <div className="event-detail-item">
                                <span className="event-detail-icon">📍</span>
                                <span className="event-detail-text">{selectedEvent.location}</span>
                            </div>
                        )}

                        {selectedEvent.description && (
                            <div className="event-detail-description">
                                {selectedEvent.description}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="no-event-selected">
                        <p>Select an event to view details</p>
                    </div>
                )}
            </div>

            <div className="calendar-container">
                <BigCalendar
                    localizer={localizer}
                    events={formattedEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '100%' }}
                    components={{
                        toolbar: CustomToolbar
                    }}
                    eventPropGetter={eventStyleGetter}
                    views={['month', 'week', 'day', 'agenda']}
                    onSelectEvent={handleSelectEvent}
                />
            </div>
        </div>
    );
};

export default Calendar;
