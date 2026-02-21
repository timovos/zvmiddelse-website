import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import React from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZV Middelsé",
    template: "ZV Middelsé - %s",
  },
  description: "De zwemvereniging in Stiens & omstreken",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        rel: "icon",
        type: "image/x-icon",
      },
    ],
  },
  other: {
    "color-scheme": "light dark",
    "supported-color-schemes": "light",
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
        className={`font-[var(--font-raleway)] ${raleway.variable} bg-white antialiased`}
      >
        {children}
        {process.env.UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_URL || "https://cloud.umami.is/script.js"}
            data-website-id={process.env.UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
