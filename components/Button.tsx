"use client";

import gsap from "gsap";
import { useRef } from "react";

type Props = {
  className?: string;
  variant?: "primary" | "secondary" | "bordered";
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  onClick,
}: Props) => {
  const isBordered = variant === "bordered";
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isBordered || disabled || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.4,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!isBordered || !btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      data-variant={variant}
      className={`${className ?? ""} relative inline-flex items-center justify-center rounded-full px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none
      data-[variant=primary]:bg-white data-[variant=primary]:text-black data-[variant=primary]:hover:-translate-y-0.5 data-[variant=primary]:hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.6)]
      data-[variant=secondary]:border data-[variant=secondary]:border-white/15 data-[variant=secondary]:bg-white/10 data-[variant=secondary]:text-white data-[variant=secondary]:hover:-translate-y-0.5 data-[variant=secondary]:hover:bg-white/20
      ${
        isBordered
          ? "border border-white/25 bg-white/3 text-white hover:border-[#F37036]/70 hover:bg-white/6 hover:shadow-[0_0_20px_-6px_rgba(243,112,54,0.45)]"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
