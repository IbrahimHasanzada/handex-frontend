import type { Metadata } from "next";
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const SFPro = localFont({
    src: '../../public/font/sf-pro/SFPRODISPLAYMEDIUM.otf',
    variable: '--font-sf-pro',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Handex.az",
};

export default function RootLayout({
    children,
    params,
}: {
    children: any;
    params: any;
}) {
    return (
        <html lang={params.locale}>
            <body className={`antialiased ${SFPro.variable}`}>
                <Toaster position="top-center" />
                {children}
            </body>
        </html>
    );
}