import { MessageCircleMore } from 'lucide-react';
import React from 'react';
import { LayoutGrid, LogOut, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

type Props = {};

export function Message(props: Props) {
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
