import React from 'react';
import AnnouncementsCard, { AnnouncementsCardProps } from './announcements-card';
import { Ellipsis } from 'lucide-react';

type Props = {};

const announcements: AnnouncementsCardProps[] = [
    {
        title: 'Lorem ipsum dolor',
        date: '2025-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        borderColor: 'bg-blue-300/50'
    },
    {
        title: 'Lorem ipsum dolor',
        date: '2025-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        borderColor: 'bg-red-200/50'
    },
    {
        title: 'Lorem ipsum dolor',
        date: '2025-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        borderColor: 'bg-yellow-300/50'
    }
];

const AnnouncementsList = (props: Props) => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center mb-1">
                <h1 className='text-xl font-semibold mb-2' >Announcements</h1>
                <Ellipsis className="text-gray-500"/>
            </div>
            <div className='flex flex-col'>
                {announcements.map((announcement, index) => (
                    <AnnouncementsCard key={index} {...announcement} />
                ))}
            </div>
        </div>
    );
};

export default AnnouncementsList;
