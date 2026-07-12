"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Social = {
  linkedin?: string;
  github?: string;
  x?: string;
};

type Props = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  accent: string;
  social?: Social;
  index?: number;
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.62l-5.19-6.79-5.94 6.79H1.94l7.7-8.8L1.5 2.5h6.79l4.69 6.2L18.24 2.5zm-1.16 17h1.83L7 4.42H5.03L17.08 19.5z" />
  </svg>
);

const TeamCard = ({ name, role, bio, photo, accent, social, index = 0 }: Props) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group relative w-full max-w-sm rounded-3xl p-[1px] overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${accent}55 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.02) 100%)`,
      }}
    >
      <div className="relative rounded-3xl bg-[#0b0b0d] h-full w-full px-8 py-10 flex flex-col items-center text-center overflow-hidden transition-colors duration-500">
        {/* glow orb */}
        <div
          className="absolute -top-20 -right-16 w-56 h-56 rounded-full blur-3xl opacity-25 transition-opacity duration-500 group-hover:opacity-45"
          style={{ background: accent }}
        />

        {/* avatar */}
        <div
          className="relative w-28 h-28 rounded-full p-[3px] mb-6 transition-transform duration-500 group-hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${accent}, #ffffff22)` }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 flex items-center justify-center">
            {!imgError ? (
              <Image
                src={photo}
                alt={name}
                fill
                sizes="112px"
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span
                className="text-3xl font-semibold"
                style={{ color: accent }}
              >
                {initials(name)}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {name}
        </h3>
        <p
          className="text-sm md:text-base font-medium mt-1 mb-4"
          style={{ color: accent }}
        >
          {role}
        </p>

        <div
          className="w-10 h-px mb-4 opacity-60"
          style={{ background: accent }}
        />

        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
          {bio}
        </p>

        {social && (
          <div className="flex items-center gap-3 mt-auto">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-300 hover:text-white hover:border-transparent"
                style={{ ["--hover-bg" as any]: accent }}
                onMouseEnter={(e) => (e.currentTarget.style.background = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <LinkedInIcon />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on GitHub`}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-300 hover:text-white hover:border-transparent"
                onMouseEnter={(e) => (e.currentTarget.style.background = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <GithubIcon />
              </a>
            )}
            {social.x && (
              <a
                href={social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on X`}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-300 hover:text-white hover:border-transparent"
                onMouseEnter={(e) => (e.currentTarget.style.background = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <XIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
