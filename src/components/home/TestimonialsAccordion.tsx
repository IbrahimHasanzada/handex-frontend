"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';
import { TestimonialsDto } from '@/types/Testimonials.dto';

const TestimonialsAccordion: React.FC<TestimonialsDto> = ({ page, data }) => {
    const [swiperReady, setSwiperReady] = useState(false);


    if (!data.length) return <div>Loading...</div>;

    return (
        <div className='linear-slider relative'>
            <div className={page !== 'corporate' ? 'block md:hidden absolute -top-10  -left-3 -right-3 h-15 z-3 bg-[#282828] blur-[12px]' : 'hidden'}></div>
            <Swiper
                key={swiperReady ? 'ready' : 'loading'}
                onAfterInit={() => setSwiperReady(true)}
                spaceBetween={32}
                freeMode={true}
                initialSlide={0}
                direction={page === "corporate" ? "vertical" : "horizontal"}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    520: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 20 },
                    1280: { slidesPerView: 4, spaceBetween: 24 }
                }}
                autoplay={{
                    delay: page === 'corporate' ? 2000 : 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
                fadeEffect={{ crossFade: true }}
                centerInsufficientSlides={true}
                speed={page === 'corporate' ? 2500 : 3000}
                modules={[Autoplay, FreeMode]}
                className='h-75 transition ease-linear duration-300 '
            >
                {data.map((item: any, index: number) => (
                    <SwiperSlide
                        className={`!flex justify-center items-center  ${page === 'corporate' ? (index % 2 ? 'rotate-5' : '-rotate-5') : '!h-[308px]'}`}
                        key={item.id || index}
                    >
                        <div className={`${page === 'corporate' && '!h-full'} border-1  bg-white border-[#DDD] rounded-[20px] p-6`}>
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
                {data.map((item: any, index: number) => (
                    <SwiperSlide
                        className={`!flex justify-center items-center ${page !== 'corporate' ? (index % 2 ? 'rotate-5' : '-rotate-5') : '!h-[308px]'}`}
                        key={item.id || index}
                    >
                        <div className={`${page === 'corporate' && '!h-full'} border-1  bg-white border-[#DDD] rounded-[20px] p-6`}>
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
                {data.map((item: any, index: number) => (
                    <SwiperSlide
                        className={`!flex  justify-center items-center ${page !== 'corporate' ? (index % 2 ? 'rotate-5' : '-rotate-5') : '!h-[308px]'}`}
                        key={item.id || index}
                    >
                        <div className={`${page === 'corporate' && '!h-full'} border-1  bg-white border-[#DDD] rounded-[20px] p-6`}>
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
            <div className={page === 'corporate' ? 'absolute -bottom-10 -left-3 -right-3 h-15 z-3 bg-[#282828] blur-[12px]' : 'hidden'}></div>
        </div >
    );
};

export default TestimonialsAccordion;