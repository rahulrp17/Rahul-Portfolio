import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { EMAIL, WHATSAPP_NUMBER, SOCIALS } from "../Data/siteData";

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

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent. I will get back to you within 24 hours.");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Message could not be sent. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#0e0907] py-20 md:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-flame/[0.08] blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
              <span className="h-px w-8 bg-flame" /> 10 / Contact
            </p>
            <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
              Let&apos;s make
              <br />
              <span className="text-stroke">it happen</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
              Have a project, a collaboration or a question? Send a note. I read every message
              and reply within one working day.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="glow-card group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame/10 text-flame">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Email
                  </span>
                  <span className="mt-1 block truncate text-sm text-white/65 group-hover:text-white">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="glow-card group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame/10 text-flame">
                  <FaWhatsapp className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-white/65 group-hover:text-white">
                    +91 93428 30199
                  </span>
                </span>
              </a>

              <div className="glow-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame/10 text-flame">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Based in
                  </span>
                  <span className="mt-1 block text-sm text-white/65">Tamil Nadu, India</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[
                { href: SOCIALS.github, label: "GitHub", Icon: FaGithub },
                { href: SOCIALS.linkedin, label: "LinkedIn", Icon: FaLinkedin },
                { href: SOCIALS.instagram, label: "Instagram", Icon: FaInstagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
              <span className="ml-2 text-[8px] uppercase tracking-[0.18em] text-white/25">
                Booking Q1 2027
              </span>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="glow-card reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5 sm:p-7 lg:self-start lg:p-8"
            style={{ "--d": "140ms" }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-flame/10 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-flame">
                    Project enquiry
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(1.4rem,3vw,1.9rem)] uppercase leading-none tracking-wide text-white">
                    Tell me about it
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                  Replies in 24h
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Your name
                  </span>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Rahul"
                    required
                    autoComplete="name"
                    className="form-field"
                  />
                </label>
                <label className="block min-w-0">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                    className="form-field"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Project type
                  </span>
                  <select name="project_type" className="form-field form-select" defaultValue="">
                    <option value="">Select a project type</option>
                    <option value="Website / portfolio">Website / portfolio</option>
                    <option value="Web app / dashboard">Web app / dashboard</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="UI / UX design">UI / UX design</option>
                    <option value="Something else">Something else</option>
                  </select>
                </label>
                <label className="block min-w-0">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Budget range
                  </span>
                  <select name="budget" className="form-field form-select" defaultValue="">
                    <option value="">Select a range</option>
                    <option value="₹10k – ₹25k">₹10k – ₹25k</option>
                    <option value="₹25k – ₹50k">₹25k – ₹50k</option>
                    <option value="₹50k – ₹1L">₹50k – ₹1L</option>
                    <option value="₹1L+">₹1L+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  What are you building?
                </span>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="A short brief, goals, timeline and anything useful to know..."
                  required
                  className="form-field resize-none"
                />
              </label>

              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/30">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-flame/70" />
                    NDA friendly
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-flame/70" />
                    Reply in 24 hours
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-flame/70" />
                    No spam
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="min-w-0 text-[9px] leading-relaxed text-white/30">
                    Prefer email? Write to{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="break-all text-white/60 transition-colors duration-300 hover:text-flame"
                    >
                      {EMAIL}
                    </a>
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-flame to-ember px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(253,38,1,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(253,38,1,0.35)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
                  >
                    {loading ? "Sending..." : "Send message"}
                    <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
