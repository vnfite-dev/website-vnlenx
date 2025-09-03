import AboutInfo from "@/app/about/AboutInfo";
import YoutubeShort from "@/app/about/YoutubeShort";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu về X-Finance - Nền tảng cho vay có thế chấp của VNFITE",
};

const aboutList = [
  "Vận hành theo mô hình P2P minh bạch, tuân thủ pháp luật",
  "Bảo mật cao, bảo vệ thông tin khách hàng",
  "Thế chấp tài sản linh hoạt, an toàn",
  "Giải ngân nhanh, thủ tục đơn giản",
  "Được người dùng đánh giá cao, phản hồi tích cực",
];

const vimiList = [
  "Khách hàng là trung tâm",
  "Đoàn kết và phát triển",
  "Nhiệt huyết và đổi mới",
  "Tin cậy và trách nhiệm",
  "An sinh xã hội hướng tới lợi ích cộng đồng",
];

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-2 mx-auto mb-10">
      <div className="w-full flex flex-row items-center justify-between px-8 mt-4 sm:mt-10 mb-6 gap-4">
        <div>
          <p className="font-bold text-xl sm:text-3xl lg:text-5xl leading-8 sm:leading-10 lg:leading-16 text-main-color">
            X-FINANCE
          </p>
          <p className="font-bold text-xl sm:text-3xl lg:text-5xl leading-8 sm:leading-10 lg:leading-16 text-[#1F2937]">{`“Vay chất, sống thật”`}</p>
          {aboutList.map((item, index) => (
            <div
              key={index}
              className="mt-4 flex flex-row items-center gap-2 text-[#374151] text-sm sm:text-[16px] lg:text-lg"
            >
              <Image
                src="/icons/about/checkpoint.svg"
                alt="checkpoint"
                width={24}
                height={24}
              />
              <p>{item}</p>
            </div>
          ))}
          <div className="flex flex-row items-center w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[450px] gap-1 sm:gap-4 mt-8">
            <Button className="h-9 sm:h-10 lg:h-12 w-36 sm:w-44 lg:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[13px] lg:text-[16px] font-bold leading-none bg-[#1F2937] hover:bg-gray-800 cursor-pointer shadow-custom">
              <Image
                src={"/icons/chplay.svg"}
                alt="download android"
                width={24}
                height={24}
              />
              <span className="leading-none">Download Android</span>
            </Button>
            <Button className="h-9 sm:h-10 lg:h-12 w-36 sm:w-44 lg:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[13px] lg:text-[16px] font-bold leading-none bg-main-color hover:bg-[#A40000] cursor-pointer shadow-custom">
              <Image
                src={"/icons/applestore.svg"}
                alt="download android"
                width={24}
                height={24}
                className="mb-1"
              />
              <span className="leading-none">Download IOS</span>
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex w-[60%] lg:w-[45%] relative z-10">
          <div className="w-[250px] md:w-[320px] lg:w-[435px] bg-main-color rounded-full aspect-[1/1] mx-auto"></div>
          <Image
            src="/images/about/about.png"
            alt="about header"
            width={472}
            height={600}
            className="w-[80%] h-auto object-cover absolute -top-[20%] right-[10%] bottom-0 mx-auto"
          />
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-6 md:leading-14 text-center mt-4 sm:mt-8 lg:mt-12">
          Giới thiệu về <span className="text-main-color">X-Finance</span>
        </p>
        <AboutInfo />
      </div>

      <div className="w-full p-4">
        <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-6 md:leading-14 text-center mt-4 sm:mt-8 lg:mt-12">
          Tầm nhìn và sứ mệnh của{" "}
          <span className="text-main-color">X-Finance</span>
        </p>
        <p className="text-sm sm:text-[16px] md:text-lg lg:text-xl my-4 md:my-10 text-center">
          Là sợi dây kết nối giữa nhà đầu tư và nhà huy động, tạo ra sân chơi an
          toàn giao thương tài chính, tạo lợi ích cho các bên đồng thời tạo sự
          phát triển bền vững cho xã hội.
        </p>
        <div className="max-w-[250px] sm:max-w-full w-full flex flex-col md:flex-row flex-nowrap md:flex-wrap space-x-0 md:space-x-8 space-y-1 md:space-y-0 items-center justify-center mx-auto">
          {vimiList.map((item, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[340px] flex flex-row items-center justify-between gap-4 text-[#374151] pr-0 sm:pr-4 mt-4",
                index === 4 ? "w-full" : "w-full md:w-auto"
              )}
            >
              <div>
                <Image
                  src={`/images/about/View${index + 1}.png`}
                  alt="checkpoint"
                  width={64}
                  height={64}
                  className="w-full"
                />
              </div>
              <p className="font-bold text-sm sm:text-[16px] lg:text-lg w-[80%]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red w-full">
        <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-6 md:leading-14 text-center mt-4 sm:mt-8 lg:mt-12">
          Khám phá về{" "}
          <span className="text-main-color">X-Finance</span>
        </p>
        <YoutubeShort />
      </div>
    </div>
  );
}
