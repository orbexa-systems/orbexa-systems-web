"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type NavbarDict = {
  links: { label: string; href: string }[];
  cta: string;
};

export default function Navbar({ dict, lang }: { dict: NavbarDict; lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const otherLang = lang === "es" ? "en" : "es";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center group"
          >
            <svg width="175" height="52" viewBox="108 44 190 102" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(150,90)">
                <text x="-20" y="14" fontFamily="Arial, Helvetica, sans-serif" fontSize="46" fontWeight="700" letterSpacing="-1" fill="#042C53">RBEXA</text>
                <ellipse cx="13" cy="-4" rx="30" ry="30" fill="none" stroke="#378ADD" strokeWidth="6"/>
                <ellipse cx="13" cy="-4" rx="42" ry="16" fill="none" stroke="#185FA5" strokeWidth="3.2" transform="rotate(-18 13 -4)"/>
              </g>
              <text x="130" y="130" fontFamily="Arial, Helvetica, sans-serif" fontSize="19" fontWeight="500" letterSpacing="4" fill="#185FA5">SYSTEMS</text>
            </svg>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {dict.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`/${otherLang}`}
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
            >
              {otherLang.toUpperCase()}
            </Link>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              {dict.cta}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {dict.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex gap-2">
                <Link
                  href={`/${otherLang}`}
                  className="flex-1 text-center border border-gray-200 text-slate-600 font-semibold px-5 py-3 rounded-xl transition-colors hover:bg-gray-50"
                >
                  {otherLang.toUpperCase()}
                </Link>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
                >
                  {dict.cta}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
