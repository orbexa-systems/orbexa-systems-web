"use client";

import { Calendar, ArrowRight, Sparkles } from "lucide-react";

type CTADict = {
  badge: string;
  title: string;
  titleGradient: string;
  titleEnd: string;
  subtitle: string;
  button: string;
  trustItems: string[];
};

export default function CTA({ dict }: { dict: CTADict }) {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 lg:p-20 text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">{dict.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              {dict.title}{" "}
              <span className="text-yellow-300">{dict.titleGradient}</span>
              {dict.titleEnd}
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {dict.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5 hover:shadow-xl group"
              >
                <Calendar className="w-5 h-5" />
                {dict.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {dict.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-100">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
