import ResponsiveCalendar from '@/components/calendar/responsive-calendar';
import { Card } from '@/components/ui/card';
import React from 'react';

type Props = {};

const CalendarEvents = (props: Props) => {
    return (
        <div>
            <ResponsiveCalendar />
        </div>
    );
};

export default CalendarEvents;
