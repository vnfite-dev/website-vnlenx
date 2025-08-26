import Image from "next/image";
import { useEffect, useState } from "react";

type CounterProps = {
  target: number;
  duration?: number;
  title: string;
};

export default function Counter({
  target = 100,
  duration = 1500,
  title,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * target);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div className="flex flex-col items-center justify-center ">
      {target === 4 ? (
        <div className="flex flex-row items-center gap-1">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">{count}.5</p>
          <Image src="/icons/home/star.svg" alt="star" width={24} height={24} />
        </div>
      ) : (
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">{count}+</p>
      )}
      <p className="text-md sm:text-lg font-light text-gray-600 text-center mt-4">{title}</p>
    </div>
  );
}
