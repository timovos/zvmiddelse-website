import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import UmamiProvider from "next-umami";
import "./globals.css";
import React from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zvmiddelse.nl"),
  title: {
    default: "Zwemmen in Stiens | ZV Middelsé",
    template: "%s | ZV Middelsé",
  },
  description:
    "ZV Middelsé is dé zwemvereniging in Stiens. Wedstrijdzwemmen, waterpolo en zwemmen voor jong en oud in Stiens en omstreken.",
  keywords: [
    "zwemmen in Stiens",
    "zwemvereniging Stiens",
    "zwemclub Stiens",
    "wedstrijdzwemmen Stiens",
    "waterpolo Stiens",
    "ZV Middelsé",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://zvmiddelse.nl",
    siteName: "ZV Middelsé",
    title: "Zwemmen in Stiens | ZV Middelsé",
    description:
      "ZV Middelsé is dé zwemvereniging in Stiens. Wedstrijdzwemmen, waterpolo en zwemmen voor jong en oud in Stiens en omstreken.",
    images: [
      {
        url: "/header.webp",
        width: 1200,
        height: 630,
        alt: "Zwemmen in Stiens bij ZV Middelsé",
      },
    ],
  },
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
    <html lang="nl">
      <head>
        <link
          rel="preload"
          href="/header.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`font-[var(--font-raleway)] ${raleway.variable} bg-white antialiased`}
      >
        <UmamiProvider
          websiteId={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ""}
          src={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-exclude-hash="true"
        >
          {children}
        </UmamiProvider>
      </body>
    </html>
  );
}
