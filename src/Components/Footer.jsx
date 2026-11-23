import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { NAV_LINKS, SOCIALS, EMAIL, AVAILABILITY } from "../Data/siteData";

const SERVICES = ["Web design & UI", "Frontend development", "Full-stack builds"];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-white/10 bg-[#090504] px-5 py-12 md:px-8 lg:px-10 lg:py-16"
    >
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-flame/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center overflow-hidden select-none"
      >
        <span className="translate-y-[-2%] whitespace-nowrap bg-gradient-to-b from-white/[0.28] to-white/[0.05] bg-clip-text font-display text-[clamp(3.5rem,38vw,36rem)] uppercase leading-[0.72] tracking-[-0.01em] text-transparent">
          Rahul
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
          <div>
            <a href="#top" className="group inline-flex items-center gap-3">
              <img
                src="/preview.jpg"
                alt="Rahul"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
                className="h-10 w-10 shrink-0 rounded-full border border-white/15 object-cover object-[50%_20%] transition-colors duration-300 group-hover:border-flame"
              />
              <span className="font-display text-xl uppercase tracking-[0.12em]">
                Rahul<span className="text-flame">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              Independent designer and developer building fast, expressive websites and web
              apps. Strategy, design and code under one roof.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-flame"
            >
              <FaEnvelope className="h-3 w-3" />
              {EMAIL}
            </a>
          </div>

          <div>
            <h1 className="text-[15px] font-semibold  uppercase tracking-[0.24em] text-white">
              Sitemap
            </h1>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-md text-white/55 transition-colors duration-300 hover:text-flame"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-[0.24em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-md text-white/55 transition-colors duration-300 hover:text-flame"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-[0.24em] text-white">
              Elsewhere
            </h3>
            <div className="mt-4 flex gap-2">
              {[
                { href: SOCIALS.github, label: "GitHub", Icon: FaGithub },
                { href: SOCIALS.linkedin, label: "LinkedIn", Icon: FaLinkedin },
                { href: SOCIALS.instagram, label: "Instagram", Icon: FaInstagram },
                { href: `mailto:${EMAIL}`, label: "Email", Icon: FaEnvelope },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/60 text-white/80 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              {AVAILABILITY}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/90">
            © {new Date().getFullYear()} Rahul. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/90">
              Built with React + Tailwind
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/75 text-white/70 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white"
            >
              <FaArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
