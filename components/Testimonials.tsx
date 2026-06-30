"use client";

import { Star, Quote } from "lucide-react";

const avatarColors = ["bg-green-600"];

const GOOGLE_REVIEW_URL = "https://www.google.com/maps?cid=03520441995046567661";

type TestimonialsDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  items: { name: string; role: string; company: string; comment: string; initials: string }[];
  reviewButton: string;
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

        <div className="max-w-xl mx-auto space-y-6">
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
                  <div className="text-sm text-slate-400">{t.role}{t.company ? ` · ${t.company}` : ""}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {dict.reviewButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
