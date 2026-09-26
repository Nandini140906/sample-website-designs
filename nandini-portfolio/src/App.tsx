import { useIsMobile } from "./hooks/useIsMobile";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

// Phase 0 placeholder: a font + hook smoke test on the near-black page.
// Replaced by the background canvas + sections in later phases.
export default function App() {
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <main style={{ padding: "12vh 8vw", display: "grid", gap: "1.25rem" }}>
      <p className="mono-label">// 00 — scaffold</p>
      <h1 style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
        Nand<span className="accent">i</span>ni Das
      </h1>
      <p style={{ color: "var(--dim)", maxWidth: "60ch" }}>
        Developer &amp; automation builder. Space Grotesk body copy — Fraunces
        display — Space Mono labels.
      </p>
      <p className="mono-label" style={{ color: "var(--dimmer)" }}>
        mobile: {String(isMobile)} · reduced-motion: {String(reducedMotion)}
      </p>
    </main>
  );
}
