const APP_STORE_URL = "https://apps.apple.com/app/id6790156691";

export function DownloadCTA() {
  return (
    <section className="bg-background px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-navy">Ready to play?</h2>
      <p className="mt-3 text-muted">Free download. No account needed.</p>
      <a href={APP_STORE_URL} className="mt-8 inline-block">
        <img
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          height="44"
        />
      </a>
      <p className="mt-4 text-xs text-muted">Requires iOS 17 or later</p>
    </section>
  );
}
