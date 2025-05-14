import { getNews } from '@/service';
import { formatDate } from '@/utils/form-data';
import React, { Suspense } from 'react';
import Share from '@/components/Share';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const test = await getNews(slug);
  const meta = test?.meta;

  let metadata = {};

  meta.forEach(item => {
    let t = item.translations;
    let name = t.find(elm => elm.field === 'name');
    let value = t.find(elm => elm.field === 'value');

    metadata[name.value] = value.value;
  });
  console.log(metadata);

  return metadata;
}

const page = async ({ params }) => {
  const { slug } = params;

  let item = await getNews(slug);
  const t = await getTranslations();

  return (
    <Suspense>
      <div className='wrapper pt-30'>
        <div className='text-center mt-15'>
          <h1 className='md:text-[38px] text-[24px] font-bold'>{item.title}</h1>
          <p className='text-base my-6'>{t('news.details.from')} | {formatDate(item.createdAt)}</p>
        </div>
        <div className='md:w-3/5 w-full mx-auto flex flex-col items-center justify-center'>
          <img className='w-full mb-15 rounded-[20px] object-cover' src={item.image.url} alt={item.title} />
          <div className='text-base' dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
      <div className='w-max mx-auto mt-10'>
        <Share />
      </div>
    </Suspense>
  );
};

export default page;