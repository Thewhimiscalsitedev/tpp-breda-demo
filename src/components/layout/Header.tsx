"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Diensten", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      role="banner"
      aria-label="Siteheader"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[--background]/90 backdrop-blur-xl border-b border-[--border]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#main-content"
            aria-label="TPP Breda — ga naar boven"
            className="text-sm font-semibold tracking-widest uppercase text-[--accent]"
          >
            TPP Breda
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primaire navigatie">
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[--muted] hover:text-[--accent] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-[--accent] text-[--accent-fg] text-sm font-medium hover:opacity-85 transition-opacity duration-300"
            aria-label="Afspraak maken"
          >
            Afspraak maken
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-[--foreground]"
            aria-label="Navigatiemenu openen"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
