"use client";
import React, { useEffect, useState } from 'react';
import { Keyboard, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css/zoom';

const isPdf = (url?: string) => !!url && /\.pdf($|\?)/i.test(url);

const ReferenceLetters = ({ data }: { data: any[] }) => {
    const [flag, setFlag] = useState<boolean>(false);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);

    useEffect(() => {
        if (flag) {
            const originalStyle = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setFlag(false);
            window.addEventListener('keydown', handleKey);

            return () => {
                document.body.style.overflow = originalStyle;
                window.removeEventListener('keydown', handleKey);
            };
        }
    }, [flag]);

    if (!data?.length) return null;

    const isBeginning = activeIndex === 0;
    const isEnd = activeIndex === data.length - 1;

    return (
        <>
            <button
                id='reference-letters-button'
                onClick={() => setFlag(true)}
                className='h-12 px-6 rounded-full border border-white/40 text-white font-medium cursor-pointer hover:bg-white/10 duration-300 whitespace-nowrap'
            >
                Müştəri rəylərinə bax
            </button>

            {flag && (
                <>
                    <div onClick={() => setFlag(false)} className='z-105 top-0 left-0 opacity-70 fixed w-screen h-screen bg-black'></div>
                    <div className='z-106 bg-[#181818] w-[96%] md:w-[80%] lg:w-240 h-[90vh] md:h-[85vh] rounded-[20px] p-4 md:p-8 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col'>
                        <div className='flex items-start justify-between gap-4 mb-4'>
                            <div>
                                <p className='text-white text-lg md:text-2xl font-bold'>{data[activeIndex]?.title}</p>
                                {!isPdf(data[activeIndex]?.images?.[0]?.url) && (
                                    <p className='text-white/50 text-xs md:text-sm mt-1'>
                                        <span className='hidden md:inline'>Böyütmək üçün şəklin üzərinə klik edin</span>
                                        <span className='md:hidden'>Böyütmək üçün toxunun və ya iki barmaqla yaxınlaşdırın</span>
                                    </p>
                                )}
                            </div>
                            <button id='reference-letters-close' aria-label='close' onClick={() => setFlag(false)} className='cursor-pointer shrink-0 mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className='flex-1 min-h-0'>
                            <Swiper
                                modules={[Keyboard, Zoom]}
                                keyboard={{ enabled: true }}
                                zoom={{ maxRatio: 4, toggle: false }}
                                onZoomChange={(_, scale) => setZoomed(scale > 1)}
                                onClick={(s, e) => {
                                    if ((e.target as HTMLElement)?.tagName === 'IMG') s.zoom.toggle(e as PointerEvent);
                                }}
                                spaceBetween={24}
                                slidesPerView={1}
                                onSwiper={setSwiper}
                                onSlideChange={(s) => {
                                    setActiveIndex(s.activeIndex);
                                    setZoomed(false);
                                }}
                                className='h-full'
                            >
                                {data.map((item: any, i: number) => {
                                    const file = item?.images?.[0];
                                    return (
                                        <SwiperSlide key={item.id ?? i} className='!h-full'>
                                            <div className='h-full w-full rounded-[12px] overflow-hidden bg-[#232323] flex items-center justify-center'>
                                                {isPdf(file?.url) ? (
                                                    <div className='h-full w-full flex flex-col'>
                                                        {Math.abs(activeIndex - i) <= 1 && (
                                                            <iframe src={`${file.url}#view=FitH`} title={item.title} className='flex-1 w-full bg-white' />
                                                        )}
                                                        <a href={file.url} target='_blank' rel='noopener noreferrer' className='text-center text-sm text-white/70 hover:text-white py-2'>
                                                            PDF-i yeni pəncərədə aç
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <div className='swiper-zoom-container'>
                                                        <img
                                                            src={file?.url}
                                                            alt={file?.alt || item.title}
                                                            className={`max-h-full max-w-full object-contain select-none ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>

                        {data.length > 1 && (
                            <div className='flex items-center justify-center gap-4 mt-4'>
                                <button
                                    id='reference-letters-prev'
                                    aria-label='prev'
                                    disabled={isBeginning}
                                    onClick={() => swiper?.slidePrev()}
                                    className={`size-12 rounded-full flex items-center justify-center duration-300 ${isBeginning ? 'bg-[#909090] cursor-not-allowed' : 'bg-white cursor-pointer'}`}
                                >
                                    <svg className='rotate-90' width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 10L12 14L16 10" stroke={isBeginning ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <span className='text-white/70 text-sm min-w-12 text-center'>{activeIndex + 1} / {data.length}</span>
                                <button
                                    id='reference-letters-next'
                                    aria-label='next'
                                    disabled={isEnd}
                                    onClick={() => swiper?.slideNext()}
                                    className={`size-12 rounded-full flex items-center justify-center duration-300 ${isEnd ? 'bg-[#909090] cursor-not-allowed' : 'bg-white cursor-pointer'}`}
                                >
                                    <svg className='-rotate-90' width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 10L12 14L16 10" stroke={isEnd ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default ReferenceLetters;
