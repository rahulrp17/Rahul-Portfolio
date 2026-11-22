import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

function Arrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-md sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 28 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[26px] border border-white/12 bg-[#0d0705] shadow-[0_50px_140px_rgba(0,0,0,0.65)] sm:rounded-[30px]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink sm:aspect-[16/8]">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                width="1200"
                height="800"
                className="h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0d0705] via-[#0d0705]/20 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/45 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
                >
                  <FaTimes className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 pt-16 sm:p-7 sm:pt-20">
                <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-flame">
                  Case study
                </p>
                <h2
                  id="project-modal-title"
                  className="mt-2 max-w-2xl font-display text-[clamp(1.7rem,4.5vw,2.8rem)] uppercase leading-[0.95] tracking-wide text-white"
                >
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <p className="max-w-2xl text-sm leading-relaxed text-white/55 sm:text-[15px]">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.features?.length ? (
                <div className="mt-7">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    What&apos;s inside
                  </p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-white/60"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-flame/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-7 flex flex-col gap-2.5 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-flame to-ember px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(253,38,1,0.25)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:min-w-[180px]"
                >
                  <FaExternalLinkAlt className="h-3 w-3" />
                  Live demo
                  <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/65 transition-all duration-300 hover:border-white hover:text-white sm:w-auto sm:min-w-[160px]"
                >
                  <FaGithub className="h-3 w-3" />
                  GitHub
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center rounded-full border border-white/10 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 transition-all duration-300 hover:border-white/30 hover:text-white/75 sm:ml-auto sm:w-auto"
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
