import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
import { getStudyAreas } from "@/service";

export const metadata = {
  title: 'Korporativ | Handex.edu.az',
};

export default async function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const study = await getStudyAreas("corporate");

  return (
    <BackgroundLayout pathname="corporate">
      <Header theme="dark" study={study} />
      {children}
      <Footer study={study} theme="dark" />
    </BackgroundLayout>
  );
}