"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} className="h-7.5 w-7.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} className="h-7.5 w-7.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const navLinks = [
  // { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#work", label: "Portfolio" },
  // { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = navLinks
  .map((link) => link.href.slice(1))
  .filter((id) => id.length > 0);

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => {
    const id = href.slice(1);
    if (!id) return activeSection === "";
    return activeSection === id;
  };

  return (
    <div
      className={`fixed md:mx-4 mx-2 px-auto z-50 max-w-screen w-[calc(100%-16px)] md:w-[calc(100%-32px)]  ${
        isVisible ? "translate-y-0 my-4" : "-translate-y-full m-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto sm:px-6 lg:px-8 flex p-4 rounded-xl backdrop-filter backdrop-blur-md bg-black/50 justify-between items-center w-full`}
      >
        <div className="position-relative w-24 h-6 md:w-32 md:h-8">
          <Link href="#" className="text-white font-bold text-lg md:text-2xl">
          Induke
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                ${
                  isActive(link.href)
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-gray-100"
                }
                font-semibold
                ease-in-out
                duration-200
                `}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={"https://cal.com/aqib-mehtab-g6vkca/30min"} target="blank">
          <Button className="px-2 py-2 text-md" variant="bordered">Book a Call</Button>
          </Link>
          <div className="md:hidden">
            <button
              className="flex items-center justify-center p-2 rounded-md border-none hover:text-gray-900 hover:bg-white hover:transition-all hover:duration-300 hover:ease-in-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          !isMobileMenuOpen
            ? "max-h-64 rounded-2xl mt-2 opacity-100 backdrop-filter backdrop-blur-md bg-black/50"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.href)
                  ? "text-[#f36f36e5]"
                  : "text-gray-300 hover:text-[#f36f36e5]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
