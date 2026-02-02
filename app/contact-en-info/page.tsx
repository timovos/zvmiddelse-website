import PageLayout from "@/app/components/page-layout";

export default function Clubhistorie() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">
          Contact, info en privacy
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          Op deze pagina vindt u belangrijke informatie over hoe wij omgaan met
          uw gegevens en hoe u contact met ons kunt opnemen.
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2>Bestuur</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-left text-gray-800">
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
        </div>

        <h2>Privacy, statuten en gedragsregels</h2>
        <div className="mt-8 space-y-4 text-gray-800">
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
    </PageLayout>
  );
}
