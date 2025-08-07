
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
const Footer = dynamic(() => import('@/components/Footer'));
import BackgroundLayout from "@/components/BackgroundLayout";
import { getStudyAreas } from "@/service";
import Head from "next/head";
import dynamic from "next/dynamic";
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const study = await getStudyAreas('home');

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

