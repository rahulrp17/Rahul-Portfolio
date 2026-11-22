const SERVICES = [
  {
    id: "01",
    title: "Web design & UI",
    description:
      "Interfaces that refuse to look like a template. Strategy first, pixels second — layout, type, colour and a system you can grow with.",
    tags: ["Figma", "UI / UX", "Design systems"],
    icon: (
      <>
        <path d="m12 19 7-7 3 3-7 7-3-3Z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
  },
  {
    id: "02",
    title: "Frontend development",
    description:
      "Pixel-perfect builds with buttery motion. Fast, accessible interfaces in React and Tailwind CSS that feel as good as they look.",
    tags: ["React", "JavaScript", "Tailwind"],
    icon: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
        <path d="m14 4-4 16" />
      </>
    ),
  },
  {
    id: "03",
    title: "Full-stack builds",
    description:
      "From landing page to working product. APIs, auth and data wired up with Node, Express and MongoDB — plus Java when the stack calls for it.",
    tags: ["Node.js", "MongoDB", "Java"],
    icon: (
      <>
        <rect x="3" y="3" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
        <path d="M7 6.5h.01" />
        <path d="M7 17.5h.01" />
      </>
    ),
  },
];

const TOOLKIT = [
  "Figma",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
];

export default function Services({ onBookNow }) {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[540px] opacity-[0.16]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-flame/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 06 / What I do
            </p>
            <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
              Built to
              <br />
              <span className="text-stroke">turn heads</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            Three ways I turn strategy into a site people remember — and act on. Every
            engagement is senior-led, end to end, with zero handoffs.
          </p>
        </div>

        <div className="mt-12 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr))] sm:mt-14 sm:gap-5">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="glow-card feature-card reveal flex min-w-0 flex-col rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8"
              style={{ "--d": `${index * 110}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="icon-tile grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white sm:h-14 sm:w-14">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </svg>
                </span>
                <span className="font-display text-sm tracking-widest text-white/65">
                  {service.id}
                </span>
              </div>

              <h3 className="mt-7 font-display text-[clamp(1.45rem,2.6vw,2rem)] uppercase leading-[1.08] tracking-wide sm:mt-8">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onBookNow?.(service.title)}
                className="group mt-6 inline-flex min-h-[46px] w-full cursor-pointer items-center justify-between gap-3 rounded-full border border-white/15 px-4 py-3 text-left text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white sm:px-5"
              >
                <span className="truncate">Book now</span>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:mt-12 sm:gap-x-8">
          <span className="text-white/25">Also in the toolkit</span>
          {TOOLKIT.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
