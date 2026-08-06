import FadeIn from "./FadeIn";

export default function Timeline() {
  return (
    <section aria-label="Deadline" className="px-6 py-20 text-center sm:py-24">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-clay sm:text-sm">
          The timeline
        </p>
        <p className="font-display mx-auto mt-4 max-w-lg text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          Please submit your video by{" "}
          <time dateTime="2026-09-01" className="whitespace-nowrap text-terracotta">
            September&nbsp;1
          </time>
          .
        </p>
      </FadeIn>
    </section>
  );
}
