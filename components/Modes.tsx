function DieIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="8"
        fill="#F5F0E8"
        stroke="#1B2D5B"
        strokeWidth="2.5"
      />
      <circle cx="24" cy="24" r="3.2" fill="#1B2D5B" />
      <circle cx="14" cy="14" r="3.2" fill="#1B2D5B" />
      <circle cx="34" cy="14" r="3.2" fill="#1B2D5B" />
      <circle cx="14" cy="34" r="3.2" fill="#1B2D5B" />
      <circle cx="34" cy="34" r="3.2" fill="#1B2D5B" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="7"
        width="30"
        height="37"
        rx="4"
        fill="#F5F0E8"
        stroke="#1B2D5B"
        strokeWidth="2.5"
      />
      <rect
        x="17"
        y="4"
        width="14"
        height="7"
        rx="2"
        fill="#F5F0E8"
        stroke="#1B2D5B"
        strokeWidth="2.5"
      />
      <line x1="15" y1="20" x2="33" y2="20" stroke="#1B2D5B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="27" x2="33" y2="27" stroke="#1B2D5B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="34" x2="26" y2="34" stroke="#1B2D5B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Modes() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold text-navy">
        Pick your style
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <DieIcon />
          <h3 className="mt-4 text-lg font-bold text-navy">Play on Phone</h3>
          <p className="mt-2 text-sm text-muted">
            Roll five dice on screen, hold your keepers, and score each turn.
            Full animations and haptic feedback.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <ClipboardIcon />
          <h3 className="mt-4 text-lg font-bold text-navy">Score Tracker</h3>
          <p className="mt-2 text-sm text-muted">
            Using real dice? The app is your scoresheet. Pass the phone
            around and tap your score each turn.
          </p>
        </div>
      </div>
    </section>
  );
}
