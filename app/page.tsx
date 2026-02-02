import RectangleButton from "@/app/components/rectangle-button";
import PageHeader from "@/app/components/page-header";

export default function Home() {
  return (
    <>
      <PageHeader/>
      <div className="bg-black opacity-30 h-[60vh] min-w-screen mt-60 absolute z-10 diagonal-clip-top-bottom"></div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20
      font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center row-start-2 max-w-2/3 z-11">
          <div className="w-full basis-full pl-10 pr-10 mt-4 mb-6">
            <p>
              Welkom op de officiële website van ZV Middelsé. Op deze site kunt u informatie vinden over de afdeling wedstrijdzwemmen van ZV Middelsé, maar ook wat er ondernomen wordt op gebied van waterpolo.
              <br/><br/>
              Binnen onze club vinden we niet alleen prestatie belangrijk, maar ook gezelligheid en plezier. Wij geloven dat als onze leden plezier hebben in de zwemsport, de gezelligheid en prestaties vanzelf volgen.
            </p>
          </div>
          <RectangleButton
            text="Dolfijntjes"
            subtext="Direct na het B-diploma"
            href="/dolfijntjes"
          />
          <RectangleButton
            text="Minipolo"
            subtext="Waterpolo onder 8"
            href="/minipolo"
          />
          <RectangleButton
            text="Jeugd waterpolo"
            subtext="Voor jeugdleden"
            href="/jeugd-waterpolo"
          />
          <RectangleButton
            text="Wedstrijdzwemmen"
            subtext="Zwemwedstrijden"
            href="/wedstrijdzwemmen"
          />
          <RectangleButton
            text="Heren & dames waterpolo"
            subtext="Senioren teams"
            href="/heren-dames-waterpolo"
          />
          <RectangleButton
            text="Triatlon / conditie / techniek"
            subtext="Voor alle niveaus"
            href="/triatlon-conditie-techniek"
          />
          <RectangleButton
            text="Contact en info"
            subtext="En privacy"
            href="/contact-en-info"
          />
          <RectangleButton
            text="Sponsoring"
            subtext="Steun onze vereniging"
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
