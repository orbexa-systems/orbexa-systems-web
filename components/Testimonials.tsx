"use client";

import { Star, Quote } from "lucide-react";

const avatarColors = ["bg-green-600"];

type TestimonialsDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  items: { name: string; role: string; company: string; comment: string; initials: string }[];
};

export default function Testimonials({ dict }: { dict: TestimonialsDict }) {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-800 via-[#162032] to-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37,99,235,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 40%)`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
            {dict.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {dict.title}{" "}
            <span className="gradient-text">{dict.titleGradient}</span>
          </h2>
          <p className="text-lg text-slate-400">{dict.subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto">
          {dict.items.map((t, i) => (
            <div
              key={t.name}
              className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/8 hover:border-white/20"
            >
              <Quote className="w-8 h-8 text-blue-400/60" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed flex-1 text-[15px] italic">
                &ldquo;{t.comment}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className={`w-12 h-12 ${avatarColors[i] ?? "bg-blue-600"} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
