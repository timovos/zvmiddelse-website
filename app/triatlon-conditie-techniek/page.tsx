import PageLayout from "@/app/components/page-layout";
import type { Metadata } from "next";
import JoinForm from "@/app/components/join-form";

export const metadata: Metadata = { title: "Triatlon, Conditie & Techniek" };

export default function TriatlonConditieTechniek() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">Triatlon - conditie - techniek</h2>
        <p className="mb-4 text-lg text-gray-800">
          Voor iedereen die zijn conditie en zwemtechniek wil verbeteren, of zich wil voorbereiden op een triatlon.
        </p>
      </section>

      <section className="w-full rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Op woensdagavond traint de triatlongroep / recreanten van 20.30u tot 21.30u in Stiens.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Contributie</h2>
        <p className="mb-4 text-gray-800">
          De contributie bedraagt €52,06 per kwartaal.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Lid worden</h2>
        <JoinForm/>

      </section>
    </PageLayout>
  );
}
