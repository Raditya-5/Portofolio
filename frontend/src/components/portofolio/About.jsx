import { motion } from "framer-motion";
import { PROFILE, revealUp } from "@/data/profile";
import Chapter from "@/components/portofolio/Chapter";

const STATS = [
  { nilai: "3+", label: "Tahun Pengalaman" },
  { nilai: "15+", label: "Proyek Selesai" },
  { nilai: "10+", label: "Teknologi Dikuasai" },
];

export default function About() {
  return (
    <section id="tentang" data-testid="about-section" className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Chapter nomor="01" judul="Tentang" testId="about-chapter" />
        </div>
        <div className="lg:col-span-8">
          {PROFILE.bio.map((para, i) => (
            <motion.p
              key={i}
              {...revealUp}
              transition={{ ...revealUp.transition, delay: i * 0.1 }}
              data-testid={`about-paragraph-${i}`}
              className={`leading-relaxed ${
                i === 0
                  ? "text-xl font-medium text-ink md:text-2xl"
                  : "mt-6 text-base text-mist md:text-lg"
              }`}
            >
              {para}
            </motion.p>
          ))}

          <div className="mt-14 grid grid-cols-3 gap-4 md:gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...revealUp}
                transition={{ ...revealUp.transition, delay: 0.15 + i * 0.1 }}
                data-testid={`about-stat-${i}`}
                className="group rounded-2xl border border-white/5 bg-surface/50 p-6 transition-colors duration-500 hover:border-neon/30"
              >
                <p className="font-display text-3xl font-bold text-neon md:text-5xl">
                  {stat.nilai}
                </p>
                <p className="mt-2 text-xs text-mist md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
