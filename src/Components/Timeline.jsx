const TIMELINE = [
  {
    year: "2025",
    title: "Weather App",
    tag: "API",
    description:
      "A real-time weather application built with React and a live weather API, focused on fast lookups and a clean mobile layout.",
    stack: ["React", "REST API", "CSS"],
  },
  {
    year: "2025",
    title: "Food Delivery App",
    tag: "Full stack",
    description:
      "A responsive food ordering experience with menu browsing, cart management and a complete checkout flow.",
    stack: ["React", "Router", "State"],
  },
  {
    year: "2025",
    title: "Three.js Portfolio",
    tag: "Creative",
    description:
      "An experimental portfolio exploring 3D scenes, scroll-linked motion and interactive web storytelling.",
    stack: ["Three.js", "GSAP", "WebGL"],
  },
  {
    year: "2026",
    title: "Authify",
    tag: "Security",
    description:
      "A JWT authentication system with secure registration, login, protected routes and a production-minded structure.",
    stack: ["Node.js", "JWT", "MongoDB"],
  },
  {
    year: "2026",
    title: "CraftAI Marketplace",
    tag: "Full stack",
    description:
      "A handmade marketplace with Cloudinary uploads, WhatsApp ordering, an admin dashboard and an AI shopping assistant.",
    stack: ["React", "Cloudinary", "AI"],
  },
  {
    year: "2026",
    title: "AureliaStay",
    tag: "Full stack",
    description:
      "A hotel booking platform with customer and admin dashboards, reviews, email notifications and secure authentication.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2026",
    title: "GenZRides",
    tag: "Product",
    description:
      "A cab booking product with live ride tracking, driver tools, customer dashboards and a full admin control panel.",
    stack: ["React", "Maps API", "Dashboard"],
  },
];

/* Group entries by year so the timeline has clear milestones. */
const GROUPS = TIMELINE.reduce((groups, item, index) => {
  const entry = { ...item, index };
  const current = groups[groups.length - 1];
  if (current && current.year === item.year) current.items.push(entry);
  else groups.push({ year: item.year, items: [entry] });
  return groups;
}, []);

const TOTAL = TIMELINE.length;

export default function Timeline() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.1]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] hidden h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-flame/[0.06] blur-[140px] lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 03 / Journey
            </p>
            <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
              The road
              <br />
              <span className="text-stroke">so far</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            A short history of what I have built and what each project taught me. Every entry
            shipped, not just started.
          </p>
        </div>

        <div className="relative mx-auto mt-12 sm:mt-16 lg:max-w-6xl">
          {/* Continuous spine */}
          <div
            className="absolute bottom-2 left-[18px] top-2 w-px bg-gradient-to-b from-flame/70 via-white/20 to-white/5 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          {GROUPS.map((group, groupIndex) => (
            <div
              key={group.year}
              className={`relative ${groupIndex > 0 ? "pt-6 lg:pt-10" : ""}`}
            >
              {/* Year milestone */}
              <div className="relative z-10 flex items-center gap-4 pb-5 pl-11 sm:pl-14 lg:justify-center lg:pb-7 lg:pl-0">
                <span
                  className="hidden h-px w-16 bg-gradient-to-r from-transparent to-white/20 lg:block"
                  aria-hidden="true"
                />
                <span className="shrink-0 rounded-full border border-white/12 bg-[#0b0706] px-4 py-1.5 font-display text-[11px] uppercase tracking-[0.3em] text-white/60 shadow-[0_0_30px_rgba(0,0,0,0.55)]">
                  {group.year}
                </span>
                <span
                  className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent lg:hidden"
                  aria-hidden="true"
                />
                <span
                  className="hidden h-px w-16 bg-gradient-to-l from-transparent to-white/20 lg:block"
                  aria-hidden="true"
                />
              </div>

              <ol className="space-y-5 lg:space-y-6">
                {group.items.map((item) => {
                  const isLeft = item.index % 2 === 0;
                  const isLatest = item.index === TOTAL - 1;

                  return (
                    <li
                      key={item.title}
                      className="relative pl-11 sm:pl-14 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0"
                    >
                      {/* Node */}
                      <span
                        className="absolute left-[18px] top-5 z-10 grid h-[18px] w-[18px] -translate-x-1/2 place-items-center rounded-full border border-flame/50 bg-[#0b0706] shadow-[0_0_0_4px_rgba(253,38,1,0.06)] lg:left-1/2 lg:top-6"
                        aria-hidden="true"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-flame ${
                            isLatest
                              ? "animate-pulse shadow-[0_0_16px_rgba(253,38,1,1)]"
                              : "shadow-[0_0_10px_rgba(253,38,1,0.75)]"
                          }`}
                        />
                      </span>

                      <div
                        className={`relative ${
                          isLeft
                            ? "lg:col-start-1 lg:row-start-1"
                            : "lg:col-start-2 lg:row-start-1"
                        }`}
                      >
                        {/* Connector from card to spine */}
                        <span
                          className={`absolute top-[33px] hidden h-px w-6 lg:block ${
                            isLeft
                              ? "right-0 translate-x-full bg-gradient-to-r from-white/25 to-flame/50"
                              : "left-0 -translate-x-full bg-gradient-to-l from-white/25 to-flame/50"
                          }`}
                          aria-hidden="true"
                        />

                        <article
                          className="glow-card feature-card reveal group h-full rounded-[22px] border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:bg-white/[0.05] sm:rounded-[24px] sm:p-6"
                          style={{ "--d": `${(item.index % 3) * 70}ms` }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45">
                                {item.tag}
                              </span>
                              {isLatest && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-flame/30 bg-flame/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-flame">
                                  <span className="h-1 w-1 rounded-full bg-flame" />
                                  Latest
                                </span>
                              )}
                            </div>
                            <span className="shrink-0 font-display text-[11px] tracking-[0.2em] text-white/20">
                              {String(item.index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <h3 className="mt-4 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] uppercase leading-[1.02] text-white/85 transition-colors duration-300 group-hover:text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2.5 text-[13px] leading-relaxed text-white/50">
                            {item.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                            {item.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 px-2.5 py-1 text-[7.5px] font-semibold uppercase tracking-[0.14em] text-white/40"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </article>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}

          {/* End cap */}
          <div
            className="relative z-10 mt-7 flex items-center pl-11 sm:pl-14 lg:mt-8 lg:justify-center lg:pl-0"
            aria-hidden="true"
          >
            <span className="absolute left-[18px] top-1/2 grid h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0b0706] lg:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            </span>
            <span className="rounded-full border border-white/10 bg-[#0b0706] px-3.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Still shipping
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
