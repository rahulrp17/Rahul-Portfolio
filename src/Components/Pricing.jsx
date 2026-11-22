const PLANS = [
  {
    name: "Portfolio sprint",
    price: "₹15,000",
    cadence: "per project · 2 weeks",
    description:
      "For a sharp one-page site that makes an outsized first impression.",
    features: [
      "One-page brand site",
      "Responsive React build",
      "Art direction & copy polish",
      "Micro-interaction pass",
      "One revision round",
    ],
    cta: "Start a sprint",
    featured: false,
  },
  {
    name: "Signature build",
    price: "₹45,000",
    cadence: "per project · 4–6 weeks",
    description:
      "The full brand moment — strategy, design, build and motion in one sprint.",
    features: [
      "Up to 6 custom pages",
      "Full design system",
      "Scroll & micro-interactions",
      "CMS or API integration",
      "SEO foundations",
      "30 days of aftercare",
    ],
    cta: "Book signature",
    featured: true,
  },
  {
    name: "Care & growth",
    price: "₹8,000",
    cadence: "per month · rolling",
    description:
      "An on-call design and dev partner for teams that ship fast.",
    features: [
      "Dedicated design + dev",
      "Unlimited requests, queued",
      "Weekly strategy calls",
      "Priority 48h turnarounds",
      "Monthly performance audits",
      "Pause or cancel anytime",
    ],
    cta: "Start a partnership",
    featured: false,
  },
];

function Check({ featured }) {
  return (
    <span
      className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
        featured ? "bg-[#1b0b05] text-[#ffd8c4]" : "bg-white/10"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2.5 w-2.5"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function Pricing({ onBookNow }) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-[0.12]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-flame/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 08 / Investment
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.75rem,6.5vw,5.75rem)] uppercase leading-[0.88] tracking-tight">
              Pick your
              <br />
              <span className="text-stroke">power-up</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            Transparent packages, senior execution. No juniors, no handoffs, no bloated
            timelines. Every price is a starting point.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          {PLANS.map((plan, index) => (
            <article
              key={plan.name}
              className={`reveal flex h-full flex-col p-7 md:p-8 ${
                plan.featured
                  ? "price-featured relative overflow-hidden rounded-[28px] lg:-mt-4 lg:mb-4"
                  : "rounded-[28px] border border-white/10 bg-white/[0.03]"
              }`}
              style={{ "--d": `${index * 110}ms` }}
            >
              <div className="relative z-10 flex items-center justify-between gap-3">
                <h3
                  className={
                    plan.featured
                      ? "text-[10px] font-bold uppercase tracking-[0.26em] text-[#4a1a08]"
                      : "text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50"
                  }
                >
                  {plan.name}
                </h3>
                {plan.featured ? (
                  <span className="rounded-full bg-[#1b0b05] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                    Most booked
                  </span>
                ) : (
                  <span className="font-display text-xs tracking-widest text-white/20">
                    0{index + 1}
                  </span>
                )}
              </div>

              <div className="relative z-10 mt-7 flex items-end gap-2">
                <span
                  className={`pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                    plan.featured ? "font-bold text-[#4a1a08]" : "text-white/40"
                  }`}
                >
                  from
                </span>
                <span className="font-display text-5xl leading-none md:text-6xl">
                  {plan.price}
                </span>
              </div>
              <p
                className={`relative z-10 mt-2 text-[9px] uppercase tracking-[0.22em] ${
                  plan.featured
                    ? "font-semibold text-[#4a1a08]"
                    : "text-white/35"
                }`}
              >
                {plan.cadence}
              </p>
              <p
                className={`relative z-10 mt-5 text-sm leading-relaxed ${
                  plan.featured ? "text-[#3a1508]" : "text-white/50"
                }`}
              >
                {plan.description}
              </p>

              <ul
                className={`relative z-10 mt-7 space-y-3 text-sm ${
                  plan.featured ? "text-[#2a0f04]" : "text-white/65"
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check featured={plan.featured} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-auto pt-8">
                <button
                  type="button"
                  onClick={() => onBookNow(`${plan.name} — ${plan.price}`)}
                  className={`group flex w-full cursor-pointer items-center justify-between rounded-full px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    plan.featured
                      ? "bg-[#1b0b05] text-white hover:bg-white hover:text-flame"
                      : "border border-white/20 text-white hover:border-white hover:bg-white hover:text-[#0b0706]"
                  }`}
                >
                  {plan.cta}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 text-[11px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            All prices in INR. Sliding scale available for students, non-profits and
            independent artists.
          </p>
          <button
            type="button"
            onClick={() => onBookNow("Custom project")}
            className="group inline-flex cursor-pointer items-center gap-2 text-left font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-flame"
          >
            Need something custom?
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
