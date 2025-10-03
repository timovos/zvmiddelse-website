import PageLayout from "@/app/components/page-layout";

export default function Clubhistorie() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Clubhistorie</h2>
        <p className="text-lg text-gray-800 mb-4">
          Lees meer over de rijke geschiedenis van onze zwemvereniging en haar hoogtepunten door de jaren heen.
        </p>
        <p className="text-gray-700">
          Voorbeeld: De club bestaat al sinds 1960 en heeft vele kampioenschappen en evenementen georganiseerd.
        </p>
      </section>
    </PageLayout>
  );
}
