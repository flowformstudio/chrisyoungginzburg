"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import venmoQr from "@/public/venmo-qr.png";

const VENMO_URL = "https://venmo.com/Igorginzburg";

export default function VenmoCard() {
  return (
    <div className="mx-auto mt-12 max-w-sm rounded-3xl border border-gold-soft/60 bg-white/80 p-8 text-center shadow-[0_24px_60px_-24px_rgba(61,47,36,0.18)] backdrop-blur-sm sm:p-10">
      <div className="mx-auto w-fit rounded-2xl border border-sand bg-white p-4">
        <Image
          src={venmoQr}
          alt="Venmo QR code for @IgorGinzburg — scan to contribute"
          className="h-52 w-52"
        />
      </div>

      <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-clay">
        Venmo
      </p>
      <p className="font-display mt-1 text-2xl font-medium tracking-tight">
        @IgorGinzburg
      </p>

      <motion.a
        href={VENMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-espresso/15 bg-espresso px-8 py-3.5 text-base font-semibold text-cream outline-offset-4 focus-visible:outline-2 focus-visible:outline-espresso"
      >
        Open Venmo
      </motion.a>
    </div>
  );
}
