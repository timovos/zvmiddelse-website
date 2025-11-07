import HexagonButton from "@/app/components/hexagon-button";

export default function Home() {
  return (
    <>
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
            className="w-auto h-36 sm:h-42 lg:h-54 mb-1 drop-shadow-lg"
          />
          <p className="italic text-[color:#ffe43a] sm:text-s text-m lg:text-2xl drop-shadow-md">
            De zwemvereniging in Stiens &amp; omstreken
          </p>
        </div>
      </header>
      <div className="bg-black opacity-30 h-[60vh] min-w-screen mt-60 absolute z-10 diagonal-clip-top-bottom"></div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center row-start-2 w-full z-11">
          <HexagonButton
            text="Minipolo"
            subtext="Onder 8"
            className="sm:-translate-y-10"
            href="/minipolo"
          />
          <HexagonButton
            text="Dolfijntjes"
            subtext="Zwemles voor de jongsten"
            className="sm:translate-y-30"
            href="/dolfijntjes"
          />
          <HexagonButton
            text="Jeugd waterpolo"
            subtext="Voor jeugdleden"
            className="sm:-translate-y-10"
            href="/jeugd-waterpolo"
          />
          <HexagonButton
            text="Wedstrijd-zwemmen"
            subtext="Zwemwedstrijden"
            className="sm:translate-y-30"
            href="/wedstrijdzwemmen"
          />
          <HexagonButton
            text="Heren & dames waterpolo"
            subtext="Senioren teams"
            className="sm:-translate-y-10"
            href="/heren-dames-waterpolo"
          />
          <HexagonButton
            text="Triatlon / conditie / techniek"
            subtext="Voor alle niveaus"
            className="sm:translate-y-30"
            href="/triatlon-conditie-techniek"
          />
          <HexagonButton
            text="Clubhistorie"
            subtext="Geschiedenis van de club"
            className="sm:-translate-y-10"
            href="/clubhistorie"
          />
          <HexagonButton
            text="Sponsoring"
            subtext="Steun onze vereniging"
            className="sm:translate-y-30"
            href="/sponsoring"
          />
        </main>
      </div>
      <footer className="w-full diagonal-clip-top p-10 bg-black opacity-30">
        <div className="max-w-4xl mx-auto">
          <img
            src="/zvm-beeldlogo.svg"
            alt="ZV Middelsé beeldlogo"
            className="mx-auto -mb-4 h-32"
          />
          <nav className="flex gap-6 mt-8 justify-center">
            <a href="/about" className="hover:underline">
              Over
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacybeleid
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
