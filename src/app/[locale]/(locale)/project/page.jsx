import dynamic from 'next/dynamic';
import { baseUrl } from '@/utils/url';
import { getLocale } from 'next-intl/server';
import { getMeta, getProjects } from '@/service';
import { useLocale } from 'next-intl';

export async function generateMetadata() {
  const locale = await getLocale();
  let data = await getMeta('project');

  const canonicalUrl = `${baseUrl}/project/${locale}`;
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

const ProjectClient = dynamic(() => import('@/components/project/ProjectClient'), {
  ssr: true,
});


const NewsPage = ({ params }) => {
  return (
    <ProjectClient />
  );
};

export default NewsPage;