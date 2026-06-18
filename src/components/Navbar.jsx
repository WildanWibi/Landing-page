import { useState } from "react";
import { Brand } from "./common";
import { useScrolled } from "../hooks";

const LINKS = [
  { href: "#fitur", label: "Fitur" },
  { href: "#platform", label: "Platform" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#teknologi", label: "Teknologi" },
];

export default function Navbar({ theme, toggleTheme }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Brand />
        
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="/polinema-care.apk" download="polinema-care.apk" className="btn btn-primary btn-sm mobile-only-btn" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Tema"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
          
          <a href="/polinema-care.apk" download="polinema-care.apk" className="btn btn-primary btn-sm desktop-only-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", display: "inline-block", verticalAlign: "middle" }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
          
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

