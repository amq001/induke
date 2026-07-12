"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "full-width";
  className?: string;
  simpleReveal?: boolean;
}

const Reveal = ({
  children,
  width = "fit-content",
  className,
  simpleReveal = false,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className={`relative ${
        width === "full-width" ? "w-full" : "w-fit"
      } overflow-hidden ${className}`}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {simpleReveal && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute top-1 bottom-1 right-0 left-0 h-full w-full rounded-2xl bg-[linear-gradient(135deg,#000_20%,#F37036_100%)] z-20"
        ></motion.div>
      )}
    </div>
  );
};

export default Reveal;
