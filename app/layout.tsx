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
  title: "Sip & Play - Commercial Kitchenware",
  description:
    "Your trusted partner for premium commercial kitchenware and complete kitchen solutions. Browse thousands of products for restaurants, hotels, and catering businesses.",
  keywords: [
    "commercial kitchenware",
    "restaurant equipment",
    "kitchen supplies",
    "commercial cookware",
    "bulk kitchenware",
  ],
  authors: [{ name: "Sip & Play" }],
  icons: {
    icon: "/sipnplay-logo.png",
    apple: "/sipnplay-logo.png",
  },
  openGraph: {
    title: "Sip & Play - Commercial Kitchenware",
    description:
      "Premium commercial kitchenware supplier for restaurants, hotels, cafes, and catering businesses across Sri Lanka.",
    type: "website",
    images: [
      {
        url: "/sipnplay-logo.png",
        width: 1200,
        height: 630,
        alt: "Sip & Play Commercial Kitchenware",
      },
    ],
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
