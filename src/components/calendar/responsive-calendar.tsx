'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';

interface Props {
    
}
const ResponsiveCalendar = (props: Props) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='h-200px w-full flex'
            classNames={{
                months: 'flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1',
                month: 'space-y-4 w-full flex flex-col',
                table: 'w-full h-full border-collapse space-y-1',
                head_row: '',
                row: 'w-full mt-2'
            }}
        />
    );
};

export default ResponsiveCalendar;
