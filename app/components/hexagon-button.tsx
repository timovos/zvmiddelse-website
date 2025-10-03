import React from "react";

interface HexagonButtonProps {
  size?: number;
  className?: string;
  text: string;
  subtext?: string;
  href?: string;
}

export default function HexagonButton({
  size = 300,
  className = "",
  text,
  subtext,
  href,
}: HexagonButtonProps) {
  const width = size;
  const height = size / 0.966;

  const ButtonContent = (
    <button
      className="hexagon hexagon-button hexagon-border overflow-hidden flex flex-col items-center justify-center bg-[#f0f8ff] relative cursor-pointer"
      style={{ width: "92%", height: "92%" }}
      type="button"
      tabIndex={-1}
    >
      <img
        src="header.jpg"
        alt="Header"
        className="w-full h-full absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-0" />
      <span
        className="relative z-10 text-white font-extrabold text-3xl drop-shadow-lg tracking-wide uppercase px-4 py-2"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {text}
      </span>
      {subtext && (
        <span
          className="relative z-10 text-white text-lg opacity-80 drop-shadow-sm"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          {subtext}
        </span>
      )}
    </button>
  );

  return (
    <div
      className={`hexagon bg-[#ffe43a] flex items-center justify-center hexagon-button transition-transform duration-200 shadow-lg ${className} cursor-pointer`}
      style={{ width, height }}
    >
      {href ? (
        <a
          href={href}
          className="w-full h-full flex items-center justify-center"
          tabIndex={0}
        >
          {ButtonContent}
        </a>
      ) : (
        ButtonContent
      )}
    </div>
  );
}
