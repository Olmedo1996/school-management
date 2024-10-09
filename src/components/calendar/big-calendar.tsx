'use client';
import { globalDate } from '@/lib/global-date';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, View, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dateFnsLocalizer(globalDate);

type EventProps = {
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
};

const BigCalendar = (events : EventProps[]) => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (view: View) => setView(view);

    const eventStyleGetter = (event: EventProps, start: Date, end: Date, isSelected: boolean) => {
        console.log(event);
        var backgroundColor = '#ddd';
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block',
            marginBottom: '50px'
        };
        return {
            style: style
        };
    };

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            views={['work_week', 'day']}
            view={view}
            style={{ height: '88%' }}
            onView={handleOnChangeView}
            min={new Date(2025, 1, 0, 8, 0, 0)}
            max={new Date(2025, 1, 0, 18, 0, 0)}
            eventPropGetter={(event, start, end, isSelected) => eventStyleGetter(event, start, end, isSelected)}
        />
    );
};

export default BigCalendar;
