import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "../dictionaries";

const metadata_es: Metadata = {
  metadataBase: new URL("https://orbexasystems.com"),
  title: "Orbexa Systems | Desarrollo de Software y Consultoría IT",
  description:
    "Especializado en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial. 15 años de experiencia enterprise.",
  keywords: ["desarrollo de software", "consultoría IT", "aplicaciones web", "cloud computing", "DevOps", "inteligencia artificial", "Orbexa Systems"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://orbexasystems.com/es",
    siteName: "Orbexa Systems",
    title: "Orbexa Systems | Desarrollo de Software y Consultoría IT",
    description: "Especializado en desarrollo de software, aplicaciones web, cloud, DevOps e inteligencia artificial.",
  },
};

const metadata_en: Metadata = {
  metadataBase: new URL("https://orbexasystems.com"),
  title: "Orbexa Systems | Software Development & IT Consulting",
  description:
    "Specialized in software development, web applications, cloud, DevOps and artificial intelligence. 15 years of enterprise experience.",
  keywords: ["software development", "IT consulting", "web applications", "cloud computing", "DevOps", "artificial intelligence", "Orbexa Systems"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbexasystems.com/en",
    siteName: "Orbexa Systems",
    title: "Orbexa Systems | Software Development & IT Consulting",
    description: "Specialized in software development, web applications, cloud, DevOps and artificial intelligence.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return lang === "en" ? metadata_en : metadata_es;
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <>{children}</>;
}
