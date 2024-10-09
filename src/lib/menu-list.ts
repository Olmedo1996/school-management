import {
    Baby,
    BookOpenText,
    CalendarDays,
    CircleUserRound,
    FileCheck,
    GraduationCap,
    LayoutGrid,
    ListTodo,
    LucideIcon,
    Megaphone,
    MessageCircleMore,
    NotebookPen,
    School,
    Settings,
    UserCheck,
    Users
} from 'lucide-react';

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Visible = "admin" | "teacher" | "student" | "parent" | "staff";

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
    visible?: Visible[];
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
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
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
                    submenus: [],
                    visible: ["admin", "teacher"],
                },
                {
                    href: '/parent',
                    label: 'Parents',
                    active: pathname.includes('/parent'),
                    icon: Baby,
                    submenus: [],
                    visible: ["admin", "teacher"],
                },
                {
                    href: '/student',
                    label: 'Students',
                    active: pathname.includes('/student'),
                    icon: Users,
                    submenus: [],
                    visible: ["admin", "teacher"],
                },
                {
                    href: '/class',
                    label: 'Classes',
                    active: pathname.includes('/class'),
                    icon: School,
                    submenus: [],
                    visible: ["admin", "teacher"],
                },
                {
                    href: '/lesson',
                    label: 'Lessons',
                    active: pathname.includes('/lesson'),
                    icon: BookOpenText,
                    submenus: [],
                    visible: ["admin", "teacher"],
                },
                {
                    href: '/exams',
                    label: 'Exams',
                    active: pathname.includes('/exam'),
                    icon: NotebookPen,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/results',
                    label: 'Results',
                    active: pathname.includes('/result'),
                    icon: FileCheck,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/assignment',
                    label: 'Assignments',
                    active: pathname.includes('/assignment'),
                    icon: ListTodo,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/attendance',
                    label: 'attendance',
                    active: pathname.includes('/attendance'),
                    icon: UserCheck,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/event',
                    label: 'events',
                    active: pathname.includes('/event'),
                    icon: CalendarDays,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/message',
                    label: 'Messages',
                    active: pathname.includes('/message'),
                    icon: MessageCircleMore,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/announcement',
                    label: 'Announcements',
                    active: pathname.includes('/announcement'),
                    icon: Megaphone,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                }
            ]
        },
        {
            groupLabel: 'Settings',
            menus: [
                {
                    href: '/profile',
                    label: 'Profile',
                    active: pathname.includes('/profile'),
                    icon: CircleUserRound,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    href: '/account',
                    label: 'Account',
                    active: pathname.includes('/account'),
                    icon: Settings,
                    submenus: [],
                    visible: ["admin", "teacher", "student", "parent"],
                }
            ]
        }
    ];
}
