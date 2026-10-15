"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Button from '../ui/Button';
import StudyCards from './StudyCards';
import StudyAreaTabs from './StudyAreaTabs';
import { StudyAreaSectionDto } from '@/types/StudyAreaSection.dto';
import { getStudyAreaCategoriesClient, getStudyAreasClient } from '@/service';
import { useWindowSize } from '@/utils/useWindowSize';

const ALL = 'all';
const OTHER = 'other';
const GRID = 'grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6';

interface Group {
  key: string;
  name: string;
  items: any[];
}

const StudyAreasSection: React.FC<StudyAreaSectionDto> = ({ model, page }) => {
  const [study, setStudy] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [active, setActive] = useState<string>(ALL);
  const [count, setCount] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const dark = page === 'corporate';
  const { width } = useWindowSize();
  const perPage = width < 768 ? 4 : 8;
  // One row of cards per group in the overview, matching the grid's column count at each breakpoint.
  const perRow = width >= 1280 ? 4 : width >= 768 ? 3 : 2;

  useEffect(() => {
    async function getData() {
      const [areas, groups] = await Promise.all([
        getStudyAreasClient('az', model),
        getStudyAreaCategoriesClient(model),
      ]);
      setStudy(Array.isArray(areas) ? areas : []);
      setCategories(groups);
    }
    getData();
  }, [model]);

  const groups = useMemo<Group[]>(() => {
    const grouped = new Set<number>();
    const result: Group[] = categories
      .map((category: any) => {
        const ids = new Set<number>((category.studyAreas || []).map((item: any) => item.id));
        const items = study.filter((item) => ids.has(item.id));
        items.forEach((item) => grouped.add(item.id));
        return { key: String(category.id), name: category.name, items };
      })
      .filter((group) => group.items.length > 0);

    if (!result.length) return [];

    const rest = study.filter((item) => !grouped.has(item.id));
    if (rest.length) result.push({ key: OTHER, name: 'Digər', items: rest });

    return result;
  }, [categories, study]);

  useEffect(() => {
    if (active !== ALL && !groups.some((group) => group.key === active)) setActive(ALL);
  }, [groups, active]);

  const selectGroup = (key: string, scroll = false) => {
    setActive(key);
    setCount(1);
    if (scroll) sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heading = (
    <h2 className={`font-bold leading-12 text-4xl ${dark ? 'text-white' : 'text-black'}`}>Tədris sahələri</h2>
  );

  const renderCards = (items: any[]) => items.map((item: any) => (
    <StudyCards model={model} key={item.id} item={item} theme={dark} />
  ));

  const loadMore = (total: number) => (
    <div className='mt-15 w-full flex justify-center'>
      <div className='w-35 h-12'>
        <div onClick={() => setCount(count + 1)} className={`${total > perPage * count ? 'block' : 'hidden'}`}>
          <Button id='study-button' theme={dark} flag={true} link=''>
            <div className='h-12 w-38 flex items-center justify-center gap-2'>
              Daha çox
              <div>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 10L12.5 14L16.5 10" stroke={dark ? '#fff' : '#141414'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  if (!width) return <div>{heading}</div>;

  // No groups configured for this page: keep the original flat grid.
  if (!groups.length) {
    return (
      <div>
        {heading}
        <div className={`mt-12 ${GRID}`}>
          {renderCards(study.slice(0, count * perPage))}
        </div>
        {loadMore(study.length)}
      </div>
    );
  }

  const tabs = [
    { key: ALL, label: 'Hamısı', count: study.length },
    ...groups.map((group) => ({ key: group.key, label: group.name, count: group.items.length })),
  ];
  const current = groups.find((group) => group.key === active);

  return (
    <div ref={sectionRef} className='scroll-mt-32'>
      {heading}
      <div className='mt-6 md:mt-8'>
        <StudyAreaTabs tabs={tabs} active={active} onChange={(key) => selectGroup(key)} dark={dark} />
      </div>

      <div id='study-areas-panel' role='tabpanel' aria-labelledby={`study-tab-${active}`} key={active} className='motion-safe:animate-study-fade'>
        {current ? (
          <>
            <div className={`mt-12 ${GRID}`}>
              {renderCards(current.items.slice(0, count * perPage))}
            </div>
            {loadMore(current.items.length)}
          </>
        ) : (
          <div className='mt-12 flex flex-col gap-14 md:gap-18'>
            {groups.map((group) => {
              const hasMore = group.items.length > perRow;
              return (
                <section key={group.key} aria-labelledby={`study-group-${group.key}`}>
                  <div className='flex items-center gap-3 md:gap-5'>
                    <h3 id={`study-group-${group.key}`} className={`text-xl md:text-[28px] font-bold leading-tight ${dark ? 'text-white' : 'text-[#141414]'}`}>
                      {group.name}
                    </h3>
                    <span className={`shrink-0 min-w-8 h-8 px-2.5 rounded-full flex items-center justify-center text-sm font-medium tabular-nums ${dark ? 'bg-[#282828] text-[#909090]' : 'bg-white border border-[#DDD] text-[#909090]'}`}>
                      {group.items.length}
                    </span>
                    <span aria-hidden className={`h-px flex-1 ${dark ? 'bg-white/10' : 'bg-[#141414]/10'}`} />
                    {hasMore && (
                      <button
                        type='button'
                        onClick={() => selectGroup(group.key, true)}
                        className={`group/more shrink-0 flex items-center gap-1.5 text-sm md:text-base font-medium cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-corporate ${dark ? 'text-white/70 hover:text-white' : 'text-[#141414]/60 hover:text-[#141414]'} transition-colors duration-300`}
                      >
                        Hamısına bax
                        <svg className='-rotate-90 motion-safe:transition-transform duration-300 group-hover/more:translate-x-1' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className={`mt-10 ${GRID}`}>
                    {renderCards(group.items.slice(0, perRow))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyAreasSection;
