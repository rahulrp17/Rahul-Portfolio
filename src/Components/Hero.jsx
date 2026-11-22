import { FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { EMAIL, SOCIALS } from "../Data/siteData";

const TOOLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Java",
  "Figma",
  "Framer Motion",
];

function Spark({ className = "" }) {
  return (
    <svg
      className={`h-2 w-2 shrink-0 text-white/25 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c.7 6.9 4.4 10.6 11.3 12-6.9 1.4-10.6 5.1-11.3 12-.7-6.9-4.4-10.6-11.3-12C7.6 10.6 11.3 6.9 12 0Z" />
    </svg>
  );
}

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

function ToolGroup({ hidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {TOOLS.map((tool) => (
        <span key={`${hidden ? "b" : "a"}-${tool}`} className="flex shrink-0 items-center gap-9">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            {tool}
          </span>
          <Spark />
        </span>
      ))}
    </div>
  );
}

const SOCIAL_PROFILES = [
  { href: SOCIALS.github, label: "GitHub", Icon: FaGithub },
  { href: SOCIALS.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: SOCIALS.instagram, label: "Instagram", Icon: FaInstagram },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: FaEnvelope },
];

export default function Hero({ onBookNow }) {
  return (
    <section id="top" className="hero relative flex flex-col overflow-hidden">
      <div
        className="dot-grid pointer-events-none absolute -left-24 top-20 h-[560px] w-[72%] opacity-[0.16]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[640px] w-[640px] rounded-full bg-flame/[0.08] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-56 left-1/4 h-[460px] w-[560px] rounded-full bg-ember/[0.05] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pt-12 md:px-8 md:pt-28 lg:px-11 lg:pt-11">
        <div className="grid flex-1 items-center gap-10 py-8 md:py-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-10!">
          <div className="hero-copy order-2 lg:order-1">
            <p className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-white/60 backdrop-blur-md sm:gap-x-2.5 sm:px-3.5 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
              </span>
              <span className="whitespace-nowrap">Available for select projects</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="whitespace-nowrap text-white/35">Q1 2027</span>
            </p>

            <p className="mt-6 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35 sm:mt-8">
              <span className="h-px w-8 bg-flame" />
              Independent designer &amp; developer
            </p>

            <h1 className="hero-title mt-5 font-display uppercase">
              <span className="block">
                Bold ideas<span className="text-flame">.</span>
              </span>
              <span className="text-stroke-light block">Built properly.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base md:leading-relaxed">
              I&apos;m Rahul — a designer and developer turning ambitious ideas into fast,
              expressive websites and web apps. Strategy, design and code under one roof.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onBookNow?.("Custom project")}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-gradient-to-r from-flame to-ember px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(253,38,1,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(253,38,1,0.38)]"
              >
                Start a project
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <Arrow className="h-3.5 w-3.5" />
                </span>
              </button>
              <a
                href="#work"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
              >
                See selected work
                <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            <dl className="mt-9 grid max-w-md grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-sm">
              <div className="flex flex-col-reverse px-4 py-3.5">
                <dt className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  Projects
                </dt>
                <dd className="font-display text-2xl leading-none text-white">09</dd>
              </div>
              <div className="flex flex-col-reverse px-4 py-3.5">
                <dt className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  Reply
                </dt>
                <dd className="font-display text-2xl leading-none text-white">24h</dd>
              </div>
              <div className="flex flex-col-reverse px-4 py-3.5">
                <dt className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/35">
                  Booking
                </dt>
                <dd className="font-display text-2xl leading-none text-white">Q1</dd>
              </div>
            </dl>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
              Tamil Nadu, India · Working worldwide
            </p>
          </div>

          <div className="hero-visual relative order-1 mx-auto w-full max-w-[330px] sm:max-w-[340px] md:max-w-[360px] lg:order-2 lg:max-w-[348px]">
            <div className="hero-visual-glow" aria-hidden="true" />

            <div className="glow-card relative rounded-[30px] border border-white/12 bg-[#100907]/60 p-2 shadow-[0_34px_100px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02]">
                <img
                  src="/preview.jpg"
                  width="450"
                  height="600"
                  alt="Portrait of Rahul"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[3.3/4] w-full object-cover object-top sm:aspect-[4.4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706]/70 via-transparent to-transparent" />
              </div>

              <div className="px-3 pb-4 pt-3.5 text-center sm:px-4 sm:pb-5 sm:pt-4">
                <span className="mx-auto inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-flame/30 bg-black/25 px-2.5 py-1 text-[6.5px] font-bold uppercase tracking-[0.14em] text-white/80 sm:gap-2 sm:px-3 sm:text-[7px]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
                  </span>
                  Available for work
                </span>

                <h2 className="mt-2.5 font-display text-[1.35rem] uppercase leading-none text-white sm:mt-3 sm:text-[1.65rem]">
                  Rahul
                </h2>
                <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.22em] text-white/40 sm:text-[8px]">
                  MERN Stack Developer
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-1.5 sm:mt-4">
                  {SOCIAL_PROFILES.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                      aria-label={label}
                      className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-white/55 transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
                    >
                      <Icon className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
                  <a
                    href="/resume.pdf"
                    download
                    className="group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-white/15 px-3 py-2.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-white hover:text-white"
                  >
                    <FaDownload className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    CV
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-flame to-ember px-3 py-2.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(253,38,1,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(253,38,1,0.36)]"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-strip mt-auto border-t border-white/10 bg-[#0a0605]/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-5 md:px-8 lg:px-10">
          <span className="hidden shrink-0 text-[8px] font-semibold uppercase leading-relaxed tracking-[0.24em] text-white/35 md:block">
            Tools I
            <br />
            build with
          </span>
          <span className="hidden h-9 w-px shrink-0 bg-white/15 md:block" />
          <div className="marquee flex-1">
            <div className="marquee-track">
              <ToolGroup />
              <ToolGroup hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
