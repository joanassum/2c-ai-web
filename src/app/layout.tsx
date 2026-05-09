import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2cAI — AI 賦能美好生活",
  description:
    "以人工智能技術驅動創新，構建共贏生態。致力於開發AI產品，助力國家十四五規劃科技自立自強。",
  keywords: ["AI", "人工智能", "2cAI", "香港科技", "AI產品"],
  openGraph: {
    title: "2cAI — AI 賦能美好生活",
    description: "以人工智能技術驅動創新，構建共贏生態",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
