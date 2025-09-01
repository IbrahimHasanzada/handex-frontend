import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const SFPro = localFont({
  src: "../../public/font/sf-pro/SFPRODISPLAYMEDIUM.otf",
  variable: "--font-sf-pro",
  display: "swap",
});

export const metadata = {
  title: "Handex.edu.az",
  description: "Handex.edu.az - Təhsil və karyera platforması",
  icons: {
    icon: [{ url: "/icon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={`antialiased ${SFPro.variable}`}>
        {/* Google Tag Manager Script - head-ə əlavə olunur */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NHLC52SM');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) - body-nin əvvəlində */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHLC52SM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Toaster position="top-center" />

        {children}
      </body>
    </html>
  );
}