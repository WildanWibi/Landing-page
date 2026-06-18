import { useReveal, useCountUp } from "../hooks";

// Heart logo mark
export function BrandMark({ size = 22 }) {
  return (
    <span className="brand-mark">
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </span>
  );
}

export function Brand({ markSize }) {
  return (
    <a href="#hero" className="brand">
      <BrandMark size={markSize} />
      <span className="brand-name">Polinema <strong>Care+</strong></span>
    </a>
  );
}

// Wrapper that adds the reveal-on-scroll animation
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// Animated counting stat
export function Stat({ count, label }) {
  const [ref, value] = useCountUp(count);
  return (
    <div className="stat">
      <span className="stat-num" ref={ref}>{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
