import Link from "next/link";
import React from "react";

interface RectangleButtonProps {
  text: string;
  subtext?: string;
  href: string;
  className?: string;
}

const RectangleButton: React.FC<RectangleButtonProps> = ({ text, subtext, href, className }) => (
  <a
    className={`flex flex-col items-center justify-center px-8 py-6 rounded-2xl border-8 border-white-400 shadow-lg hover:bg-yellow-50 transition-colors duration-200 text-center w-80 h-40 bg-center bg-cover relative overflow-hidden ${className}`}
    style={{ backgroundImage: "url('/header.jpg')", textDecoration: "none" }}
    href={href}
  >
    <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    <span className="font-bold text-xl text-white mb-1 relative z-10">{text}</span>
    {subtext && <span className="text-sm text-white relative z-10">{subtext}</span>}
  </a>
);

export default RectangleButton;
