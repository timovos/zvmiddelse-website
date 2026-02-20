import Image from "next/image";

export default function PageFooter() {
  return (
    <footer className="diagonal-clip-top w-full bg-black/30 p-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Image
          src="/zvm-beeldlogo.svg"
          alt="ZV Middelsé beeldlogo"
          width={128}
          height={128}
          className="mx-auto -mb-4 h-32"
        />
        <nav className="mt-8 flex justify-center gap-6 opacity-80">
          <a href="/contact-en-info" className="hover:underline">
            Contact
          </a>
          <a href="/contact-en-info#privacy" className="hover:underline">
            Privacybeleid
          </a>
        </nav>
      </div>
    </footer>
  );
}
