import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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
  description: "A smart clipboard for all your links, especially for your AI chats.",
  openGraph: {
    title: "SnipSnap-Your Smart Clipboard for AI Chats & Links",
    description: "Save, organize, and access your AI conversations and important links effortlessly.",
    url: "https://snipsnap-extension.vercel.app/", 
    siteName: "SnipSnap",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "SnipSnap-Smart Clipboard for AI Chats",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipSnap-Your Smart Clipboard for AI Chats & Links",
    description: "Save, organize, and access your AI conversations and important links effortlessly.",
    images: ["/og-image.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
