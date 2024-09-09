import React from 'react';

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='w-5 h-5 bg-lama-yellow rounded-full gap-1' />
                <div className='flex items-center gap-2 font-medium leading-none'>1,475</div>
                <div className='leading-none text-muted-foreground'>Boys (55%)</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='w-5 h-5 bg-lama-purple rounded-full' />
                <div className='flex items-center gap-2 font-medium leading-none'>1,275</div>
                <div className='leading-none text-muted-foreground'>Girls (45%)</div>
            </div>
        </div>
    );
};

export default Footer;
