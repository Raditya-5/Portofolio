import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION, revealUp } from "@/data/profile";
import Chapter from "@/components/portofolio/Chapter";

export default function Education() {
  return (
    <section id="pendidikan" data-testid="education-section" className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Chapter nomor="03" judul="Pendidikan" testId="education-chapter" />
        </div>

        <div className="relative lg:col-span-8">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[22px] top-4 w-px bg-gradient-to-b from-neon/50 via-white/10 to-transparent"
          />
          <div className="space-y-14">
            {EDUCATION.map((edu, i) => (
              <motion.article
                key={i}
                {...revealUp}
                transition={{ ...revealUp.transition, delay: i * 0.12 }}
                data-testid={`education-item-${i}`}
                className="group relative pl-16"
              >
                <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-neon/30 bg-base text-neon transition-all duration-500 group-hover:bg-neon group-hover:text-base group-hover:shadow-[0_0_24px_rgba(34,211,238,0.4)]">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
                  {edu.tahun}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  {edu.gelar}
                </h3>
                <p className="mt-1 text-sm font-medium text-mist">{edu.institusi}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist md:text-base">
                  {edu.deskripsi}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
