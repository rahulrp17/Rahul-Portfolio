const TESTIMONIALS = [
  {
    name: "Maya Chen",
    role: "Founder, Northwind",
    initials: "MC",
    avatar:
      "bg-gradient-to-br from-flame to-ember text-white",
    light: false,
    quote:
      "Rahul turned a messy idea into the most confident site we have ever shipped. Demo requests doubled in three weeks — and the team finally loves our brand.",
  },
  {
    name: "Daniel Okafor",
    role: "Head of Product, Lumen",
    initials: "DO",
    avatar: "bg-[#1b0b05] text-cream",
    light: true,
    quote:
      "The rare designer who codes better than most engineers. Every scroll feels intentional, every pixel earns its place. Our conversion rate jumped 41%.",
  },
  {
    name: "Sofia Marques",
    role: "CEO, Orbit Labs",
    initials: "SM",
    avatar:
      "bg-gradient-to-br from-[#ff6a33] to-[#f9b46a] text-[#2a0f04]",
    light: false,
    quote:
      "We briefed a landing page. We got a brand moment. Investors still mention the launch, and our waitlist filled in four days.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-flame" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-white/5 bg-[#0e0907] py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-ember/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 07 / Kind words
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.75rem,6.5vw,5.75rem)] uppercase leading-[0.88] tracking-tight">
              Loved by
              <br />
              <span className="text-stroke">founders</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            A few words from the founders and product teams I have built with. Long
            partnerships, short launch windows, zero drama.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))] md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`glow-card reveal flex h-full flex-col rounded-[26px] p-7 md:p-8 ${
                testimonial.light
                  ? "border border-transparent bg-[#fff7f2] text-[#1b0b05] hover:border-[#1b0b05]/15 lg:-mt-6 lg:mb-6"
                  : "border border-white/10 bg-white/[0.03] hover:border-white/25"
              }`}
              style={{ "--d": `${index * 110}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="font-display text-6xl leading-[0.6] text-flame"
                  aria-hidden="true"
                >
                  “
                </span>
                <Stars />
              </div>

              <blockquote
                className={`mt-5 mb-6 text-[16px] leading-relaxed md:text-[17px] ${
                  testimonial.light ? "text-[#3a1508]" : "text-white/75"
                }`}
              >
                {testimonial.quote}
              </blockquote>

              <figcaption
                className={`mt-auto flex items-center gap-3 border-t pt-6 ${
                  testimonial.light ? "border-[#1b0b05]/10" : "border-white/10"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-[10px] font-bold tracking-[0.14em] ${testimonial.avatar}`}
                >
                  {testimonial.initials}
                </span>
                <span>
                  <span
                    className={`block text-sm font-semibold ${
                      testimonial.light ? "text-[#1b0b05]" : "text-white"
                    }`}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    className={`block text-[10px] uppercase tracking-[0.16em] ${
                      testimonial.light ? "text-[#1b0b05]/50" : "text-white/55"
                    }`}
                  >
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
