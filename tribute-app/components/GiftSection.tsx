import FadeIn from "./FadeIn";
import VenmoCard from "./VenmoCard";

function LotusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto h-8 w-12 text-gold"
    >
      <path d="M24 28c-3.5-3-5.5-7.5-5.5-12S20.5 6.5 24 3.5c3.5 3 5.5 7.5 5.5 12S27.5 25 24 28Z" />
      <path d="M24 28c-5-.5-9.5-3-12.5-7 1.5-1.2 3.2-2 5-2.5" />
      <path d="M24 28c5-.5 9.5-3 12.5-7-1.5-1.2-3.2-2-5-2.5" />
      <path d="M24 28c-7 0-13.5-2-18-5.5 2-2.5 4.7-4.3 7.7-5.3" />
      <path d="M24 28c7 0 13.5-2 18-5.5-2-2.5-4.7-4.3-7.7-5.3" />
    </svg>
  );
}

const paragraphs = [
  "Many of you have asked if there’s a meaningful way to celebrate Chris beyond sharing a video.",
  "One idea that feels especially fitting is to give something back to someone who spends so much of her life helping others heal.",
  "We’re planning a peaceful weekend retreat where Chris can simply rest, recharge, and receive the same love and care she so generously gives to everyone else.",
  "If you’d like to contribute toward this gift, we’d be incredibly grateful. Every contribution—large or small—will go directly toward making this retreat possible.",
];

export default function GiftSection() {
  return (
    <section
      aria-labelledby="gift-heading"
      className="px-5 pt-20 sm:px-6 sm:pt-24"
    >
      <FadeIn className="mx-auto max-w-2xl text-center">
        <LotusIcon />
        <h2
          id="gift-heading"
          className="font-display mt-5 text-balance text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Help Give Chris a Weekend of Rest
        </h2>

        <div className="mx-auto mt-8 max-w-xl space-y-5 text-left sm:text-center">
          {paragraphs.map((text) => (
            <p
              key={text}
              className="text-base leading-relaxed text-cocoa sm:text-lg"
            >
              {text}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <VenmoCard />
      </FadeIn>

      <FadeIn delay={0.1} className="mx-auto mt-10 max-w-md">
        <p className="text-pretty rounded-2xl border border-gold-soft/50 bg-sand/50 px-6 py-5 text-center text-sm leading-relaxed text-espresso/85 sm:text-base">
          Your video message is the most meaningful gift. A financial
          contribution is completely optional and only if it feels right to
          you.
        </p>
      </FadeIn>
    </section>
  );
}
