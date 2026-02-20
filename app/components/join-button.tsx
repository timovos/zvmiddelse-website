"use client";

import { useState } from "react";
import JoinForm from "@/app/components/join-form";

export default function JoinButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-md bg-[#1a237e] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[#283593] focus-visible:ring-2 focus-visible:ring-[#283593] focus-visible:ring-offset-2 focus-visible:outline-none"
        aria-expanded={showForm}
        aria-controls="join-info"
        onClick={() => setShowForm((v) => !v)}
      >
        Meld je hier aan
        <svg
          className={`h-4 w-4 transition-transform ${showForm ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {showForm && <JoinForm inline/>}
    </>
  );
}