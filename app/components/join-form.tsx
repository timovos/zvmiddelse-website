"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function JoinForm({ inline = false }: { inline?: boolean }) {
  const [state, handleSubmit] = useForm("mkovvvbp");

  return (
    <div
      id="join-info"
      role="region"
      className={
        inline
          ? "mt-3 block rounded-lg bg-yellow-50 p-4 shadow-inner"
          : "mt-3 block"
      }
    >
    <p>
        Vul het onderstaand contactformulier in op onze website of stuur een e-mail naar <a
        href="mailto:info@zvmiddelse.nl" className="text-blue-700 underline hover:text-blue-900">info@zvmiddelse.nl</a>.
        Je ontvangt van ons alle informatie over lid worden, proeftrainingen en contributie. We nemen zo snel mogelijk
        contact met je op!
      </p>
      <p className="mt-4">
        Wil je het aanmeldformulier liever op papier invullen? Dat kan ook! <a href="Aanmeldingsformulier.pdf">Download
        hier het aanmeldformulier</a>, vul deze in en lever hem in bij een van onze trainers of doe het in de brievenbus
        in het clubhok in het zwembad.
        <br/><br/>
        Let op: vul ook <a href="Toestemmingsverklaring middelse skelp.pdf">dit toestemmingsformulier</a> in!
      </p>
      {state.succeeded ? (
        <p className="font-medium text-green-700">
          Bedankt voor je aanmelding! We nemen zo snel mogelijk contact met je op.
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <label className="flex flex-col gap-1">
              Naam
              <input
                type="text"
                name="name"
                required
                className="rounded-md border border-gray-300 bg-white px-3 py-2  shadow-sm focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] focus:outline-none"
              />
              <ValidationError prefix="Naam" field="name" errors={state.errors}/>
            </label>
            <label className="flex flex-col gap-1">
              E-mailadres
              <input
                type="email"
                name="email"
                required
                className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] focus:outline-none"
              />
              <ValidationError prefix="E-mailadres" field="email" errors={state.errors}/>
            </label>
            <label className="flex flex-col gap-1">
              Bericht
              <textarea
                name="message"
                rows={4}
                className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] focus:outline-none"
              />
              <ValidationError prefix="Bericht" field="message" errors={state.errors}/>
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-1 w-fit cursor-pointer rounded-md bg-[#1a237e] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[#283593] focus-visible:ring-2 focus-visible:ring-[#283593] focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state.submitting ? "Verzenden..." : "Versturen"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
