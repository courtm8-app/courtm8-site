import Image from "next/image";

export function LandingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="landing-grid absolute inset-0" />
      <div className="landing-glow absolute inset-0" />
      <Image
        src="/logo-icon.svg"
        alt=""
        width={550}
        height={600}
        className="landing-watermark absolute -right-[8%] top-[12%] h-[min(52vh,28rem)] w-auto opacity-[0.035] sm:-right-[4%] lg:right-[4%] lg:top-[8%] lg:h-[min(62vh,34rem)]"
        priority
      />
    </div>
  );
}
