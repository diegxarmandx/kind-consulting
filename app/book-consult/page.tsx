import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { BookConsultForm } from "@/components/BookConsultForm";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Request a complimentary KINd Consulting consultation for childcare guidance, private childcare, home management, organization, or pediatric sleep consulting."
};

export default function BookConsultPage() {
  return (
    <section className="section-shell pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Book a Free Consultation"
            title="Tell us what would bring more calm into your home."
            description="Share a few details about your family’s needs. KINd Consulting will follow up to discuss childcare decisions, organization, routines, sleep support, or home management."
          />
          <div className="mt-8 space-y-4 rounded-4xl border border-teal/10 bg-blush/35 p-5 shadow-card sm:p-6">
            <div className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 shrink-0 text-sage" size={20} />
              <a className="font-semibold text-teal underline-offset-4 hover:underline" href={contact.emailHref}>
                {contact.email}
              </a>
            </div>
            <div className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 shrink-0 text-sage" size={20} />
              <a className="font-semibold text-teal underline-offset-4 hover:underline" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </div>
            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-sage" size={20} />
              <p className="font-semibold text-teal">{contact.location}</p>
            </div>
          </div>
        </div>
        <BookConsultForm />
      </div>
    </section>
  );
}
