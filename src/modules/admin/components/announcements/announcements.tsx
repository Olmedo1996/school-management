import { Card } from '@/components/ui/card';
import React from 'react';
import AnnouncementsList from './announcements-list';

type Props = {};

const Announcements = (props: Props) => {
    return (
        <Card className='p-4 w-full'>
           <AnnouncementsList/>
        </Card>
    );
};

export default Announcements;
