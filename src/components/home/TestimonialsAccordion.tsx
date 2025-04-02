"use client";
import { getCustomers } from '@/service';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';

const TestimonialsAccordion = () => {
    const [customers, setCustomers] = useState<any[]>([]);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        async function fetchCustomers() {
            const result = await getCustomers();
            setCustomers(result);
        }
        fetchCustomers();
    }, []);

    if (!customers.length) return <div>Loading...</div>;

    return (
        <div className='linear-slider'>
            <Swiper
                key={swiperReady ? 'ready' : 'loading'}
                onAfterInit={() => setSwiperReady(true)}
                spaceBetween={32}
                freeMode={true}
                initialSlide={0}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    520: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 20 },
                    1280: { slidesPerView: 4, spaceBetween: 24 }
                }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                centerInsufficientSlides={true}
                speed={3000}
                modules={[Autoplay, FreeMode]}
                className='h-75 transition ease-linear duration-300'
            >
                {customers.map((item: any, index: number) => (
                    <SwiperSlide 
                        className={`!flex justify-center items-center ${index % 2 ? 'rotate-5' : '-rotate-5'}`} 
                        key={item.id || index}
                    >
                        <div className='border-1 bg-white border-[#DDD] rounded-[20px] p-6'>
                            <div className='flex justify-between pb-4 border-b border-b-[#DDD]'>
                                <div className='flex items-center gap-4.5'>
                                    <img 
                                        src={item.customer_profile?.url} 
                                        alt={item.name} 
                                        className='rounded-full size-20' 
                                        loading='lazy'
                                    />
                                    <div>
                                        <p className='text-sm font-semibold'>{item.name}</p>
                                        <p className='text-xs'>{item.bank_name}</p>
                                    </div>
                                </div>
                                <div>
                                    <img 
                                        src={item.bank_logo?.url} 
                                        className='md:size-12 !size-8 object-contain' 
                                        alt={`${item.bank_name} logo`}
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                            <div className='mt-2.5'>
                                <p className='text-sm'>{item.comment}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {customers.map((item: any, index: number) => (
                    <SwiperSlide 
                        className={`!flex justify-center items-center ${index % 2 ? 'rotate-5' : '-rotate-5'}`} 
                        key={item.id || index}
                    >
                        <div className='border-1 bg-white border-[#DDD] rounded-[20px] p-6'>
                            <div className='flex justify-between pb-4 border-b border-b-[#DDD]'>
                                <div className='flex items-center gap-4.5'>
                                    <img 
                                        src={item.customer_profile?.url} 
                                        alt={item.name} 
                                        className='rounded-full size-20' 
                                        loading='lazy'
                                    />
                                    <div>
                                        <p className='text-sm font-semibold'>{item.name}</p>
                                        <p className='text-xs'>{item.bank_name}</p>
                                    </div>
                                </div>
                                <div>
                                    <img 
                                        src={item.bank_logo?.url} 
                                        className='md:size-12 !size-8 object-contain' 
                                        alt={`${item.bank_name} logo`}
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                            <div className='mt-2.5'>
                                <p className='text-sm'>{item.comment}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {customers.map((item: any, index: number) => (
                    <SwiperSlide 
                        className={`!flex justify-center items-center ${index % 2 ? 'rotate-5' : '-rotate-5'}`} 
                        key={item.id || index}
                    >
                        <div className='border-1 bg-white border-[#DDD] rounded-[20px] p-6'>
                            <div className='flex justify-between pb-4 border-b border-b-[#DDD]'>
                                <div className='flex items-center gap-4.5'>
                                    <img 
                                        src={item.customer_profile?.url} 
                                        alt={item.name} 
                                        className='rounded-full size-20' 
                                        loading='lazy'
                                    />
                                    <div>
                                        <p className='text-sm font-semibold'>{item.name}</p>
                                        <p className='text-xs'>{item.bank_name}</p>
                                    </div>
                                </div>
                                <div>
                                    <img 
                                        src={item.bank_logo?.url} 
                                        className='md:size-12 !size-8 object-contain' 
                                        alt={`${item.bank_name} logo`}
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                            <div className='mt-2.5'>
                                <p className='text-sm'>{item.comment}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsAccordion;