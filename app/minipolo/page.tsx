import PageLayout from "@/app/components/page-layout";

export default function Minipolo() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Minipolo (Onder 8)</h2>
        <p className="text-lg text-gray-800 mb-4">
          Minipolo is een leuke en toegankelijke kennismaking met waterpolo voor kinderen onder de 8 jaar.
          De nadruk ligt op teamwork, zwemvaardigheid en plezier maken in een veilige omgeving.
        </p>
        <p className="text-gray-700">
          Voorbeeld: Elke zaterdagochtend komen onze jongste leden samen voor speelse trainingen.
          Door middel van spelletjes en eenvoudige oefeningen leren ze de basis van waterpolo en krijgen ze meer zelfvertrouwen in het water.
        </p>
      </section>
    </PageLayout>
  );
}
