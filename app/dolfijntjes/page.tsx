import PageLayout from "@/app/components/page-layout";

export default function Dolfijntjes() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Dolfijntjes</h2>
        <p className="text-lg text-gray-800 mb-4">
          Dolfijntjes is speciaal voor jonge kinderen die willen leren zwemmen en plezier willen maken in het water. Op een speelse manier maken zij kennis met de beginselen van het zwemmen, onder begeleiding van enthousiaste trainers.
        </p>
        <p className="text-gray-700 mb-2">
          Tijdens de lessen staat veiligheid voorop en worden de kinderen gestimuleerd om samen te werken en vertrouwen te krijgen in het water. Door middel van leuke spelletjes en oefeningen leren ze drijven, onder water gaan en de eerste zwemslagen maken.
        </p>
        <p className="text-gray-700">
          Voorbeeld: Elke week oefenen de Dolfijntjes met ringen opduiken, door hoepels zwemmen en samen waterestafettes doen. Zo bouwen ze spelenderwijs hun zwemvaardigheid op en beleven ze veel zwemplezier!
        </p>
      </section>
    </PageLayout>
  );
}
