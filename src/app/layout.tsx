import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cai You (David) | AI Product Manager",
  description:
    "AI Product Manager and former software engineer specializing in enterprise AI, knowledge management, generative AI, and LLM-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
