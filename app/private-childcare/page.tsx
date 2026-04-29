import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  contact,
  images,
  privateChildcareServices,
  rates
} from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Private Childcare & Home Management",
  description:
    "Private childcare, infant and toddler care, home management, personal assistant support, organization, rates, and credentials for Los Angeles families."
};

export default function PrivateChildcarePage() {
  return (
    <>
      <Hero
        eyebrow="Nurturing Children, Supporting the Home"
        title="Nurturing Children, Supporting the Home"
        text="Reliable, high-quality childcare and thoughtful home support for busy families who want daily life to feel calmer, warmer, and more organized."
        image={images.privateChildcare}
        imageAlt="Private childcare and home support visual"
        imageAspect="portrait"
        primaryLabel="Get In Touch"
        primaryHref={contact.consultHref}
      />

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="My Services"
          title="Warm care and organized support for real family life."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {privateChildcareServices.map((service) => (
            <article key={service.title} className="soft-card p-6 sm:p-8">
              <p className="eyebrow">{service.subtitle}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-teal">{service.title}</h2>
              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[970/1162] overflow-hidden rounded-4xl border border-teal/10 bg-cream/80 shadow-soft">
            <Image
              src={images.rates}
              alt="Family support and home management rates visual"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="rounded-[1.65rem] object-contain p-3 sm:p-4"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Rates"
              title="Clear starting rates for childcare and home support."
              description="Consulting, pediatric sleep consulting, and organization rates are available by email."
            />
            <div className="mt-8 grid gap-3">
              {rates.map((rate) => (
                <div
                  key={rate.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-teal/10 bg-cream/75 p-5 shadow-card"
                >
                  <p className="font-semibold text-teal">{rate.label}</p>
                  <p className="text-right font-semibold text-ink/75">{rate.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="section-shell">
        <div className="soft-card p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about the support your family needs."
            description="Based in Los Angeles, CA and available by email or phone for childcare, consulting, home management, organization, and sleep support inquiries."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link className="soft-card flex min-h-24 items-center gap-4 p-5 hover:shadow-soft" href={contact.emailHref}>
              <Mail aria-hidden="true" className="shrink-0 text-sage" size={22} />
              <span className="font-semibold text-teal">{contact.email}</span>
            </Link>
            <Link className="soft-card flex min-h-24 items-center gap-4 p-5 hover:shadow-soft" href={contact.phoneHref}>
              <Phone aria-hidden="true" className="shrink-0 text-sage" size={22} />
              <span className="font-semibold text-teal">{contact.phone}</span>
            </Link>
            <div className="soft-card flex min-h-24 items-center gap-4 p-5">
              <MapPin aria-hidden="true" className="shrink-0 text-sage" size={22} />
              <span className="font-semibold text-teal">{contact.location}</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Organized homes. Confident parents. Happy kids."
        text="Reach out for private childcare, home management, childcare consulting, sleep consulting, or organization support."
        primaryLabel="Get In Touch"
        primaryHref={contact.consultHref}
      />
    </>
  );
}
