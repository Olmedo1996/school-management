import { MessageCircleMore } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export function Message() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='relative h-8 w-8 rounded-full bg-transparent' size='icon'>
                        <MessageCircleMore className='h-5 w-5' />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='w-56' align='end' forceMount>
                    MENSAJE MENU
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
