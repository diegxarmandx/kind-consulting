import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAspect?: "landscape" | "portrait" | "square";
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  href,
  image,
  imageAspect = "landscape",
  icon: Icon
}: ServiceCardProps) {
  const aspectClass = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[4/5]",
    square: "aspect-square"
  }[imageAspect];

  return (
    <article className="group soft-card overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      {image ? (
        <div className={`relative ${aspectClass} overflow-hidden bg-cream/70`}>
          <Image
            src={image}
            alt={`${title} service visual`}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
            className="rounded-[1.25rem] object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/50 text-teal">
          <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
        </div>
        <h3 className="text-xl font-semibold text-teal">{title}</h3>
        <p className="mt-3 leading-7 text-ink/70">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-teal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        >
          Learn more
          <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </div>
    </article>
  );
}
