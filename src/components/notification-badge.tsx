import { Badge } from '@/components/ui/badge';

type NotificationBadgeProps = {
    children: React.ReactNode;
    count: number;
};

function formatCount(count: number): string {
    if (count <= 99) return count.toString();
    return '99+';
}

export default function NotificationBadge({ children, count = 0 }: NotificationBadgeProps) {
    return (
        <div className='flex space-x-4'>
            <div className='relative inline-block'>
                {children}
                <Badge className='absolute -top-2 -right-2 px-1 min-w-[1.5rem] h-5 flex items-center justify-center bg-purple-500 text-white text-xs font-bold rounded-full'>
                    {formatCount(count)}
                </Badge>
            </div>
        </div>
    );
}
