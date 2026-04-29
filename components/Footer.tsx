import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, images, navLinks } from "@/lib/siteContent";

const socials = ["Instagram", "TikTok", "Facebook", "LinkedIn"];

export function Footer() {
  return (
    <footer className="border-t border-teal/10 bg-teal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-full border border-cream/20 bg-cream">
              <Image src={images.logo} alt="" fill sizes="56px" className="rounded-full object-contain p-1" />
            </span>
            <div>
              <p className="text-lg font-semibold">KINd Consulting</p>
              <p className="text-sm text-cream/70">KINd Vibez Only</p>
            </div>
          </div>
          <p className="mt-6 max-w-md leading-8 text-cream/75">
            Childcare clarity, organized homes, and calm support for modern family life in
            Los Angeles.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blush">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-9 items-center text-cream/75 transition hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blush">Contact</h2>
          <ul className="mt-5 space-y-4 text-cream/75">
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 shrink-0 text-blush" size={18} />
              <a className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream" href={contact.emailHref}>
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 shrink-0 text-blush" size={18} />
              <a className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-blush" size={18} />
              <span>{contact.location}</span>
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="Social channels">
            {socials.map((social) => (
              <span
                key={social}
                className="rounded-full border border-cream/20 px-3 py-2 text-sm text-cream/70"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-5 text-center text-sm text-cream/60">
        ©2025 by Sadel
      </div>
    </footer>
  );
}
