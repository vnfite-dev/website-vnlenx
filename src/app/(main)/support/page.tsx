import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Hỗ trợ",
  description:
    "Hỗ trợ khách hàng trong việc sử dụng sản phẩm vay có thế chấp - X-Finance",
};

const questionList = [
  {
    question: "Tại sao không tạo khoản vay được?",
    answer:
      "Có thể có một số lý do khiến bạn không thể tạo khoản vay, bao gồm việc không đủ điều kiện, thông tin không đầy đủ hoặc lỗi hệ thống. Vui lòng kiểm tra lại thông tin của bạn hoặc liên hệ với bộ phận hỗ trợ để được giúp đỡ.",
  },
  {
    question: "Làm thế nào để rút tiền từ tài khoản?",
    answer:
      "Để rút tiền từ tài khoản, bạn cần đăng nhập vào ứng dụng, chọn mục 'Rút tiền', sau đó nhập số tiền và xác nhận giao dịch. Tiền sẽ được chuyển vào tài khoản ngân hàng của bạn trong thời gian sớm nhất.",
  },
  {
    question: "Tôi có thể thay đổi thông tin cá nhân không?",
    answer:
      "Có, bạn có thể thay đổi thông tin cá nhân của mình trong phần 'Cài đặt' của ứng dụng. Nếu gặp khó khăn, vui lòng liên hệ với bộ phận hỗ trợ.",
  },
  {
    question: "Làm thế nào để liên hệ với bộ phận hỗ trợ?",
    answer:
      "Bạn có thể liên hệ với bộ phận hỗ trợ qua email, số điện thoại hoặc chat trực tuyến trên ứng dụng. Thông tin chi tiết có thể tìm thấy trong phần 'Hỗ trợ' của ứng dụng.",
  },
];

export default function SupportPage() {
  return (
    <HeaderImageLayout imageHead="/images/support/support-header.png">
      <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-4 mx-auto mb-10">
        {/* <p className="ml-4">Trang chủ {">"} Hỗ trợ</p> */}
        <div className="w-full max-w-[900px] mx-auto mt-4 px-4">
          <h1 className="font-bold text-[32px] leading-12 text-center">
            Xin chào, chúng tôi có thể giúp gì cho bạn?
          </h1>
          <p className="font-bold text-[20px] leading-7 mt-14">
            Câu hỏi thường gặp
          </p>
          {/* <div className="mt-6 space-y-4">
                {questionList.map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="font-normal text-lg">{item.question}</h2>
                        <p className="text-gray-700 mt-2">{item.answer}</p>
                    </div>
                ))}
            </div> */}
          <Accordion
            type="single"
            collapsible
            className="w-full mt-2"
            defaultValue="item-1"
          >
            {questionList.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 2}`}>
                <AccordionTrigger className="text-sm md:text-[16px] lg:text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-sm md:text-[16px] lg:text-lg">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </HeaderImageLayout>
  );
}
