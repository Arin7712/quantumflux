import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import { Anonymous_Pro, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const font = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Quantumflux",
  description: "Innovative Solutions For Dynamic Industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <main>

        {children}
        </main>
<Toaster className="bg-[#151515]"/>
      </body>
    </html>
  );
}
