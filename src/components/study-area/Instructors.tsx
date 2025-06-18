"use client";
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Instructors = ({ students, model }: any) => {
    const [isBeginning, setIsBeginning] = useState(true);

    const [flag, setFlag] = useState<number>(0);

    const [student, setStudent] = useState<any>();

    useEffect(() => {
        if (flag) {
            let item = students.find((t: any) => t.id === flag);
            item && setStudent(item);
        }
    }, [flag]);

    return (
        <div className='relative'>
            <div className="navigation-buttons absolute left-0 right-0 flex justify-center space-x-2 z-10 -bottom-30">
                <button aria-label="prev button" className={`overflow-hidden group swiper-button-prev-custom rounded-full w-20 h-20 flex items-center justify-center  ${isBeginning ? (model ? 'bg-[#909090]' : 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)]') : (model ? 'bg-white' : 'bg-black')}`}>
                    <svg className='group-hover:translate-x-4.5 duration-300 translate-x-24 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? (model ? 'white' : 'black') : (model ? 'black' : 'white')}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className='-translate-x-5 group-hover:-translate-x-24 duration-300 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? (model ? 'white' : 'black') : (model ? 'black' : 'white')}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button aria-label="next button" className={`overflow-hidden group swiper-button-next-custom rounded-full w-20 h-20 flex items-center justify-center ${isBeginning ? (model ? 'bg-white' : 'bg-black') : (model ? 'bg-[#909090]' : 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)]')}`}>
                    <svg className='group-hover:translate-x-24 duration-300 translate-x-5 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? (model ? 'black' : 'white') : (model ? 'white' : 'black')}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className='-translate-x-24 group-hover:-translate-x-5 duration-300 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? (model ? 'black' : 'white') : (model ? 'white' : 'black')}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <Swiper
                breakpoints={{
                    520: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    }

                }}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                modules={[Navigation]}
                onReachBeginning={() => students && setIsBeginning(true)}
                onReachEnd={() => students && setIsBeginning(false)}
                className='transition ease-linear duration-300 relative'
            >
                {students && students?.map((item: any, i: number) => (
                    <SwiperSlide onClick={() => setFlag(item.id)} key={i} className={`${model ? 'bg-[#282828]' : '!bg-white'} cursor-pointer group  rounded-[20px] p-3`}>
                        <div>
                            <div className='w-full rounded-[20px] h-68'>
                                <img src={item.image?.url} alt='Handexeducation slider images' className='object-cover h-full w-full rounded-[20px] duration-500' />
                            </div>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className={`${model ? 'text-white' : 'text-black'} text-base font-bold`}>{item.name}</h2>
                                <div className={`${model ? 'bg-[#909090]' : 'bg-[#E8E8E8] '} size-8 rounded-full flex justify-center items-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6.66699 10.6668L9.33366 8.00016L6.66699 5.3335" stroke={model ? '#fff' : '#141414'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/*  M O D A L  */}
            <div onClick={() => setFlag(0)} className={`fixed inset-0 bg-black opacity-50 w-screen h-screen z-101 ${flag ? '!block' : '!hidden'}`}></div>
            <div className={`fixed lg:w-[70vw] w-[95vw] justify-between rounded-[20px] gap-15 ${model ? 'bg-[#282828]' : 'bg-white '} z-102 p-12 top-1/2 left-1/2 ${flag !== 0 ? 'block lg:flex' : 'hidden'} -translate-x-1/2 -translate-y-1/2 `}>
                <svg onClick={() => setFlag(0)} className='absolute cursor-pointer top-5 right-5' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='lg:w-2/5 w-full'>
                    <img className='h-full w-full md:w-112 !object-cover rounded-[20px]' src={student?.image.url} alt="" />
                </div>
                <div className='lg:w-3/5 w-full'>
                    <h2 className={`font-bold mb-6 ${model ? 'text-white' : 'text-black'}`}>{student?.name}</h2>
                    <p className={`lg:line-clamp-17 line-clamp-8 ${model ? 'text-white' : 'text-black'}`}>{student?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
