import { Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
  className?: string;
};

export function TestimonialCard({ name, location, quote, className = "" }: TestimonialCardProps) {
  return (
    <article className={`soft-card h-full p-6 transition duration-300 ${className}`}>
      <Quote aria-hidden="true" className="text-mauve" size={30} strokeWidth={1.7} />
      <p className="mt-5 leading-8 text-ink/75">{quote}</p>
      <div className="mt-6 border-t border-teal/10 pt-5">
        <p className="font-semibold text-teal">{name}</p>
        <p className="mt-1 text-sm text-ink/60">{location}</p>
      </div>
    </article>
  );
}
