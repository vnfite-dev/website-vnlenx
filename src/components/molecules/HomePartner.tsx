import Image from "next/image";

export default function HomePartner() {
  return (
    <div className="w-full">
      <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-6 md:leading-14 text-center mt-12">
        Một số đối tác của <span className="text-main-color">X-Finance</span>
      </p>
      <div className="w-full flex flex-wrap items-center justify-center mt-4 sm:mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-40 h-20 md:w-56 md:h-28 p-2 rounded-lg flex items-center justify-center"
          >
            <Image
              src={`/images/home/partner${index + 1}.png`}
              alt={`Partner ${index + 1}`}
              width={220}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
