import React, { Suspense } from 'react';
import ProjectCard from '@/components/project/ProjectCard';
import { getLocale, getTranslations } from 'next-intl/server';
import { baseUrl } from '@/utils/url';
import { getProjects } from '@/service';

export async function generateMetadata() {
  let lang = await getLocale();
  const canonicalUrl = `${baseUrl}/project/${lang}`;
  return {
    title: 'Handex.az',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = async () => {
  const t = await getTranslations('project');
  const project = await getProjects();

  return (
    <Suspense>
      <div className='wrapper pt-30'>
        <h1 className='mt-20 mb-12 text-[38px] text-[#141414] font-bold'>{t('title')}</h1>
        <div className='grid gap-y-6 lg:grid-cols-2 justify-between'>
          {project?.data?.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default page;