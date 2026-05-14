import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Cai — AI Engineer",
  description: "AI Engineer specializing in RAG systems, LLM integration, and Python development. Seeking opportunities in Calgary, Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
      {/* Hide Next.js dev button */}
      <style>{`nextjs-portal { display: none; }`}</style>
    </html>
  );
}