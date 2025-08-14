import dynamic from 'next/dynamic';
import BackgroundLayout from '@/components/BackgroundLayout';
import { getStudyAreas } from '@/service';
import Header from '@/components/Header';

const Footer = dynamic(() => import('@/components/Footer'));

export const metadata = {
  title: 'Handex.edu.az - Ana Səhifə',
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const study = await getStudyAreas('home');
  
  return (
    <BackgroundLayout pathname="">
      <Header study={study} />
      {children}
      <Footer study={study} />
    </BackgroundLayout>
  );
}