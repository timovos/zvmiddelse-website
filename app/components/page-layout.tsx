import { ReactNode } from "react";
import PageHeader from "@/app/components/page-header";
import PageFooter from "@/app/components/page-footer";
import BackButton from "@/app/components/back-button";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-[family-name:var(--font-geist-sans)]">
      <PageHeader/>
      <div id="inhoud"></div>
      <div className="mx-auto mt-4 mb-4 flex w-full max-w-3xl justify-start px-6">
        <BackButton />
      </div>
      <main className="z-11 mx-auto flex min-h-64 w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 px-6">
        {children}
      </main>
      <PageFooter />
    </div>
  );
}
