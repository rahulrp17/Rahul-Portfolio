import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import WhyChooseMe from "./Components/WhyChooseMe";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import ScrollProgress from "./Components/ScrollProgress";
import BackToTop from "./Components/BackToTop";
import Loader from "./Components/Loader";

import BookNowModal from "./Components/BookNowModal";

function App() {
  const [loading, setLoading] = useState(true);

  // Book Modal States
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  // Reveal-on-scroll for the sections that use the shared `.reveal` class.
  useEffect(() => {
    if (loading) return;

    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [loading]);

  // Open Booking Modal
  const openBooking = (service) => {
    setSelectedService(service);
    setIsBookOpen(true);
  };

  // Close Booking Modal
  const closeBooking = () => {
    setIsBookOpen(false);
    setSelectedService("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-white">
      <ScrollProgress />
      <Navbar />
      <BackToTop />

      <main>
        <Hero onBookNow={openBooking} />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <WhyChooseMe onBookNow={openBooking} />
        <Services onBookNow={openBooking} />
        <Testimonials />
        <CTA onBookNow={openBooking} />
        <Contact />
      </main>

      <Footer />

      <BookNowModal
        key={isBookOpen ? selectedService || "open" : "closed"}
        isOpen={isBookOpen}
        onClose={closeBooking}
        selectedService={selectedService}
      />

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
