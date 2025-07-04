"use client";
import { getContent, getProfiles } from '@/service';
import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const UserSlider: React.FC<any> = ({ result }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  return (
    <div className='relative'>
      <div className="navigation-buttons absolute left-0 right-0 flex justify-center space-x-2 z-10 -bottom-30">
        <button aria-label="prev button" className={`overflow-hidden group swiper-button-prev-custom rounded-full w-20 h-20 flex items-center justify-center  ${isBeginning ? 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)]' : 'bg-black rounded-full'}`}>
          <svg className='group-hover:translate-x-4.5 duration-300 translate-x-24 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className='-translate-x-5 group-hover:-translate-x-24 duration-300 rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'black' : 'white'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button aria-label="next button" className={`overflow-hidden group swiper-button-next-custom rounded-full w-20 h-20 flex items-center justify-center ${isBeginning ? ' bg-black' : 'bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)] rounded-full'}`}>
          <svg className='group-hover:translate-x-24 duration-300 translate-x-5 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className='-translate-x-24 group-hover:-translate-x-5 duration-300 -rotate-90' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke={`${isBeginning ? 'white' : 'black'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        onReachBeginning={() => result && setIsBeginning(true)}
        onReachEnd={() => result && setIsBeginning(false)}
        className='h-90 transition ease-linear duration-300 relative'
      >
        {result && result.length && result?.map((item: any, i: number) => (
          <SwiperSlide key={i} className='group relative !h-90 rounded-[20px] overflow-hidden'>
            <div className='w-full h-full relative'>
              <img src={item.images[0]?.url} alt={item?.images[0]?.alt} className='object-cover w-full group-hover:scale-120 duration-500 h-full' />
            </div>
            <div style={{
              backdropFilter: 'blur(10px)',
              background: 'linear-gradient(90deg, rgba(144, 144, 144, 0.40) 0%, rgba(144, 144, 144, 0.40) 100%)',
              WebkitBackdropFilter: 'blur(50px)'
            }} className='h-14 px-6 pt-1 text-white rounded-[50px] absolute left-6 bottom-6  w-[80%]'>
              <p className='font-bold'>{item.title}</p>
              <p className='text-sm'>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default UserSlider;
