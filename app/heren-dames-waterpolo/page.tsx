import PageLayout from "@/app/components/page-layout";
import LidWorden from "@/app/components/lid-worden";

export default function HerenDamesWaterpolo() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Heren & dames waterpolo</h2>
        <p className="text-lg text-gray-800 mb-4">
          Voor volwassenen die willen deelnemen aan waterpolo op recreatief of competitief niveau.
          <br/><br/>
          We hebben op dit moment twee heren teams en een damesteam die deelnemen aan de regionale competitie.
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Op maandagavond trainen de dames en waterpolorecreanten van 20.00u tot 21.00u in Sint Annaparochie.
          <br/><br/>
          Op dinsdag wordt er op conditie getraind van 17.45u tot 18.45u in Stiens.
          <br/><br/>
          Op donderdagavond trainen de heren van 20.30u tot 21.45u in Stiens.
          <br/><br/>
          Op donderdagavond trainen de heren en dames van 20.30u tot 21.45u in Stiens.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Wedstrijden</h2>
        <p className="mb-4 text-gray-800">
          De wedstrijden worden meestal op zaterdag gespeeld, soms op zondag. De exacte tijden en locaties variëren per wedstrijd.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Contributie</h2>
        <p className="mb-4 text-gray-800">
          De basiscontributie voor senior waterpololeden bedraagt €63,09 per kwartaal.
          <br/><br/>
          Voor leden die ook aan wedstrijden deelnemen, komt daar een extra bedrag van €11,50 per kwartaal bij.
          <br/><br/>
          Waterpololeden onder de 13 jaar betalen €49,65 per kwartaal.
          Vanaf 13 jaar tot 18 jaar is de contributie €55,16 per kwartaal.
          <br/><br/>
          Er is een toeslag voor leden die aan wedstrijden deelnemen. Voor senioren is dit €11,50 per kwartaal,
          voor jeugdleden (tot 18 jaar) is dit €6,25 per kwartaal. Onder de 13 jaar is het €3,-.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftraining eerste 3x gratis, lid worden? <LidWorden/>
        </p>
      </section>
    </PageLayout>
  );
}
