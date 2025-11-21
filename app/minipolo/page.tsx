"use client";

import PageLayout from "@/app/components/page-layout";
import { useState } from "react";

export default function Minipolo() {
  const [showJoinInfo, setShowJoinInfo] = useState(false);

  return (
    <PageLayout>
      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Minipolo (Onder 8)</h2>
        <p className="text-lg text-gray-800 mb-4">
          Minipolo is een laagdrempelige instap richting het waterpolo voor kinderen onder de 8 jaar oud, met een
          A-zwemdiploma. Plezier maken met leeftijdsgenootjes in een veilige omgeving staat bij ons voorop!
        </p>
      </section>

      <section className="bg-white/80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainingen</h2>
        <p className="mb-4 text-gray-800">
          Een training bestaat uit: Indraaien, inzwemmen, overgooien, spelletje, schietoefening, vrijzwemmen.
          Als er een trainingsmoment is komt deze hier ook in te staan!
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Wedstrijden</h2>
        <p className="mb-4 text-gray-800">
          Worden gespeeld in toernooivorm door heel het land. Ieder potje is 2x 5 minuten doorlopende tijd. 1 minuut pauze tussendoor. Hierbij verander je niet van helft.
          Er wordt geen stand bijgehouden. Dit omdat plezier op deze leeftijd boven prestatie staat.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Trainers</h2>
        <p className="mb-4 text-gray-800">
          Er zijn 3 herenspelers die de trainingen zullen verzorgen. Ook zijn er 4 meiden en 2 jongens die bij ons onder de 16 jeugd team spelen als assistent trainers.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Proeftraining & Lid worden</h2>
        <p className="mb-4 text-gray-800">
          Proeftraining eerste 3x gratis, lid worden?{' '}
          <button
            type="button"
            className="underline text-blue-700 hover:text-blue-900 cursor-pointer bg-transparent border-none p-0"
            onClick={() => setShowJoinInfo((v) => !v)}
          >
            Meld je hier aan
          </button>
          {showJoinInfo && (
            <span className="block mt-3 p-4 rounded-lg bg-yellow-50 text-gray-900 shadow-inner">
              Vul het <a href="/contact" className="underline text-blue-700 hover:text-blue-900">contactformulier</a> in op onze website of stuur een e-mail naar <a href="mailto:info@zvmiddelse.nl" className="underline text-blue-700 hover:text-blue-900">info@zvmiddelse.nl</a>.
              Je ontvangt van ons alle informatie over lid worden, proeftrainingen en contributie. We nemen zo snel mogelijk contact met je op!
            </span>
          )}
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Extra informatie</h2>
        <p className="mb-4 text-gray-800">
          <a href="https://www.knzb.nl/kennisartikelen/minipolo" target="_blank">Klik hier voor meer informatie</a> (op de website van de KNZB).
        </p>
      </section>
    </PageLayout>
  );
}
