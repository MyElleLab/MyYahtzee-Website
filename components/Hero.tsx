import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6790156691";

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-20 pt-16 text-center sm:pt-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">
        Pass-and-play · 2–6 players · Offline
      </p>
      <h1 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">
        Yahtzee with friends, no paper needed.
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-muted">
        Roll on your phone or use real dice — MyYahtzee keeps score either
        way. Free, offline, no account.
      </p>
      <a href={APP_STORE_URL} className="mt-8 inline-block">
        <img
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          height="44"
        />
      </a>
      <div className="mx-auto mt-8 h-[180px] w-[180px] drop-shadow-md">
        <Image
          src="/icon.png"
          alt="MyYahtzee app icon"
          width={180}
          height={180}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
