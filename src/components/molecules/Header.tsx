"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const tab = [
  {
    name: "Giới thiệu",
    href: "/about",
  },
  {
    name: "Dịch vụ",
    href: "/services",
  },
  {
    name: "Tin tức",
    href: "/news",
  },
  {
    name: "Hỗ trợ",
    href: "/support",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const openRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsFixed(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 48) {
          if (!isFixed) {
            setIsFixed(true);
          }
        } else {
          if (window.innerWidth > 768) {
            setIsFixed(false);
          }
        }
      }
    };

    if (window.innerWidth < 768) {
      setIsFixed(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (toggleRef.current?.contains(target)) return;

      if (openRef.current && !openRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    if (isOpen)
      document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header suppressHydrationWarning={false}>
      {isFixed && <div className="h-[48px] md:h-[72px] w-full"></div>}
      <div
        className={cn(
          "relative w-full transition-all duration-400 z-50",
          isFixed
            ? "fixed top-0 left-0 bg-white shadow-md"
            : "bg-transparent"
        )}
        ref={headerRef}
      >
        {/* desktop header */}
        <div className="w-full hidden md:flex items-center justify-between py-2 px-6 text-black scrollbar-ignore mx-auto">
          <Link href={"/"}>
            <Image
              src="/logoText.png"
              alt="logo"
              width={160}
              height={48}
            />
          </Link>
          <div className="max-w-[550px] w-[50%] lg:w-full flex items-center justify-between">
            {tab.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm lg:text-[16px] font-bold hover:text-red-500 transition-colors p-3 lg:p-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button
            className={cn(
              "h-12 rounded-3xl px-4 py-3 lg:px-6 lg:py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-sm lg:text-md font-bold leading-none cursor-pointer",
              "bg-main-color hover:bg-red-700"
            )}
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="leading-none">Tải ứng dụng</span>
          </Button>
        </div>

        {/* mobile header */}
        <div className="flex md:hidden items-center justify-between py-3 px-5 text-black scrollbar-ignore mx-auto relative">
          <Link href={"/"}>
            <Image
              src="/logoText.png"
              alt="logo"
              width={80}
              height={24}
            />
          </Link>
          <div className="cursor-pointer relative" onClick={() => setIsOpen(!isOpen)} ref={toggleRef}>
            <span className={cn("absolute right-0 block h-0.5 w-5 bg-main-color rounded-full duration-300",
              isOpen ? "rotate-45 top-0" : " -top-1")}></span>
            <span className={cn("absolute top-0 right-0 h-0.5 w-5 bg-main-color rounded-full",
              isOpen ? "hidden" : "block"
            )}></span>
            <span className={cn("absolute top-1 right-0 block h-0.5 w-5 bg-main-color rounded-full duration-300",
              isOpen ? "-rotate-45 top-0" : "top-1"
            )}></span>
          </div>
          <div className={cn("absolute top-12 right-0 w-48 bg-white shadow-md px-4", isOpen ? "block" : "hidden")} ref={openRef}>
            <div className="flex flex-col">
              {tab.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm lg:text-[16px] font-bold hover:text-red-500 transition-colors p-3 lg:p-4"
                >
                  {item.name}
                </Link>
              ))}
              <Button className={cn(
                "h-10 w-full rounded-lg text-center text-white flex flex-row items-center justify-center gap-2 text-sm font-bold leading-none cursor-pointer mx-auto mt-2 mb-4",
                "bg-main-color hover:bg-red-700"
              )} onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
                setIsOpen(false);
              }}>
                <span className="leading-none">Tải ứng dụng</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
