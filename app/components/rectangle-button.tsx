import React from "react";
import Link from "next/link";

interface RectangleButtonProps {
  text: string;
  subtext?: string;
  href: string;
  className?: string;
}

const RectangleButton: React.FC<RectangleButtonProps> = ({ text, subtext, href, className }) => (
  <Link
    className={[
      "hover-wiggle group relative flex h-40 w-80 flex-col items-center justify-center",
      "overflow-hidden rounded-2xl border-8 border-white-400 bg-cover bg-center",
      "px-8 py-6 text-center shadow-lg transition-all duration-300 ease-out",
      "hover:scale-110 hover:border-yellow-300 hover:shadow-2xl",
      className,
    ].join(" ")}
    style={{ backgroundImage: "url('/header.jpg')", textDecoration: "none" }}
    href={`${href}#inhoud`}
  >
    <div className="pointer-events-none absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/40" />
    <span className="relative z-10 mb-1 text-xl font-bold text-white transition-transform duration-300">{text}</span>
    {subtext && <span className="relative z-10 text-sm text-white opacity-80 transition-all duration-300 group-hover:opacity-100">{subtext}</span>}
  </Link>
);

export default RectangleButton;
