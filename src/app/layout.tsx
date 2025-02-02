import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  style: ["normal", "italic"], 
  display: "swap", 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnipSnap",
  description: "A smart clipboard for all your links, specially for your ai chats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
