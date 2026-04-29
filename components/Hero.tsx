import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  imageAspect?: "landscape" | "portrait" | "square" | "wide";
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badges?: string[];
};

export function Hero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  imageAspect = "landscape",
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  badges
}: HeroProps) {
  const aspectClass = {
    landscape: "aspect-[1352/1244]",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[547/360]"
  }[imageAspect];

  return (
    <section className="section-shell pt-10 sm:pt-14 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-teal sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" href={primaryHref}>
              {primaryLabel}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link className="btn-secondary" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
          {badges ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-teal/10 bg-cream/80 px-4 py-2 text-sm font-semibold text-teal shadow-card"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-gradient-to-br from-blush/50 via-cream to-sage/25" />
          <div className={`relative ${aspectClass} overflow-hidden rounded-4xl border border-teal/10 bg-cream/80 shadow-soft`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-[1.65rem] object-contain p-2 sm:p-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
