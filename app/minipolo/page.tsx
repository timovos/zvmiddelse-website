export default function Minipolo() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="relative w-full h-96 overflow-hidden">
        <img
          src="header.jpg"
          alt="Header"
          className="w-full h-full object-cover diagonal-clip-bottom"
        />
        <div className="absolute inset-0 bg-background opacity-60 pointer-events-none z-10 diagonal-clip-top-bottom" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <h1
            className="text-white text-8xl uppercase font-extrabold drop-shadow-lg"
            style={{ fontFamily: "Candara-Bold, Candara, Arial, sans-serif" }}
          >
            ZV Middelsé
          </h1>
          <p className="italic text-[color:#ffe43a] text-xl mt-2 drop-shadow-md">
            De zwemvereniging in Stiens &amp; omstreken
          </p>
        </div>
      </header>
      <div className="bg-black opacity-30 h-60 min-w-screen mt-100 absolute diagonal-clip-top-bottom"></div>

      <main className="flex-1 flex flex-col gap-8 justify-center items-center w-full z-11 px-6 max-w-3xl mx-auto min-h-64">
        <section className="bg-white/80 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Minipolo (Onder 8)</h2>
          <p className="text-lg text-gray-800 mb-4">
            Minipolo is a fun and accessible introduction to water polo for children under 8 years old.
            The focus is on teamwork, water skills, and having fun in a safe environment.
          </p>
          <p className="text-gray-700">
            Example: Every Saturday morning, our youngest members gather for playful training sessions.
            Through games and simple exercises, they learn the basics of water polo while building confidence in the water.
          </p>
        </section>
      </main>
      <footer className="w-full h-42 diagonal-clip-top p-10 bg-black opacity-30">
        <div className="max-w-4xl mx-auto">
          <nav className="flex gap-6 mt-8">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
