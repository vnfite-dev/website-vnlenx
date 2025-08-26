'use client';
import Image from 'next/image';
import './XFinaceNews.css';
import { useState, useEffect } from 'react';

const youtubeLinkList = [
    {
        link: "t73Es9jjd2w",
        title: "Có nên đầu tư vào P2P Lending? Khách hàng nói gì về mô hình cho vay ngang hàng?",
        createdAt: "13/06/2025",
    },
    {
        link: "rMHIYr0ZAZs",
        title: "MÔ HÌNH P2P LENDING LÀ GÌ?",
        createdAt: "22/05/2025",
    },
    {
        link: "UimIynuenP0",
        title: "Lễ ký kết chiến lược toàn diện giữa VNFITE và CTCP XNK Nông sản thực phẩm An Giang",
        createdAt: "08/02/2025",
    },
    {
        link: "MrobLW0HA-I",
        title: "Bạn sở hữu xe nhưng cần một giải pháp tài chính tiện lợi?",
        createdAt: "07/02/2025",
    },
];

const VideoItem = ({ item }: { item: { link: string; title: string; createdAt: string } }) => {
    const truncateText = (text: string, length: number) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <div className='item'>
            <iframe
                className="w-full aspect-[1/2] rounded-xl"
                src={"https://www.youtube.com/embed/" + item.link}
                title="YouTube VNFITE"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ cursor: 'pointer' }}
            />
            <div className='view-overlay'>
                <div className='txt-header-overlay'>
                    {truncateText(item.title, 60)}
                </div>
                <div className='view-text-overlay'>
                    <Image
                        src={'/images/timeIcon.png'}
                        alt="Image"
                        width={24}
                        height={24}
                        className='time-icon'
                    />
                    <div className="text-overlay">{item.createdAt}</div>
                </div>
            </div>
        </div>
    );
};

export default function XFinaceNews() {
    const [visibleCount, setVisibleCount] = useState(4);

    // useEffect(() => {
    //     const handleResize = () => {
    //         const width = window.innerWidth;
    //         if (width >= 1024) {
    //             setVisibleCount(4);
    //         } else if (width >= 768) {
    //             setVisibleCount(3);
    //         } else if (width >= 480) {
    //             setVisibleCount(2);
    //         } else {
    //             setVisibleCount(1);
    //         }
    //     };

    //     handleResize();
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (
        <header suppressHydrationWarning={false}>
            <div className='view-container'>
                <div className="txt-header"><span style={{ color: '#FF4142' }}>X-Finance</span> và khách hàng</div>
                <div className='scroll-container'>
                    {youtubeLinkList.slice(0, visibleCount).map((item, index) => (
                        <VideoItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </header>
    );
}
