
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
import { getStudyAreas } from "@/service";
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const study = await getStudyAreas();

  return (
    <BackgroundLayout pathname="">
      <NextIntlClientProvider messages={messages}>
        <Header study={study} />
        {children}
        <Footer study={study} />
      </NextIntlClientProvider>
    </BackgroundLayout>
  );
}

