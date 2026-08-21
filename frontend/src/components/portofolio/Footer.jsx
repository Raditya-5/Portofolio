import { ArrowUp } from "lucide-react";
import { PROFILE, NAV_LINKS } from "@/data/profile";
import { useLenis } from "@/App";

export default function Footer() {
  const lenis = useLenis();

  const goTo = (e, href) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(href, { offset: -72, duration: 1.4 });
  };

  return (
    <footer data-testid="footer" className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center lg:px-10">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            RPS<span className="text-neon">.</span>
          </p>
          <p className="mt-2 text-xs text-mist">
            © 2026 {PROFILE.nama}. Dibuat dengan ketelitian.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => goTo(e, link.href)}
              data-testid={`footer-link-${link.id}`}
              className="text-xs font-medium text-mist transition-colors duration-300 hover:text-neon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => lenis?.scrollTo(0, { duration: 1.6 })}
          data-testid="footer-back-to-top"
          aria-label="Kembali ke atas"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-mist transition-colors duration-300 hover:border-neon/50 hover:text-neon"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
