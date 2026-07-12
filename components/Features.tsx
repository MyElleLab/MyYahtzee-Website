const FEATURES = [
  {
    icon: "🎲",
    label: "Up to 6 players",
    description: "Each with a name and dice color.",
  },
  {
    icon: "📋",
    label: "Auto scoresheet",
    description: "Bonuses and totals calculated live.",
  },
  {
    icon: "🔥",
    label: "Rematch streaks",
    description: "Track who dominates game night.",
  },
  {
    icon: "👤",
    label: "Player profiles",
    description: "Personal bests, win rates, score history.",
  },
  {
    icon: "📵",
    label: "Fully offline",
    description: "No account, no cloud, no tracking.",
  },
  {
    icon: "✅",
    label: "Correct rules",
    description: "Yahtzee bonus and joker rules built in.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold text-navy">
        Everything you need, nothing you don&apos;t
      </h2>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.label}>
            <span className="text-2xl">{feature.icon}</span>
            <h3 className="mt-3 font-bold text-navy">{feature.label}</h3>
            <p className="mt-1 text-sm text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
