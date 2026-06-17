import Image from "next/image";

export default function PageHeader() {
  return (
    <header className="relative h-96 w-full overflow-hidden">
      <Image
        src="/header.webp"
        alt="Zwemmen in Stiens bij ZV Middelsé"
        fill
        priority
        fetchPriority="high"
        loading="eager"
        sizes="100vw"
        quality={75}
        className="diagonal-clip-bottom object-cover"
      />
      <div className="bg-background diagonal-clip-top-bottom pointer-events-none absolute inset-0 z-10 mt-20 opacity-60" />
      <div className="absolute inset-0 z-20 mt-4 flex flex-col items-center justify-center px-4 text-center">
        <Image
          src="/zvm-logo.svg"
          alt="ZV Middelsé logo"
          width={200}
          height={144}
          className="mb-8 h-36 w-auto drop-shadow-lg sm:h-42 lg:h-54"
        />
        <h1 className="sm:text-s text-m font-bold text-white uppercase drop-shadow-md lg:text-2xl">
          De zwemvereniging in Stiens &amp; omstreken
        </h1>
      </div>
    </header>
  );
}
