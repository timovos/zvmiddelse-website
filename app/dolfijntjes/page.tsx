import PageLayout from "@/app/components/page-layout";
import JoinButton from "@/app/components/join-button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dolfijntjes" };

export default function Dolfijntjes() {
  return (
    <PageLayout>
      <section className="w-full rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">Dolfijntjes</h2>
        <p className="mb-4 text-lg">
          Dolfijntjes is speciaal voor jonge kinderen die willen leren zwemmen en plezier willen maken in het water. Op een speelse manier maken zij kennis met de beginselen van het zwemmen, onder begeleiding van enthousiaste trainers.
        </p>
        <p>
          Tijdens de lessen staat veiligheid voorop en worden de kinderen gestimuleerd om samen te werken en vertrouwen te krijgen in het water. Door middel van leuke spelletjes en oefeningen leren ze drijven, onder water gaan en de eerste zwemslagen maken.
        </p>
      </section>

      <section className="w-full rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Trainingen</h2>
        <p className="mb-4">
          Zaterdagavond van 12.00u – 13.00u in Stiens.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Kosten</h2>
        <p className="mb-4">
          De contributie voor de Dolfijntjes bedraagt €20,81 per kwartaal.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4">
          Proeftrainingen zijn de eerste 3x gratis, lid worden? <JoinButton/>
        </p>
      </section>
    </PageLayout>
  );
}
