"use client";

import { useState } from "react";

export default function LidWorden() {
  const [showJoinInfo, setShowJoinInfo] = useState(false);

  return (
    <>
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
    </>
  );
}