import React from 'react';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import { getContent } from '@/service';

const HeadSection = async () => {
    const t = useTranslations();
    const response = await getContent('hero');

    const data = response && response[0];

    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='flex-1/2 md:py-32'>
                <h1 className='font-bold md:text-2xl base:!text-4xl leading-12 mb-6 max-w-120'>{data?.title}</h1>
                <p className='mb-10 max-w-150 md:text-sm base:text-base'>{data?.desc}</p>
                <div className='w-35 h-12 '>
                    <Button flag={true} link='' >
                        <div className='flex items-center justify-center h-full'>
                            {t("home.headSection.button")}
                        </div>
                    </Button>
                </div>
            </div>
            <div className='h-80 w- md:h-130 md:w-150 relative'>
                <img
                    src={data?.images[0].url}
                    alt='Handex hero page icon'
                    className='object-cover md:object-contain'
                />
            </div>
        </div>
    );
};

export default HeadSection;