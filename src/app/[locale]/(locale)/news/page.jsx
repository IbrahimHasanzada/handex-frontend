import dynamic from 'next/dynamic';
import { baseUrl } from '@/utils/url';
import { getLocale } from 'next-intl/server';
import { getMeta } from '@/service';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  let data = await getMeta('news');

  const canonicalUrl = `${baseUrl}/${locale}/news`;
  if (data.error) {
    return {
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  let meta = {};
  data.forEach(item => {
    meta[item.name] = item.value;
  });

  return {
    title: meta.title || undefined,
    description: meta.description || undefined,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const NewsClient = dynamic(() => import('@/components/news/NewsClient'), {
  ssr: true,
});


const NewsPage = ({ params }) => {
  return <NewsClient locale={params.locale} />;
};

export default NewsPage;