import PageLayout from "@/app/components/page-layout";
import LidWorden from "@/app/components/lid-worden";

export default function JeugdWaterpolo() {
  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Jeugd waterpolo</h2>
        <p className="text-lg text-gray-800 mb-4">
          Jeugd waterpolo is voor jongeren die hun vaardigheden in het waterpolo willen ontwikkelen en samen willen
          sporten.
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Woensdagmiddag van 18.00u – 19.00u in Stiens.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Kosten</h2>
        <p className="mb-4 text-gray-800">
          De contributie voor de jeugd waterpololeden bedraagt €55,16 per kwartaal.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftrainingen zijn de eerste 3x gratis, lid worden? <LidWorden/>
        </p>
      </section>
    </PageLayout>
  );
}
