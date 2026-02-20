import PageLayout from "@/app/components/page-layout";
import JoinButton from "@/app/components/join-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Jeugd Waterpolo" };

export default function JeugdWaterpolo() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">Jeugd waterpolo</h2>
        <p className="mb-4 text-lg text-gray-800">
          Jeugd waterpolo is voor jongeren die hun vaardigheden in het waterpolo willen ontwikkelen en samen willen
          sporten.
        </p>
      </section>

      <section className="w-full rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Woensdagmiddag van 18.00u – 19.00u in Stiens.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Kosten</h2>
        <p className="mb-4 text-gray-800">
          De contributie voor de jeugd waterpololeden bedraagt €55,16 per kwartaal.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftrainingen zijn de eerste 3x gratis, lid worden? <JoinButton/>
        </p>
      </section>
    </PageLayout>
  );
}
