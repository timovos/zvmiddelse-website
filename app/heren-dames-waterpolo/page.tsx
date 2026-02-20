import PageLayout from "@/app/components/page-layout";
import JoinButton from "@/app/components/join-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Heren & Dames Waterpolo" };

export default function HerenDamesWaterpolo() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">Heren & dames waterpolo</h2>
        <p className="mb-4 text-lg">
          Voor volwassenen die willen deelnemen aan waterpolo op recreatief of competitief niveau.
          <br/><br/>
          We hebben op dit moment twee heren teams en een damesteam die deelnemen aan de regionale competitie.
        </p>
      </section>

      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Trainingen</h2>
        <p className="mb-4">
          Op maandagavond trainen de dames en waterpolorecreanten van 20.00u tot 21.00u in Sint Annaparochie.
          <br/><br/>
          Op dinsdag wordt er op conditie getraind van 17.45u tot 18.45u in Stiens.
          <br/><br/>
          Op donderdagavond trainen de heren van 20.30u tot 21.45u in Stiens.
          <br/><br/>
          Op donderdagavond trainen de heren en dames van 20.30u tot 21.45u in Stiens.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Wedstrijden</h2>
        <p className="mb-4">
          De wedstrijden worden meestal op zaterdag gespeeld, soms op zondag. De exacte tijden en locaties variëren per wedstrijd.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Contributie</h2>
        <p className="mb-4">
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

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4">
          Proeftraining eerste 3x gratis, lid worden? <JoinButton/>
        </p>
      </section>
    </PageLayout>
  );
}
