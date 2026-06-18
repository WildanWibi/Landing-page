export const FEATURES = [
  { icon: "🛡️", title: "Pelaporan Perundungan", desc: "Laporkan insiden secara rahasia, lengkap dengan lampiran bukti dokumen atau gambar. Identitasmu terlindungi." },
  { icon: "💬", title: "Live Chat Konseling", desc: "Ngobrol langsung dengan konselor profesional secara real-time. Riwayat chat tersimpan setelah sesi selesai." },
  { icon: "📅", title: "Pemesanan Jadwal Sesi", desc: "Lihat profil konselor, spesialisasi, dan jadwal praktik — lalu pesan slot konseling yang paling cocok untukmu." },
  { icon: "🔔", title: "Notifikasi Real-time", desc: "Dapatkan pemberitahuan langsung saat laporanmu diproses atau saat konselor membalas pesanmu." },
  { icon: "🔐", title: "Keamanan Akun", desc: "Autentikasi berbasis token (Sanctum) dengan password ter-hash Bcrypt. Termasuk login Google & pemulihan kata sandi." },
  { icon: "⚖️", title: "Moderasi Laporan", desc: "Setiap laporan dimoderasi melalui alur jelas: Menunggu → Diterima → Diproses → Selesai, agar tertangani tuntas." },
];

export const PLATFORMS = [
  {
    icon: "📱", tag: "Mobile", title: "Aplikasi Mahasiswa", featured: false,
    desc: "Aplikasi Flutter untuk mahasiswa: lapor perundungan, ajukan sesi, dan chat dengan konselor pendamping.",
    list: ["Pendaftaran & Login", "Pelaporan dengan lampiran bukti", "Chat room & pemesanan jadwal konseling", "Melakukan sesi konseling"],
  },
  {
    icon: "🖥️", tag: "Web Admin", title: "Dashboard Konselor", featured: true,
    desc: "Panel web React untuk konselor & admin memoderasi laporan dan mendampingi mahasiswa secara langsung.",
    list: ["Moderasi laporan perundungan", "Live chat & riwayat konseling", "Manajemen akun & jadwal praktik", "Membalas chat dari konseling"],
  },
  {
    icon: "⚙️", tag: "Backend", title: "REST API Pusat", featured: false,
    desc: "Server Laravel sebagai otak sistem: mengelola data, autentikasi, notifikasi, dan API live chat.",
    list: ["Autentikasi token Sanctum", "Endpoint laporan & konseling", "Sistem notifikasi real-time"],
  },
];

export const STEPS = [
  { num: 1, title: "Daftar Akun", desc: "Buat akun mahasiswa dalam hitungan menit, atau masuk cepat dengan Google." },
  { num: 2, title: "Pilih Layanan", desc: "Buat laporan perundungan atau ajukan sesi konseling sesuai kebutuhanmu." },
  { num: 3, title: "Terhubung", desc: "Konselor mendampingimu lewat live chat, dan laporanmu mulai diproses." },
  { num: 4, title: "Tertangani", desc: "Pantau status melalui notifikasi hingga masalahmu benar-benar selesai." },
];

export const TECH = [
  { icon: "🎯", name: "Laravel 10+" },
  { icon: "⚛️", name: "React + Vite" },
  { icon: "💙", name: "Flutter" },
  { icon: "🐬", name: "MySQL" },
  { icon: "🔑", name: "Sanctum Auth" },
  { icon: "🔄", name: "Axios" },
  { icon: "🧭", name: "GoRouter" },
  { icon: "🔐", name: "Bcrypt" },
];

export const STATS = [
  { count: 3, label: "Platform terintegrasi" },
  { count: 100, label: "% Kerahasiaan" },
  { count: 24, label: "Akses kapan saja" },
];

export const FAQS = [
  {
    question: "Apakah identitas pelapor benar-benar rahasia?",
    answer: "Ya, 100%. Polinema Care+ dirancang khusus dengan prioritas privasi tertinggi. Identitas Anda didekripsi secara aman dan hanya dapat diakses oleh konselor profesional yang menangani kasus Anda. Mahasiswa lain atau pihak luar tidak akan pernah bisa melihat siapa yang melapor."
  },
  {
    question: "Siapa saja yang bisa menggunakan layanan ini?",
    answer: "Layanan ini terbuka secara gratis bagi seluruh mahasiswa aktif Politeknik Negeri Malang (Polinema) dari semua jurusan, jenjang, dan kampus (utama maupun PSDKU)."
  },
  {
    question: "Apakah saya bisa memilih konselor tertentu?",
    answer: "Tentu. Pada menu Pemesanan Jadwal Sesi di aplikasi, Anda dapat melihat profil lengkap konselor, spesialisasi keahlian mereka (misal: kecemasan akademik, perundungan, stres), serta jadwal praktiknya untuk memilih yang paling sesuai."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Sistem pelaporannya benar-benar rahasia. Saya merasa sangat aman ketika melaporkan tindakan intimidasi tanpa takut akan adanya balas dendam. Respons konselor juga cepat.",
    author: "Mahasiswa Jurusan TI",
    role: "Pengguna Aplikasi Mobile",
    avatar: "🎓"
  },
  {
    quote: "Aplikasi ini mempermudah kami menjangkau mahasiswa yang sedang mengalami tekanan psikologis tetapi enggan datang langsung. Konseling chat membuat mereka lebih terbuka.",
    author: "Dra. Endang Sri Wahyuni",
    role: "Konselor UPT Bimbingan Konseling",
    avatar: "👩‍🏫"
  },
  {
    quote: "Pemesanan jadwal sesi sangat praktis. Kita bisa memilih waktu yang tidak bertabrakan dengan jadwal kuliah, lalu melakukan konseling secara offline maupun online via chat.",
    author: "Mahasiswa Jurusan Administrasi Niaga",
    role: "Pengguna Aplikasi Mobile",
    avatar: "📚"
  }
];

