import RectangleButton from "@/app/components/rectangle-button";
import PageHeader from "@/app/components/page-header";
import PageFooter from "@/app/components/page-footer";

export default function Home() {
  return (
    <>
      <PageHeader/>

      <div className="diagonal-clip-top-bottom absolute z-1 mt-60 h-[60vh] min-w-screen bg-black/30"></div>
      <main className="relative z-11">
        <div className="mt-4 mb-6 w-full basis-full pr-10 pl-10">
          <p className="mt-10 mr-auto mb-20 ml-auto max-w-180 text-lg text-white">
            Welkom op de officiële website van ZV Middelsé. Op deze site kunt u informatie vinden over de afdeling wedstrijdzwemmen van ZV Middelsé, maar ook wat er ondernomen wordt op gebied van waterpolo.
            <br/><br/>
            Binnen onze club vinden we niet alleen prestatie belangrijk, maar ook gezelligheid en plezier. Wij geloven dat als onze leden plezier hebben in de zwemsport, de gezelligheid en prestaties vanzelf volgen.
          </p>
        </div>
        <div className="row-start-2 mr-auto mb-16 ml-auto flex max-w-200 flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
          <RectangleButton
            id="inhoud"
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
            text="Triatlon - conditie - techniek"
            subtext="Voor alle niveaus"
            href="/triatlon-conditie-techniek"
          />
          <RectangleButton
            text="Webshop clubkleding"
            subtext="Bestel clubkleding"
            href="/webshop-clubkleding"
          />
          <RectangleButton
            text="Contact en info"
            subtext="Privacy en vertrouwenspersoon"
            href="/contact-en-info"
          />
          <RectangleButton
            text="Sponsoring"
            subtext="Steun onze vereniging"
            href="/sponsoring"
          />
        </div>
      </main>
      <PageFooter />
    </>
  );
}
