import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 60,
            }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 120,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              relative
              bg-[#111]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              max-w-3xl
              w-full
              max-h-[90vh]
              overflow-y-auto
              shadow-[0_0_40px_rgba(249,115,22,0.2)]
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                bg-black/50
                text-white
                text-xl
                hover:bg-orange-500
                transition
              "
            >
              ✕
            </button>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-64
                  md:h-80
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                "
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        bg-orange-500/10
                        text-orange-400
                        border
                        border-orange-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  Features
                </h3>

                <ul className="space-y-3">
                  {project.features?.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="
                          flex
                          items-center
                          gap-3
                          text-gray-300
                        "
                      >
                        <span className="text-orange-500">
                          ✓
                        </span>
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    bg-orange-500
                    rounded-full
                    hover:bg-orange-600
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    border
                    border-orange-500
                    rounded-full
                    hover:bg-orange-500/10
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <button
                  onClick={onClose}
                  className="
                    px-6
                    py-3
                    border
                    border-white/20
                    rounded-full
                    hover:border-orange-500
                    transition
                    cursor-pointer
                  "
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}