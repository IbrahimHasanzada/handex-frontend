'use client'
import React, { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HandexPreferencesSlider = ({ model, theme, handex }: { model: string, theme: boolean, handex: any }) => {
    const [isBeginning, setIsBeginning] = useState(true)
    return (
        <div className='relative'>
            <div className={`flex navigation-buttons absolute left-0 right-0  justify-center space-x-2 z-10 -bottom-25`}>
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

                }}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                modules={[Navigation]}
                onReachBeginning={() => handex && setIsBeginning(true)}
                onReachEnd={() => handex && setIsBeginning(false)}
                className='transition ease-linear duration-300 relative'
            >
                {handex && handex?.map((item: any, i: number) => (
                    <SwiperSlide key={i} className={`group  rounded-[20px] p-3`}>
                        <div key={i} className={`p-6 h-65 md:h-auto rounded-[20px] ${theme ? 'md:w-[calc((100%/2)-1.5rem)] lg:w-[calc((100%/4)-1.5rem)] text-center bg-[#2B2B2B]' : `${model ? '' : 'bg-white box-shadow'}  md:w-[calc((100%/2)-1.5rem)] lg:w-[calc((100%/3)-1.5rem)]`} w-full md:w-[calc((100%/2)-1.5rem)] lg:w-[calc((100%/3)-1.5rem)]`}>
                            <img className={`mb-3 size-16 ${theme && 'mx-auto'}`} src={item?.images[0]?.url} alt={item?.images[0]?.alt} />
                            <p className={`${theme || model ? 'text-white' : 'text-[#141414]'} text-base text-[#141414] font-bold mb-2`}>{item.title}</p>
                            <p className='text-[#909090] text-sm font-normal'>{item.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default HandexPreferencesSlider
