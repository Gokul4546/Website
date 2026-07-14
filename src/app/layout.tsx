import type { Metadata } from "next";
import { brand } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    type: "website",
    url: "https://www.wovvtech.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
