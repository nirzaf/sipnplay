import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sip & Play - Commercial Kitchens",
  description:
    "Transforming culinary dreams into reality with world-class commercial kitchen solutions. Expert design, premium equipment, and professional installation services.",
  keywords: [
    "commercial kitchens",
    "kitchen design",
    "restaurant equipment",
    "kitchen installation",
    "commercial kitchen solutions",
  ],
  authors: [{ name: "Sip & Play" }],
  openGraph: {
    title: "Sip & Play - Commercial Kitchens",
    description:
      "World-class commercial kitchen solutions for cafes, restaurants, and hotels.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
