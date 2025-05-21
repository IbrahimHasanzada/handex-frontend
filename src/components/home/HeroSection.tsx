import Button from '../ui/Button';
import { getContent } from '@/service';
import { HeroSectionDto } from '@/types/HeroSection.dto';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

const HeadSection: React.FC<HeroSectionDto> = async ({ page }) => {
    const t = await getTranslations();
    const response = await getContent(page === 'corporate' ? 'corporate' : page === 'home' ? 'hero' : '');
    const data = response && response[0];
    return (
        <div className='flex flex-col-reverse md:flex-row gap-6'>
            <div className='md:flex-1/2 md:py-32'>
                <h1 className={`font-bold sm:text-2xl base:!text-4xl leading-12 mb-6 max-w-120 ${page === 'corporate' ? 'text-white' : 'text-black'}`}>{data?.title}</h1>
                <p className='mb-10 max-w-150 md:text-sm base:text-base text-[#909090]'>{data?.desc}</p>
                <div className='w-35 h-12 '>
                    <Button theme={page === 'corporate' ? true : false} flag={true} link='' >
                        <div className='flex items-center justify-center h-full'>
                            {t("home.headSection.button")}
                        </div>
                    </Button>
                </div>
            </div>
            <div className=' md:h-130 md:w-150 relative'>
                <img
                    src={data?.images?.[0]?.url}
                    alt='Handex hero page icon'
                    className='object-cover md:object-contain'
                />
            </div>
        </div>
    );
};

export default HeadSection;