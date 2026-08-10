import Image from "next/image";
import FadeIn from "./FadeIn";
import VenmoCard from "./VenmoCard";
import giftBanner from "@/public/gift-banner.webp";

const paragraphs = [
  "We’re planning to gift Chris a peaceful weekend retreat where she can simply rest, recharge, and receive the love she so generously gives. Any contribution — large or small — means the world.",
];

export default function GiftSection() {
  return (
    <section
      id="gift"
      aria-labelledby="gift-heading"
      className="scroll-mt-8 px-5 pt-20 sm:px-6 sm:pt-24"
    >
      <FadeIn className="mx-auto max-w-2xl text-center">
        <Image
          src={giftBanner}
          alt="Chris in a sun hat gazing over a calm sea from a peaceful terrace at golden hour"
          sizes="(max-width: 672px) 100vw, 672px"
          className="w-full rounded-3xl shadow-[0_24px_60px_-24px_rgba(61,47,36,0.3)] ring-1 ring-gold-soft/60"
        />
        <h2
          id="gift-heading"
          className="font-display mt-10 text-balance text-3xl font-medium tracking-tight sm:text-4xl"
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
