"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const youtubeLinkList = [
  {
    link: "t73Es9jjd2w",
    title:
      "Có nên đầu tư vào P2P Lending? Khách hàng nói gì về mô hình cho vay ngang hàng?",
    createdAt: "13/06/2025",
  },
  {
    link: "rMHIYr0ZAZs",
    title: "MÔ HÌNH P2P LENDING LÀ GÌ?",
    createdAt: "22/05/2025",
  },
  {
    link: "UimIynuenP0",
    title:
      "Lễ ký kết chiến lược toàn diện giữa VNFITE và CTCP XNK Nông sản thực phẩm An Giang",
    createdAt: "08/02/2025",
  },
  {
    link: "MrobLW0HA-I",
    title: "Bạn sở hữu xe nhưng cần một giải pháp tài chính tiện lợi?",
    createdAt: "07/02/2025",
  },
];

export default function YoutubeShort() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(4);
      } else if (width >= 768) {
        setVisibleCount(3);
      } else if (width >= 480) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <>
      <div className="flex justify-end">
        <Button
          onClick={() =>
            window.open(
              "https://www.youtube.com/@vnfitevietnam9932/shorts",
              "_blank"
            )
          }
          className="py-2 mx-2 sm:mx-5 text-gradient rounded-lg mt-4 sm:mt-8 lg:mt-12 text-main-color bg-transparent hover:bg-transparent cursor-pointer text-sm sm:text-lg"
        >
          Xem thêm video {">"}
        </Button>
      </div>
      <div className="flex items-start justify-center flex-row w-full px-6 gap-6">
        {youtubeLinkList.slice(0, visibleCount).map((item, index) => (
          <div
            className="w-[80%] sm:w-[46%] lg:w-[21%] mx-auto relative"
            key={index}
          >
            <iframe
              className="w-full aspect-[1/2] rounded-xl"
              src={"https://www.youtube.com/embed/" + item.link}
              title="YouTube VNFITE"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="absolute bottom-0 left-0 right-0 text-white p-4 rounded-b-xl bg-gradient-to-t from-[#FF4848] to-transparent pointer-events-none">
              <p className="font-semibold">{truncateText(item.title, 60)}</p>
              <div className="flex items-center gap-3 text-sm mt-2">
                <Clock width={20} height={20} />
                <p>{item.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
