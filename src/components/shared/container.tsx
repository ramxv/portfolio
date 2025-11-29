"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

/**
 * Contenedor con ancho consistente (896px / max-w-4xl) y padding responsive.
 * Uso: envolver contenido que necesite estar centrado y contenido.
 * NO usar para: fondos full-bleed, modales, overlays.
 */
export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <motion.div
        role={Component}
        className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
