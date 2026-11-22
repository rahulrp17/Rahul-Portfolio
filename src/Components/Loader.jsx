import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0706]">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/35"
      >
        Portfolio 2027
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-4 font-display text-5xl uppercase tracking-[0.08em] sm:text-6xl"
      >
        Rahul<span className="text-flame">.</span>
      </motion.h1>

      <div className="mt-8 h-px w-48 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-flame to-ember"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/25"
      >
        Designer &amp; developer
      </motion.p>
    </div>
  );
}
