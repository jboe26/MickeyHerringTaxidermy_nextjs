import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mickey Herring Taxidermy",
  description: "Handcrafted taxidermy in Columbia, SC",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mickey Herring Taxidermy",
  description:
    "Handcrafted taxidermy services specializing in deer, turkey, and fish mounts in Columbia, South Carolina.",
  url: "https://mickeyherringtaxidermy.com",
  image: "https://mickeyherringtaxidermy.com/assets/MH.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Columbia",
    addressRegion: "SC",
    addressCountry: "US",
  },
  areaServed: ["Columbia, SC", "South Carolina"],
  priceRange: "$$",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Taxidermy Mounts",
        description: "Custom deer, turkey, and fish taxidermy mounts.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/wooded-scene.jpg" />
      </head>
      <body className="bg-[#3d2b1f]">
        <Script
          id="business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
