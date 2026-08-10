import FadeIn from "./FadeIn";
import UploadButton, { EmailButton } from "./UploadButton";

const ideas = [
  "How do you know Chris?",
  "What’s your favorite memory together?",
  "How has Chris touched or changed your life?",
  "What birthday wish would you like to share?",
];

export default function ShareCard() {
  return (
    <section
      id="share"
      aria-labelledby="share-heading"
      className="scroll-mt-8 px-5 sm:px-6"
    >
      <FadeIn className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-gold-soft/60 bg-white/70 p-8 shadow-[0_24px_60px_-24px_rgba(61,47,36,0.18)] backdrop-blur-sm sm:p-12">
          <h2
            id="share-heading"
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Share Your Video
          </h2>

          <p className="mt-2.5 text-sm font-semibold tracking-wide text-cocoa sm:text-base">
            Please submit by{" "}
            <time
              dateTime="2026-09-01"
              className="whitespace-nowrap border-b-2 border-gold/60 pb-0.5 text-terracotta"
            >
              September&nbsp;1
            </time>
          </p>

          <p className="mt-4 text-base leading-relaxed text-cocoa sm:text-lg">
            Record a short video —{" "}
            <strong className="font-semibold text-espresso">
              ideally under 2 minutes
            </strong>{" "}
            — and we&rsquo;ll use it in the birthday film. Speak from the heart;
            a phone selfie video is perfect.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa sm:text-base">
            Went a little long? No worries — the final film will be edited, so
            we may use parts of it, but Chris will see your full video no
            matter what.
          </p>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-clay">
            Some ideas
          </p>
          <ul className="mt-4 space-y-3">
            {ideas.map((idea) => (
              <li key={idea} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                <span className="text-base leading-relaxed text-espresso/90 sm:text-lg">
                  {idea}
                </span>
              </li>
            ))}
          </ul>

          <UploadButton />
          <EmailButton />

          <p className="mt-6 text-center text-sm leading-relaxed text-cocoa">
            Thank you for helping make Chris&rsquo;s 50th birthday
            unforgettable.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
