import ResponsiveCalendar from '@/components/calendar/responsive-calendar';
import { Card } from '@/components/ui/card';
import React from 'react';
import EventCard, { EventCardProps } from './event-card';
import { Ellipsis } from 'lucide-react';

const events: EventCardProps[] = [
    {
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        borderColor: "bg-blue-300"
    },
    {
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        borderColor: "bg-red-200"
    },
    {
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        borderColor: "bg-yellow-300"
    }
]

const ListEvents = () => {
    return (
        <div className='px-4'>
            <div className="flex flex-row justify-between items-center mb-1">
                <h1 className='text-xl font-semibold mb-2' >Events</h1>
                <Ellipsis className="text-gray-500"/>
            </div>
            <div className='flex flex-col'>
                {
                    events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))
                }
            </div>
        </div>
    );
};

export default ListEvents;
