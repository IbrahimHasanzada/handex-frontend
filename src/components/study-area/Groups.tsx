"use client";
import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';

const Groups: React.FC<any> = ({ groups, color }) => {
    const t = useTranslations('study-area.groups');
    const months = t.raw('months');
    
    const useCountdown = (targetDate: string) => {
        const [timeLeft, setTimeLeft] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                const target = new Date(targetDate);
                const difference = target.getTime() - now.getTime();

                if (difference <= 0) {
                    clearInterval(interval);
                    return;
                }

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds
                });
            }, 1000);

            return () => clearInterval(interval);
        }, [targetDate]);

        return timeLeft;
    };

    return (
        <div className='mt-30'>
            <h2 className='text-[38px] font-bold'>{t('title')}</h2>
            <p className='mt-4 text-xl'>{t('desc')}</p>
            <div className='grid lg:grid-cols-2 gap-6 mt-12'>
                {groups?.map((item: any, i: number) => {
                    const month = parseInt(item?.startDate.split('-')[1], 10);
                    const day = item?.startDate.split('-')[2];
                    const { days, hours, minutes, seconds } = useCountdown(item.startDate);
                    
                    return (
                        <div 
                            key={i}
                            style={{ backgroundColor: i % 2 ? 'white' : color }} 
                            className='box-shadow p-6 lg:p-12 rounded-[20px] text-white'
                        >
                            <div className='lg:flex justify-between'>
                                <div className='text-center md:mb-0 mb-6'>
                                    <p>{item?.table[0]?.value}</p>
                                </div>
                                <div 
                                    style={{ backgroundColor: i % 2 ? '#E8E8E8' : 'white' }} 
                                    className='rounded-[20px] text-[#141414] flex items-center lg:w-auto w-full justify-between py-2 px-6'
                                >
                                    <div className='text-center'>
                                        <p className='text-base font-bold'>{days}</p>
                                        <p className='text-sm'>{t('day')}</p>
                                    </div>
                                    <div className='h-4 mx-5 w-[1px] bg-[#909090]'></div>
                                    <div className='text-center'>
                                        <p className='text-base font-bold'>{hours}</p>
                                        <p className='text-sm'>{t('hour')}</p>
                                    </div>
                                    <div className='h-4 mx-5 w-[1px] bg-[#909090]'></div>
                                    <div className='text-center'>
                                        <p className='text-base font-bold'>{minutes}</p>
                                        <p className='text-sm'>{t('minute')}</p>
                                    </div>
                                </div>
                            </div>
                            <h3 
                                style={{ color: i % 2 ? '#141414' : 'white' }} 
                                className='lg:text-[58px] text-[34px] font-bold text-center my-8'
                            >
                                {day} {months[month - 1]}
                            </h3>
                            <p 
                                style={{ color: i % 2 ? '#141414' : 'white' }} 
                                className='text-center lg:text-xl font-normal'
                            >
                                {item?.table[0]?.value}
                            </p>
                            <button 
                                style={{ 
                                    backgroundColor: i % 2 ? '#383838' : 'white', 
                                    color: i % 2 ? 'white' : '#141414' 
                                }} 
                                className='cursor-pointer bg-white w-full h-12 rounded-full mt-10 text-[#141414]'
                            >
                                Müraciət et
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Groups;