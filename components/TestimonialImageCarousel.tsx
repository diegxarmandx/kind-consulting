"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type TestimonialImageCarouselProps = {
  images: string[];
};

export function TestimonialImageCarousel({ images }: TestimonialImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeImage = images[activeIndex];
  const previousImage = images[(activeIndex - 1 + images.length) % images.length];
  const nextImage = images[(activeIndex + 1) % images.length];

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <div className="rounded-4xl bg-blush/35 p-4 shadow-card sm:p-6 lg:p-8">
      <div className="grid gap-5 lg:grid-cols-[0.18fr_1fr_0.18fr] lg:items-center">
        <div className="relative hidden aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-teal/10 bg-cream/70 opacity-70 shadow-card lg:block">
          <Image
            src={previousImage}
            alt=""
            fill
            unoptimized
            sizes="12vw"
            className="rounded-[1.2rem] object-contain p-2"
          />
        </div>

        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-teal/10 bg-cream shadow-soft sm:aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage}
                  alt={`KINd Consulting testimonial image ${activeIndex + 1}`}
                  fill
                  unoptimized
                  priority
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="rounded-[1.5rem] object-contain p-2 sm:p-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-5">
            <button
              type="button"
              onClick={goToPrevious}
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/70 bg-cream/90 text-teal shadow-card transition hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              aria-label="Show previous testimonial image"
            >
              <ChevronLeft aria-hidden="true" size={23} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/70 bg-cream/90 text-teal shadow-card transition hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              aria-label="Show next testimonial image"
            >
              <ChevronRight aria-hidden="true" size={23} />
            </button>
          </div>
        </div>

        <div className="relative hidden aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-teal/10 bg-cream/70 opacity-70 shadow-card lg:block">
          <Image
            src={nextImage}
            alt=""
            fill
            unoptimized
            sizes="12vw"
            className="rounded-[1.2rem] object-contain p-2"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2" aria-label="Choose testimonial image">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal ${
              activeIndex === index ? "w-9 bg-teal" : "w-3 bg-teal/30 hover:bg-teal/50"
            }`}
            aria-label={`Show testimonial image ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
