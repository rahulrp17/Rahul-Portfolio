import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-6xl font-bold"
      >
        Rahul
        <span className="text-orange-500">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
        className="text-gray-400 mt-4"
      >
         Full Stack Developer
      </motion.p>

      <motion.div
        className="mt-8 h-1 bg-orange-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{
          duration: 2,
        }}
      />
    </div>
  );
}