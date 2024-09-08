import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    LucideIcon,
    GraduationCap,
    User,
    CircleUserRound,
    Baby,
    School,
    CalendarCheck2,
    CalendarDays,
    BookOpenText,
    NotebookPen,
    UserCheck,
    MessageCircleMore,
    ListTodo
} from 'lucide-react';

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
    return [
        {
            groupLabel: '',
            menus: [
                {
                    href: '/admin',
                    label: 'Admin',
                    active: pathname.includes('/admin'),
                    icon: LayoutGrid,
                    submenus: []
                }
            ]
        },
        {
            groupLabel: 'Contents',
            menus: [
                /* {
                    href: '',
                    label: 'Posts',
                    active: pathname.includes('/posts'),
                    icon: SquarePen,
                    submenus: [
                        {
                            href: '/posts',
                            label: 'All Posts',
                            active: pathname === '/posts'
                        },
                        {
                            href: '/posts/new',
                            label: 'New Post',
                            active: pathname === '/posts/new'
                        }
                    ]
                }, */
                {
                    href: '/teacher',
                    label: 'Teachers',
                    active: pathname.includes('/teacher'),
                    icon: GraduationCap,
                    submenus: []
                },
                {
                    href: '/parent',
                    label: 'Parents',
                    active: pathname.includes('/parent'),
                    icon: Baby,
                    submenus: []
                },
                {
                    href: '/student',
                    label: 'Students',
                    active: pathname.includes('/student'),
                    icon: Users,
                    submenus: []
                },
                {
                    href: '/class',
                    label: 'Classes',
                    active: pathname.includes('/class'),
                    icon: School,
                    submenus: []
                },
                {
                    href: '/lesson',
                    label: 'Lessons',
                    active: pathname.includes('/lesson'),
                    icon: BookOpenText,
                    submenus: []
                },
                {
                    href: '/exams',
                    label: 'Exams',
                    active: pathname.includes('/exam'),
                    icon: NotebookPen,
                    submenus: []
                },
                {
                    href: '/assignment',
                    label: 'Assignments',
                    active: pathname.includes('/assignment'),
                    icon: ListTodo,
                    submenus: []
                },
                {
                    href: '/attendance',
                    label: 'attendance',
                    active: pathname.includes('/attendance'),
                    icon: UserCheck,
                    submenus: []
                },
                {
                    href: '/event',
                    label: 'events',
                    active: pathname.includes('/event'),
                    icon: CalendarDays,
                    submenus: []
                },
                {
                    href: '/message',
                    label: 'messages',
                    active: pathname.includes('/message'),
                    icon: MessageCircleMore,
                    submenus: []
                }
            ]
        },
        {
            groupLabel: 'Settings',
            menus: [
                {
                    href: '/users',
                    label: 'Users',
                    active: pathname.includes('/users'),
                    icon: CircleUserRound,
                    submenus: []
                },
                {
                    href: '/account',
                    label: 'Account',
                    active: pathname.includes('/account'),
                    icon: Settings,
                    submenus: []
                }
            ]
        }
    ];
}
