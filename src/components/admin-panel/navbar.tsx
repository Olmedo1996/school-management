import { SheetMenu } from '@/components/admin-panel/sheet-menu';
import { UserNav } from '@/components/admin-panel/user-nav';
import { Message } from '@/components/message';
import { ModeToggle } from '@/components/mode-toggle';
import { Search } from 'lucide-react';
import { Announcement } from '../announcement';

interface NavbarProps {
    title: string;
}

export function Navbar({ title }: NavbarProps) {
    return (
        <header className='sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary'>
            <div className='mx-4 sm:mx-8 flex h-14 items-center'>
                <div className='flex items-center space-x-4 lg:space-x-0 gap-2'>
                    <SheetMenu />
                    <h1 className='font-bold'>{title}</h1>
                    {/* <Input/> */}
                    <div className='hidden md:flex items-center gap-1 border border-slate-200 dark:border-slate-100 rounded-full px-2 py-1 focus-within:border-slate-900 focus-within:ring-1 focus-within:ring-slate-900'>
                        <Search className='w-6 h-6 text-slate-700 dark:text-slate-100' />
                        <input type="text" placeholder='search'  className='bg-transparent focus:outline-none '/>
                    </div>
                </div>
                <div className='flex flex-1 items-center space-x-2 justify-end'>
                    <Announcement/>
                    <Message/>
                    <ModeToggle />
                    <UserNav />
                </div>
            </div>
        </header>
    );
}
