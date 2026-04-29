import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Bed,
  CalendarDays,
  CheckCircle2,
  HomeIcon,
  Layers3,
  Sparkles
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { blogPosts, contact, home, images, services, testimonials } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "KINd Consulting | Childcare Consulting & Family Support in Los Angeles",
  description:
    "KINd Consulting helps families find childcare clarity, organize child-centered spaces, and create calmer home routines through expert childcare consulting, private childcare, home management, and organization support."
};

const serviceIcons = [Baby, HomeIcon, Layers3, CalendarDays, Bed];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={home.heroKicker}
        title={home.heroTitle}
        text={home.heroText}
        image={images.hero}
        imageAlt="Warm family-centered childcare and home support scene"
        imageAspect="landscape"
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
        secondaryLabel="Explore Services"
        secondaryHref="#services"
        badges={home.trustBadges}
      />

      <AnimatedSection className="section-shell">
        <div className="grid gap-8 rounded-4xl bg-blush/40 p-6 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <SectionHeading
            eyebrow="Parenting Support That Brings Calm Back Home"
            title={home.painTitle}
            description="From care decisions to nursery flow and sleep routines, KINd Consulting helps families turn daily uncertainty into practical next steps."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {home.painPoints.map((point) => (
              <article key={point} className="rounded-[1.5rem] border border-teal/10 bg-cream/80 p-5 shadow-card">
                <Sparkles aria-hidden="true" className="text-sage" size={22} strokeWidth={1.8} />
                <h3 className="mt-4 text-lg font-semibold text-teal">{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="section-shell">
        <SectionHeading
          eyebrow="What We Offer"
          title="Childcare clarity, purposeful organization, and calm family systems."
          description="KINd Vibez Only provides personalized, in-depth support for families seeking guidance on care options, children’s spaces, home flow, and routines."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              image={images.consulting}
              imageAspect="square"
              icon={serviceIcons[index]}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-4xl border border-teal/10 bg-cream/80 shadow-soft">
            <Image
              src={images.ceo}
              alt="Sadel of KINd Consulting"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="rounded-[1.65rem] object-contain p-3 sm:p-4"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why KINd"
              title="Organized homes. Confident parents. Happy kids."
              description="KINd Consulting is built on private childcare and home management experience, with calm, practical guidance that fits real family life."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {home.whyKind.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-cream/70 p-4 shadow-card">
                  <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-sage" size={20} />
                  <p className="font-medium leading-7 text-ink/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="Family Feedback"
          title="Trusted by families through care, routines, and everyday home support."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link className="btn-secondary" href="/testimonials">
            Read more reviews
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="From the Blog"
          title="Helpful notes for childcare decisions and family support."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.title} className="soft-card overflow-hidden">
              <div className="relative aspect-[4/3] bg-cream/70">
                <Image
                  src={post.image}
                  alt={`${post.title} blog visual`}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="rounded-[1.25rem] object-contain p-2"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-sage">
                  {post.date} · {post.readTime}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-teal">{post.title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{post.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Bring more calm into your home."
        text="Start with a complimentary consultation and get practical support for childcare decisions, organized child-centered spaces, and calmer routines."
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
        secondaryLabel="Email KINd"
        secondaryHref={contact.emailHref}
      />
    </>
  );
}
