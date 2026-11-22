const TIMELINE = [
  {
    year: "2025",
    title: "Weather App",
    tag: "API",
    description:
      "A real-time weather application built with React and a live weather API, focused on fast lookups and a clean mobile layout.",
  },
  {
    year: "2025",
    title: "Food Delivery App",
    tag: "Full stack",
    description:
      "A responsive food ordering experience with menu browsing, cart management and a complete checkout flow.",
  },
  {
    year: "2025",
    title: "Three.js Portfolio",
    tag: "Creative",
    description:
      "An experimental portfolio exploring 3D scenes, scroll-linked motion and interactive web storytelling.",
  },
  {
    year: "2026",
    title: "Authify",
    tag: "Security",
    description:
      "A JWT authentication system with secure registration, login, protected routes and a production-minded structure.",
  },
  {
    year: "2026",
    title: "CraftAI Marketplace",
    tag: "Full stack",
    description:
      "A handmade marketplace with Cloudinary uploads, WhatsApp ordering, an admin dashboard and an AI shopping assistant.",
  },
  {
    year: "2026",
    title: "AureliaStay",
    tag: "Full stack",
    description:
      "A hotel booking platform with customer and admin dashboards, reviews, email notifications and secure authentication.",
  },
  {
    year: "2026",
    title: "GenZRides",
    tag: "Product",
    description:
      "A cab booking product with live ride tracking, driver tools, customer dashboards and a full admin control panel.",
  },
];

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

        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14">
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-flame via-white/15 to-transparent sm:left-[9px]"
            aria-hidden="true"
          />

          <ol className="space-y-4">
            {TIMELINE.map((item, index) => (
              <li key={`${item.year}-${item.title}`} className="relative pl-9 sm:pl-14">
                <span
                  className="absolute left-0 top-6 grid h-[15px] w-[15px] place-items-center rounded-full border border-flame/40 bg-[#0b0706] sm:left-[2px]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-flame shadow-[0_0_12px_rgba(253,38,1,0.8)]" />
                </span>

                <article
                  className="glow-card reveal group rounded-[22px] border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:bg-white/[0.04] sm:p-6"
                  style={{ "--d": `${(index % 4) * 70}ms` }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs tracking-[0.18em] text-flame">
                        {item.year}
                      </span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-display text-[10px] tracking-[0.18em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-[clamp(1.35rem,2.4vw,1.85rem)] uppercase leading-none text-white/85 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
