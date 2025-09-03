import ServiceRegister from "@/app/services/ServiceRegister";
import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";
import HomeLoanPackageChild from "@/components/molecules/HomeLoanPackageChild";
import Image from "next/image";

export const metadata = {
  title: "Dịch vụ",
  description: "Dịch vụ cho vay thế chấp - X-Finance",
};

const procedureList = [
    "Đăng ký thông tin tư vấn",
    "Tư vấn qua điện thoại trong vòng 15 phút",
    "Đến PGD của X-Finance thẩm định tài sản và giải ngân nhanh chóng bằng tiền mặt hoặc chuyển khoản"
];

const prepareList = [
    "Bản sao công chứng căn cước công dân hoặc hộ chiếu còn hiệu lực",
    "Bản sao hộ khẩu hoặc KT3 (sổ tạm trú còn thời hạn) và các giấy tờ liên quan khác",
    "Giấy xác nhận tình trạng hôn nhân (áp dụng cho người vay, chủ sở hữu tài sản thế chấp, người bảo lãnh trả nợ hoặc người đồng vay nếu có)",
    "Giấy tờ chứng minh tài sản đảm bảo: Giấy chứng nhận hoặc giấy chuyển nhượng quyền sử dụng đất; giấy chứng nhận quyền sở hữu tài sản khác, giấy tờ xe hoặc giấy tờ có giá khác",
    "Giấy tờ chứng minh khả năng trả nợ: Hợp đồng lao động, bảng lương, sao kê tài khoản ngân hàng 3 - 6 tháng gần đây, giấy tờ chứng minh thu nhập từ tài sản cho thuê, giấy phép đăng ký kinh doanh,..."
]

export default function ServicesPage() {
    return (
        <HeaderImageLayout imageHead="/images/services/background.png">
            <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-4 mx-auto mb-10">
                <HomeLoanPackageChild />
                <ServiceRegister />
                <div className="w-full mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl text-center font-bold px-4 py-4">Thủ tục và các giấy tờ cần chuẩn bị</p>
                    <div className="flex flex-col sm:flex-row-reverse gap-4 mt-2">
                        <div className="w-full sm:w-1/2 px-4 md:p-6 lg:p-8">
                            <p className="text-sm sm:text[16px] md:text-lg lg:text-xl font-bold text-center">Thủ tục</p>
                            <p className="text-sm md:text-[16px] lg:text-lg my-4 sm:my-6">Bạn vui lòng thực hiện theo các bước dưới đây để được giải ngân nhanh nhất:</p>
                            {
                                procedureList.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-2 sm:mb-4">
                                        <Image 
                                            src="/icons/services/defend.svg"
                                            alt="Check icon"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="text-sm md:text-[16px] lg:text-lg"><span className="font-bold">Bước {index + 1}:</span> {item}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-full sm:w-1/2 px-4 md:p-6 lg:p-8">
                            <p className="text-sm sm:text[16px] md:text-lg lg:text-xl font-bold text-center">Chuẩn bị</p>
                            <p className="text-sm md:text-[16px] lg:text-lg my-4 sm:my-6">Bạn vui lòng chuẩn bị các giấy tờ sau mang ra cơ sở gần nhất để giải ngân </p>
                            {
                                prepareList.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-2 sm:mb-4">
                                        <Image 
                                            src="/icons/services/defend.svg"
                                            alt="Check icon"
                                            width={24}
                                            height={24}
                                        />
                                        <p className="text-sm md:text-[16px] lg:text-lg">{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </HeaderImageLayout>
    )
}