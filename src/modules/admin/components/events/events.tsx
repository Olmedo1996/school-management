import ResponsiveCalendar from '@/components/calendar/responsive-calendar';
import { Card } from '@/components/ui/card';
import React from 'react';
import ListEvents from './list-events';

type Props = {};

const Events = (props: Props) => {
    return (
        <Card className='mb-4'>
            <ResponsiveCalendar />
            <ListEvents />
        </Card>
    );
};

export default Events;
