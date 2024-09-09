'use client';

import { RadialBar, RadialBarChart, PolarAngleAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import Footer from './footer';
import { Users } from 'lucide-react';
import MaleFemaleIcon from '@/assets/image/svgs/male-famele';

export const description = 'A radial chart';

const chartData = [
    { student: 'total', count: 475, fill: 'var(--color-total)' },
    { student: 'guys', count: 275, fill: 'var(--color-guys)' },
    { student: 'girls', count: 200, fill: 'var(--color-girls)' }
];

const chartConfig = {
    count: {
        label: 'Count'
    },
    total: {
        label: 'Total',
        color: 'hsla(var(--chart-total))'
    },
    guys: {
        label: 'Guys',
        color: 'hsl(var(--chart-1))'
    },
    girls: {
        label: 'girls',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

const CountChart = () => {
    return (
        <Card className='flex flex-col'>
            <CardHeader className='items-center pb-0'>
                <CardTitle>Students</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className='flex-1 p-0 relative'>
                <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
                    <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
                        
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey='student' />} />
                        <RadialBar dataKey='count' background />
                    </RadialBarChart>
                </ChartContainer>
                <div className='absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0'>
                    {/* <Users size={48} className='text-gray-500' /> */}
                    <MaleFemaleIcon className='w-10 h-10'/>
                </div>
            </CardContent>
            <CardFooter className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <div className='w-5 h-5 bg-lama-yellow rounded-full gap-1' />
                        <div className='flex items-center gap-2 font-medium leading-none'>1,475</div>
                        <div className='leading-none text-muted-foreground'>Boys (55%)</div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <div className='w-5 h-5 bg-lama-sky rounded-full' />
                        <div className='flex items-center gap-2 font-medium leading-none'>1,275</div>
                        <div className='leading-none text-muted-foreground'>Girls (45%)</div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CountChart;
