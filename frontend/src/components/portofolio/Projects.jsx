import { motion } from "framer-motion";
import { FolderGit2, Sparkles } from "lucide-react";
import { revealUp } from "@/data/profile";
import Chapter from "@/components/portofolio/Chapter";

export default function Projects() {
  return (
    <section id="proyek" data-testid="projects-section" className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Chapter nomor="04" judul="Proyek" testId="projects-chapter" />
        </div>

        <div className="lg:col-span-8">
          <motion.div
            {...revealUp}
            className="relative overflow-hidden rounded-3xl border border-dashed border-white/15 bg-surface/30 px-8 py-20 text-center md:py-28"
            data-testid="projects-coming-soon"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[100px]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-neon/30 text-neon"
            >
              <Sparkles className="h-7 w-7" />
            </motion.div>
            <h3 className="text-stroke mt-8 font-display text-5xl font-bold uppercase tracking-tight md:text-7xl">
              Segera Hadir
            </h3>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-mist md:text-base">
              Kumpulan proyek pilihan sedang disiapkan dengan penuh ketelitian. Nantikan — sesuatu yang menarik sedang dibangun.
            </p>
          </motion.div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                {...revealUp}
                transition={{ ...revealUp.transition, delay: 0.15 + i * 0.1 }}
                data-testid={`project-placeholder-${i}`}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-surface/20 px-6 py-10 text-center transition-colors duration-500 hover:border-neon/20"
              >
                <FolderGit2 className="h-6 w-6 text-mist" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-mist">
                  Slot Proyek 0{i + 1}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
