import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects } from "../Data/ProjectData";
import { SOCIALS } from "../Data/siteData";

const FILTERS = ["All", "Full Stack", "Frontend", "API"];

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

function ExternalIcon({ className = "" }) {
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
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const visibleProjects = filteredProjects;

  const countFor = (value) =>
    value === "All"
      ? projects.length
      : projects.filter((project) => project.category === value).length;

  return (
    <>
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <section
        id="work"
        className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
      >
        <div
          className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.12]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[460px] rounded-full bg-flame/10 blur-[140px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
          <SectionHeading
            index="04"
            eyebrow="Selected work"
            title="Proof,"
            accent="not promises"
            description="A few builds that show the range: full-stack products, sharp frontends and the occasional API experiment. Open any card for the full story."
          />

          <div className="reveal mt-10 rounded-[20px] border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
                {FILTERS.map((item) => {
                  const active = filter === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFilter(item)}
                      aria-pressed={active}
                      className={`group inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                        active
                          ? "border-transparent bg-gradient-to-r from-flame to-ember text-white shadow-[0_10px_30px_rgba(253,38,1,0.35)]"
                          : "border-white/12 text-white/55 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {item}
                      <span
                        className={`text-[8px] ${
                          active ? "text-white/90" : "text-white/25"
                        }`}
                      >
                        {String(countFor(item)).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-end gap-3">
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Case files
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.18em] text-white">
                  {String(filteredProjects.length).padStart(2, "0")} files
                </span>
              </div>
            </div>
          </div>

          <motion.div layout className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const featured = Boolean(project.featured);
                const shownTech = project.tech.slice(0, 3);
                const total = visibleProjects.length;
                const isLast = index === total - 1;

                let spanClass = "";
                if (isLast && total % 2 === 1) {
                  spanClass +=
                    " md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)] xl:col-span-1 xl:mx-0 xl:w-full";
                }
                if (isLast && total % 3 === 1) {
                  spanClass += " xl:col-start-2";
                }

                return (
                  <motion.article
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.42, delay: Math.min(index, 4) * 0.05 }}
                    onClick={(event) => {
                      if (event.target.closest("a, button")) return;
                      setSelectedProject(project);
                    }}
                    className={`glow-card project-card group relative cursor-pointer overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] sm:rounded-[26px] ${spanClass}`}
                  >
                    <div className="grid h-full grid-cols-1">
                      <div className="relative min-w-0 aspect-[16/10] overflow-hidden bg-ink">
                        <img
                          src={project.image}
                          alt={`${project.title} interface preview`}
                          width="1200"
                          height="800"
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/70 md:from-ink/60 md:to-transparent"
                          aria-hidden="true"
                        />
                        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-1.5 p-2.5 sm:p-4">
                          <span className="flex flex-col items-start gap-1.5">
                            <span className="rounded-full border border-white/20 bg-black/45 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[8px] sm:tracking-[0.18em]">
                              {project.category}
                            </span>
                            {featured ? (
                              <span className="rounded-full bg-flame px-2 py-1 text-[6px] font-bold uppercase tracking-[0.14em] text-white sm:px-3 sm:py-1.5 sm:text-[8px] sm:tracking-[0.18em]">
                                Featured
                              </span>
                            ) : null}
                          </span>
                          <span className="hidden font-display text-[9px] tracking-[0.16em] text-white/65 sm:block sm:text-xs sm:tracking-[0.18em]">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      <div className="relative z-20 flex min-w-0 flex-col border-t border-white/10 bg-[#0f0907]/95 p-3.5 sm:p-5 xl:p-6">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-flame sm:text-[9px] sm:tracking-[0.22em]">
                            {featured ? "01 / Flagship" : `0${index + 1} / Case study`}
                          </span>
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink sm:h-7 sm:w-7">
                            <Arrow className="h-3 w-3" />
                          </span>
                        </div>

                        <h3
                          className={`mt-2.5 font-display uppercase leading-[0.98] tracking-wide text-white sm:mt-3.5 ${
                            featured
                              ? "text-[clamp(1.2rem,3.6vw,1.6rem)] xl:text-[1.7rem]"
                              : "text-[clamp(1.1rem,3.4vw,1.5rem)] xl:text-[1.55rem]"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-[10.5px] leading-relaxed text-white/50 sm:text-[13px]">
                          {project.description}
                        </p>

                        {featured ? (
                          <ul className="mt-4 hidden gap-2 border-t border-white/10 pt-4 ">
                            {project.features.slice(0, 4).map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2 text-[11px] text-white/55"
                              >
                                <span className="h-1 w-1 shrink-0 rounded-full bg-flame/80" />
                                <span className="truncate">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 mb-3 sm:gap-2">
                          {shownTech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[7px] uppercase tracking-[0.1em] text-white/45 sm:px-3 sm:py-1 sm:text-[9px] sm:tracking-[0.14em]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > shownTech.length ? (
                            <span className="rounded-full border border-flame/25 bg-flame/10 px-2 py-0.5 text-[7px] uppercase tracking-[0.1em] text-flame sm:px-3 sm:py-1 sm:text-[9px] sm:tracking-[0.14em]">
                              +{project.tech.length - shownTech.length}
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/10 pt-3 sm:pt-3.5">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="pointer-events-auto inline-flex min-w-0 cursor-pointer items-center gap-1.5 text-[7.5px] font-bold uppercase tracking-[0.14em] text-white/60 transition-colors duration-300 hover:text-white focus-visible:text-flame sm:gap-2 sm:text-[9px] sm:tracking-[0.2em]"
                          >
                            <span className="truncate">View case study</span>
                            <Arrow className="h-2.5 w-2.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-3 sm:w-3" />
                          </button>

                          <div className="pointer-events-auto  shrink-0 items-center gap-1.5 flex sm:gap-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} on GitHub`}
                              className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-white/15 text-white/55 transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
                            >
                              <FaGithub className="h-3 w-3" aria-hidden="true" />
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} live demo`}
                              className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-white/15 text-white/55 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white"
                            >
                              <ExternalIcon className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <div className="reveal mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>More experiments and works in progress live on GitHub.</p>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 font-semibold text-white/70 transition-colors duration-300 hover:text-flame"
            >
              Explore the repositories
              <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
