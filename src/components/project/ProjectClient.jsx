"use client";
import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/project/ProjectCard';
import { getProjects } from '@/service';
import { useTranslations } from 'next-intl';

const ProjectClient = ({ locale }) => {

  let [project, setProject] = useState();
  let [total, setTotal] = useState();
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
  const t = useTranslations('project');

  useEffect(() => {
    async function getData() {
      const data = await getProjects(locale);

      setProject(data?.data);
      console.log(data);
      setTotal(data?.totalItems)
    }
    getData();
  }, []);

  const handlePagination = async () => {
    setLoading(true);
    let nextPage = count + 1;
    let extraProject = await getProjects(locale, nextPage);
    setProject(prev => [...prev, ...extraProject.data]);
    setCount(nextPage);
    setLoading(false);
  };

  return (
    <div className='wrapper pt-25'>
      <h1 className='mt-20 mb-12 text-[38px] text-[#141414] font-bold'>{t('title')}</h1>
      <div className='grid gap-y-6 lg:grid-cols-2 justify-between'>
        {project?.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
      {total > (count + 1) * 12 && (
        <button onClick={() => handlePagination()} className='flex bg-handle-gray mx-auto rounded-full items-center px-6 gap-2 h-12 my-15'>
          <p className='text-base'>{loading ? 'Loading' : 'Daha çox'}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M8.5 10L12.5 14L16.5 10" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ProjectClient;