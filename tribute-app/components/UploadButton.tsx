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
