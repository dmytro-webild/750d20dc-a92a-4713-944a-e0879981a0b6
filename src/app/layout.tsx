import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sammy\'s Downtown Deli — Annapolis, MD',
  description: 'Real deli, real good. Hand-sliced meats, fresh-baked bread, and artisan sandwiches in downtown Annapolis.',
  openGraph: {
    "title": "Sammy's Downtown Deli",
    "siteName": "Sammy's Downtown Deli",
    "type": "website"
  },
};

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
