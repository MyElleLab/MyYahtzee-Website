import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use: MyYahtzee",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-bold text-navy">Terms of Use</h1>
        <p className="mt-2 text-sm text-muted">Effective: July 2026</p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">Acceptance</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            By downloading or using MyYahtzee, developed by MyElleLab, you
            agree to these terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">License to use</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee is free to download and use. You may not reverse-engineer,
            decompile, copy, or redistribute the app or any part of it.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            Provided as-is
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee is provided &quot;as-is,&quot; without warranties of
            any kind, express or implied.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            No liability for data loss
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            All game data is stored locally on your device only, with no
            cloud backup. MyElleLab is not liable for any loss of game
            history, player profiles, or stats resulting from device loss,
            reinstallation, or any other cause.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">Governing law</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            These terms are governed by the laws of Denmark.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            Changes to these terms
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            If these terms change, the effective date above will be updated.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Questions about these terms? Reach us at{" "}
            <a
              href="mailto:support@myellelab.com"
              className="text-navy underline"
            >
              support@myellelab.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
