import { motion } from "framer-motion";
import { revealUp } from "@/data/profile";

export default function Chapter({ nomor, judul, testId }) {
  return (
    <motion.div {...revealUp} data-testid={testId} className="lg:sticky lg:top-28">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">{nomor}</p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {judul}
      </h2>
      <span className="mt-6 block h-px w-16 bg-neon/60" />
    </motion.div>
  );
}
