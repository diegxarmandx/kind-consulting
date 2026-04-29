import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CredentialsSection } from "@/components/CredentialsSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kindconsultingllc.com"),
  title: {
    default: "KINd Consulting | Childcare Consulting & Family Support in Los Angeles",
    template: "%s | KINd Consulting"
  },
  description:
    "KINd Consulting helps families find childcare clarity, organize child-centered spaces, and create calmer home routines through expert childcare consulting, private childcare, home management, and organization support.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <CredentialsSection />
        <Footer />
      </body>
    </html>
  );
}
