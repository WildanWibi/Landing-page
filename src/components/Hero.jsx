import { useEffect, useState } from "react";
import { Stat } from "./common";
import { STATS } from "../data";

const CHAT_SEQUENCE = [
  { type: "in", text: "Halo, ada yang bisa kami bantu hari ini?" },
  { type: "out", text: "Halo, saya merasa diintimidasi di kelas..." },
  { type: "in", text: "Terima kasih sudah berani bercerita. Kamu aman di sini." },
  { type: "in", text: "Bisa ceritakan lebih lanjut? Identitasmu dijamin 100% rahasia." },
  { type: "out", text: "Mereka mengancam saya jika saya melapor..." },
  { type: "in", text: "Jangan khawatir. Tim Polinema Care akan mendampingimu & memproses laporan tanpa membocorkan namamu." },
  { type: "status", text: "🔒 Laporan Terenkripsi & Terkirim" }
];

export default function Hero() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= CHAT_SEQUENCE.length) {
      const timer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 4000);
      return () => clearTimeout(timer);
    }

    const currentMsg = CHAT_SEQUENCE[currentIndex];
    const delay = currentMsg.type === "status" ? 1800 : currentMsg.text.length * 35 + 400;

    const timer = setTimeout(() => {
      setMessages((prev) => {
        const next = [...prev, currentMsg];
        // Keep only the last 3 messages to avoid phone screen overflow
        if (next.length > 3) {
          return next.slice(next.length - 3);
        }
        return next;
      });
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">
            <span className="dot"></span> Platform resmi mahasiswa Politeknik Negeri Malang
          </span>
          <h1>Ruang aman untuk <span className="gradient-text">bercerita</span> &amp; melapor tanpa takut</h1>
          <p className="lead">
            Polinema Care+ menghubungkan mahasiswa dengan konselor profesional untuk konseling langsung,
            serta menyediakan kanal pelaporan perundungan yang <strong>rahasia</strong> dan terlindungi.
          </p>
          <div className="hero-actions">
            <a href="#fitur" className="btn btn-primary btn-lg">Jelajahi Fitur</a>
            <a href="#cara-kerja" className="btn btn-ghost btn-lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" /></svg>
              Lihat Cara Kerja
            </a>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => <Stat key={s.label} count={s.count} label={s.label} />)}
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="app-top">
                <div>
                  <p className="app-hi">Halo, Mahasiswa 👋</p>
                  <p className="app-sub">Apa kabar hari ini?</p>
                </div>
                <span className="app-avatar"></span>
              </div>
              <div className="app-card app-card-primary">
                <span className="app-card-icon">💬</span>
                <div>
                  <p className="app-card-title">Konseling Langsung</p>
                  <p className="app-card-desc">Chat dengan konselor pendamping</p>
                </div>
              </div>
              <div className="app-card">
                <span className="app-card-icon">🛡️</span>
                <div>
                  <p className="app-card-title">Lapor Perundungan</p>
                  <p className="app-card-desc">Rahasia &amp; aman dengan bukti</p>
                </div>
              </div>
              <div className="app-chat">
                {messages.map((msg, idx) => {
                  if (msg.type === "status") {
                    return (
                      <div key={idx} className="playground-encryption" style={{ alignSelf: "center", fontSize: "0.68rem", margin: "4px 0", background: "rgba(16,185,129,0.12)", padding: "4px 10px", borderRadius: "8px", border: "1px solid rgba(16,185,129,0.2)" }}>
                        {msg.text}
                      </div>
                    );
                  }
                  return (
                    <span
                      key={idx}
                      className={`chat-bubble show ${msg.type === "in" ? "chat-in" : "chat-out"}`}
                    >
                      {msg.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="float-card float-1"><span>🔒</span> Terenkripsi</div>
          <div className="float-card float-2"><span>✅</span> Laporan Diterima</div>
        </div>
      </div>
    </section>
  );
}
