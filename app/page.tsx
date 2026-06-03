import { FeatureHighlights } from "@/components/feature-highlights";
import { LandingBackground } from "@/components/landing-background";
import { Logo } from "@/components/logo";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="landing-page relative flex min-h-dvh w-full flex-col overflow-x-hidden pl-[max(clamp(1.25rem,5vw,4rem),env(safe-area-inset-left))] pr-[max(clamp(1.25rem,5vw,4rem),env(safe-area-inset-right))]">
      <LandingBackground />

      <header
        className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both relative z-10 shrink-0 pt-[max(clamp(1.25rem,4vh,3rem),env(safe-area-inset-top))] duration-500"
        style={{ animationDelay: "0ms" }}
      >
        <Logo />
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center gap-[clamp(2rem,6vh,5rem)] py-[clamp(1.5rem,5vh,4rem)] [@media(max-height:32rem)]:gap-6 [@media(max-height:32rem)]:py-4">
        <div
          className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both flex w-full min-w-0 max-w-4xl flex-col gap-[clamp(1rem,2.5vh,1.75rem)] duration-500"
          style={{ animationDelay: "100ms" }}
        >
          <p className="landing-eyebrow w-fit rounded-full border border-border bg-background/80 px-3 py-1 text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase backdrop-blur-sm sm:px-4 sm:text-xs">
            Now accepting early access
          </p>
          <h1 className="max-w-[16ch] text-balance text-[clamp(2.25rem,5.5vw+1rem,5.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
            Court intelligence made simple.
          </h1>
          <p className="max-w-[42ch] text-pretty text-[clamp(0.9375rem,1.25vw+0.5rem,1.375rem)] leading-relaxed text-muted-foreground">
            Real-time court availability, smart booking, and usage analytics —
            built for schools and athletic communities.
          </p>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both w-full min-w-0 max-w-4xl duration-500"
          style={{ animationDelay: "180ms" }}
        >
          <FeatureHighlights />
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both w-full min-w-0 max-w-2xl duration-500 lg:max-w-3xl"
          style={{ animationDelay: "260ms" }}
        >
          <div className="landing-form-card rounded-2xl border border-border/90 bg-background/85 p-5 backdrop-blur-md sm:p-6 md:p-7">
            <div className="mb-4 flex flex-col gap-1 sm:mb-5">
              <p className="text-[clamp(0.9375rem,1vw+0.5rem,1.0625rem)] font-semibold text-foreground">
                Join the waitlist
              </p>
              <p className="text-[clamp(0.8125rem,0.75vw+0.5rem,0.9375rem)] text-muted-foreground">
                Be first to know when Courtm8 launches at your school or park.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </div>

      <footer
        className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both relative z-10 shrink-0 border-t border-border/70 pb-[max(clamp(1.25rem,4vh,3rem),env(safe-area-inset-bottom))] pt-5 text-[clamp(0.8125rem,1vw+0.25rem,0.9375rem)] text-muted-foreground duration-500 sm:pt-6"
        style={{ animationDelay: "340ms" }}
      >
        Built for players. Designed for communities.
      </footer>
    </main>
  );
}
