import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { PROFILE, revealUp } from "@/data/profile";
import Chapter from "@/components/portofolio/Chapter";

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
  whatsapp: MessageCircle,
};

const initialForm = { nama: "", email: "", pesan: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (form.nama.trim().length < 2) errs.nama = "Nama wajib diisi (min. 2 karakter).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Masukkan alamat email yang valid.";
    if (form.pesan.trim().length < 10) errs.pesan = "Pesan wajib diisi (min. 10 karakter).";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const subject = encodeURIComponent(`Pesan dari ${form.nama.trim()} — Portfolio`);
    const body = encodeURIComponent(
      `Halo Raditya,\n\n${form.pesan.trim()}\n\nSalam,\n${form.nama.trim()}\n${form.email.trim()}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
      setSent(false);
    },
  });

  const inputClass = (key) =>
    `w-full rounded-xl border bg-base px-5 py-3.5 text-sm text-ink placeholder:text-mist/60 outline-none transition-colors duration-300 focus:border-neon focus:ring-2 focus:ring-neon/20 ${
      errors[key] ? "border-red-400/60" : "border-white/10"
    }`;

  return (
    <section id="kontak" data-testid="contact-section" className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Chapter nomor="05" judul="Kontak" testId="contact-chapter" />
          <motion.p {...revealUp} className="mt-8 max-w-sm text-base leading-relaxed text-mist">
            Punya ide proyek, peluang kerja sama, atau sekadar ingin menyapa? Kirim pesan — saya akan membalas secepatnya.
          </motion.p>

          <motion.div {...revealUp} className="mt-10 flex items-center gap-3">
            {PROFILE.sosial.map((s) => {
              const Icon = SOCIAL_ICONS[s.ikon];
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-testid={`social-link-${s.ikon}`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface/60 text-mist transition-colors duration-300 hover:border-neon/50 hover:text-neon"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.p {...revealUp} className="mt-8 font-mono text-xs text-mist">
            <Mail className="mr-2 inline h-3.5 w-3.5 text-neon" />
            {PROFILE.email}
          </motion.p>
        </div>

        <motion.form
          {...revealUp}
          onSubmit={handleSubmit}
          noValidate
          data-testid="contact-form"
          className="rounded-3xl border border-white/5 bg-surface/40 p-8 md:p-10 lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nama" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
                Nama
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Nama lengkap Anda"
                data-testid="contact-input-nama"
                className={inputClass("nama")}
                {...field("nama")}
              />
              {errors.nama && (
                <p data-testid="contact-error-nama" className="mt-2 text-xs text-red-400">
                  {errors.nama}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="nama@email.com"
                data-testid="contact-input-email"
                className={inputClass("email")}
                {...field("email")}
              />
              {errors.email && (
                <p data-testid="contact-error-email" className="mt-2 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="pesan" className="mb-2 block font-mono text-xs uppercase tracking-widest text-mist">
              Pesan
            </label>
            <textarea
              id="pesan"
              rows={6}
              placeholder="Ceritakan proyek atau ide Anda..."
              data-testid="contact-input-pesan"
              className={`${inputClass("pesan")} resize-none`}
              {...field("pesan")}
            />
            {errors.pesan && (
              <p data-testid="contact-error-pesan" className="mt-2 text-xs text-red-400">
                {errors.pesan}
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              type="submit"
              data-testid="contact-submit-button"
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-neon px-8 py-3.5 text-sm font-bold text-base transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              Kirim Pesan
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
            {sent && (
              <p data-testid="contact-sent-hint" className="text-xs text-neon">
                Membuka aplikasi email Anda...
              </p>
            )}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-mist/70">
            Formulir ini membuka aplikasi email Anda dengan pesan yang sudah terisi — tanpa menyimpan data apa pun.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
