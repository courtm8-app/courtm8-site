const FEATURES = [
  {
    title: "Live availability",
    description: "See open courts across your campus or park in real time.",
  },
  {
    title: "Smart booking",
    description: "Reserve a court in seconds — no phone tag, no guesswork.",
  },
  {
    title: "Usage analytics",
    description: "Understand demand and keep facilities running smoothly.",
  },
] as const;

export function FeatureHighlights() {
  return (
    <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
      {FEATURES.map((feature, index) => (
        <li
          key={feature.title}
          className="landing-feature group flex flex-col gap-2 rounded-xl border border-border/80 bg-background/70 p-4 backdrop-blur-sm transition-colors hover:border-foreground/20 sm:p-5"
        >
          <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[clamp(0.9375rem,1vw+0.5rem,1.0625rem)] font-semibold text-foreground">
            {feature.title}
          </span>
          <span className="text-[clamp(0.8125rem,0.75vw+0.5rem,0.9375rem)] leading-relaxed text-muted-foreground">
            {feature.description}
          </span>
        </li>
      ))}
    </ul>
  );
}
