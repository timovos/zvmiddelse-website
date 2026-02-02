import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="relative w-full h-96 overflow-hidden">
      <img
        src="header.jpg"
        alt="Header"
        className="w-full h-full object-cover diagonal-clip-bottom"
      />
      <div className="absolute inset-0 bg-background opacity-60 pointer-events-none z-10 diagonal-clip-top-bottom mt-20" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20 mt-4">
        <img
          src="/zvm-logo.svg"
          alt="ZV Middelsé logo"
          className="w-auto h-36 sm:h-42 lg:h-54 mb-8 drop-shadow-lg"
        />
        <p className="text-[color:white] uppercase font-bold sm:text-s text-m lg:text-2xl drop-shadow-md">
          De zwemvereniging in Stiens &amp; omstreken
        </p>
      </div>
    </header>
  );
}
