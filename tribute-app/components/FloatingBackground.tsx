"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[-15%] top-[-10%] h-[55vmax] w-[55vmax] bg-[radial-gradient(circle_at_center,#e3cd94_0%,transparent_65%)]",
    animate: { x: [0, 40, -20, 0], y: [0, 30, 10, 0] },
    duration: 26,
  },
  {
    className:
      "right-[-20%] top-[15%] h-[60vmax] w-[60vmax] bg-[radial-gradient(circle_at_center,#e8c9ae_0%,transparent_65%)]",
    animate: { x: [0, -50, 20, 0], y: [0, 40, -20, 0] },
    duration: 32,
  },
  {
    className:
      "bottom-[-25%] left-[10%] h-[65vmax] w-[65vmax] bg-[radial-gradient(circle_at_center,#f0e3c8_0%,transparent_65%)]",
    animate: { x: [0, 30, -40, 0], y: [0, -30, 20, 0] },
    duration: 38,
  },
];

export default function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-60 blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
