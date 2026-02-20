"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="inline-block cursor-pointer rounded border-2 border-transparent bg-[#1a237e] px-4 py-2 text-white transition hover:border-white hover:bg-[#283593]"
    >
      ← Terug naar Home
    </button>
  );
}

