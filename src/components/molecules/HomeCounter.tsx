"use client";

import Counter from "@/components/molecules/Counter";

export default function HomeCounter() {
    return (
        <div className="w-full">
            <div className="w-full max-w-[600px] mx-auto flex flex-row items-center justify-between mt-10 mb-6 sm:mb-14 md:mb-20 px-4">
                <Counter target={10000} duration={1500} title="Lượt tải ứng dụng" />
                <Counter target={7000} duration={1500} title="Khoản vay đang có" />
                <Counter target={4} duration={1500} title="Đánh giá ứng dụng" />
            </div>
        </div>
    )
}