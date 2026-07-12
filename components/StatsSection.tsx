"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import HeadingComponent from "./HeadingComponent";
import SectionEyebrow from "./SectionEyebrow";
import { statsData } from "@/constants/data";

const StatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#10B981] opacity-15 blur-[120px]" />
        <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-[#007DC5] opacity-15 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Results" accent="#10B981" dark={true} />
          <HeadingComponent
            heading="Numbers that back it up"
            variant="secondary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-5xl grid-cols-2 gap-6 px-4 md:gap-8 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/3 p-8 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/20"
            >
              <span
                className="text-4xl font-bold md:text-5xl"
                style={{ color: stat.accent }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-gray-400 md:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
