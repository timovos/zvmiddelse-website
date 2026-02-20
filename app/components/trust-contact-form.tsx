"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function TrustContactForm() {
  const [state, handleSubmit] = useForm("mqkjprea");

  if (state.succeeded) {
    return (
      <p className="mt-4 font-medium text-green-700">
        Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-md flex-col gap-3">
      <label className="flex flex-col gap-1">
        Naam
        <input
          type="text"
          name="name"
          required
          className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] focus:outline-none"
        />
        <ValidationError prefix="Naam" field="name" errors={state.errors} />
      </label>
      <label className="flex flex-col gap-1">
        E-mailadres
        <input
          type="email"
          name="email"
          required
          className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] focus:outline-none"
        />
        <ValidationError prefix="E-mailadres" field="email" errors={state.errors} />
      </label>
      <label className="flex flex-col gap-1">
        Bericht
        <textarea
          name="message"
          rows={4}
          required
          className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] focus:outline-none"
        />
        <ValidationError prefix="Bericht" field="message" errors={state.errors} />
      </label>
      <button
        type="submit"
        disabled={state.submitting}
        className="mt-1 w-fit cursor-pointer rounded-md bg-[#1a237e] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[#283593] focus-visible:ring-2 focus-visible:ring-[#283593] focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.submitting ? "Verzenden..." : "Versturen"}
      </button>
    </form>
  );
}

