import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE, EASE } from "@/data/profile";
import { useLenis } from "@/App";

const lines = ["RADITYA", "PUTRA", "SETIAWAN"];

function MaskedLine({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const lenis = useLenis();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const goTo = (e, href) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(href, { offset: -72, duration: 1.5 });
  };

  return (
    <section
      id="beranda"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      <motion.div
        style={{ y: glowY }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-neon/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,232,236,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(230,232,236,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <motion.div style={{ opacity: fade }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-surface/60 px-4 py-1.5"
            data-testid="hero-availability-badge"
          >
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-neon" />
            <span className="font-mono text-xs uppercase tracking-widest text-mist">
              Tersedia untuk proyek
            </span>
          </motion.div>

          <h1
            data-testid="hero-name"
            className="font-display text-[13vw] font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            {lines.map((line, i) => (
              <MaskedLine key={line} delay={0.45 + i * 0.14}>
                {line}
                {i === 2 && <span className="text-neon">.</span>}
              </MaskedLine>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-neon" />
            <p data-testid="hero-role" className="font-mono text-sm uppercase tracking-[0.3em] text-neon">
              {PROFILE.peran}
            </p>
          </motion.div>

          <motion.p
            data-testid="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
            className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#kontak"
              onClick={(e) => goTo(e, "#kontak")}
              data-testid="hero-cta-contact"
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-bold text-base transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              Hubungi Saya
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#tentang"
              onClick={(e) => goTo(e, "#tentang")}
              data-testid="hero-cta-about"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-neon/50 hover:text-neon"
            >
              Lihat Profil
              <ArrowDown className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: photoY }}
          className="hidden lg:col-span-5 lg:block"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
            className="spotlight-frame relative ml-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10"
            data-testid="hero-photo-frame"
          >
            <img
              src={PROFILE.foto}
              alt={`Foto profil ${PROFILE.nama}`}
              data-testid="hero-profile-photo"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-neon">Potret</p>
              <p className="font-display text-lg font-bold text-ink">{PROFILE.nama}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex"
        data-testid="hero-scroll-indicator"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">Gulir</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-neon" />
        </motion.span>
      </motion.div>
    </section>
  );
}
