"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import HeroVisual from "@/components/ui/HeroVisual";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven parallax for the headline text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-headline"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — decorative */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Background photo */}
        <Image
          src="/hero-dentist.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* White overlay — preserves WCAG AAA contrast for text above */}
        <div className="absolute inset-0 bg-white/82" />
        {/* Soft ocean blue radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(26,82,118,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-32">

          {/* ── Left column: copy ── */}
          <motion.div
            style={{ y: textY, opacity }}
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[--muted]"
              aria-label="Familiebedrijf gevestigd in Breda"
            >
              Familiebedrijf · Gevestigd in Breda
            </motion.p>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-[--foreground]"
            >
              Uw glimlach,{" "}
              <em className="not-italic text-[--accent]">ons vakmanschap</em>{" "}
              sinds 1976.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="max-w-md text-lg leading-relaxed text-[--muted]"
            >
              Gespecialiseerd in klikgebitten en gebitsprotheses in Breda.
              Volledig afgestemd op uw comfort en toegankelijkheid.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={shouldReduceMotion ? {} : fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[--accent] text-[--accent-fg] px-7 text-sm font-medium hover:opacity-85 transition-opacity duration-300"
                aria-label="Bekijk onze diensten"
              >
                Onze diensten
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[--accent] px-7 text-sm font-medium text-[--accent] hover:bg-[--accent] hover:text-[--accent-fg] transition-colors duration-300"
                aria-label="Maak een afspraak"
              >
                Afspraak maken
              </a>
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={shouldReduceMotion ? {} : fadeUp}
              className="flex flex-wrap gap-8 pt-4 border-t border-[--border]"
            >
              {[
                { value: "50+", label: "Jaar ervaring" },
                { value: "100%", label: "Op maat" },
                { value: "Breda", label: "Vestiging" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="text-xs text-[--muted] tracking-wide">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tabular-nums text-[--foreground]">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ── Right column: 3-D visual ── */}
          <motion.div
            variants={shouldReduceMotion ? {} : {
              hidden: { opacity: 0, scale: 0.97 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              },
            }}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="relative h-[480px] lg:h-[600px]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-[--muted]">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[--accent] to-transparent"
        />
      </motion.div>
    </section>
  );
}
