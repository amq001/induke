"use client";

import { motion } from "framer-motion";
import HeadingComponent from "./HeadingComponent";
import SectionEyebrow from "./SectionEyebrow";
import { techStackData } from "@/constants/data";

const TechStackSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Tech Stack" accent="#F59E0B" dark={false} />
          <HeadingComponent
            heading="Tools we trust in production"
            description="A modern, battle-tested stack chosen for reliability, not resume-padding."
            variant="primary"
            textCentered={true}
          />
        </div>

        <div className="grid w-full max-w-5xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 md:gap-6">
          {techStackData.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.18)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
                style={{ backgroundColor: `${tech.accent}17`, color: tech.accent }}
              >
                {tech.short}
              </div>
              <span className="text-center text-sm font-medium text-gray-700">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
