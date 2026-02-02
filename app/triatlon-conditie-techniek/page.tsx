import PageLayout from "@/app/components/page-layout";

export default function TriatlonConditieTechniek() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Triatlon / conditie / techniek</h2>
        <p className="text-lg text-gray-800 mb-4">
          Voor iedereen die zijn conditie en zwemtechniek wil verbeteren, of zich wil voorbereiden op een triatlon.
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Op woensdagavond traint de triatlongroep / recreanten van 20.30u tot 21.30u in Stiens.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Contributie</h2>
        <p className="mb-4 text-gray-800">
          De contributie bedraagt €52,06 per kwartaal.
        </p>
      </section>
    </PageLayout>
  );
}
