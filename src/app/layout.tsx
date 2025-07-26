import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

const SFPro = localFont({
  src: '../../public/font/sf-pro/SFPRODISPLAYMEDIUM.otf',
  variable: '--font-sf-pro',
  display: 'swap',
});

export const metadata = {
  title: 'Handex.az',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.locale}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NHLC52SM');
            `,
          }}
        />
      </head>
      <body className={`antialiased ${SFPro.variable}`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHLC52SM"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
