import { Tag, Users, Settings, Bookmark, SquarePen, LayoutGrid, LucideIcon, GraduationCap, User, CircleUserRound } from 'lucide-react';

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
                    label: 'Teacher',
                    active: pathname.includes('/teacher'),
                    icon: GraduationCap,
                    submenus: []
                },
                {
                    href: '/parent',
                    label: 'Parent',
                    active: pathname.includes('/parent'),
                    icon: Bookmark,
                    submenus: []
                },
                {
                    href: '/student',
                    label: 'student',
                    active: pathname.includes('/student'),
                    icon: Users,
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
