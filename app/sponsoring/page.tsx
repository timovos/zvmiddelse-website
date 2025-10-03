import PageLayout from "@/app/components/page-layout";

export default function Sponsoring() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Sponsoring</h2>
        <p className="text-lg text-gray-800 mb-4">
          Steun onze vereniging en draag bij aan de sportieve ontwikkeling van onze leden.
        </p>
        <p className="text-gray-700">
          Voorbeeld: Word sponsor en help ons activiteiten, materialen en wedstrijden mogelijk te maken.
        </p>
      </section>
    </PageLayout>
  );
}