
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
export default async function CorporateLayout({
    children,
}: Readonly<{
    children: any;
    params: any;
}>) {
    const messagese = await getMessages();
    return (
        <>
            <BackgroundLayout pathname={'corporate'}>
                <NextIntlClientProvider messages={messagese} >
                    <Header theme="dark" />
                    {children}
                    <Footer theme="dark" />
                </NextIntlClientProvider>
            </BackgroundLayout>
        </ >
    );
}
