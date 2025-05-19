import dynamic from 'next/dynamic';
import { baseUrl } from '@/utils/url';
import { getLocale } from 'next-intl/server';

export async function generateMetadata() {
  let lang = await getLocale();
  const canonicalUrl = `${baseUrl}/news/${lang}`;
  return {
    title: 'Handex.az',
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