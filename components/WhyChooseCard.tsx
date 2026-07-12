"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  accent: string;
  index?: number;
};

const icons: Record<string, React.ReactNode> = {
  "Fast Delivery": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
    />
  ),
  "Clean Code": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 9-4 3 4 3m8-6 4 3-4 3M10 20l1-16M13 5l-1 16"
    />
  ),
  "SEO Optimized": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35M8 13l2-3 2 2 3-4"
    />
  ),
  "Fully Responsive": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5.5A1.5 1.5 0 0 1 4.5 4h11A1.5 1.5 0 0 1 17 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-9ZM15 9.5A1.5 1.5 0 0 1 16.5 8h3A1.5 1.5 0 0 1 21 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 15 18.5M8 20h4"
    />
  ),
  "Scalable Architecture": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 2 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5"
    />
  ),
  "Ongoing Support": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 13a8 8 0 1 1 16 0M4 13v3a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h2a1 1 0 0 1 1 1Zm-5 5a2 2 0 0 1-2 2h-1"
    />
  ),
};

const WhyChooseCard = ({ title, description, accent, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_16px_32px_-18px_rgba(0,0,0,0.18)]"
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 ease-out group-hover:scale-110"
        style={{ backgroundColor: `${accent}17` }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={accent}
          strokeWidth={1.6}
          className="h-6 w-6"
        >
          {icons[title]}
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default WhyChooseCard;
