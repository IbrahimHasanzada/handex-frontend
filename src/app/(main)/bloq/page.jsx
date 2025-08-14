import { getAllBlogs, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import BlogClient from '@/components/blog/BlogClient';

export async function generateMetadata({ params }) {
  const canonicalUrl = `${baseUrl}/bloq`;

  return {
    title: 'Handex bloq ekspert məqalələr, təlim tövsiyələri və yeniliklər.',
    description: 'Data Analitika, Excel, Power BI, MOSE, SMM, PL-300 və digər təlim sahələrində ekspert məqalələri, praktiki tövsiyələr və yenilikləri burada əldə edin.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const BlogPage = async ({ params }) => {
  return (
    <BlogClient
    />
  );
};

export default BlogPage;