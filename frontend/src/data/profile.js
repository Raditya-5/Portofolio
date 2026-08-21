export const PROFILE = {
  nama: "Raditya Putra Setiawan",
  peran: "Web Developer",
  tagline: "Membangun pengalaman web yang cepat, modern, dan mudah digunakan.",
  email: "raditya.putra@email.com",
  foto: "https://images.unsplash.com/photo-1768398222507-9f551fa0e9e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbiUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzg3Mjc2OTYxfDA&ixlib=rb-4.1.0&q=85",
  bio: [
    "Halo! Saya Raditya, seorang Web Developer yang bersemangat menciptakan antarmuka yang tidak hanya indah dipandang, tetapi juga cepat dan mudah digunakan oleh siapa saja.",
    "Bagi saya, kode adalah alat untuk memecahkan masalah nyata. Saya senang menerjemahkan ide menjadi produk digital yang fungsional — dari landing page sederhana hingga aplikasi web yang kompleks.",
    "Di luar menulis kode, saya terus belajar teknologi baru, berkontribusi pada komunitas developer, dan percaya bahwa detail kecil adalah yang membuat sebuah produk terasa istimewa.",
  ],
  sosial: [
    { label: "GitHub", href: "https://github.com/radityaputra", ikon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/radityaputra", ikon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/radityaputra", ikon: "instagram" },
    { label: "Email", href: "mailto:raditya.putra@email.com", ikon: "email" },
    { label: "WhatsApp", href: "https://wa.me/6281234567890", ikon: "whatsapp" },
  ],
};

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang", id: "tentang" },
  { label: "Keahlian", href: "#keahlian", id: "keahlian" },
  { label: "Pendidikan", href: "#pendidikan", id: "pendidikan" },
  { label: "Proyek", href: "#proyek", id: "proyek" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

export const SKILLS = [
  { nama: "HTML & CSS", level: 92, ikon: "layout", span: "md:col-span-7", cat: "Fondasi Front-End" },
  { nama: "JavaScript", level: 88, ikon: "braces", span: "md:col-span-5", cat: "Bahasa Inti" },
  { nama: "React", level: 85, ikon: "atom", span: "md:col-span-5", cat: "Library UI" },
  { nama: "Tailwind CSS", level: 90, ikon: "wind", span: "md:col-span-7", cat: "Styling Modern" },
  { nama: "Node.js", level: 75, ikon: "server", span: "md:col-span-6", cat: "Back-End" },
  { nama: "Git & GitHub", level: 86, ikon: "git", span: "md:col-span-6", cat: "Kolaborasi" },
];

export const EDUCATION = [
  {
    tahun: "2021 — Sekarang",
    gelar: "S1 Teknik Informatika",
    institusi: "Perguruan Tinggi, Indonesia",
    deskripsi: "Fokus studi pada pengembangan web, basis data, dan rekayasa perangkat lunak. Aktif dalam komunitas pemrograman kampus.",
  },
  {
    tahun: "2018 — 2021",
    gelar: "SMK — Rekayasa Perangkat Lunak",
    institusi: "Sekolah Menengah Kejuruan",
    deskripsi: "Mempelajari dasar pemrograman, algoritma, dan pengembangan aplikasi. Menyelesaikan proyek akhir berupa aplikasi web sederhana.",
  },
  {
    tahun: "Berkelanjutan",
    gelar: "Sertifikasi & Pelatihan",
    institusi: "Daring / Mandiri",
    deskripsi: "Berbagai kursus pengembangan web front-end dan back-end untuk terus mengikuti perkembangan teknologi terbaru.",
  },
];

export const MARQUEE_ITEMS = [
  "Raditya Putra Setiawan",
  "Web Developer",
  "Tersedia untuk Proyek",
  "Front-End",
  "Back-End",
];

export const EASE = [0.16, 1, 0.3, 1];

export const revealUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};
