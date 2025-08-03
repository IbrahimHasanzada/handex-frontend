import Button from '../ui/Button';
import { getContent, getStudyAreas } from '@/service';
import { HeroSectionDto } from '@/types/HeroSection.dto';
import React from 'react';
import HeroModal from './HeroModal';
import Image from 'next/image';

const HeadSection: React.FC<HeroSectionDto> = async ({ page, t }) => {
    const response = await getContent(page === 'corporate' ? 'corporate' : page === 'home' ? 'hero' : '');
    const study = await getStudyAreas('corporate');
    const data = response && response[0];
    return (
        <div className='flex flex-col-reverse md:flex-row  gap-6'>
            <div className='md:flex-1/2 md:py-32'>
                <h1 className={`font-bold text-2xl base:!text-4xl leading-12 mb-6 max-w-120 ${page === 'corporate' ? 'text-white' : 'text-black'}`}>{data?.title}</h1>
                <p className='mb-10 max-w-150 md:text-sm base:text-base text-[#909090]'>{data?.desc}</p>
                <div className='w-35 h-12 '>
                    <HeroModal study={study} page={page} />
                </div>
            </div>
            <div className=' md:h-130 md:w-150 relative'>
                <Image
                    width={600}
                    height={600}
                    priority
                    src={data?.images?.[0]?.url}
                    alt={data?.images?.[0]?.alt}
                    quality={100}
                    fetchPriority='high'
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default HeadSection;