"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import HeadingComponent from "./HeadingComponent";
import SectionEyebrow from "./SectionEyebrow";
import { processData } from "@/constants/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

const ProcessSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!gridRef.current || !progressLineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Our Process" accent="#10B981" dark={false} />
          <HeadingComponent
            heading="A process built for momentum"
            description="Six stages, always visible to you, so you always know what's next."
            variant="primary"
            textCentered={true}
          />
        </div>

        <div
          ref={gridRef}
          className="relative grid w-full max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-6 md:gap-4"
        >
          <div className="absolute top-7 left-4 right-4 hidden h-px bg-black/10 md:block" />
          <div
            ref={progressLineRef}
            className="absolute top-7 left-4 right-4 hidden h-px origin-left md:block"
            style={{
              background: "linear-gradient(90deg,#F37036,#007DC5,#8B5CF6)",
              transform: "scaleX(0)",
            }}
          />

          {processData.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.09, ease: "easeOut" }}
              className="relative flex gap-4 md:flex-col md:items-center md:gap-5 md:text-center"
            >
              {index < processData.length - 1 && (
                <span className="absolute top-14 left-7 h-[calc(100%+1.5rem)] w-px bg-black/10 md:hidden" />
              )}

              <div
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-white text-sm font-semibold"
                style={{ borderColor: item.accent, color: item.accent }}
              >
                {item.step}
              </div>

              <div className="flex flex-col gap-1 pt-2 md:items-center md:pt-0">
                <h3 className="font-semibold text-gray-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 md:max-w-[160px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
