import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import { originalContent as content } from "@/content/original-content";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    type: "website",
    url: "https://www.wovvtech.com/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: content.navigation.brand,
  url: "https://www.wovvtech.com/",
  email: content.cta.email,
  description: content.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-pulse focus:px-5 focus:py-3 focus:font-mono focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
