export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          MyYahtzee by{" "}
          <a
            href="https://myellelab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-navy"
          >
            MyElleLab
          </a>
        </p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-navy">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-navy">
            Terms
          </a>
          <a href="mailto:support@myellelab.com" className="hover:text-navy">
            support@myellelab.com
          </a>
        </div>
      </div>
    </footer>
  );
}
