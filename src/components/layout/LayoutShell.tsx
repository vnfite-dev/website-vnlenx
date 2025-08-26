"use client";

import { usePathname } from "next/navigation";
import MessengerChatButton from "@/components/plugin/MessengerWidget";
import ZaloChatWidget from "@/components/plugin/ZaloChatWidget";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed bottom-0 right-0 z-50">
        <MessengerChatButton />
        <ZaloChatWidget />
      </div>

      <Header />
      {children}
      <Footer />
    </>
  );
}
