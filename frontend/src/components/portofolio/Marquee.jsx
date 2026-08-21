import FastMarquee from "react-fast-marquee";
import { MARQUEE_ITEMS } from "@/data/profile";

export default function Marquee() {
  return (
    <div
      data-testid="marquee-section"
      className="relative overflow-hidden border-y border-white/5 py-10"
    >
      <FastMarquee speed={25} gradient={false} pauseOnHover>
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-16">
            <span className="text-stroke whitespace-nowrap font-display text-6xl font-bold uppercase tracking-tight md:text-8xl">
              {item}
            </span>
            <span className="h-3 w-3 rounded-full bg-neon" aria-hidden="true" />
          </span>
        ))}
      </FastMarquee>
    </div>
  );
}
