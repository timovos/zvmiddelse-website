import PageLayout from "@/app/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Webshop clubkleding" };

export default function WebshopClubkleding() {
  return (
    <PageLayout>
      <section className="rounded-lg bg-white/80 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-[#1a237e]">
          Webshop clubkleding
        </h2>
        <p className="mb-4 text-lg">
          Klik op de knop hieronder om naar de webshop te gaan en onze clubkleding te bekijken en bestellen. We hebben een breed assortiment aan kleding en accessoires, dus er is voor ieder wat wils!
        </p>
        <a
          href="https://www.clubfabriek.nl/collections/clubshop-zwemvereniging-middelse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cursor-pointer rounded border-2 border-transparent bg-[#1a237e] px-4 py-2 text-white no-underline transition hover:border-white hover:bg-[#283593]"
        >
          Naar de webshop →
        </a>
      </section>

    </PageLayout>
  );
}
