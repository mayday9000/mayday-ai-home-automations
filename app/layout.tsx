import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SITE_NAME, SITE_URL, TAGLINE } from "@/lib/config";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Never Miss Another Call`,
  description:
    "Mayday AI answers every call your business can't, 24/7. It qualifies callers, books appointments, and routes emergencies to a human. " + TAGLINE,
  openGraph: {
    title: `${SITE_NAME} | Never Miss Another Call`,
    description:
      "An AI receptionist that catches every call you'd otherwise miss. Your team handles business hours; Mayday catches the rest.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF4EA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
