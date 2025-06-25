import { getBlogs } from '@/service';
import { formatDate } from '@/utils/form-data';
import React from 'react';
import Share from '@/components/Share';
import { getLocale, getTranslations } from 'next-intl/server';
import { baseUrl } from '@/utils/url';
import BlogContentWithToc from '@/components/blog/BlogContentWithToc'

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const newsItem = await getBlogs(slug);

  const metaArray = newsItem?.meta ?? [];
  const metaMap = {};
  metaArray.forEach(item => {
    if (item.name && item.value) {
      metaMap[item.name] = item.value;
    }
  });

  const title = metaMap['title'] || 'Handex.az';
  const description = metaMap['description'] || '';

  const lang = await getLocale();
  const canonicalUrl = `${baseUrl}/${lang}/blog/${slug}`;


  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    }
  };
}

const page = async ({ params }) => {
  const { slug } = params;

  let item = await getBlogs(slug);
  const t = await getTranslations();

  return (
    <div>
      <div className='wrapper pt-30'>
        <div className='text-center mt-15 mx-auto'>
          <h1 className='md:text-[38px] text-[24px] font-bold'>{item.title}</h1>
          <p className='text-base my-6'>{formatDate(item.createdAt)}</p>
        </div>
        <div className=' w-full mx-auto flex flex-col items-center justify-center'>
          <img className='w-full mb-15 rounded-[20px] object-cover' src={item.image.url} alt={item.title} />
          <BlogContentWithToc description={item.description} />
        </div>
      </div>
      <div className='w-max mx-auto mt-10'>
        <Share />
      </div>
    </div>
  );
};

export default page;