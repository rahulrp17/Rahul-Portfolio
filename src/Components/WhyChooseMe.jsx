import {
  FaRocket,
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const REASONS = [
  {
    icon: FaRocket,
    title: "Fast delivery",
    description:
      "Clear milestones, focused sprints and no unnecessary detours. Good work, on schedule.",
  },
  {
    icon: FaLaptopCode,
    title: "Modern build",
    description:
      "React, Tailwind and a component system that stays maintainable after launch day.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive by default",
    description:
      "Every layout is designed and tested across mobile, tablet and wide desktop screens.",
  },
  {
    icon: FaBolt,
    title: "Performance first",
    description:
      "Optimised images, lean bundles and motion that enhances the experience instead of slowing it down.",
  },
  {
    icon: FaShieldAlt,
    title: "Clean architecture",
    description:
      "Readable code, sensible structure and accessible interfaces from the very first commit.",
  },
  {
    icon: FaHeadset,
    title: "Direct communication",
    description:
      "You work with the person building it. Quick updates, honest answers and no account-manager layer.",
  },
];

export default function WhyChooseMe({ onBookNow }) {
  return (
    <section
      id="standards"
      className="relative overflow-hidden border-t border-white/5 bg-[#0e0907] py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-flame/[0.08] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 05 / Standards
            </p>
            <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
              The standard,
              <br />
              <span className="text-stroke">not the shortcut</span>
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
            style={{ "--d": "120ms" }}
          >
            How I work matters as much as what I ship. These are the defaults on every
            engagement, not paid extras.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="glow-card feature-card reveal min-w-0 rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                style={{ "--d": `${(index % 3) * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-tile grid h-12 w-12 place-items-center rounded-2xl text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs tracking-[0.18em] text-white/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[1.4rem] uppercase leading-none tracking-wide text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-10 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-flame">
              Sound like your kind of process?
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
              Tell me what you are building. I will reply within 24 hours with the next
              practical step.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onBookNow?.("Custom project")}
            className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-flame hover:text-white sm:w-auto"
          >
            Book a project
          </button>
        </div>
      </div>
    </section>
  );
}
