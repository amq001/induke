"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
  index?: number;
};

const FAQItem = ({ question, answer, index = 0 }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className="rounded-2xl border border-black/5 bg-white transition-colors duration-300 hover:border-black/10"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 text-gray-500 transition-transform duration-300 ease-out ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-3.5 w-3.5"
          >
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQItem;
