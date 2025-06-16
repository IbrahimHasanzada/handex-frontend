import { getContent } from '@/service';
import React from 'react';

const HandexPreference = async ({ theme = '' }) => {
    const handex = await getContent('corporate-informations');
    return (
        <div className='flex flex-wrap justify-center gap-6 mt-12'>
            {handex?.map((item: any, i: number) => (
                <div key={i} className={` box-shadow p-6 rounded-[20px] ${theme ? 'md:w-[calc((100%/2)-1.5rem)] lg:w-[calc((100%/4)-1.5rem)] text-center' : 'bg-white md:w-[calc((100%/2)-1.5rem)] lg:w-[calc((100%/3)-1.5rem)]'} w-full md:w-[calc((100%/2)-1.5rem)] lg:w-[calc((100%/3)-1.5rem)]`}>
                    <img className={`mb-3 size-16 ${theme && 'mx-auto'}`} src={item?.images[0]?.url} alt={item?.images[0]?.alt} />
                    <h3 className={`${theme ? 'text-white' : 'text-[#141414]'} text-base text-[#141414] font-bold mb-2`}>{item.title}</h3>
                    <p className='text-[#909090] text-sm font-normal'>{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default HandexPreference;