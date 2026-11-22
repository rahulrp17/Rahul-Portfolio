const FACTS = [
  { label: "Experience", value: "2+ years" },
  { label: "Projects shipped", value: "09" },
  { label: "Core stack", value: "MERN" },
  { label: "Based in", value: "Tamil Nadu" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-flame/[0.07] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="reveal order-1">
            <div className="relative mx-auto max-w-[460px]">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-flame/15 via-transparent to-ember/10 blur-2xl" />
              <div className="glow-card relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-2">
                <img
                  src="/image.png"
                  srcSet="/image.png 480w, /image.png 960w"
                  sizes="(min-width: 1024px) 440px, 90vw"
                  width="960"
                  height="1100"
                  alt="Rahul working as a designer and developer"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3.5/5] w-full rounded-[23px] object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-2 rounded-[23px] ring-1 ring-inset ring-white/10" />
              </div>

              <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/10 bg-[#100907]/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:left-6">
                <p className="font-display text-2xl leading-none text-white">09</p>
                <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Projects shipped
                </p>
              </div>
              <div className="absolute -right-2 top-5 hidden rounded-full border border-flame/25 bg-[#100907]/95 px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/60 shadow-xl backdrop-blur-md sm:inline-flex">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-flame" />
                Working worldwide
              </div>
            </div>
          </div>

          <div className="reveal order-2" style={{ "--d": "120ms" }}>
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 01 / About
            </p>

            <h2 className="mt-5 font-display text-[clamp(2.6rem,5.8vw,5rem)] uppercase leading-[0.9] tracking-tight">
              Designer&apos;s eye.
              <br />
              <span className="text-stroke">Engineer&apos;s discipline.</span>
            </h2>

            <div className="mt-7 max-w-xl space-y-4 text-sm leading-relaxed text-white/55 md:text-[15px] md:leading-relaxed">
              <p>
                I&apos;m Rahul, an independent designer and developer from Tamil Nadu. I build
                websites and web apps that look considered, load fast and stay easy to grow.
              </p>
              <p>
                My work sits between strategy, interface design and full-stack engineering.
                That means fewer handoffs, cleaner decisions and one person accountable for the
                final result.
              </p>
            </div>

            <dl className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="glow-card rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <dt className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/35">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg uppercase leading-none text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-flame hover:text-white"
              >
                View selected work
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
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 transition-all duration-300 hover:border-white hover:text-white"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
