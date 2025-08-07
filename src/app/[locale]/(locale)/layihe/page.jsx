import dynamic from 'next/dynamic';
import { baseUrl } from '@/utils/url';
import { getLocale } from 'next-intl/server';
import { getMeta, getProjects } from '@/service';
import { useLocale } from 'next-intl';

export async function generateMetadata() {
  const locale = await getLocale();

  const canonicalUrl = `${baseUrl}/layihe`;

  let meta = {};
  data.forEach(item => {
    meta[item.name] = item.value;
  });

  return {
    title: 'Handex layihələri təlim və tədris, inkişaf və məşğulluq imkanları.',
    description: 'Handex təlim mərkəzində həyata keçirilən layihələr peşəkar biliklərin artırılması, real iş imkanları və fərdi inkişaf üçün nəzərdə tutulub. Karyeranı qur!',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const ProjectClient = dynamic(() => import('@/components/project/ProjectClient'), {
  ssr: true,
});


const NewsPage = ({ params }) => {
  return (
    <ProjectClient />
  );
};

export default NewsPage;