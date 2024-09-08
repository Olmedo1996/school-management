import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Ellipsis } from 'lucide-react';

const UserCard = ({ type }: { type: string }) => {
    return (
        <Card className='w-full shadow-none odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px] p-2'>
            <CardHeader className='p-1 px-3 flex'>
                <div className='flex items-center justify-between'>
                    <Badge>25/2024</Badge>
                    <Button variant='outline' size='icon' className='m-0 border-0 shadow-none bg-transparent rounded-full'>
                        <Ellipsis />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className='p-2 my-3'>
                <h1 className='text-2xl font-semibold'>1234</h1>
            </CardContent>
            <CardFooter className='p-2'>
                <CardDescription className='capitalize'>{type}</CardDescription>
            </CardFooter>
        </Card>
    );
};

export default UserCard;
