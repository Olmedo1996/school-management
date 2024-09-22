'use client';
import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis, ResponsiveContainer, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
    { month: 'January', income: 186, expense: 80 },
    { month: 'February', income: 305, expense: 200 },
    { month: 'March', income: 237, expense: 120 },
    { month: 'April', income: 73, expense: 190 },
    { month: 'May', income: 209, expense: 130 },
    { month: 'June', income: 214, expense: 140 },
    { month: 'July', income: 186, expense: 80 },
    { month: 'August', income: 305, expense: 200 },
    { month: 'September', income: 237, expense: 120 },
    { month: 'October' },
    { month: 'November' },
    { month: 'December' }
];

const chartConfig = {
    income: {
        label: 'Income',
        color: 'hsl(var(--chart-1))'
    },
    expense: {
        label: 'Expense',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

const Finance = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Finance</CardTitle>
                <CardDescription>2024</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        data={chartData}
                        // width={"430px"}
                        // height={250}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray='2 2' />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            axisLine={false}
                            tick={{ fill: '#d1d5db' }}
                            tickLine={false}
                            tickMargin={10}
                        />
                        <ChartLegend
                            align='center'
                            verticalAlign='top'
                            wrapperStyle={{ paddingTop: '1px', paddingBottom: '10px', fontSize: '16px', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line dataKey='income' type='monotone' stroke='var(--color-income)' strokeWidth={2} dot={true} />
                        <Line dataKey='expense' type='monotone' stroke='var(--color-expense)' strokeWidth={2} dot={true} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className='flex w-full items-start gap-2 text-sm'>
                    <div className='grid gap-2'>
                        <div className='flex items-center gap-2 font-medium leading-none'>
                            Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
                        </div>
                        <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                            Showing total visitors for the last 6 months
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Finance;
