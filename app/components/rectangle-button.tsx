import React from "react";

interface RectangleButtonProps {
  text: string;
  subtext?: string;
  href: string;
  className?: string;
}

const RectangleButton: React.FC<RectangleButtonProps> = ({ text, subtext, href, className }) => (
  <a
    className={`border-white-400 relative flex h-40 w-80 flex-col items-center justify-center overflow-hidden rounded-2xl border-8 bg-cover bg-center px-8 py-6 text-center shadow-lg transition-colors duration-200 hover:bg-yellow-50 ${className}`}
    style={{ backgroundImage: "url('/header.jpg')", textDecoration: "none" }}
    href={href}
  >
    <div className="pointer-events-none absolute inset-0 bg-black/60" />
    <span className="relative z-10 mb-1 text-xl font-bold text-white">{text}</span>
    {subtext && <span className="relative z-10 text-sm text-white">{subtext}</span>}
  </a>
);

export default RectangleButton;

