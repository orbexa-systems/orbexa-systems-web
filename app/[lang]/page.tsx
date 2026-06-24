import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Founders from "@/components/Founders";
import Industries from "@/components/Industries";
import Technologies from "@/components/Technologies";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQ from "@/components/FAQ";
import CookieBanner from "@/components/CookieBanner";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main>
        <Hero dict={dict.hero} />
        <Services dict={dict.services} />
        <WhyUs dict={dict.whyUs} />
        <Founders dict={dict.founders} />
        <Industries dict={dict.industries} />
        <Technologies dict={dict.technologies} lang={lang} />
        <CaseStudies dict={dict.caseStudies} />
        <Process dict={dict.process} />
        <Testimonials dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
        <CTA dict={dict.cta} />
        <Contact dict={dict.contact} lang={lang} />
      </main>
      <Footer dict={dict.footer} />
      <WhatsAppButton message={dict.whatsapp.message} tooltip={dict.whatsapp.tooltip} />
      <CookieBanner dict={dict.cookieBanner} lang={lang} />
    </>
  );
}
