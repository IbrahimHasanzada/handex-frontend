"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

const FooterSlider: React.FC<any> = ({ study }) => {
    const t = useTranslations('footer')
    return (
        <div className='h-9/10 rounded-[20px] bg-[#E8E8E8] mt-8 px-8 pb-15'>
            <p className='text-center text-2xl font-normal text-[#141414] select-none pt-6'>{t('discover')}</p>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-full">
                {study?.map((item: any) => {
                    return (
                        <SwiperSlide className='w-full h-full mt-10'>
                            <img className='w-69 object-cover mx-auto' src={item?.image?.url} alt={item?.image?.alt} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default FooterSlider;