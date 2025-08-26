import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeTitle() {
  return (
    <div className="w-full bg-[url('/images/home/bgPhone.png')] bg-cover bg-no-repeat bg-center h-[400px] sm:h-[500px] md:h-[731px] mt-0">
      <div className="w-full flex flex-col items-center justify-center mt-4 md:mt-10 mb-4 pt-0 md:pt-10 px-6">
        <h1 className="text-lg sm:text-3xl md:text-5xl font-bold text-center leading-2 sm:leading-6 md:leading-14 text-white mb-4">
          X-FINANCE
        </h1>
        <h1 className="text-lg sm:text-3xl md:text-5xl font-bold text-center leading-2 sm:leading-6 md:leading-14 text-white mb-4">
          “Vay chất, sống thật”
        </h1>
        <p className="text-sm md:text-[20px] font-normal text-center leading-5 sm:leading-7 text-white mb-2 mt-0 md:mt-4">
          Chỉ cần CMND/CCCD – duyệt nhanh trong 15 phút – giải ngân ngay trong
          ngày.
        </p>
        <p className="text-sm md:text-[20px] font-normal text-center leading-5 sm:leading-7 text-white">
          Giải pháp tài chính an toàn – Được cấp phép và bảo mật tuyệt đối
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full max-w-[300px] sm:max-w-[450px] mx-auto gap-1 sm:gap-4">
        <Button className="h-9 sm:h-12 w-36 sm:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[16px] font-bold leading-none bg-[#374151] cursor-pointer shadow-custom">
          <Image
            src={"/icons/chplay.svg"}
            alt="download android"
            width={24}
            height={24}
          />
          <span className="leading-none">Download Android</span>
        </Button>
        <Button className="h-9 sm:h-12 w-36 sm:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[16px] font-bold leading-none bg-main-color cursor-pointer shadow-custom">
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
  );
}
