import HomeLoanPackage from "@/components/molecules/HomeLoanPackage";
import HomeCounter from "@/components/molecules/HomeCounter";
import HomeTitle from "@/components/molecules/HomeTitle";
import HomePartner from "@/components/molecules/HomePartner";
import { Metadata } from "next";
import Header from "@/components/molecules/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/molecules/Footer";

export const metadata: Metadata = {
  title: "Trang chủ | X-Finance",
  description:
    "Trang chủ của X-Finance - Nền tảng cho vay có thế chấp của VNFITE",
};
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});
export default function Home() {
  return (
    <>
      <div className={`${inter.className} relative`}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center w-full mx-auto mb-32">
        <HomeTitle />
        <HomeCounter />
        <HomeLoanPackage />
        <HomePartner />
      </div>
      <div className={`${inter.className} relative`}>
        <Footer />
      </div>
    </>
  );
}
