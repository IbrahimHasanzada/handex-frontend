"use client";
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import StudyCards from './StudyCards';
import { StudyAreaSectionDto } from '@/types/StudyAreaSection.dto';
import { getStudyAreasClient } from '@/service';
import { useWindowSize } from '@/utils/useWindowSize';

const StudyAreasSection: React.FC<StudyAreaSectionDto> = ({ model, page }) => {
  const [study, setStudy] = useState<any>();

  const [total, setTotal] = useState<any>();

  const [count, setCount] = useState<number>(1);


  const { width } = useWindowSize()
  const perPage = width < 768 ? 4 : 8;

  useEffect(() => {
    async function getData() {
      const data = await getStudyAreasClient('az', model)
      setTotal(data?.length || 0);
      setStudy(data.slice(0, count * perPage))
    }
    if (width > 0) {
      getData();
    }
  }, [count, width, model])

  return (
    <div>
      <h2 className={`font-bold leading-12 text-4xl ${page === 'corporate' ? 'text-white' : 'text-black'}`}>Tədris sahələri</h2>
      <div className='mt-12 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {study && study?.length && study?.map((item: any, index: number) => (
          <StudyCards model={model} key={index} item={item && item} index={index} theme={page === 'corporate' ? true : false} />
        ))}
      </div>
      <div className='mt-15 w-full flex justify-center'>
        <div className='w-35 h-12'>
          <div id='study-button' onClick={() => setCount(count + 1)} className={`${total > perPage * count ? 'block' : 'hidden'}`}>
            <Button theme={page === 'corporate' ? true : false} flag={true} link=''>
              <div className='h-12 w-38 flex items-center justify-center gap-2'>
                Daha çox
                <div>
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
