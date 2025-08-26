"use client";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/privacy.html")
      .then((res) => res.text())
      .then(setHtmlContent)
      .catch(() => setHtmlContent(null));
  }, []);

  if (!mounted) return null;

  return (
    <main
      className="w-full h-auto flex flex-col justify-start px-4 lg:px-8 xl:px-16 2xl:px-24 py-8 lg:py-12 xl:py-16 2xl:py-20"
      dangerouslySetInnerHTML={{
        __html: htmlContent ?? "Không tìm thấy nội dung cho chính sách này",
      }}
    />
  );
}
