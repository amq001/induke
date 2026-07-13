"use client";

import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { renderAccentWord } from "@/lib/text";
import Button from "./Button";
import HeroBackground from "./HeroBackground";
import TextCycleAnimation from "./TextCycleAnimation";

type Prop = {
  heading: string;
  description?: string;
  textCycle?: string[];
  italicWord?: string;
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

const HeroSection = ({ heading, description, textCycle, italicWord }: Prop) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current, {
        opacity: 0,
        y: 34,
        filter: "blur(6px)",
        duration: 0.9,
      })
        .from(
          cycleRef.current,
          { opacity: 0, y: 22, duration: 0.7 },
          "-=0.45"
        )
        .from(descRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 18, duration: 0.6 }, "-=0.35");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative max-w-screen flex items-center justify-center overflow-x-hidden bg-black">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen max-w-screen w-[calc(100vw-50px)] sm:w-[calc(100vw-100px)] flex-col items-center justify-center gap-7 py-32 md:gap-8">
        <div className="flex flex-col items-center gap-1 px-4 text-center md:gap-2">
          <div ref={headingRef}>
            <h1 className="bg-clip-text text-3xl leading-[1.1] font-medium text-transparent bg-linear-to-b from-white via-white to-gray-400 md:text-5xl lg:text-7xl">
              {renderAccentWord(heading, italicWord, "text-gray-300")}
            </h1>
          </div>
          {textCycle && (
            <div ref={cycleRef}>
              <TextCycleAnimation
                words={textCycle}
                className="bg-clip-text text-3xl leading-[1.1] font-medium text-transparent bg-linear-to-r from-[#F37036] via-[#007DC5] to-[#8B5CF6] md:text-5xl lg:text-7xl"
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

        <div ref={ctaRef} className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="https://cal.com/aqib-mehtab-g6vkca/30min"
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
          <span className="text-xs tracking-wide text-gray-500">
            No commitment &middot; 30-minute intro call
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
