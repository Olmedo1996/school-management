'use client';

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

/* export const description = 'A radial chart'; */

const chartData = [
    { month: 'January', guys: 186, girls: 80 },
    { month: 'February', guys: 305, girls: 200 },
    { month: 'March', guys: 237, girls: 120 },
    { month: 'April', guys: 73, girls: 190 },
    { month: 'May', guys: 209, girls: 130 },
    { month: 'June', guys: 214, girls: 140 }
];

const chartConfig = {
    guys: {
        label: 'Guys',
        color: 'hsl(var(--chart-1))'
    },
    girls: {
        label: 'girls',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

const AttendanceChart = () => {
    return (
        <Card >
            <CardHeader className='items- pb-0'>
                <CardTitle>Students</CardTitle>
                <CardDescription>January - June a 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className='mx-auto '>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false}/>
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartLegend
                            align='right'
                            verticalAlign='top'
                            wrapperStyle={{ paddingTop: '1px', paddingBottom: '10px', fontSize: '16px', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
                        <Bar dataKey='guys' fill='hsl(var(--chart-1))' radius={4} />
                        <Bar dataKey='girls' fill='hsl(var(--chart-2))' radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>Showing total visitors for the last 6 months</div>
            </CardFooter>
        </Card>
    );
};

export default AttendanceChart;
