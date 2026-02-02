import PageLayout from "@/app/components/page-layout";
import LidWorden from "@/app/components/lid-worden";

export default function Dolfijntjes() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Dolfijntjes</h2>
        <p className="text-lg text-gray-800 mb-4">
          Dolfijntjes is speciaal voor jonge kinderen die willen leren zwemmen en plezier willen maken in het water. Op een speelse manier maken zij kennis met de beginselen van het zwemmen, onder begeleiding van enthousiaste trainers.
        </p>
        <p className="text-gray-800">
          Tijdens de lessen staat veiligheid voorop en worden de kinderen gestimuleerd om samen te werken en vertrouwen te krijgen in het water. Door middel van leuke spelletjes en oefeningen leren ze drijven, onder water gaan en de eerste zwemslagen maken.
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Zaterdagavond van 12.00u – 13.00u in Stiens.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Kosten</h2>
        <p className="mb-4 text-gray-800">
          De contributie voor de Dolfijntjes bedraagt €20,81 per kwartaal.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftrainingen zijn de eerste 3x gratis, lid worden? <LidWorden/>
        </p>
      </section>
    </PageLayout>
  );
}
