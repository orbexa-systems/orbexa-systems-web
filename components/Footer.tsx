"use client";

import { ArrowRight } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/orbexasystems",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 110-4 2 2 0 010 4z" /></svg>,
  },
  {
    label: "Twitter/X",
    href: "https://x.com/orbexasystems",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: "GitHub",
    href: "https://github.com/orbexasystems",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@orbexasystems",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
];

type FooterDict = {
  description: string;
  servicesTitle: string;
  services: string[];
  navTitle: string;
  navLinks: { label: string; href: string }[];
  contactTitle: string;
  emailLabel: string;
  whatsappLabel: string;
  locationLabel: string;
  location: string;
  ctaButton: string;
  copyright: string;
  privacyPolicy: string;
  termsOfUse: string;
  cookies: string;
};

export default function Footer({ dict }: { dict: FooterDict }) {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <svg width="175" height="52" viewBox="108 44 190 102" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(150,90)">
                  <text x="-20" y="14" fontFamily="Arial, Helvetica, sans-serif" fontSize="46" fontWeight="700" letterSpacing="-1" fill="#FFFFFF">RBEXA</text>
                  <ellipse cx="13" cy="-4" rx="30" ry="30" fill="none" stroke="#FFFFFF" strokeWidth="6"/>
                  <ellipse cx="13" cy="-4" rx="42" ry="16" fill="none" stroke="#FFFFFF" strokeWidth="3.2" transform="rotate(-18 13 -4)"/>
                </g>
                <text x="130" y="130" fontFamily="Arial, Helvetica, sans-serif" fontSize="19" fontWeight="500" letterSpacing="4" fill="#93C5FD">SYSTEMS</text>
              </svg>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{dict.description}</p>
            <div className="flex gap-3">
              {socials.map(({ label, href, svg }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">{dict.servicesTitle}</h4>
            <ul className="space-y-3">
              {dict.services.map((s) => (
                <li key={s}>
                  <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollTo("#servicios"); }} className="text-slate-400 hover:text-white text-sm flex items-center gap-1.5 group transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">{dict.navTitle}</h4>
            <ul className="space-y-3">
              {dict.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-slate-400 hover:text-white text-sm flex items-center gap-1.5 group transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">{dict.contactTitle}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{dict.emailLabel}</div>
                <a href="mailto:contacto@orbexasystems.com" className="text-slate-300 hover:text-blue-400 transition-colors">contacto@orbexasystems.com</a>
              </div>
              <div>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{dict.whatsappLabel}</div>
                <a href="https://wa.me/525586009578" className="text-slate-300 hover:text-emerald-400 transition-colors">+52 55 8600 9578</a>
              </div>
              <div>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{dict.locationLabel}</div>
                <p className="text-slate-400">{dict.location}</p>
              </div>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollTo("#contacto"); }} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors mt-2">
                {dict.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Orbexa Systems. {dict.copyright}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">{dict.privacyPolicy}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{dict.termsOfUse}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{dict.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
