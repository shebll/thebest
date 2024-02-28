import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/UI/Header";
import { Footer } from "./_components/UI/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Best",
  description:
    " موقع لتنظيم فرق وإنشاء دورياتك الرياضية بكل سهولة ويسر. قم بإدارة الفرق، وجدولة المباريات، وتتبع النتائج، وتفاعل مع اللاعبين، كل ذلك في مكان واحد. اكتشف الآن كيف يمكن لموقعنا أن يسهل عليك تنظيم أحلى الأوقات الرياضية مع فريقك!  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Toaster richColors position="bottom-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
