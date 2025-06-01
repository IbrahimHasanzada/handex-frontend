
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
import { getStudyAreas } from "@/service";
export default async function RootLayout({
  children,
}: Readonly<{
  children: any;
  params: any;
}>) {
  const messagese = await getMessages();
  const study = await getStudyAreas();
  return (
    <>
      <BackgroundLayout pathname={''}>
        <NextIntlClientProvider messages={messagese} >
          <Header study={study} />
          {children}
          <Footer study={study} />
        </NextIntlClientProvider>
      </BackgroundLayout>
    </ >
  );
}
