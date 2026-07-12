import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/id6790156691";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="MyYahtzee icon"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-navy">MyYahtzee</span>
        </Link>
        <a
          href={APP_STORE_URL}
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          Download
        </a>
      </div>
    </header>
  );
}
