import Image from "next/image";
import FadeIn from "./FadeIn";
import UploadButton, { EmailButton } from "./UploadButton";
import chrisBanner from "@/public/chris-banner.webp";

export default function ShareCard() {
  return (
    <section
      id="share"
      aria-labelledby="share-heading"
      className="scroll-mt-8 px-5 sm:px-6"
    >
      <FadeIn className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl border border-gold-soft/60 bg-white/70 shadow-[0_24px_60px_-24px_rgba(61,47,36,0.18)] backdrop-blur-sm">
          <Image
            src={chrisBanner}
            alt="Celebrating Chris — Chapter 50 — A Life in Her Light. Chris in profile wearing a wide-brimmed hat, rim-lit against black"
            sizes="(max-width: 672px) 100vw, 672px"
            className="w-full"
          />
          <div className="p-8 sm:p-12">
          <h2
            id="share-heading"
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Be Part of Chris&rsquo;s Birthday Film
          </h2>

          <p className="mt-2.5 text-sm font-semibold tracking-wide text-cocoa sm:text-base">
            Ideally by{" "}
            <time
              dateTime="2026-09-06"
              className="whitespace-nowrap text-terracotta"
            >
              September&nbsp;6
            </time>
          </p>

          <p className="mt-4 text-base leading-relaxed text-cocoa sm:text-lg">
            We&rsquo;re putting together a video that will be{" "}
            <strong className="font-semibold text-espresso">
              screened privately for Chris
            </strong>
            , and I&rsquo;d love you in it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa sm:text-base">
            This is a private film for Chris only — it won&rsquo;t be posted
            online or shared publicly.
          </p>

          <p className="mt-6 text-base leading-relaxed text-cocoa sm:text-lg">
            Record a quick message answering one question:
          </p>
          <p className="mt-4 text-center font-display text-2xl font-medium tracking-tight text-espresso sm:text-3xl">
            &ldquo;Who is Chris to you?&rdquo;
          </p>

          <p className="mt-6 text-base leading-relaxed text-cocoa sm:text-lg">
            One word, a sentence, funny, sweet, emotional. Whatever comes
            naturally. Don&rsquo;t overthink it!{" "}
            <span aria-hidden="true">❤️</span>
          </p>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-clay">
            Send it any of these ways
          </p>

          <UploadButton />
          <EmailButton />

            <p className="mt-6 text-center text-sm leading-relaxed text-cocoa">
              Thank you for helping make Chris&rsquo;s 50th birthday
              unforgettable.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
