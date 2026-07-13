"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  features: string[];
  accent: string;
  index?: number;
};

const icons: Record<string, React.ReactNode> = {
  "Full-Stack Web Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 9-4 3 4 3m8-6 4 3-4 3M13 6l-2 12"
    />
  ),
  "Full-Stack App Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3.5A1.5 1.5 0 0 1 8.5 2h7A1.5 1.5 0 0 1 17 3.5v17A1.5 1.5 0 0 1 15.5 22h-7A1.5 1.5 0 0 1 7 20.5v-17ZM11 19h2"
    />
  ),
  "AI SaaS Product Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M9 9h6v6H9V9Z"
    />
  ),
  "AI Agents Development": (
    <>
      <rect x="4" y="9" width="16" height="10" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9V5m-3-2h6M9 14h.01M15 14h.01M2 13h2m16 0h2"
      />
    </>
  ),
  "Motion Graphics": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.5v7l6-3.5-6-3.5Z" />
    </>
  ),
  "2D & 3D Animations": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </>
  ),
};

const CheckIcon = ({ accent }: { accent: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={accent}
    strokeWidth={2}
    className="h-4 w-4 shrink-0"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
  </svg>
);

const ServiceCard = ({ title, description, features, accent, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-3xl p-[1px] transition-transform duration-500 ease-out hover:-translate-y-2"
      style={{
        background: `linear-gradient(160deg, ${accent}45 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.02) 100%)`,
      }}
    >
      <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl bg-[#0b0b0d] p-8 transition-colors duration-500">
        <div
          className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: accent }}
        />

        <div
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
          style={{ backgroundColor: `${accent}1a` }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={accent}
            strokeWidth={1.6}
            className="h-7 w-7"
          >
            {icons[title]}
          </svg>
        </div>

        <h3 className="relative text-lg md:text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="relative text-sm md:text-base leading-relaxed text-gray-400">
          {description}
        </p>

        <ul className="relative mt-2 flex flex-col gap-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <CheckIcon accent={accent} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
