import PageLayout from "@/app/components/page-layout";
import LidWorden from "@/app/components/lid-worden";

export default function Wedstrijdzwemmen() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Wedstrijdzwemmen</h2>
        <p className="text-lg text-gray-800 mb-4">
          Wedstrijdzwemmen is voor iedereen die van snelheid en competitie houdt in het zwembad.
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Maandagavond om 18.00 – 19.00 in Sint Annaparochie.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftraining eerste 3x gratis, lid worden? <LidWorden/>
        </p>
      </section>
    </PageLayout>
  );
}



//18.00 – 19.00	Wedstrijdzwemmen (Sint Annaparochie)