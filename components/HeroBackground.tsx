"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const blobs = [
  { color: "#F37036", size: 560, top: "-12%", left: "-8%" },
  { color: "#007DC5", size: 480, top: "15%", left: "68%" },
  { color: "#8B5CF6", size: 500, top: "58%", left: "8%" },
  { color: "#F37036", size: 360, top: "68%", left: "62%" },
];

const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      blobRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          x: "random(-70, 70)",
          y: "random(-60, 60)",
          scale: "random(0.9, 1.25)",
          duration: 9 + i * 2.2,
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !spotlight) return;

    gsap.set(spotlight, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(spotlight, "x", { duration: 0.7, ease: "power3" });
    const yTo = gsap.quickTo(spotlight, "y", { duration: 0.7, ease: "power3" });

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
    };

    container.addEventListener("mousemove", handleMove);
    return () => container.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-black">
      {blobs.map((b, i) => (
        <div
          key={i}
          ref={(el) => {
            blobRefs.current[i] = el;
          }}
          className="absolute rounded-full blur-[110px]"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
            opacity: 0.28,
          }}
        />
      ))}

      <div
        ref={spotlightRef}
        className="pointer-events-none absolute left-0 top-0 hidden h-128 w-128 rounded-full md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-transparent to-black/85" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />
    </div>
  );
};

export default HeroBackground;
