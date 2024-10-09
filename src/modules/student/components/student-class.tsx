import BigCalendar from '@/components/calendar/big-calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { calendarEvents } from '@/lib/data';

type Props = {};

const StudentClass = (props: Props) => {
    return (
        <Card>
            <CardHeader className=''>
                <CardTitle>Schedule (4A)</CardTitle>
                <CardDescription>January - June  a 2024</CardDescription>
            </CardHeader>
            <CardContent className='h-full'>
                <BigCalendar events={calendarEvents} />
            </CardContent>
        </Card>
    );
};

export default StudentClass;
