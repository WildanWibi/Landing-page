import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {
  TrustBanner,
  Features,
  Platforms,
  Steps,
  FAQAccordion,
  Tech,
  CTA
} from "./components/Sections";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="bg-decor" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TrustBanner />
        <Features />
        <Platforms />
        <Steps />
        <FAQAccordion />
        <Tech />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
