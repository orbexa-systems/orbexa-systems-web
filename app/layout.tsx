import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novatechsolutions.com"),
  title: "NovaTech Solutions | Desarrollo de Software y Consultoría IT",
  description:
    "Empresa especializada en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial. Transformamos ideas en soluciones tecnológicas escalables.",
  keywords: [
    "desarrollo de software",
    "consultoría IT",
    "aplicaciones web",
    "cloud computing",
    "DevOps",
    "inteligencia artificial",
    "NovaTech Solutions",
    "tecnología empresarial",
  ],
  authors: [{ name: "NovaTech Solutions" }],
  creator: "NovaTech Solutions",
  publisher: "NovaTech Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://novatechsolutions.com",
    siteName: "NovaTech Solutions",
    title: "NovaTech Solutions | Desarrollo de Software y Consultoría IT",
    description:
      "Empresa especializada en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaTech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaTech Solutions | Desarrollo de Software y Consultoría IT",
    description:
      "Empresa especializada en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NovaTech Solutions",
  url: "https://novatechsolutions.com",
  logo: "https://novatechsolutions.com/logo.png",
  description:
    "Empresa especializada en desarrollo de software, aplicaciones web, cloud computing, DevOps e inteligencia artificial.",
  foundingDate: "2018",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-0100",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://linkedin.com/company/novatechsolutions",
    "https://twitter.com/novatechsol",
    "https://github.com/novatechsolutions",
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
