"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Variants, type Transition } from "framer-motion";

interface Stack {
  icon?: string;
  name: string;
}
interface TimeLineItem {
  title: string;
  start_date: string;
  end_date: string;
  description: string;
  stack: Stack[];
}
interface VerticalTimelineProps {
  items: TimeLineItem[];
}

export default function VerticalTimeline({ items }: VerticalTimelineProps) {
  const prefersReduced = useReducedMotion();

  const spring: Transition = prefersReduced
    ? {}
    : { type: "spring", stiffness: 300, damping: 24 };

  const container: Variants = {
    hidden: {},
    visible: prefersReduced
      ? {}
      : { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: spring },
  };

  const twinkle: Transition = prefersReduced
    ? { duration: 0 }
    : {
        duration: 2.6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      };

  // Luz fugaz para CADA tramo (no global)
  const shine: Transition = prefersReduced
    ? { duration: 0 }
    : { duration: 2.6, repeat: Infinity, ease: [0.22, 1, 0.35, 1] };

  return (
    <div className="relative">
      <motion.ul
        role="list"
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((itemData, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <motion.li
              key={`${itemData.title}-${idx}`}
              className="relative pl-9"
              variants={item}
            >
              {/* Bullet con titileo sutil */}
              <motion.span
                aria-hidden
                className="absolute left-2 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-neutral-400 ring-4 ring-white dark:ring-neutral-950"
                initial={{ scale: 1, filter: "brightness(1)", opacity: 1 }}
                animate={
                  prefersReduced
                    ? { scale: 1, filter: "brightness(1)", opacity: 1 }
                    : {
                        scale: [1, 1.06, 1],
                        filter: [
                          "brightness(1)",
                          "brightness(1.25)",
                          "brightness(1)",
                        ],
                        opacity: [1, 1, 1],
                      }
                }
                transition={{ ...twinkle, delay: (idx % 5) * 0.3 }}
              />

              {/* Tramo (conector) hacia el siguiente — NO se renderiza en el último */}
              {!isLast && (
                <>
                  <span
                    aria-hidden
                    className="absolute left-2 top-6 block w-px h-11/12 bg-neutral-200 dark:bg-neutral-800"
                  />
                  {/* Luz fugaz SOLO por el tramo actual */}
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute left-[7px] top-6 w-1 -translate-x-1/2 rounded-full"
                    style={{
                      height: 50, // altura del destello (cola). Ajusta a gusto.
                      mixBlendMode: "screen",
                      filter: "blur(1.2px)",
                      background:
                        "linear-gradient(180deg,transparent,rgba(255,255,255,0.9),transparent)",
                    }}
                    initial={{ y: "-20%", opacity: 0 }}
                    animate={
                      prefersReduced
                        ? { y: "-20%", opacity: 0 }
                        : { y: ["-20%", "120%"], opacity: [0, 1, 0] }
                    }
                    transition={{
                      ...shine,
                      times: [0, 0.5, 1],
                      // desfase por ítem para que no todas las luces bajen sincronizadas
                      delay: (idx % 4) * 0.3,
                    }}
                  />
                </>
              )}

              {/* Contenido */}
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h4 className="text-sm font-semibold leading-tight">
                  {itemData.title}
                </h4>
                <span className="text-xs text-neutral-500">
                  {itemData.start_date} – {itemData.end_date}
                </span>
              </div>

              {itemData.description && (
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {itemData.description}
                </p>
              )}

              {itemData.stack?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {itemData.stack.map((tech, i) => (
                    <motion.span
                      key={`${tech.name}-${i}`}
                      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
                      initial={prefersReduced ? {} : { y: 6, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={prefersReduced ? {} : { duration: 0.25 }}
                    >
                      {tech.icon && <span aria-hidden>{tech.icon}</span>}
                      <span>{tech.name}</span>
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
