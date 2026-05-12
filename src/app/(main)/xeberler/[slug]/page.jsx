import { formatDate } from '@/utils/form-data';
import React, { Suspense } from 'react';
import Share from '@/components/Share';
import { getNews } from '@/service';
import { baseUrl } from '@/utils/url';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const newsItem = await getNews(slug);

  const metaArray = newsItem?.meta ?? [];
  const metaMap = {};
  metaArray.forEach(item => {
    if (item.value && item.name) {
      metaMap[item.name] = item.value;
    }
  });

  const title = metaMap['title'] || 'Handex.az';
  const description = metaMap['description'] || '';

  const canonicalUrl = `${baseUrl}/xeberler/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    }
  };
}


const page = async ({ params }) => {
  const { slug } = await params;

  let item = await getNews(slug);

  if (!item) return null;

  return (
    <Suspense>
      <div className='wrapper pt-30 overflow-x-hidden'>
        <div className='text-center mt-15'>
          <h1 className='md:text-[38px] text-[24px] font-bold break-words'>{item.title}</h1>
          <p className='text-base my-6'>{formatDate(item.createdAt)}</p>
        </div>
        <div className='md:w-3/5 w-full max-w-full mx-auto flex flex-col items-center justify-center'>
          {item.image?.url && (
            <img className='w-full mb-15 rounded-[20px] object-cover' src={item.image.url} alt={item.title} />
          )}
          {item.description && (
            <div
              className='text-base w-full max-w-full break-words [&_*]:max-w-full [&_a]:!text-blue-600 [&_img]:!w-full [&_img]:!h-auto [&_img]:rounded-[20px] [&_img]:my-4 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto'
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      </div>
      <div className='w-max max-w-full mx-auto mt-10'>
        <Share />
      </div>
    </Suspense>
  );
};

export default page;