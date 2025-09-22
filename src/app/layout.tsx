import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeatWave Documentation - Professional Beat Store & Licensing Platform",
  description: "Complete documentation for BeatWave - the professional beat store and licensing platform for Shopify. Learn how to upload beats, manage licenses, and sell your music.",
  keywords: ["BeatWave", "beat store", "music licensing", "Shopify app", "music producer", "beat sales"],
  authors: [{ name: "BeatWave Team" }],
  creator: "BeatWave",
  publisher: "BeatWave",
  openGraph: {
    title: "BeatWave Documentation",
    description: "Professional Beat Store & Licensing Platform for Shopify",
    url: "https://docs.beatwave.app",
    siteName: "BeatWave Documentation",
    type: "website",
    images: [
      {
        url: "/beatwave_logo.png",
        width: 800,
        height: 600,
        alt: "BeatWave Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeatWave Documentation",
    description: "Professional Beat Store & Licensing Platform for Shopify",
    images: ["/beatwave_logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
