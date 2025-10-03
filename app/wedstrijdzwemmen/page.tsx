import PageLayout from "@/app/components/page-layout";

export default function Wedstrijdzwemmen() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Wedstrijdzwemmen</h2>
        <p className="text-lg text-gray-800 mb-4">
          Wedstrijdzwemmen is voor iedereen die van snelheid en competitie houdt in het zwembad.
        </p>
        <p className="text-gray-700">
          Voorbeeld: Leden trainen op techniek en snelheid en doen mee aan regionale en landelijke wedstrijden.
        </p>
      </section>
    </PageLayout>
  );
}
