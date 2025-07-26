"use client";
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { getServices } from '@/service';
import { useTranslations } from 'next-intl';

const ServiceClient = ({ service, locale }) => {

    const t = useTranslations('service');

    let [project, setProject] = useState(service.data);
    
    let [total, setTotal] = useState();

    useEffect(() => {
        setTotal(service?.totalItems);
    }, [service]);
    let [count, setCount] = useState(0);
    let [loading, setLoading] = useState(false);

    const handlePagination = async () => {
        setLoading(true);
        let nextPage = ++count;
        let extraProject = await getServices(locale, nextPage);
            
        setProject(prev => project?.length ? [...prev, ...extraProject.data] : extraProject.data);
        setCount(nextPage);
        setLoading(false);
    };

    return (
        <div className='wrapper pt-25'>
            <h1 className='text-[38px] mt-15 text-[#141414] font-bold mb-12'>{t('title')}</h1>
            <div className='grid lg:grid-cols-2 gap-6'>
                {project?.map((item, i) => (
                    <ServiceCard key={i} item={item} />
                ))}
            </div>
            {total > (count + 1) * 8 && (
                <button onClick={() => handlePagination()} className='flex bg-handle-gray mx-auto rounded-full items-center px-6 gap-2 h-12 my-15'>
                    <p className='text-base'>{loading ? 'Loading' : 'Daha çox'}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M8.5 10L12.5 14L16.5 10" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ServiceClient;