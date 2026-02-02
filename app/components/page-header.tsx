export default function PageHeader() {
  return (
    <header className="relative h-96 w-full overflow-hidden">
      <img
        src="header.jpg"
        alt="Header"
        className="diagonal-clip-bottom h-full w-full object-cover"
      />
      <div className="bg-background diagonal-clip-top-bottom pointer-events-none absolute inset-0 z-10 mt-20 opacity-60" />
      <div className="absolute inset-0 z-20 mt-4 flex flex-col items-center justify-center px-4 text-center">
        <img
          src="/zvm-logo.svg"
          alt="ZV Middelsé logo"
          className="mb-8 h-36 w-auto drop-shadow-lg sm:h-42 lg:h-54"
        />
        <p className="sm:text-s text-m font-bold text-[color:white] uppercase drop-shadow-md lg:text-2xl">
          De zwemvereniging in Stiens &amp; omstreken
        </p>
      </div>
    </header>
  );
}
