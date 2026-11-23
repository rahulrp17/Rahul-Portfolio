import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, AVAILABILITY } from "../Data/siteData";

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
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-50 mx-auto w-full max-w-[1440px] px-4 pt-3 sm:px-6 lg:px-10">
        <nav
          aria-label="Primary navigation"
          className="flex h-[62px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b0706]/75 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5"
        >
          <a href="#top" className="group inline-flex items-center gap-3">
            <img
              src="/preview.jpg"
              alt="Rahul"
              width="80"
              height="80"
              loading="eager"
              decoding="async"
              className="h-10 w-10 shrink-0 rounded-full border border-white/15 object-cover object-[50%_20%] transition-colors duration-300 group-hover:border-flame"
            />
            <span className="font-display text-lg uppercase tracking-[0.12em] text-white">
              Rahul<span className="text-flame">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex rounded-full px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45 xl:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              {AVAILABILITY}
            </span>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/75 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white sm:inline-flex"
            >
              Let&apos;s talk
              <Arrow className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-white hover:text-white lg:hidden"
            >
              {open ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-[#0b0706]/96 px-5 pb-6 pt-24 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-md flex-col">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30">
            Navigate
          </p>
          <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-display text-[10px] tracking-[0.16em] text-flame">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl uppercase text-white/80 transition-colors duration-300 group-hover:text-white">
                      {link.label}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/40 transition-colors duration-300 group-hover:border-flame group-hover:text-flame">
                    <Arrow className="h-3.5 w-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-8">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-between rounded-full bg-gradient-to-r from-flame to-ember px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
            >
              Start a project
              <Arrow className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-white/30">
              {AVAILABILITY} · Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
