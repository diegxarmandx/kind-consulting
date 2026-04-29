import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, contact } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "KINd Consulting blog posts on childcare costs, nanny support, choosing the right care, and family peace."
};

export default function BlogPage() {
  return (
    <>
      <section className="section-shell pt-10 sm:pt-14 lg:pt-16">
        <div className="max-w-4xl">
          <p className="eyebrow">All Posts</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.04] text-teal sm:text-6xl">
            Practical guidance for childcare clarity and calmer family life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
            Read KINd Consulting notes on childcare costs, nanny support, family decisions,
            and building the kind of village that helps everyone feel steadier.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-shell pt-0">
        <SectionHeading
          eyebrow="Latest"
          title="Childcare decisions feel lighter with the right context."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.title} className="soft-card overflow-hidden">
              <div className="relative aspect-[16/10] bg-cream/70">
                <Image
                  src={post.image}
                  alt={`${post.title} blog visual`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="rounded-[1.25rem] object-contain p-2 sm:p-3"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-sage">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock aria-hidden="true" size={16} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-teal">
                  {post.title}
                </h2>
                <p className="mt-3 leading-7 text-ink/70">{post.summary}</p>
                <Link className="btn-secondary mt-6" href={contact.consultHref}>
                  <Mail aria-hidden="true" size={17} />
                  Ask about support
                </Link>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Need help choosing what comes next?"
        text="Book a complimentary consultation to talk through childcare options, organization, sleep support, or home management."
        primaryLabel="Book a Free Consultation"
        primaryHref={contact.consultHref}
      />
    </>
  );
}
