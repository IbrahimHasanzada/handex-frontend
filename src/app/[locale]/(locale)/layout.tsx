
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: "az" | "en" | "ru"; };
}>) {
  const messagese = await getMessages();
  return (
    <>
      <BackgroundLayout pathname={''}>
        <NextIntlClientProvider messages={messagese} >
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </BackgroundLayout>
    </ >
  );
}
