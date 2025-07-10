"use client";
import React, { useEffect, useState } from 'react';
import TopCompanies from '../home/TopCompanies';

const PartnersClient: React.FC<{
    page: string;
    data: any;
    title: string;
    description: string;
}> = ({ page, data, title, description }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${page === 'home' ? 'bg-white' : 'bg-[#282828]'} py-6 md:pt-11 md:pb-16  rounded-[20px]`}>
            <div className="px-6">
                {page === 'corporate' &&
                    <>
                        <h2 className="text-white font-bold text-4xl">{title}</h2>
                        <p className="text-[#DDD] text-lg mt-3">{description}</p></>
                }
            </div>
            <div className="flex flex-col gap-6">
                {Array.from({ length: 3 }).map((item, index) => (
                    <TopCompanies data={data} sliderIndex={index} index={activeIndex} page={page} />
                ))}
            </div>
        </div>
    );
};

export default PartnersClient;
