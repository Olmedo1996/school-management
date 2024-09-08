'use client';

import Link from 'next/link';
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

export function UserNav() {
    return (
        <div className='flex items-center space-x-2 pl-2'>
            <div className='hidden md:flex flex-col md:space-y-1'>
                <p className='text-xs font-medium leading-none text-right'>John Doe</p>
                <p className='text-xs leading-none text-muted-foreground text-right'>Teacher</p>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='h-8 w-8 rounded-full'>
                        <div className='flex space-x-2 items-end'>
                            <div className='flex items-center border-slate-950'>
                                <Avatar className='h-8 w-8 border-slate-700 dark:border-slate-700'>
                                    <AvatarImage src='#' alt='Avatar' />
                                    <AvatarFallback className='bg-transparent'>JD</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='w-56' align='end' forceMount>
                    <DropdownMenuLabel className='font-normal'>
                        <div className='flex flex-col space-y-1'>
                            <p className='text-sm font-medium leading-none'>John Doe</p>
                            <p className='text-xs leading-none text-muted-foreground'>johndoe@example.com</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className='hover:cursor-pointer' asChild>
                            <Link href='/admin' className='flex items-center'>
                                <LayoutGrid className='w-4 h-4 mr-3 text-muted-foreground' />
                                Dashboard
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='hover:cursor-pointer' asChild>
                            <Link href='/account' className='flex items-center'>
                                <User className='w-4 h-4 mr-3 text-muted-foreground' />
                                Account
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='hover:cursor-pointer' onClick={() => {}}>
                        <LogOut className='w-4 h-4 mr-3 text-muted-foreground' />
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
