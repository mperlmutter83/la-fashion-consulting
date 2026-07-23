import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Los Angeles Fashion Consultant - Los Angeles Fashion Consulting",
    template: "%s - Los Angeles Fashion Consulting",
  },
  description:
    "Discover unparalleled expertise in fashion manufacturing, design, and consulting, tailored to elevate your brand to new heights.",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Los Angeles Fashion Consulting",
  url: "https://losangelesfashionconsulting.com/",
  telephone: "(310) 597-4142",
  email: "info@losangelesfashionconsulting.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  description:
    "Expert fashion consulting in Los Angeles: fashion design consulting, manufacturing solutions, sourcing and supply chain guidance for fashion brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
