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
  "Web Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 9-4 3 4 3m8-6 4 3-4 3M13 6l-2 12"
    />
  ),
  "Mobile Apps": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3.5A1.5 1.5 0 0 1 8.5 2h7A1.5 1.5 0 0 1 17 3.5v17A1.5 1.5 0 0 1 15.5 22h-7A1.5 1.5 0 0 1 7 20.5v-17ZM11 19h2"
    />
  ),
  "Product Strategy": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22c5.5-2 8-6 8-11V5l-8-3-8 3v6c0 5 2.5 9 8 11Zm2.5-13.5-3 5-2-2"
    />
  ),
  "UI/UX Design": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19.5 3 15V8l9-4.5L21 8v7l-9 4.5Zm0 0V11M3 8l9 4.5 9-4.5"
    />
  ),
  "AI Integration": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M9 9h6v6H9V9Z"
    />
  ),
  "DevOps & Cloud": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.2 8.05 4.5 4.5 0 0 1 17 17H7Zm3-1v3m4-3v3"
    />
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
