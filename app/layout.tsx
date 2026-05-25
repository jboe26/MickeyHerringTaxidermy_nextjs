import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mickey Herring Taxidermy",
  description: "Handcrafted taxidermy in Columbia, SC",
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
      <body className="bg-[#3d2b1f]">{children}</body>
    </html>
  );
}
