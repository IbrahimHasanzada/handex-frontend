import dynamic from 'next/dynamic';
import { baseUrl } from '@/utils/url';
import { getMeta } from '@/service';

export async function generateMetadata({ params }) {
  const canonicalUrl = `${baseUrl}/xeberler`;


  return {
    title: 'Handexdə baş tutan xəbərlər, yeni təlimlər, tədbirlər və yeniliklər.',
    description: 'Handex təlim mərkəzində keçirilən seminarlar, master‑klaslar və tədris yenilikləri barədə xəbərlər bölməsindən xəbərdar olun. Karyeranı burada qur!',
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