import { getAllBlogs, getMeta } from '@/service';
import { baseUrl } from '@/utils/url';
import BlogClient from '@/components/blog/BlogClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  let data = await getMeta('blog');

  const canonicalUrl = `${baseUrl}/${locale}/blog`;
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