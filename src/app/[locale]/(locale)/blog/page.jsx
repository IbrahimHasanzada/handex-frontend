import { getAllBlogs } from '@/service';
import { baseUrl } from '@/utils/url';
import BlogClient from '@/components/blog/BlogClient';

// export async function generateMetadata({ params }) {
//   const locale = params.locale || 'en';
  
//   return {
//     title: 'Blog',
//     description: 'Read our latest blog posts',
//     alternates: {
//       canonical: `${baseUrl}/blog/${locale}`,
//     },
//   };
// }

const BlogPage = async ({ params }) => {
  const locale = params.locale || 'en';
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