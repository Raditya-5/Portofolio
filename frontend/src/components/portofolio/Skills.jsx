import { motion } from "framer-motion";
import { Layout, Braces, Atom, Wind, Server, GitBranch } from "lucide-react";
import { SKILLS, revealUp, EASE } from "@/data/profile";
import Chapter from "@/components/portofolio/Chapter";

const ICONS = {
  layout: Layout,
  braces: Braces,
  atom: Atom,
  wind: Wind,
  server: Server,
  git: GitBranch,
};

export default function Skills() {
  return (
    <section id="keahlian" data-testid="skills-section" className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Chapter nomor="02" judul="Keahlian" testId="skills-chapter" />
          <motion.p {...revealUp} className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
            Perangkat yang saya gunakan setiap hari untuk membangun produk web yang andal dan menyenangkan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 lg:col-span-8">
          {SKILLS.map((skill, i) => {
            const Icon = ICONS[skill.ikon];
            return (
              <motion.div
                key={skill.nama}
                {...revealUp}
                transition={{ ...revealUp.transition, delay: i * 0.08 }}
                data-testid={`skill-card-${i}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/50 p-7 transition-colors duration-500 hover:border-neon/30 ${skill.span}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon/0 blur-3xl transition-colors duration-700 group-hover:bg-neon/10" />
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-white/10 bg-base p-3 text-neon">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-mist">{skill.cat}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{skill.nama}</h3>
                <div className="mt-5 flex items-center gap-4">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.3, ease: EASE, delay: 0.2 + i * 0.08 }}
                      className="h-full rounded-full bg-neon shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                      data-testid={`skill-bar-${i}`}
                    />
                  </div>
                  <span className="font-mono text-sm text-neon" data-testid={`skill-level-${i}`}>
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
