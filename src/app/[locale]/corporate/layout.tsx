
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundLayout from "@/components/BackgroundLayout";
import { getStudyAreas } from "@/service";
export default async function CorporateLayout({
    children,
}: Readonly<{
    children: any;
    params: any;
}>) {
    const messagese = await getMessages();
    const study = await getStudyAreas()
    return (
        <>
            <BackgroundLayout pathname={'corporate'}>
                <NextIntlClientProvider messages={messagese} >
                    <Header theme="dark" study={study} />
                    {children}
                    <Footer study={study} theme="dark" />
                </NextIntlClientProvider>
            </BackgroundLayout>
        </ >
    );
}
