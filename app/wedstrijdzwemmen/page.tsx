import PageLayout from "@/app/components/page-layout";
import JoinButton from "@/app/components/join-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Wedstrijdzwemmen" };

export default function Wedstrijdzwemmen() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">Wedstrijdzwemmen</h2>
        <p className="mb-4 text-lg text-gray-800">
          Wedstrijdzwemmen is voor iedereen die van snelheid en competitie houdt in het zwembad.
        </p>
      </section>

      <section className="w-full rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Maandagavond om 18.00 – 19.00 in Sint Annaparochie.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftraining eerste 3x gratis, lid worden? <JoinButton/>
        </p>
      </section>
    </PageLayout>
  );
}
