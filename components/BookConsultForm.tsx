"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contact } from "@/lib/siteContent";

const serviceOptions = [
  "Childcare Consulting",
  "Private Childcare",
  "Nursery / Playroom Organization",
  "Home Management",
  "Pediatric Sleep Consulting",
  "Not sure yet"
];

const inputClass =
  "mt-2 min-h-12 w-full rounded-2xl border border-teal/15 bg-cream/80 px-4 py-3 text-base text-ink shadow-sm outline-none transition placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/20";

export function BookConsultForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      preferredContact: formData.get("preferredContact"),
      service: formData.get("service"),
      timeline: formData.get("timeline"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/book-consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (caughtError) {
      setStatus("error");
      setError(caughtError instanceof Error ? caughtError.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="soft-card p-5 sm:p-7 lg:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-semibold text-teal">
          Name <span aria-hidden="true">*</span>
          <input className={inputClass} name="name" autoComplete="name" required />
        </label>
        <label className="block font-semibold text-teal">
          Email <span aria-hidden="true">*</span>
          <input className={inputClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="block font-semibold text-teal">
          Phone
          <input className={inputClass} name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="block font-semibold text-teal">
          Preferred contact
          <select className={inputClass} name="preferredContact" defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Either</option>
          </select>
        </label>
        <label className="block font-semibold text-teal">
          Service interest
          <select className={inputClass} name="service" defaultValue="Not sure yet">
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block font-semibold text-teal">
          Timeline
          <input
            className={inputClass}
            name="timeline"
            placeholder="Now, this month, planning ahead..."
          />
        </label>
      </div>

      <label className="mt-5 block font-semibold text-teal">
        What would you like support with? <span aria-hidden="true">*</span>
        <textarea
          className={`${inputClass} min-h-36 resize-y leading-7`}
          name="message"
          required
          placeholder="Tell us a little about your childcare, organization, routine, sleep, or home support needs."
        />
      </label>

      <p className="mt-4 text-sm leading-6 text-ink/65">
        Required fields are marked with an asterisk. Submissions are sent to {contact.email}.
      </p>

      {status === "success" ? (
        <p className="mt-5 rounded-2xl border border-sage/25 bg-sage/10 px-4 py-3 font-semibold text-teal" role="status">
          Thank you. Your consultation request has been sent.
        </p>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 rounded-2xl border border-teal/15 bg-blush/35 px-4 py-3 text-ink" role="alert">
          <p className="font-semibold text-teal">{error}</p>
          <a className="mt-2 inline-flex font-semibold text-teal underline" href={contact.emailHref}>
            Email KINd directly
          </a>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send aria-hidden="true" size={18} />
        {status === "submitting" ? "Sending..." : "Send Consultation Request"}
      </button>
    </form>
  );
}
