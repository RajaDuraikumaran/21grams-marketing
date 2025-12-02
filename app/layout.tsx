import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "21Grams - AI Portrait Studio",
  description: "Transform your portraits with cinematic AI artistry. Experience the future of portrait photography.",
  keywords: ["AI Portrait", "Portrait Studio", "AI Photography", "21Grams"],
  authors: [{ name: "21Grams" }],
  openGraph: {
    title: "21Grams - AI Portrait Studio",
    description: "Transform your portraits with cinematic AI artistry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-subtext">
        <SmoothScrollProvider>
          {/* Film Grain Noise Overlay */}
          <div className="noise-overlay" aria-hidden="true" />

          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

