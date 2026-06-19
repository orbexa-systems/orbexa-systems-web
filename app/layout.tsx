import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbexasystems.com"),
  title: "Orbexa | Homepage",
  description:
    "Empresa especializada en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial. Transformamos ideas en soluciones tecnológicas escalables.",
  keywords: [
    "desarrollo de software",
    "consultoría IT",
    "aplicaciones web",
    "cloud computing",
    "DevOps",
    "inteligencia artificial",
    "Orbexa Systems",
    "tecnología empresarial",
  ],
  authors: [{ name: "Orbexa Systems" }],
  creator: "Orbexa Systems",
  publisher: "Orbexa Systems",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://orbexasystems.com",
    siteName: "Orbexa Systems",
    title: "Orbexa Systems | Desarrollo de Software y Consultoría IT",
    description:
      "Empresa especializada en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orbexa Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbexa Systems | Desarrollo de Software y Consultoría IT",
    description:
      "Empresa especializada en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orbexa Systems",
  url: "https://orbexasystems.com",
  logo: "https://orbexasystems.com/orbexa-systems-logo-completo.svg",
  description:
    "Empresa especializada en desarrollo de software, aplicaciones web, cloud computing, DevOps e inteligencia artificial.",
  foundingDate: "2018",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
