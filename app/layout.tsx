import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/UI/Header";
import { Footer } from "./_components/UI/Footer";
import { Toaster } from "sonner";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Best",
  description:
    " موقع لتنظيم فرق وإنشاء دورياتك الرياضية بكل سهولة ويسر. قم بإدارة الفرق، وجدولة المباريات، وتتبع النتائج، وتفاعل مع اللاعبين، كل ذلك في مكان واحد. اكتشف الآن كيف يمكن لموقعنا أن يسهل عليك تنظيم أحلى الأوقات الرياضية مع فريقك!  ",
  icons: ["/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="Google Tag Manager">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5GRND3HF');
          `}
        </Script>
        <Script id="Meta Pixel Code">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '837837031504021');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            alt="facebook image"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=837837031504021&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <Header />
        <Toaster richColors position="bottom-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
