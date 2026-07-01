import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Orbexa Systems",
  url: "https://orbexasystems.com",
  logo: "https://orbexasystems.com/orbexa-systems-logo-completo.svg",
  description:
    "Specialized in software development, web applications, cloud computing, DevOps and artificial intelligence.",
  foundingDate: "2018",
  telephone: "+52-55-8600-9578",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lomas de Tepalcapa",
    addressLocality: "Ciudad López Mateos",
    addressRegion: "Estado de México",
    postalCode: "52928",
    addressCountry: "MX",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-55-8600-9578",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://linkedin.com/company/orbexasystems",
    "https://twitter.com/orbexasystems",
    "https://github.com/orbexasystems",
    "https://g.page/r/Cd3XPM4Ij-Q2EBM/review",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
