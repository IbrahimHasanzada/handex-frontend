import React from 'react';
import Button from '../ui/Button';
import StudyCards from './StudyCards';
import { StudyAreaSectionDto } from '@/types/StudyAreaSection.dto';
import { getStudyAreas } from '@/service';

const StudyAreasSection: React.FC<StudyAreaSectionDto> = async ({ model, page, t }) => {
  const study: any = await getStudyAreas(model);

  return (
    <div>
      <h2 className={`font-bold leading-12 text-4xl ${page === 'corporate' ? 'text-white' : 'text-black'}`}>{t("studyOfArea.title")}</h2>
      <div className='mt-12 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {study.map((item: any, index: number) => (
          <StudyCards key={index} item={item && item} index={index} theme={page === 'corporate' ? true : false} />
        ))}
      </div>
      <div className='mt-15 w-full flex justify-center'>
        <div className='w-35 h-12'>
          <div className={`${study.length > 8 ? 'block' : 'hidden'}`}>
            <Button theme={page === 'corporate' ? true : false} flag={true} link=''>
              <div className='h-full flex mt-2  items-center justify-center gap-2'>
                {t("studyOfArea.button")}
                <div className='pt-1'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 10L12.5 14L16.5 10" stroke={page === 'corporate' ? '#fff' : '#141414'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAreasSection;
