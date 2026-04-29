import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialImageCarousel } from "@/components/TestimonialImageCarousel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { contact, images, testimonials } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Reviews and family feedback for KINd Consulting, highlighting dependable care, loving child connections, communication, household support, and warm routines."
};

const testimonialCards = [
  ...testimonials,
  {
    name: "Los Angeles Family",
    location: "Los Angeles Area",
    quote:
      "A composite of review themes: reliable care, loving connection, respectful communication, household support, and warm routines."
  }
];

const cardStyles = [
  "bg-cream/85",
  "bg-blush/35",
  "bg-sage/10",
  "bg-cream/85",
  "bg-blush/35",
  "bg-sage/10",
  "bg-cream/85",
  "bg-blush/35",
  "bg-sage/10"
];

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        eyebrow="My Reviews"
        title="Families remember care that feels steady, warm, and trustworthy."
        text="The reviews consistently highlight dependable care, loving connection with children, infant and toddler experience, respectful communication, household support, and warm guidance around routines."
        image={images.testimonialHero}
        imageAlt="Family testimonial visual for KINd Consulting"
        imageAspect="wide"
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
      />

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Thoughtful support for children, parents, and the home."
          description="Summaries are based on the provided review themes and reviewer details."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonialCards.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              className={cardStyles[index % cardStyles.length]}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <SectionHeading
          eyebrow="Review Highlights"
          title="A closer look at family feedback."
          description="Swipe through the testimonial images in a larger, easier-to-read carousel."
          align="center"
        />
        <div className="mt-12">
          <TestimonialImageCarousel images={images.testimonials} />
        </div>
      </AnimatedSection>

      <CTASection
        title="Feel more supported in the care decisions ahead."
        text="Start with a complimentary consultation and talk through your family’s childcare, organization, routine, or home support needs."
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
      />
    </>
  );
}
