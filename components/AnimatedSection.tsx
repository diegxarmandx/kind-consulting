"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  as?: "section" | "div" | "article";
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  as = "section",
  delay = 0,
  className = "",
  id
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      id={id}
    >
      {children}
    </MotionTag>
  );
}
