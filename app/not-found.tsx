import PageLayout from "@/app/components/page-layout";
import type { Metadata } from "next";
import BackButton from "@/app/components/back-button";

export const metadata: Metadata = { title: "Pagina niet gevonden" };

export default function NotFound() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 text-center shadow-lg">
        <h2 className="mb-2 text-6xl font-bold text-[#1a237e]">404 - niet gevonden</h2>
        <p className="mb-4 text-xl">
          Oeps! Deze pagina bestaat niet (meer).
        </p>
        <p className="mb-8">
          De pagina die je zoekt is verplaatst, verwijderd of heeft nooit
          bestaan. Ga terug naar de homepagina om verder te zoeken.
        </p>
        <BackButton/>
      </section>
    </PageLayout>
  );
}

