import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../Data/siteData";

const EMPTY_FORM = {
  service: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  timeline: "",
  details: "",
};

const BUDGETS = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹40,000", "₹40,000+"];

const TIMELINES = [
  "Within 1 week",
  "2–3 weeks",
  "1 month",
  "1–2 months",
  "More than 2 months",
  "Flexible",
];

export default function BookNowModal({ isOpen, onClose, selectedService }) {
  const [form, setForm] = useState({
    ...EMPTY_FORM,
    service: selectedService || "",
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const sendToWhatsApp = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.details) {
      alert("Please fill all required fields");
      return;
    }

    const message = `
🚀 *New Website Inquiry*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 Service: ${form.service || "Custom project"}

👤 Name: ${form.name}

📧 Email: ${form.email}

📱 Phone: ${form.phone}

🏢 Company: ${form.company || "N/A"}

💰 Budget: ${form.budget || "Not specified"}

⏳ Timeline: ${form.timeline || "Not specified"}

📝 Project details:
  ${form.details}
`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/12 bg-[#0d0705] shadow-[0_50px_140px_rgba(0,0,0,0.6)]"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-flame/15 blur-[90px]"
              aria-hidden="true"
            />

            <div className="relative flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-7">
              <div>
                <p className="flex items-center gap-2.5 text-[8px] font-semibold uppercase tracking-[0.24em] text-flame">
                  <span className="h-px w-6 bg-flame" />
                  Start a project
                </p>
                <h2
                  id="booking-modal-title"
                  className="mt-3 font-display text-[clamp(1.6rem,4vw,2.4rem)] uppercase leading-none tracking-wide text-white"
                >
                  Book your project
                </h2>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-white/45 sm:text-sm">
                  Share a few details and I will continue the conversation on WhatsApp.
                  Replies within 24 hours.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking form"
                className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-white/12 text-white/55 transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                <FaTimes className="h-3.5 w-3.5" />
              </button>
            </div>

            <form onSubmit={sendToWhatsApp} className="relative p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Selected service
                  </span>
                  <input
                    type="text"
                    value={form.service || "Custom project"}
                    readOnly
                    className="w-full rounded-xl border border-flame/25 bg-flame/10 px-3.5 py-3 text-xs font-semibold text-flame outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Full name *
                  </span>
                  <div className="relative">
                    <FaUser className="pointer-events-none absolute left-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-flame/70" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="form-field pl-10"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Email address *
                  </span>
                  <div className="relative">
                    <FaEnvelope className="pointer-events-none absolute left-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-flame/70" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="form-field pl-10"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Phone number *
                  </span>
                  <div className="relative">
                    <FaPhone className="pointer-events-none absolute left-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-flame/70" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className="form-field pl-10"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Company / brand
                  </span>
                  <div className="relative">
                    <FaGlobe className="pointer-events-none absolute left-3.5 top-1/2 h-3 w-3 -translate-y-1/2 text-flame/70" />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Optional"
                      className="form-field pl-10"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Budget
                  </span>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="form-field cursor-pointer"
                  >
                    <option value="">Select budget</option>
                    {BUDGETS.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Timeline
                  </span>
                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="form-field cursor-pointer"
                  >
                    <option value="">Select timeline</option>
                    {TIMELINES.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Project details *
                  </span>
                  <textarea
                    rows={5}
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    required
                    placeholder="A short brief, goals, timeline and anything useful to know..."
                    className="form-field resize-none"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[9px] leading-relaxed text-white/30">
                  This opens WhatsApp with your details pre-filled. Nothing is sent until you
                  hit send there.
                </p>
                <button
                  type="submit"
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-flame to-ember px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(253,38,1,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(253,38,1,0.38)] sm:w-auto sm:min-w-[200px]"
                >
                  Send on WhatsApp
                  <FaWhatsapp className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
