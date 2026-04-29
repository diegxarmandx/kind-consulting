"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, images, navLinks } from "@/lib/siteContent";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-cream/90 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-h-12 items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          aria-label="KINd Consulting home"
        >
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-teal/10 bg-cream shadow-card">
            <Image
              src={images.logo}
              alt=""
              fill
              sizes="48px"
              className="rounded-full object-contain p-1"
              priority
            />
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight text-teal">KINd Consulting</span>
            <span className="block text-xs font-medium text-ink/60">KINd Vibez Only</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal ${
                  isActive ? "bg-blush/50 text-teal" : "text-ink/70 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="btn-primary min-h-11 px-5" href={contact.consultHref}>
            Book Free Consult
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal/20 bg-cream text-teal shadow-card transition hover:bg-blush/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="fixed inset-x-0 top-20 z-50 border-b border-teal/10 bg-cream px-5 pb-6 pt-2 shadow-soft lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`min-h-12 rounded-2xl px-4 py-3 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                    isActive ? "bg-blush/60 text-teal" : "text-ink/75 hover:bg-teal/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link className="btn-primary mt-2" href={contact.consultHref}>
              Book Free Consult
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
