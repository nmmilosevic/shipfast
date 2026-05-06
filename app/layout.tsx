import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Buildwise — Turn Your Idea Into a Real App",
    template: "%s | Buildwise",
  },
  description:
    "Got a business idea you can't stop thinking about? We design, build, and launch your app in weeks — no tech knowledge required. Fixed price, full ownership, real results.",
  metadataBase: new URL("https://buildwise.co"),
  keywords: [
    "turn idea into app",
    "build an app without coding",
    "app development for non-technical founders",
    "MVP development",
    "custom software development",
    "product studio",
    "app development agency",
    "build my idea",
    "startup app development",
    "software development for entrepreneurs",
    "no code alternative",
    "idea to product",
  ],
  openGraph: {
    title: "Buildwise — Turn Your Idea Into a Real App",
    description:
      "Got a business idea you can't stop thinking about? We design, build, and launch your app in weeks — no tech knowledge required.",
    url: "https://buildwise.co",
    siteName: "Buildwise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildwise — Turn Your Idea Into a Real App",
    description:
      "Got a business idea you can't stop thinking about? We design, build, and launch your app in weeks — no tech knowledge required.",
  },
  alternates: {
    canonical: "https://buildwise.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Buildwise",
  url: "https://buildwise.co",
  description:
    "We design, build, and launch custom apps and digital products for entrepreneurs and business owners — no technical knowledge required.",
  email: "hello@buildwise.co",

  serviceType: "Software Development",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom App Development",
          description:
            "We turn your idea into a real, working app — design, build, and launch all included.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MVP Development",
          description:
            "Launch the first version of your product fast with a fixed scope and fixed price.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Client Portal Development",
          description:
            "Premium portals for files, updates, and approvals — built for service businesses.",
        },
      },
    ],
  },
  priceRange: "€€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable} min-h-dvh antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
