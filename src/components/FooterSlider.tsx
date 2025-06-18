"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const FooterSlider: React.FC<any> = ({ study, theme }) => {
    const locale = useLocale();
    const t = useTranslations('footer');
    return (
        <div className={`${theme ? 'bg-[#e7e7e733]' : 'bg-[#E8E8E8]'} h-9/10 rounded-[20px]  mt-8 px-8 pb-15`}>
            <p className={`${theme ? 'text-white' : 'text-[#141414]'} text-center text-2xl font-normal  select-none pt-6`}>{t('discover')}</p>
            <Swiper
                pagination={{
                    clickable: true,
                    bulletClass: 'custom-dot',
                    bulletActiveClass: theme
                        ? 'swiper-pagination-corporate-bullet-active'
                        : 'swiper-pagination-bullet-active',
                }}
                modules={[Pagination, Autoplay]}
                autoplay={true}
                className="mySwiper h-full"
            >
                {study?.map((item: any) => {
                    return (
                        <SwiperSlide className='w-full h-full mt-10'>
                            <Link href={'/' + locale + '/study-area/' + item.slug}>
                                <img className='w-69 object-cover mx-auto' src={item?.image?.url} alt={item?.image?.alt} />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default FooterSlider;