import { getBlogs } from '@/service';
import { formatDate } from '@/utils/form-data';
import React from 'react';
import Share from '@/components/Share';
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

  const canonicalUrl = `${baseUrl}/bloq/${slug}`;


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

  let item = await getBlogs(slug);

  return (
    <div>
      <div className='wrapper pt-30'>
        <div className=' w-full mx-auto mt-15 flex flex-col items-center justify-center'>
          <BlogContentWithToc
            description={item.description}
            image={item.image?.url}
            imageAlt={item.title}
            title={item.title}
            date={formatDate(item.createdAt)}
          />
        </div>
      </div>
      <div className='w-max mx-auto mt-10'>
        <Share />
      </div>
    </div>
  );
};

export default page;