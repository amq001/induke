"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  accent: string;
  index?: number;
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Star = ({ filled, accent }: { filled: boolean; accent: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? accent : "none"}
    stroke={filled ? accent : "#4b5563"}
    strokeWidth={1.5}
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 2.5 2.9 6.3 6.6.7-5 4.7 1.4 6.8L12 17.8l-5.9 3.2 1.4-6.8-5-4.7 6.6-.7L12 2.5Z"
    />
  </svg>
);

const TestimonialCard = ({
  name,
  role,
  company,
  review,
  rating,
  accent,
  index = 0,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex h-full rounded-3xl p-[1px] transition-transform duration-500 ease-out hover:-translate-y-2"
      style={{
        background: `linear-gradient(160deg, ${accent}45 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.02) 100%)`,
      }}
    >
      <div className="relative flex h-full w-full flex-col gap-6 rounded-3xl bg-[#0b0b0d] p-8">
        <svg
          viewBox="0 0 24 24"
          fill={accent}
          className="h-8 w-8 opacity-40"
        >
          <path d="M9.5 7C6.5 7 4 9.5 4 12.5S6.5 18 9.5 18c.4 0 .8 0 1-.1-.6 1.6-2 2.8-3.8 3.3-.4.1-.5.6-.2.9.2.2.5.3.7.2 3.4-.9 5.8-3.8 5.8-8.3V12c0-2.8-1.6-5-3.5-5Zm9 0c-3 0-5.5 2.5-5.5 5.5S15.5 18 18.5 18c.4 0 .8 0 1-.1-.6 1.6-2 2.8-3.8 3.3-.4.1-.5.6-.2.9.2.2.5.3.7.2 3.4-.9 5.8-3.8 5.8-8.3V12c0-2.8-1.6-5-3.5-5Z" />
        </svg>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < rating} accent={accent} />
          ))}
        </div>

        <p className="flex-1 text-sm md:text-base leading-relaxed text-gray-300">
          &ldquo;{review}&rdquo;
        </p>

        <div className="flex items-center gap-3 border-t border-white/10 pt-6">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
            style={{ backgroundColor: `${accent}20`, color: accent }}
          >
            {initials(name)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{name}</span>
            <span className="text-xs text-gray-500">
              {role}, {company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
