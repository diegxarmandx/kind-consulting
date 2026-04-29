import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { consultingSections, contact, images } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Childcare & Home Consulting",
  description:
    "Childcare and home consulting for modern families, including free consultations, childcare planning, nursery organization, and follow-up support."
};

export default function ConsultingPage() {
  return (
    <>
      <Hero
        eyebrow="Childcare clarity. Home harmony."
        title="Childcare & Home Consulting for Modern Families"
        text="KINd Consulting helps families make informed childcare decisions, organize child-centered spaces, and create calmer routines with expert, compassionate support."
        image={images.consulting}
        imageAlt="Childcare consulting and family support visual"
        imageAspect="square"
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
      />

      <AnimatedSection className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {consultingSections.map((section) => (
            <article key={section.title} className="soft-card p-6 sm:p-8">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-teal sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 leading-8 text-ink/75">{section.description}</p>
              <ul className="mt-6 space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7 text-ink/75">
                    <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-sage" size={19} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="grid gap-10 rounded-4xl bg-blush/40 p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-10">
          <div>
            <SectionHeading
              eyebrow="Purposeful organization"
              title="Systems that grow with your child and support real family flow."
              description="Nursery and playroom organization can reduce clutter, make routines easier, and help child-centered spaces feel calm instead of chaotic."
            />
            <Link className="btn-primary mt-8" href={contact.consultHref}>
              Start with a free consult
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-teal/10 bg-cream shadow-soft">
            <Image
              src={images.ceo}
              alt="Organized child-centered space support"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="rounded-[1.35rem] object-contain p-3 sm:p-4"
            />
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Get a clearer plan for care, routines, and home flow."
        text="Email or book a complimentary consultation to discuss your family’s needs, preferences, and next steps."
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
        secondaryLabel="Email for Rates"
        secondaryHref={contact.emailHref}
      />
    </>
  );
}
