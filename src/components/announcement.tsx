import { MegaphoneIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import NotificationBadge from './notification-badge';

export function Announcement() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <NotificationBadge count={9}>

                        <Button variant='outline' className='relative h-8 w-8 rounded-full bg-transparent' size='icon'>
                            <MegaphoneIcon className='h-5 w-5' />
                        </Button>
                    </NotificationBadge>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='w-56' align='end' forceMount>
                    ANUNCIOS
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
