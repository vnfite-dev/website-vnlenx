import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";
import "./StyleNews.css";
import FeatureNews from "@/components/newsmodules/FeatureNews";
import XFinaceNews from "@/components/newsmodules/XFinaceNews";
export default function NewsPage() {
  return (
    <HeaderImageLayout imageHead="/images/support/support-header.png">
      <FeatureNews />
      <XFinaceNews />
    </HeaderImageLayout>
  );
}