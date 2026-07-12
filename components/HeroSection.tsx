"use client";

import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import Button from "./Button";
import HeroBackground from "./HeroBackground";
import SectionEyebrow from "./SectionEyebrow";
import TextCycleAnimation from "./TextCycleAnimation";

type Prop = {
  heading: string;
  description?: string;
  textCycle?: string[];
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

const HeroSection = ({ heading, description, textCycle }: Prop) => {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, { opacity: 0, y: 16, duration: 0.5 })
        .from(
          headingRef.current,
          { opacity: 0, y: 34, filter: "blur(6px)", duration: 0.9 },
          "-=0.25"
        )
        .from(
          cycleRef.current,
          { opacity: 0, y: 22, duration: 0.7 },
          "-=0.45"
        )
        .from(descRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 18, duration: 0.6 }, "-=0.35")
        .from(
          scrollCueRef.current,
          { opacity: 0, duration: 0.6 },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative max-w-screen flex items-center justify-center overflow-x-hidden bg-black">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen max-w-screen w-[calc(100vw-50px)] sm:w-[calc(100vw-100px)] flex-col items-center justify-center gap-7 py-32 md:gap-8">
        <div ref={eyebrowRef}>
          <SectionEyebrow
            label="Product Engineering Studio"
            accent="#F37036"
            dark={true}
          />
        </div>

        <div className="flex flex-col items-center gap-1 px-4 text-center md:gap-2">
          <div ref={headingRef}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl leading-[1.1] font-medium text-white">
              {heading}
            </h1>
          </div>
          {textCycle && (
            <div ref={cycleRef}>
              <TextCycleAnimation
                words={textCycle}
                className="text-3xl md:text-5xl lg:text-7xl leading-[1.1] font-medium text-white"
              />
            </div>
          )}
        </div>

        {description && (
          <div ref={descRef}>
            <p className="max-w-2xl px-4 text-center text-lg font-normal text-gray-300 md:text-xl">
              {description}
            </p>
          </div>
        )}

        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="https://calendar.app.google/vGkWmHKibQThERD59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="bordered">Book a Call</Button>
          </Link>
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white md:text-base"
          >
            View Our Work
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div
          ref={scrollCueRef}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-widest text-gray-500">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
