import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-main-color text-white py-6 sm:py-10 lg:py-14 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col gap-2 lg:gap-8 lg:w-[25%] xl:w-[30%]">
          <p className="font-bold text-4xl leading-14 uppercase">X-FINANCE</p>
          <div className="font-light text-md text-justify">
            Chúng tôi tự hào nhà cung cấp các khoản vay nhanh chóng, linh hoạt,
            sử dụng tài sản đảm bảo để hỗ trợ khách hàng giải quyết nhu cầu tài
            chính một cách an toàn và hiệu quả.
          </div>
          <p className="hidden sm:block font-bold text-md">xfinance.com.vn</p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col justify-start items-start sm:justify-between sm:items-start lg:items-start lg:justify-start h-full lg:w-[25%] xl:w-[30%] mt-4 lg:mt-0 mb-4">
          <div className="mb-2 sm:mb-0 lg:mb-8 gap-1 lg:gap-4 flex flex-col w-full sm:w-[50%] lg:w-full">
            <p className="font-bold text-xl leading-7">Địa chỉ</p>
            <p className="font-light text-md leading-6">
              Số nhà 4B, Vương Thừa Vũ, Phường Khương Đình, Hà Nội
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:gap-2">
            <p className="font-bold text-xl leading-7 mb-0 sm:mb-2">Giờ làm việc</p>
            <p className="font-light text-md leading-6">
              Thứ 2 đến thứ 6: 8.00am - 5.00pm
            </p>
            <p className="font-light text-md leading-6">
              Thứ 7: 8.00am - 12.00pm
            </p>
            <p className="font-light text-md leading-6">Chủ nhật: Nghỉ</p>
          </div>
        </div>

        <div className="w-full lg:w-[40%] xl:w-[30%]">
          <div>
            <p className="font-bold text-xl leading-7 mb-2 sm:mb-4">Cài đặt Ứng dụng</p>
            <p className="font-light text-md leading-6">
              Từ App Store hoặc Google Play
            </p>
            <div className="flex flex-row items-center justify-start gap-4 mt-4">
              <div className="h-20 w-20 sm:h-32 sm:w-32 bg-white"></div>
              <div className="flex flex-col items-start justify-between h-20 sm:h-32">
                <Button className="h-9 sm:h-12 w-36 sm:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[16px] font-bold leading-none bg-[#1F2937] hover:bg-gray-800 cursor-pointer shadow-custom">
                  <Image
                    src={"/icons/chplay.svg"}
                    alt="download android"
                    width={24}
                    height={24}
                  />
                  <span className="leading-none">Download Android</span>
                </Button>
                <Button className="h-9 sm:h-12 w-36 sm:w-full rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[16px] font-bold leading-none bg-ios hover:bg-[#FF6262] cursor-pointer shadow-custom mt-2">
                  <Image
                    src={"/icons/applestore.svg"}
                    alt="download android"
                    width={24}
                    height={24}
                  />
                  <span className="leading-none">Download IOS</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 mt-8">
            <Image
              src={"/icons/whatsapp.svg"}
              alt="whatsapp"
              width={32}
              height={32}
            />
            <p className="font-bold text-2xl leading-9">0123 456 789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
