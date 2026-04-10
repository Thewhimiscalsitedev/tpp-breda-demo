"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const services = [
  {
    number: "01",
    title: "Nieuwe Kunstgebitten",
    description:
      "Een volledig nieuwe gebitsprothese, vakkundig op maat gemaakt voor een comfortabele en natuurlijke pasvorm. U krijgt een esthetisch resultaat dat naadloos aansluit op uw wensen en gelaatsvorm.",
    tags: ["Volledig op maat", "Esthetisch", "Comfortabele pasvorm"],
    icon: (
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3C5.8 3 4 5 4 7.5c0 2 .9 3.6 1.8 5L7.5 21h3.5L12 16l1 5h3.5l1.7-8.5C19.1 11.1 20 9.5 20 7.5 20 5 18.2 3 16 3c-1.3 0-2.2.6-4 .6C10.2 3.6 9.3 3 8 3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Klikgebitten",
    description:
      "Een klikgebit (implantaatstabilisering) zorgt voor een stevig houvast dat niet verschuift. Geen ongemak meer aan tafel — gewoon genieten van uw maaltijden en gesprekken, vol vertrouwen.",
    tags: ["Implantaatstabilisering", "Vaste pasvorm", "Meer comfort"],
    icon: (
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="5" />
        <circle cx="15" cy="15" r="5" />
        <path d="M13 9h5M6 15h5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Reparaties",
    description:
      "Kleine schade, gebarsten of losse elementen? In de meeste gevallen repareert u dat bij ons binnen één bezoek. U hoeft niet lang zonder gebit — klaar terwijl u wacht.",
    tags: ["Klaar terwijl u wacht", "Dezelfde dag", "Kleine ingreep"],
    icon: (
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
      </svg>
    ),
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-[--border] bg-[--background] py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          className="mb-20 flex flex-col gap-5 max-w-2xl"
        >
          <motion.p
            variants={shouldReduceMotion ? {} : fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[--muted]"
          >
            Onze specialisaties
          </motion.p>
          <motion.h2
            id="services-heading"
            variants={shouldReduceMotion ? {} : fadeUp}
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-[--foreground]"
          >
            Vakmanschap voor<br />uw glimlach.
          </motion.h2>
        </motion.div>

        {/* Three-column grid */}
        <motion.ul
          role="list"
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[--border]"
        >
          {services.map((service) => (
            <motion.li
              key={service.number}
              variants={shouldReduceMotion ? {} : fadeUp}
              className="group relative flex flex-col gap-8 bg-[--background] p-10 lg:p-12 overflow-hidden"
            >
              {/* Hover glow — decorative */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,82,118,0.07),transparent)]"
              />

              {/* Top row: number + icon */}
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="text-xs font-mono text-[--muted] tracking-widest"
                >
                  {service.number}
                </span>
                <span className="text-[--muted] group-hover:text-[--accent] transition-colors duration-500">
                  {service.icon}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-[--foreground]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[--muted]">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <ul
                role="list"
                aria-label={`Kenmerken van ${service.title}`}
                className="flex flex-wrap gap-2"
              >
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full border border-[--border] text-[--muted]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Bottom border accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[--accent]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA row */}
        <motion.div
          variants={shouldReduceMotion ? {} : fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[--accent] px-8 text-sm font-medium text-[--accent] hover:bg-[--accent] hover:text-[--accent-fg] transition-colors duration-300"
            aria-label="Maak een afspraak"
          >
            Maak een afspraak
          </a>
        </motion.div>

      </div>
    </section>
  );
}
