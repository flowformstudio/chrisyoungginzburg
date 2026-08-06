"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import chrisPhoto from "@/public/chris-50.webp";

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-cocoa sm:text-xl"
      >
        We&rsquo;re creating a surprise video filled with stories, memories,
        gratitude, and birthday wishes from everyone whose life Chris has
        touched.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        aria-hidden="true"
        className="mt-14 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mt-14 w-full max-w-md px-1 sm:max-w-lg"
      >
        <Image
          src={chrisPhoto}
          alt="Chris seated beside large number 50, surrounded by roses and hydrangeas in soft golden light"
          priority
          sizes="(max-width: 640px) 92vw, 512px"
          className="w-full rounded-[2rem] shadow-[0_32px_80px_-28px_rgba(61,47,36,0.35)] ring-1 ring-gold-soft/60 sm:rounded-[2.5rem]"
        />
      </motion.div>
    </header>
  );
}
