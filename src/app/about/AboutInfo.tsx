"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function AboutInfo() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-4 mx-auto p-4 sm:p-8">
        <div className="w-full">
          <Image
            src="/images/about/about-detail.png"
            alt="About Us"
            width={1200}
            height={563}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full text-justify space-y-4 text-sm sm:text-xs md:text-sm lg:text-lg max-w-[900px] mx-auto">
            <p>Xfinance là ứng dụng cho vay thế chấp tiên phong được phát triển bởi Công ty VNFITE, với sứ mệnh mang đến giải pháp tài chính nhanh chóng, an toàn và minh bạch cho người Việt. Trong bối cảnh nhu cầu vay vốn để phục vụ tiêu dùng, kinh doanh ngày càng gia tăng, Xfinance ra đời nhằm rút ngắn quy trình vay vốn, loại bỏ nhiều thủ tục phức tạp truyền thống, tạo điều kiện thuận lợi để khách hàng tiếp cận nguồn vốn kịp thời.</p>
            <p>Với thế mạnh về công nghệ, Xfinance tích hợp hệ thống xét duyệt hồ sơ tự động, giúp người dùng dễ dàng đăng ký vay thế chấp các loại tài sản như ô tô, bất động sản, hoặc các tài sản có giá trị khác chỉ trong vài bước ngay trên điện thoại. Mọi quy trình từ đăng ký, thẩm định đến phê duyệt và giải ngân đều được số hóa, giảm thiểu thời gian chờ đợi mà vẫn đảm bảo tính chính xác và bảo mật cao.</p>
            <p>Một điểm nổi bật của Xfinance là chính sách lãi suất cạnh tranh, thời hạn vay linh hoạt, phù hợp với nhu cầu đa dạng của khách hàng. Đội ngũ tư vấn viên chuyên nghiệp của VNFITE luôn sẵn sàng đồng hành, hỗ trợ giải đáp thắc mắc và tư vấn phương án vay phù hợp nhất, giúp khách hàng chủ động hoạch định kế hoạch tài chính, giảm áp lực trả nợ.</p>
            <p>Không chỉ là một nền tảng vay thế chấp, Xfinance còn cam kết tuân thủ nghiêm ngặt các quy định pháp luật về tín dụng và bảo mật dữ liệu cá nhân. Điều này thể hiện trách nhiệm và uy tín mà VNFITE xây dựng suốt nhiều năm hoạt động trong lĩnh vực công nghệ tài chính, từ đó tạo niềm tin vững chắc cho khách hàng.</p>
            <p>Với tất cả những giá trị đó, Xfinance chính là người bạn đồng hành tin cậy, sẵn sàng hỗ trợ khách hàng vượt qua khó khăn tài chính, mở ra những cơ hội mới để phát triển và ổn định cuộc sống. Trong tương lai, VNFITE sẽ tiếp tục nâng cấp Xfinance để mang đến nhiều trải nghiệm tiện ích hơn, góp phần thúc đẩy sự phát triển của thị trường tài chính số tại Việt Nam.</p>
        </div>
        <div className="w-full flex items-center justify-end mt-2 sm:mt-4">
            <Button
            className="bg-transparent text-main-color text-sm sm:text-lg leading-7 hover:bg-transparent cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            >
             {"<<"} Rút gọn
            </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[1280px] w-full h-full flex flex-col sm:flex-row items-start justify-start gap-4 mx-auto p-4 sm:p-8">
      <div className="w-full sm:w-[70%]">
        <Image
          src="/images/about/about-info.png"
          alt="About Us"
          width={708}
          height={447}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full sm:w-[40%] flex flex-col  items-end justify-center gap-4">
        <p className="text-justify text-sm sm:text-xs md:text-sm lg:text-lg">
          X-Finance là ứng dụng cho vay thế chấp tiên phong được phát triển bởi
          Công ty Cổ phần Công nghệ Tài chính VNFITE, với sứ mệnh mang đến giải
          pháp tài chính nhanh chóng, an toàn và minh bạch cho người Việt. Trong
          bối cảnh nhu cầu vay vốn để phục vụ tiêu dùng, kinh doanh ngày càng
          gia tăng, X-Finance ra đời nhằm rút ngắn quy trình vay vốn, loại bỏ
          nhiều thủ tục phức tạp truyền thống, tạo điều kiện thuận lợi để khách
          hàng tiếp cận nguồn vốn kịp thời.
        </p>
        <Button
          className="bg-transparent text-main-color text-xs sm:text-sm md:text-[16px] lg:text-lg leading-7 hover:bg-transparent cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Xem thêm {">>"}
        </Button>
      </div>
    </div>
  );
}
