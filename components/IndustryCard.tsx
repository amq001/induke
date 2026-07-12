"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
  accent: string;
  index?: number;
};

const icons: Record<string, React.ReactNode> = {
  "E-commerce": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  ),
  FinTech: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v20M17 5.5c0-1.93-2.24-3.5-5-3.5S7 3.57 7 5.5 9.24 9 12 9s5 1.57 5 3.5-2.24 3.5-5 3.5-5-1.57-5-3.5"
    />
  ),
  Logistics: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10M3 16h11M3 16a2 2 0 1 0 4 0m7 0a2 2 0 1 0 4 0m-4 0h4m0 0v-4l-2.5-3.5H14V16"
    />
  ),
  Healthcare: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-7.5-4.6-10-9.3C.5 8 2.2 4.5 5.6 4c2-.3 3.7.7 4.9 2.2C11.7 4.7 13.4 3.7 15.4 4c3.4.5 5.1 4 3.6 7.7C16.5 16.4 12 21 12 21ZM8 11h2l1-2 2 4 1-2h2"
    />
  ),
  "Real Estate": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 21V10l8-6 8 6v11M4 21h16M9 21v-6h6v6M9 13h.01M15 13h.01M9 9h.01M15 9h.01"
    />
  ),
  EdTech: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2 8 10-5 10 5-10 5-10-5Zm4 2v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6M22 8v7"
    />
  ),
  Startups: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 2.5c2 1 4 3 4.5 6-2.5.5-4.5 1.5-6.5 3.5S9.5 16 9 18.5c-3-.5-5-2.5-6-4.5.5-2 2-4.5 4.5-7 2.5-2.5 5-3.5 7-4.5ZM9 15l-3.5 3.5M6.5 12 3 15.5M12 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
    />
  ),
  "SaaS Companies": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17.5a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.2 8.05 4.5 4.5 0 0 1 17 17.5H7Z"
    />
  ),
  Enterprises: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M14 21h6V10l-6-3M8 7h.01M8 11h.01M8 15h.01M4 21h16"
    />
  ),
  Agencies: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5v10A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5v-10ZM8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"
    />
  ),
  "Solo Founders": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9c0-3.9 3.1-7 7-7s7 3.1 7 7M19 5l1 1M19 3v1M17 5h1"
    />
  ),
  "Small Businesses": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9.5 4.5 4h15L21 9.5M3 9.5v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-10M3 9.5a2.5 2.5 0 0 0 5 0M8 9.5a2.5 2.5 0 0 0 5 0M13 9.5a2.5 2.5 0 0 0 5 0M10 20.5v-5h4v5"
    />
  ),
};

const IndustryCard = ({ name, description, accent, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.18)]"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
        style={{ backgroundColor: `${accent}17` }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={accent}
          strokeWidth={1.6}
          className="h-7 w-7"
        >
          {icons[name]}
        </svg>
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
        {name}
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-500">
        {description}
      </p>

      <div
        className="h-0.5 w-8 rounded-full transition-all duration-500 ease-out group-hover:w-16"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  );
};

export default IndustryCard;
