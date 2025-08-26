import Image from "next/image";

type HeaderImageLayoutProps = {
  children: React.ReactNode;
  imageHead: string;
};

export default function HeaderImageLayout({ children, imageHead }: HeaderImageLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-4">
      <Image
        src={imageHead}
        alt="Header Image"
        className="w-full h-auto object-cover"
        width={1280}
        height={550}
      />
      {children}
    </div>
  );
}