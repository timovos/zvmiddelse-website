import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZV Middelsé",
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
        className={`font-[var(--font-raleway)] ${raleway.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
