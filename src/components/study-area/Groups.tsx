"use client";
import React, { useState, useEffect, useRef } from 'react';
import Modal from '../Modal';
import { getStudyAreaGroups } from '@/service';

const Groups: React.FC<any> = ({ locale, slug, study, color, model }) => {
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    const [flag, setFlag] = useState<boolean>(false);
    const [groups, setGroups] = useState<any>([]);
    const [groupsWithCountdown, setGroupsWithCountdown] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);
    const groupsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(async ([entry]) => {
            if (entry.isIntersecting && !hasFetched) {
                const fetchedGroups = await getStudyAreaGroups(locale, slug);

                const calculateTimeLeft = (targetDate: string) => {
                    const now = new Date();
                    const target = new Date(targetDate);
                    const difference = target.getTime() - now.getTime();

                    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                    return { days, hours, minutes, seconds };
                };

                const withCountdown = fetchedGroups.map((g: any) => ({
                    ...g,
                    countdown: calculateTimeLeft(g.startDate)
                }));

                setGroupsWithCountdown(withCountdown);
                setGroups(fetchedGroups);
                setHasFetched(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (groupsRef.current) observer.observe(groupsRef.current);
        return () => observer.disconnect();
    }, [hasFetched, locale, slug]);

    return (
        <div ref={groupsRef} className='mt-30'>
            {groups.length > 0 && (
                <>
                    <h2 className={`text-[38px] font-bold ${model && 'text-white'}`}>Növbəti qruplarımız</h2>
                    <p className={`${model && 'text-[#909090]'} mt-4 text-xl`}>
                        Aşağıdakı bölmədən tezliklə başlayacaq qruplarımızla tanış ol və tədris başlamadan yerini tut.
                    </p>

                    {groupsWithCountdown.length === 0 && !hasFetched && (
                        <p className='text-center mt-10 text-[#909090]'>Yüklənir...</p>
                    )}

                    <div className='flex items-center justify-center gap-6 mt-12 flex-wrap'>
                        {groupsWithCountdown.map((item: any, i: number) => {
                            const month = parseInt(item?.startDate.split('-')[1], 10);
                            const day = item?.startDate.split('-')[2];
                            const { days, hours, minutes } = item.countdown || {};

                            return (
                                <div
                                    key={i}
                                    style={{ backgroundColor: i % 2 ? 'white' : color }}
                                    className='box-shadow md:w-[48%] w-full p-6 lg:p-12 rounded-[20px] text-white'
                                >
                                    <div className='lg:flex justify-between'>
                                        <div className={`${i % 2 ? 'text-[#141414]' : 'text-white'} text-center md:mb-0 mb-6`}>
                                            <p>{item?.table[0]?.value}</p>
                                        </div>
                                        <div
                                            style={{ backgroundColor: i % 2 ? '#E8E8E8' : 'white' }}
                                            className='rounded-[20px] text-[#141414] flex items-center lg:w-auto w-full justify-between py-2 px-6'
                                        >
                                            <div className='text-center'>
                                                <p className='text-base font-bold'>{days}</p>
                                                <p className='text-sm'>gün</p>
                                            </div>
                                            <div className='h-4 mx-5 w-[1px] bg-[#909090]'></div>
                                            <div className='text-center'>
                                                <p className='text-base font-bold'>{hours}</p>
                                                <p className='text-sm'>saat</p>
                                            </div>
                                            <div className='h-4 mx-5 w-[1px] bg-[#909090]'></div>
                                            <div className='text-center'>
                                                <p className='text-base font-bold'>{minutes}</p>
                                                <p className='text-sm'>dəqiqə</p>
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
                                        {item?.text[0]?.value}
                                    </p>
                                    <button
                                        onClick={() => setFlag(!flag)}
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
                    <Modal study={study} flag={flag} setFlag={setFlag} />
                </>
            )}
        </div>
    );

};

export default Groups;
