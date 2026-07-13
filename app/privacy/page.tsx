import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy: MyYahtzee",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Effective: July 2026</p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">Overview</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee is developed by MyElleLab (hello@myellelab.com). This
            policy explains what data MyYahtzee collects: in short, what it
            doesn&apos;t.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            No personal data collected
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee does not require an account or registration. We do not
            collect your name, email address, or any other personal
            information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            No analytics, no tracking
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee contains no analytics services, no tracking libraries,
            and no third-party SDKs of any kind.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            Everything stays on your device
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Game history, player profiles, and stats are stored locally on
            your device using SwiftData. This data is never transmitted or
            uploaded anywhere. Player names you enter are used only to label
            your local games and never leave your device.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            No advertising, no data sharing
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee shows no ads and works with no data brokers. We do not
            sell, rent, or share your data with any third party: we never
            collect it in the first place.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">No cookies</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            MyYahtzee is an app, not a website with a login: it does not use
            cookies or any similar tracking technology.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">
            Changes to this policy
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            If this policy changes, the effective date above will be updated.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-navy">Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Questions about privacy? Reach us at{" "}
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
