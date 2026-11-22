import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = ["start", "contact", "site-footer"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length || !("IntersectionObserver" in window)) return;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setNearEnd(visible.size > 0);
      },
      { threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  if (!show || nearEnd) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-[#100907]/90 text-white/70 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-flame hover:bg-flame hover:text-white sm:bottom-6 sm:right-6"
    >
      <FaArrowUp className="h-3.5 w-3.5" />
    </button>
  );
}
