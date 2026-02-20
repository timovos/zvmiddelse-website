import PageLayout from "@/app/components/page-layout";
import ContactFormButton from "@/app/components/contact-form-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sponsoring" };

export default function Sponsoring() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2>Sponsoring</h2>
        <p className="mb-4 text-lg text-gray-800">
          De Club van 50 bestaat uit oud-leden, ouders, bekenden en bedrijven die
          Zwem- en waterpolo vereniging Middelsé uit Stiens een warm hart
          toedragen. Om de vereniging financieel te ondersteunen wordt er
          jaarlijks een bedrag van 50 euro aan de club gedoneerd. Op deze manier
          bestaat er de mogelijkheid om iets extra’s voor de vereniging te
          betekenen.
        </p>
      </section>

      <section className="rounded-lg bg-white/80 p-8 text-gray-800 shadow-lg">
        <h2>Wat krijgt u?</h2>
        <p>Wat krijgt u terug als u lid wordt van de Club van 50?</p>
        <ul className="mt-4 mb-6 list-disc pl-6">
          <li className="leading-relaxed">
            Uiteraard eeuwige roem en dankbaarheid vanuit de vereniging.
          </li>
          <li className="leading-relaxed">
            Vermelding namen leden van de Club van 50 in alle nieuwsbrieven per
            mail van de vereniging.
          </li>
          <li className="leading-relaxed">
            Vermelding namen leden van de Club van 50 in het plonsboekje begin
            waterpoloseizoen
          </li>
          <li className="leading-relaxed">
            De namen van de leden van de Club van 50 worden in het zwembad van
            Stiens vermeld op een speciaal hiervoor vervaardigd bord/doek.
          </li>
          <li className="leading-relaxed">
            De leden van de Club van 50 krijgen een eervolle vermelding op onze
            website.
          </li>
          <li className="leading-relaxed">
            Voor leden van de Club van 50 wordt aan het einde van het seizoen
            een gratis borrel avond georganiseerd.
          </li>
          <li className="leading-relaxed">
            Vermelding naam leden programmaboekje zwemwedstrijden in Stiens
          </li>
        </ul>
        <p>
          Als u de Zwem-en waterpolovereniging Middelsé met uw lidmaatschap van
          de Club van 50 wilt verblijden, kunt u het machtigingsformulier
          invullen en ondertekenen. U kunt het formulier hier downloaden.
        </p>
        <p className="">
          Voor vragen en lid worden kunt u contact met hen opnemen via:
          <br />
          <a href="mailto:sponsorcommissie@zvmiddelse.nl">
            sponsorcommissie@zvmiddelse.nl
          </a>
        </p>
        <ContactFormButton/>
      </section>

      <section className="rounded-lg bg-white/80 p-8 text-gray-800 shadow-lg">
        <h2>Wat wordt er met het geld gedaan?</h2>
        <p>
          Belangrijk is om aan te geven waar het geld concreet voor zal worden
          gebruikt. Hieronder worden een aantal punten besproken die van groot
          belang zijn om de bredere opzet, de onderlinge samenhang en de
          professionalisering van de Zwem- en waterpolovereniging Middelsé in
          gang te zetten. Voor deze zaken gaat de ‘Club van 50’ zich sterk
          maken.
        </p>
        <h3>Concrete actiepunten waar de ‘Club van 50’ zich gaat inzetten</h3>
        <p>
          <strong>Aantrekken en betalen van gediplomeerde trainer(s)</strong>
          <br />
          Gediplomeerde trainers zullen zich extra richten op de talenten binnen
          de vereniging en hen helpen bij hun verdere zwem- en waterpolo
          ontwikkeling
        </p>
        <p>
          <strong>Zaalruimte voor extra trainingen</strong>
          <br />
          Extra ruimte is nodig om extra trainingen voor de sporters mogelijk te
          maken.
        </p>
        <p>
          <strong>Deelname aan en het organiseren van toernooien</strong>
          <br />
          Hierbij gaat het onder andere om inschrijfgelden en reiskosten.
        </p>
        <p>
          <strong>Trainingsweekenden</strong>
          <br />
          De onderlinge band en de sfeer tussen de sporters is belangrijk voor
          het enthousiasme en de ontwikkeling binnen de vereniging. Het jaarlijks
          terugkerende trainingsweekend levert hieraan een grote bijdrage.
        </p>
        <p>
          <strong>Organisatie van schooltoernooien in Stiens e.o.</strong>
          <br />
          Zwem- en waterpolovereniging Middelsé zal moeten gaan bekijken op
          welke manier zij een rol in de regio kan gaan spelen. Nagedacht kan
          worden over toernooien met schoolteams uit de regio. Op dergelijke
          toernooien wordt aandacht gevraagd voor het zwemmen en waterpolo en kan
          Zwem- en waterpolovereniging Middelsé meer voor het voetlicht komen
          bij jongeren.
        </p>
        <p>
          <strong>Clinics geven voor de jeugd</strong>
        </p>
        <p>
          <strong>Materiaal aanschaffen</strong>
        </p>
        <p>
          <strong>Cursussen EHBO, tijdwaarneming, scheidsrechters, officials</strong>
        </p>
      </section>
    </PageLayout>
  );
}
