"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative flex min-h-[70svh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:min-h-[75svh]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-clay sm:text-sm"
      >
        A surprise in the making
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="font-display max-w-3xl text-balance text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
      >
        Celebrate Chris&rsquo;s{" "}
        <span className="bg-gradient-to-r from-terracotta via-gold to-clay bg-clip-text text-transparent">
          50th Birthday
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-7 text-sm font-semibold tracking-wide text-cocoa sm:text-base"
      >
        <motion.span
          animate={{ rotate: [0, -2.5, 2.5, -1.5, 1.5, 0] }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2"
        >
          Please submit your video by{" "}
          <time
            dateTime="2026-09-01"
            className="whitespace-nowrap border-b-2 border-gold/60 pb-0.5 text-terracotta"
          >
            September&nbsp;1
          </time>
        </motion.span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-cocoa sm:text-xl"
      >
        We&rsquo;re creating a surprise video for Chris, and we&rsquo;d love
        for you to be part of it. There&rsquo;s also an optional contribution
        toward her gift, if it feels right to you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
      >
        <motion.a
          href="#share"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center justify-center rounded-full bg-gradient-to-r from-terracotta to-clay px-8 py-3.5 text-base font-semibold text-cream shadow-[0_16px_36px_-12px_rgba(196,118,74,0.55)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-terracotta"
        >
          Share Your Video
        </motion.a>
        <motion.a
          href="#gift"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center justify-center rounded-full border border-clay/40 bg-white/50 px-8 py-3.5 text-base font-semibold text-espresso backdrop-blur-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-clay"
        >
          Contribute to Her Gift
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        aria-hidden="true"
        className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </header>
  );
}
