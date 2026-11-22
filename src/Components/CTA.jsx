import { EMAIL } from "../Data/siteData";

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

export default function CTA({ onBookNow }) {
  return (
    <section
      id="start"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0706] py-20 md:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="cta-panel reveal rounded-[30px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <div>
              <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
                <span className="h-px w-8 bg-flame" /> 08 / Next step
              </p>
              <h2 className="cta-title mt-5 font-display uppercase">
                Have something
                <br />
                worth building?
                <br />
                <span className="text-stroke">Let&apos;s make it real.</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                Bring the idea, the half-finished plan or the site that has outgrown its
                design. I will help you shape the next version and build it properly.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                <span>Booking Q1 2027</span>
                <span>Reply within 24h</span>
                <span>Tamil Nadu · Worldwide</span>
              </div>
            </div>

            <div className="glow-card rounded-[24px] border border-white/10 bg-[#0b0706]/55 p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-flame/25 bg-flame/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-flame">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                  Open for select work
                </span>
                <span className="font-display text-xs tracking-[0.16em] text-white/30">
                  2027
                </span>
              </div>

              <p className="mt-6 font-display text-[clamp(1.8rem,3vw,2.4rem)] uppercase leading-[1.02] text-white">
                Tell me what
                <br />
                you want to ship.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                A short brief is enough. I will come back with scope, timeline and the right
                next step.
              </p>

              <div className="mt-6 grid gap-2.5">
                <button
                  type="button"
                  onClick={() => onBookNow?.("Custom project")}
                  className="group inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-gradient-to-r from-flame to-ember px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(253,38,1,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(253,38,1,0.38)]"
                >
                  Start a project
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <Arrow className="h-3.5 w-3.5" />
                  </span>
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex w-full items-center justify-between gap-3 rounded-full border border-white/15 px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65 transition-all duration-300 hover:border-white hover:text-white"
                >
                  <span className="truncate">{EMAIL}</span>
                  <Arrow className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
