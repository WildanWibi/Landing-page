import { Brand } from "./common";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Brand markSize={20} />
          <p>Platform layanan konseling &amp; pelaporan perundungan mahasiswa Politeknik Negeri Malang.</p>
        </div>
        <div className="footer-col">
          <h4>Navigasi</h4>
          <a href="#fitur">Fitur</a>
          <a href="#platform">Platform</a>
          <a href="#cara-kerja">Cara Kerja</a>
          <a href="#teknologi">Teknologi</a>
        </div>
        <div className="footer-col">
          <h4>Proyek</h4>
          <a href="#hero">PBL Kelompok 5</a>
          <a href="#hero">Polinema Care+</a>
        </div>
        <div className="footer-col">
          <h4>Dirancang Oleh</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="footer-author-item">
              <span>M. Wildan Wibisono</span>
              <span className="footer-divider">/</span>
              <span className="footer-nim">244107060118</span>
            </div>
            <div className="footer-author-item">
              <span>Maulida Aprina Putri</span>
              <span className="footer-divider">/</span>
              <span className="footer-nim">244107060098</span>
            </div>
            <div className="footer-author-item">
              <span>Fernanda Ayu Putri</span>
              <span className="footer-divider">/</span>
              <span className="footer-nim">244107060123</span>
            </div>
            <div className="footer-author-item">
              <span>Rayhan Giri Putra</span>
              <span className="footer-divider">/</span>
              <span className="footer-nim">244107060122</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Polinema Care+ — Dikembangkan oleh Kelompok 5.</p>
        </div>
      </div>
    </footer>
  );
}
