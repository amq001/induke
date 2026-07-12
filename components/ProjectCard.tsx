"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

type Props = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  accent: string;
  url?: string;
  index?: number;
};

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  accent,
  url,
  index = 0,
}: Props) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/20"
    >
      <div
        className="relative aspect-[16/10] w-full overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}30, #0b0b0d 70%)` }}
      >
        {!imgError ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-7xl font-bold"
                style={{ color: `${accent}55` }}
              >
                {title.charAt(0)}
              </span>
            </div>
          </>
        )}

        <div className="absolute top-4 left-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0d] via-transparent to-transparent" />
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {url && (
          <div className="mt-2">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="bordered">View Project</Button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
