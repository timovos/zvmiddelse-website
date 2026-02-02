import Link from "next/link";
import { ReactNode } from "react";
import PageHeader from "@/app/components/page-header";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <PageHeader/>
      <div className="w-full flex justify-start max-w-3xl mx-auto px-6 mt-4 mb-4">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-[#1a237e] text-white rounded hover:bg-[#283593] transition"
        >
          ← Terug naar Home
        </Link>
      </div>
      <main className="flex-1 flex flex-col gap-8 justify-center items-center w-full z-11 px-6 max-w-3xl mx-auto min-h-64">
        {children}
      </main>
      <footer className="w-full diagonal-clip-top p-10 bg-black opacity-30">
        <div className="max-w-4xl mx-auto">
          <img
            src="/zvm-beeldlogo.svg"
            alt="ZV Middelsé beeldlogo"
            className="mx-auto -mb-4 h-32"
          />
          <nav className="flex gap-6 mt-8 justify-center">
            <a href="/about" className="hover:underline">
              Over
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacybeleid
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
