"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  items: FAQItem[];
  ctaText: string;
  ctaButton: string;
};

export default function FAQ({ dict }: { dict: FAQDict }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            {dict.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {dict.title}{" "}
            <span className="gradient-text">{dict.titleGradient}</span>
          </h2>
          <p className="text-lg text-slate-600">{dict.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-100">
          {dict.items.map((item, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-slate-900 font-semibold text-base group-hover:text-blue-600 transition-colors">
                  {item.question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                  {openIndex === i
                    ? <Minus className="w-3.5 h-3.5 text-blue-600" />
                    : <Plus className="w-3.5 h-3.5 text-blue-600" />
                  }
                </span>
              </button>
              {openIndex === i && (
                <p className="mt-4 text-slate-600 text-sm leading-relaxed pr-12">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-slate-500 text-sm mb-4">{dict.ctaText}</p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/25"
          >
            {dict.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
}
