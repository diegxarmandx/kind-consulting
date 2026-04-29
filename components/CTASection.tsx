import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow = "KINd support for modern family life",
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="section-shell">
      <div className="overflow-hidden rounded-4xl bg-teal px-6 py-12 text-cream shadow-soft sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blush">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-cream/80 sm:text-lg">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="btn-primary bg-cream text-teal hover:bg-blush" href={primaryHref}>
              {primaryLabel}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link className="btn-secondary border-cream text-cream hover:bg-cream/10" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
