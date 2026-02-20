import PageLayout from "@/app/components/page-layout";
import TrustContactForm from "@/app/components/trust-contact-form";
import ContactForm from "@/app/components/contact-form";
import ContactFormButton from "@/app/components/contact-form-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact en Info" };

export default function Clubhistorie() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">
          Contact, info en privacy
        </h2>
        <p className="mb-4 text-lg">
          Op deze pagina vindt u belangrijke informatie over hoe wij omgaan met
          uw gegevens en hoe u contact met ons kunt opnemen.
        </p>
      </section>

      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">
          Adres zwembad
        </h2>
        <p className="mb-4 text-lg">
          Wij trainen in ons thuisbad ‘it Gryn’ in Stiens. Hier worden ook zwemwedstrijden gehouden en waterpolowedstrijden gespeeld.
          <br/><br/>
          Het adres van zwembad ‘it Gryn’ is:<br/>
          Ieleane 1<br/>
          9051 LP Stiens<br/>
          Tel. (058) 257 2400<br/><br/>
          Klik <a target="_blank" href="https://www.bvsport.nl/accommodation/zwembad-it-gryn/">hier</a> om naar de website van het zwembad te gaan.
        </p>
      </section>

      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2>Bestuur</h2>
        <div className="mb-10 overflow-x-auto">
          {/* Desktop table */}
          <table className="hidden w-full border-collapse text-left md:table">
            <thead>
              <tr className="border-b border-black/10">
                <th className="w-[34%] py-3 pr-4 text-sm font-semibold text-[#1a237e]">
                  Functie
                </th>
                <th className="w-[30%] py-3 pr-4 text-sm font-semibold text-[#1a237e]">
                  Naam
                </th>
                <th className="w-[36%] py-3 text-sm font-semibold text-[#1a237e]">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              <tr>
                <td className="py-3 pr-4 align-top">Voorzitter</td>
                <td className="py-3 pr-4 align-top">Marcel Bakker</td>
                <td className="py-3 align-top">
                  <a href="mailto:voorzitter@zvmiddelse.nl">
                    voorzitter@zvmiddelse.nl
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">Secretaris</td>
                <td className="py-3 pr-4 align-top">Joyce Havenga</td>
                <td className="py-3 align-top">
                  <a href="mailto:secretaris@zvmiddelse.nl">
                    secretaris@zvmiddelse.nl
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">Penningmeester</td>
                <td className="py-3 pr-4 align-top">Hidde van Alfen<br/>Saske Haijma</td>
                <td className="py-3 align-top">
                  <div>Postadres aanvragen via onderstaand mailadres.</div>
                  <a href="mailto:penningmeester@zvmiddelse.nl">
                    penningmeester@zvmiddelse.nl
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">
                  Vertrouwenspersoon SG Middelsé - Skelp
                </td>
                <td className="py-3 pr-4 align-top">Liset Bosma</td>
                <td className="py-3 align-top">&nbsp;</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">
                  Algemeen lid en ledenadministratie
                </td>
                <td className="py-3 pr-4 align-top">Rixt Jouta</td>
                <td className="py-3 align-top">
                  <a href="mailto:ledenadministratie@zvmiddelse.nl">
                    ledenadministratie@zvmiddelse.nl
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">Waterpolosecretariaat</td>
                <td className="py-3 pr-4 align-top">
                  <div>Geertje Nauta</div>
                  <div>Rudie Nauta</div>
                </td>
                <td className="py-3 align-top">
                  <a href="mailto:waterpolo@zvmiddelse.nl">waterpolo@zvmiddelse.nl</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">Zwemsecretariaat</td>
                <td className="py-3 pr-4 align-top">VACANT</td>
                <td className="py-3 align-top">
                  <a href="mailto:zwemmen@zvmiddelse.nl">zwemmen@zvmiddelse.nl</a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Mobile card layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {[
              { functie: "Voorzitter", naam: "Marcel Bakker", contact: <a href="mailto:voorzitter@zvmiddelse.nl">voorzitter@zvmiddelse.nl</a> },
              { functie: "Secretaris", naam: "Joyce Havenga", contact: <a href="mailto:secretaris@zvmiddelse.nl">secretaris@zvmiddelse.nl</a> },
              { functie: "Penningmeester", naam: <><span>Hidde van Alfen</span><br/><span>Saske Haijma</span></>, contact: <><div>Postadres aanvragen via onderstaand mailadres.</div><a href="mailto:penningmeester@zvmiddelse.nl">penningmeester@zvmiddelse.nl</a></> },
              { functie: "Vertrouwenspersoon SG Middelsé - Skelp", naam: "Liset Bosma", contact: null },
              { functie: "Algemeen lid en ledenadministratie", naam: "Rixt Jouta", contact: <a href="mailto:ledenadministratie@zvmiddelse.nl">ledenadministratie@zvmiddelse.nl</a> },
              { functie: "Waterpolosecretariaat", naam: <><div>Geertje Nauta</div><div>Rudie Nauta</div></>, contact: <a href="mailto:waterpolo@zvmiddelse.nl">waterpolo@zvmiddelse.nl</a> },
              { functie: "Zwemsecretariaat", naam: "VACANT", contact: <a href="mailto:zwemmen@zvmiddelse.nl">zwemmen@zvmiddelse.nl</a> },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-black/10 p-4">
                <div className="mb-1 text-sm font-semibold text-[#1a237e]">{item.functie}</div>
                <div className="mb-1">{item.naam}</div>
                {item.contact && <div className="text-sm">{item.contact}</div>}
              </div>
            ))}
          </div>
        </div>

        <h2>Vacatures</h2>
        <p className="mt-4">
          Voor meer info over de onderstaande vacatures of aanmelding neem contact op met <a href="mailto:info@zvmiddelse.nl">info@zvmiddelse.nl</a>.<br/><br/>

          <strong>Voorzitter</strong><br/>
          De plek van voorzitter komt binnenkort vrij. Lijkt het je leuk om in een leuk bestuur plaats te nemen?<br/><br/>
          <strong>Lid sponsorcommissie</strong><br/>
          We zoeken nog een enthousiast/creatief/betrokken lid of ouder die mee wil denken over sponsoring voor onze zwemvereniging in het algemeen. Er is eens per maand overleg in een gezellige commissie.<br/><br/>
          Lijken bovenstaande vacatures niet op jou van toepassing, maar wil je toch graag je steentje bijdragen neem dan ook contact op en er wordt altijd een passende functie voor je gevonden.
        </p>
        <ContactFormButton/>
      </section>

      <section id="privacy" className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2>Privacy, statuten en gedragsregels</h2>
        <div className="mt-4 mb-10 space-y-4">
          <p>
            <strong>Privacyverklaring</strong>
            <br />
            U kunt de privacyverklaring van zwemvereniging Middelsé <a href="privacyverklaring.pdf" target="_blank">hier</a> vinden.
          </p>
          <p>
            <strong>Statuten</strong>
            <br />
            U kunt de statuten van zwemvereniging Middelsé <a href="statuten-middelse.pdf" target="_blank">hier</a> vinden.
          </p>
          <p>
            <strong>Gedragsregels</strong>
            <br />
            Voor gedragsregels tijdens trainingen en wedstrijden kunt u het <a href="huishoudelijk-regelement-zvm.doc" target="_blank">Huishoudelijk Regelement</a> raadplegen.
          </p>
        </div>
      </section>


      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2>Contactformulier</h2>
        <p className="mt-4">
          Heeft u vragen, opmerkingen of wilt u meer informatie over onze vereniging? Vul dan onderstaand contactformulier in en wij nemen zo snel mogelijk contact met u op.
        </p>
        <ContactForm />
      </section>

      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2>Vertrouwenspersoon</h2>
        <p className="mt-4">
          Onze vertrouwenspersoon, Liset Bosma, staat klaar om te luisteren en te
          ondersteunen bij eventuele zorgen of problemen. U kunt contact met haar
          opnemen via het e-mailadres <a href="mailto:vertrouwenspersoon@zvmiddelse.nl">vertrouwenspersoon@zvmiddelse.nl</a>
          of vul onderstaand formulier in. Alle gesprekken worden vertrouwelijk behandeld.
        </p>
        <TrustContactForm />
      </section>
    </PageLayout>
  );
}
