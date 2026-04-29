import Image from "next/image";
import { credentials, images } from "@/lib/siteContent";

const visibleCredentials = credentials.slice(0, 3);

export function CredentialsSection() {
  return (
    <section className="section-shell pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16">
      <div className="rounded-4xl border border-teal/10 bg-blush/35 p-6 shadow-card sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Credentials</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-teal sm:text-4xl">
            Professional care credentials parents can feel confident about.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
          {visibleCredentials.map((credential, index) => (
            <article
              key={credential}
              className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-teal/10 bg-cream/82 shadow-card"
              aria-label={credential}
            >
              <Image
                src={images.credentials[index]}
                alt={`${credential} credential`}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 30vw, 100vw"
                className="rounded-[1.35rem] object-contain p-3 sm:p-4"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
