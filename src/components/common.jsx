import { useReveal, useCountUp } from "../hooks";

// Heart logo mark
export function BrandMark({ size = 32 }) {
  const containerSize = size + 12;
  return (
    <span className="brand-mark" style={{ width: containerSize, height: containerSize }}>
      <img src="/POLINEMA_CARE.png" alt="Logo" style={{ width: size, height: size, objectFit: 'contain' }} />
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
