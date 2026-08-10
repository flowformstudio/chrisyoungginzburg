"use client";

import { motion } from "framer-motion";

const DROPBOX_FILE_REQUEST_URL =
  "https://www.dropbox.com/request/rdw59kbe7hru58yfce2c";

export default function UploadButton() {
  return (
    <motion.a
      href={DROPBOX_FILE_REQUEST_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="mt-10 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-terracotta to-clay px-8 py-4 text-lg font-semibold text-cream shadow-[0_16px_36px_-12px_rgba(196,118,74,0.55)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-terracotta"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 16V4m0 0-4 4m4-4 4 4" />
        <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
      </svg>
      Upload Your Video
    </motion.a>
  );
}

export function EmailButton() {
  return (
    <>
      <div
        aria-hidden="true"
        className="mt-5 flex items-center gap-4 px-2 text-xs font-medium uppercase tracking-[0.25em] text-clay"
      >
        <span className="h-px flex-1 bg-gold-soft/70" />
        or
        <span className="h-px flex-1 bg-gold-soft/70" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
        <motion.a
          href="mailto:ginzburgigor@gmail.com?subject=Video%20for%20Chris%27s%2050th"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex w-full flex-col items-center justify-center gap-0.5 rounded-full border border-clay/40 bg-white/60 px-6 py-3.5 text-center outline-offset-4 focus-visible:outline-2 focus-visible:outline-clay"
        >
          <span className="flex items-center gap-2 text-base font-semibold text-espresso sm:text-lg">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0 text-terracotta"
            >
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m3.5 7 8.5 6 8.5-6" />
            </svg>
            Email Your Video
          </span>
          <span className="text-sm font-medium text-terracotta">
            ginzburgigor@gmail.com
          </span>
        </motion.a>

        <motion.a
          href="sms:+14155398508"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex w-full flex-col items-center justify-center gap-0.5 rounded-full border border-clay/40 bg-white/60 px-6 py-3.5 text-center outline-offset-4 focus-visible:outline-2 focus-visible:outline-clay"
        >
          <span className="flex items-center gap-2 text-base font-semibold text-espresso sm:text-lg">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0 text-terracotta"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
            </svg>
            Text Your Video
          </span>
          <span className="text-sm font-medium text-terracotta">
            (415)&nbsp;539-8508
          </span>
        </motion.a>
      </div>
    </>
  );
}
