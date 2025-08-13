import dynamic from 'next/dynamic';
import { baseUrl } from '@/utils/url';
import { getMeta, getProjects } from '@/service';

export async function generateMetadata() {

  const canonicalUrl = `${baseUrl}/layihe`;

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