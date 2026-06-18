import { useState, useEffect } from "react";
import { Reveal } from "./common";
import { FEATURES, PLATFORMS, STEPS, TECH, FAQS, TESTIMONIALS } from "../data";

function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export function TrustBanner() {
  return (
    <section className="section section-tight">
      <div className="container">
        <Reveal className="trust-banner">
          <p>Dibangun untuk satu tujuan sederhana namun penting:</p>
          <h2>Tidak ada mahasiswa yang harus menghadapi perundungan atau tekanan mental sendirian.</h2>
        </Reveal>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="section" id="fitur">
      <div className="container">
        <SectionHead eyebrow="Fitur Unggulan" title="Semua yang dibutuhkan dalam satu platform">
          Dari pelaporan rahasia hingga konseling real-time, dirancang dengan empati dan keamanan sebagai prioritas.
        </SectionHead>
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal as="article" className="feature-card" delay={(i % 3) * 80} key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Platforms() {
  const [activeTab, setActiveTab] = useState(0); // Default to Web Admin Dashboard

  const renderMockup = () => {
    switch (activeTab) {
      case 0: // Mobile
        return (
          <div className="mockup-mobile-screen">
            <div className="mockup-mobile-inner">
              <div style={{ fontWeight: 800, borderBottom: "1px solid var(--border)", paddingBottom: "4px", marginBottom: "8px", color: "var(--text)" }}>Care Mobile</div>
              <div style={{ background: "var(--primary)", color: "white", padding: "6px", borderRadius: "8px", fontSize: "0.58rem", textAlign: "center", marginBottom: "4px" }}>
                📄 Form Laporan Baru
              </div>
              <div style={{ border: "1px solid var(--border)", padding: "4px", borderRadius: "8px", fontSize: "0.55rem", marginBottom: "4px", color: "var(--text)" }}>
                Kategori: Perundungan Verbal
              </div>
              <div style={{ border: "1px solid var(--border)", padding: "4px", borderRadius: "8px", fontSize: "0.55rem", flexGrow: 1, minHeight: "50px", color: "var(--text-soft)", fontStyle: "italic" }}>
                "Saya sering diejek di lorong kelas..."
              </div>
              <button style={{ background: "#22c55e", border: "none", color: "white", borderRadius: "99px", padding: "4px", fontSize: "0.58rem", fontWeight: "bold", cursor: "pointer", width: "100%" }}>
                Kirim Laporan 🛡️
              </button>
            </div>
          </div>
        );
      case 1: // Web Admin
        return (
          <div className="mockup-inner">
            <div className="mockup-header">
              <span className="mockup-dot"></span>
              <span className="mockup-dot"></span>
              <span className="mockup-dot"></span>
              <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginLeft: "4px" }}>counselor.polinemacare.id</span>
            </div>
            <div className="mockup-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "6px", marginBottom: "6px" }}>
                <span style={{ fontWeight: "bold", fontSize: "0.7rem", color: "var(--text)" }}>Dashboard Konselor</span>
                <span style={{ background: "#22c55e", color: "white", padding: "1px 5px", borderRadius: "4px", fontSize: "0.55rem" }}>Online</span>
              </div>
              <div style={{ display: "flex", gap: "6px", flexGrow: 1 }}>
                <div style={{ width: "35%", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ background: "var(--border)", padding: "4px", borderRadius: "4px", fontSize: "0.55rem", fontWeight: "bold", color: "var(--text)" }}>Laporan #1024</div>
                  <div style={{ padding: "4px", fontSize: "0.55rem", color: "var(--text-soft)" }}>Laporan #1023</div>
                  <div style={{ padding: "4px", fontSize: "0.55rem", color: "var(--text-soft)" }}>Laporan #1022</div>
                </div>
                <div style={{ width: "65%", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ fontWeight: "bold", color: "var(--text)", fontSize: "0.65rem" }}>Detail Kasus</div>
                  <p style={{ fontSize: "0.6rem", color: "var(--text-soft)" }}>"Tindakan intimidasi verbal di area kantin utama..."</p>
                  <div style={{ marginTop: "auto", display: "flex", gap: "4px" }}>
                    <button style={{ background: "var(--primary)", border: "none", color: "white", borderRadius: "4px", padding: "2px 4px", fontSize: "0.55rem", cursor: "pointer" }}>Proses</button>
                    <button style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", borderRadius: "4px", padding: "2px 4px", fontSize: "0.55rem", cursor: "pointer" }}>Selesai</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2: // Backend
      default:
        return (
          <div className="mockup-inner" style={{ background: "#0f172a", border: "none" }}>
            <div className="mockup-header" style={{ background: "#1e293b", borderBottom: "1px solid #334155" }}>
              <span className="mockup-dot"></span>
              <span className="mockup-dot"></span>
              <span className="mockup-dot"></span>
              <span style={{ fontSize: "0.6rem", color: "#94a3b8", marginLeft: "4px" }}>api.polinemacare.id</span>
            </div>
            <div className="mockup-body" style={{ padding: "6px" }}>
              <pre className="mockup-code" style={{ margin: 0 }}>
                {`GET /api/reports HTTP/1.1
Host: api.polinemacare.id
Authorization: Bearer sanctum_token...

{
  "status": "success",
  "data": {
    "id": 1024,
    "category": "bullying_verbal",
    "status": "proses",
    "is_anonymous": true
  }
}`}
              </pre>
            </div>
          </div>
        );
    }
  };

  const p = PLATFORMS[activeTab];

  return (
    <section className="section section-alt" id="platform">
      <div className="container">
        <SectionHead eyebrow="Tiga Platform, Satu Ekosistem" title="Terintegrasi dari ujung ke ujung">
          Arsitektur multi-tier yang menghubungkan mahasiswa, konselor, dan admin dalam satu sistem yang mulus.
        </SectionHead>

        <div className="platform-tabs">
          {PLATFORMS.map((platform, idx) => (
            <button
              key={platform.title}
              className={`platform-tab-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {platform.icon} {platform.tag}
            </button>
          ))}
        </div>

        <Reveal className="platform-showcase-container">
          <div className="platform-details">
            <span className="platform-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul className="platform-list" style={{ marginTop: "0" }}>
              {p.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="platform-screen-mockup">
            {renderMockup()}
          </div>
        </Reveal>
      </div>
    </section>
  );
}



export function Steps() {
  return (
    <section className="section" id="cara-kerja">
      <div className="container">
        <SectionHead eyebrow="Cara Kerja" title="Mulai dalam empat langkah mudah">
          Mendapatkan bantuan tidak pernah serumit yang dibayangkan.
        </SectionHead>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal className="step" delay={(i % 4) * 80} key={s.num}>
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section section-alt" id="testimoni">
      <div className="container">
        <SectionHead eyebrow="Testimoni" title="Ulasan Pengguna">
          Apa yang dikatakan mahasiswa dan konselor tentang dampak nyata Polinema Care+.
        </SectionHead>
        <Reveal className="testimonials-slider-container">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-slide" key={i}>
                <span className="testimonial-avatar">{t.avatar}</span>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author-info">
                  <span className="testimonial-author">{t.author}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${activeSlide === i ? "active" : ""}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHead eyebrow="Pertanyaan Umum" title="Ada pertanyaan tentang Polinema Care+?">
          Berikut adalah jawaban untuk beberapa pertanyaan yang paling sering ditanyakan oleh mahasiswa.
        </SectionHead>
        <Reveal className="faq-container">
          {FAQS.map((faq, i) => (
            <div className={`faq-item ${activeIndex === i ? "active" : ""}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <span className="faq-icon-wrapper">+</span>
              </button>
              <div className="faq-answer" style={{ maxHeight: activeIndex === i ? "200px" : "0" }}>
                <div className="faq-answer-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section className="section section-alt" id="teknologi">
      <div className="container">
        <SectionHead eyebrow="Tech Stack" title="Teknologi Yang Digunakan">
          Tumpukan teknologi yang andal, aman, dan berskala untuk pengalaman terbaik.
        </SectionHead>
        <div className="tech-grid">
          {TECH.map((t, i) => (
            <Reveal className="tech-chip" delay={(i % 4) * 60} key={t.name}>
              <span>{t.icon}</span> {t.name}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="section" id="kontak">
      <div className="container">
        <Reveal className="cta">
          <div className="cta-glow" aria-hidden="true"></div>
          <h2>Kamu tidak sendirian.</h2>
          <p>Ambil langkah pertama hari ini. Polinema Care+ siap mendengarkan, melindungi, dan mendampingimu.</p>
          <div className="cta-actions">
            <a href="/polinema-care.apk" download="polinema-care.apk" className="btn btn-light btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", display: "inline-block", verticalAlign: "middle" }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
            <a href="#fitur" className="btn btn-outline-light btn-lg">Pelajari Lebih Lanjut</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
