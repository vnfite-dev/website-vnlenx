'use client';
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter hook

export default function NotificationPages() {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back(); // Native JavaScript to go back in history
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="text-center p-6 w-full lg:w-156 sm:w-96 ">
        <div className="text-green-500 text-4xl mb-6">
          <Image
            src={'/images/services/success.png'}
            alt="Image"
            className="mx-auto"
            width={64}
            height={64}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Bạn đã đăng ký thành công!</h2>
        <div className="flex justify-center mb-8 mt-8">
          <hr className="w-70 border-gray-300" />
        </div>
        <p className="text-gray-600 mb-6">Vui lòng nghe máy khi có nhân viên liên lạc tư vấn trong vòng 15 phút tới.</p>
        
        {/* Center the button */}
        <div className="flex justify-center">
          <button
            onClick={handleBack} // Trigger handleBack function on button click
            className="flex flex-row items-center bg-red-700 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200 cursor-pointer font-semibold"
          >
            <Image
              src={'/images/services/arrow.png'}
              alt="Image"
              className="mr-2"
              width={20}
              height={20}
            />
            Trở về
          </button>
        </div>
      </div>
    </div>
  );
}
