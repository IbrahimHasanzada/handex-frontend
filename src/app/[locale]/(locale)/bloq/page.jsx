import { getAllBlogs, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import BlogClient from '@/components/blog/BlogClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;

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
  const locale = await params.locale || 'en';
  const initialData = await getAllBlogs(locale);

  return (
    <BlogClient
      initialBlogs={initialData.data}
      initialTotal={initialData.totalItems}
      locale={locale}
    />
  );
};

export default BlogPage;