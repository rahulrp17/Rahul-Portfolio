import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: false }}
        transition={{
          duration: 0.6,
        }}
        className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          p-10 md:p-16
          text-center
          
          from-orange-500/20
          via-orange-500/10
          to-orange-500/20
          border
          border-orange-500/20
          backdrop-blur-md
          overflow-hidden
          relative
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            bg-orange-500/10
            blur-[150px]
            rounded-full
          "
        />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready To Build Something Amazing?
          </h2>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            I'm currently available for freelance projects,
            internships, and full-stack development opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="
                px-8
                py-4
                bg-orange-500
                rounded-full
                hover:bg-orange-600
                transition-all
                duration-300
                font-medium
              "
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="
                px-8
                py-4
                border
                border-orange-500
                rounded-full
                hover:bg-orange-500/10
                transition-all
                duration-300
                font-medium
              "
            >
              View Projects
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}