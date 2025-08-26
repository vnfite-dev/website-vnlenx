import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import LayoutShell from "@/components/layout/LayoutShell";
import MessengerChatButton from "@/components/plugin/MessengerWidget";
import ZaloChatWidget from "@/components/plugin/ZaloChatWidget";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Vnlendx",
    default: "Vnlendx - Nền tảng cho vay có thế chấp của VNFITE",
    absolute: "Vnlendx - Nền tảng cho vay có thế chấp của VNFITE",
  },
  description: "Vnlendx - Sản phẩm cho vay có thế chấp của VNFITE",
  // icons: {
  //   icon: "/logo.svg",
  // }
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow"></meta>
        <meta
          httpEquiv="Content-Security-Policy"
          content="img-src https: data:; upgrade-insecure-requests"
        />
      </Head>
      <body className={`${inter.className} relative`}>
        <div className="fixed bottom-0 right-0 z-50">
          <MessengerChatButton />
          <ZaloChatWidget />
        </div>

        {children}
        {/* <Footer />   */}
      </body>
    </html>
  );
}
