import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "@/components/portofolio/Navbar";
import Hero from "@/components/portofolio/Hero";
import Marquee from "@/components/portofolio/Marquee";
import About from "@/components/portofolio/About";
import Skills from "@/components/portofolio/Skills";
import Education from "@/components/portofolio/Education";
import Projects from "@/components/portofolio/Projects";
import Contact from "@/components/portofolio/Contact";
import Footer from "@/components/portofolio/Footer";

const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export default function App() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const instance = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId;
    const loop = (time) => {
      instance.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    setLenis(instance);
    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <div className="min-h-screen bg-base text-ink">
        <a href="#beranda" data-testid="skip-to-content-link" className="skip-link">
          Langsung ke konten
        </a>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <div className="noise-overlay" aria-hidden="true" />
      </div>
    </LenisContext.Provider>
  );
}
