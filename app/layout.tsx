import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import { Anonymous_Pro, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <title>Quantumflux Technology</title>
        <meta name="description" content="Transform ideas into innovative software and wesbites that drive success." />
        <meta name="keywords" content="ERP Software, CRM Software, Desktop App, Android App, Websites, E-commerce Websites" />
        <meta property="og:title" content="Quantumflux Technology" />
        <meta property="og:description" content="Transform ideas into innovative software and wesbites that drive success." />
        <meta property="og:image" content="https://quantumflux-seven.vercel.app/bg.webp" />
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
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
