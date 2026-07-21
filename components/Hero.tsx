"use client";

import { ArrowRight, ChevronDown, CheckCircle, TrendingUp, Users, Server } from "lucide-react";

const metricIcons = [TrendingUp, Users, Server];

type HeroDict = {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustBadges: string[];
  metrics: { value: string; label: string }[];
};

export default function Hero({ dict }: { dict: HeroDict }) {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-800 via-[#162032] to-slate-700"
    >
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">{dict.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {dict.title}{" "}
              <span className="gradient-text">{dict.titleGradient}</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              {dict.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contacto")}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 group"
              >
                {dict.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#servicios")}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                {dict.ctaSecondary}
              </button>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {dict.trustBadges.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-full max-w-md animate-float">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 ml-2 h-6 bg-white/10 rounded" />
                </div>
                <div className="space-y-2.5">
                  {[
                    { w: "w-3/4", color: "bg-blue-400/70" },
                    { w: "w-1/2", color: "bg-purple-400/70" },
                    { w: "w-5/6", color: "bg-green-400/70" },
                    { w: "w-2/3", color: "bg-blue-300/70" },
                    { w: "w-4/5", color: "bg-yellow-400/70" },
                    { w: "w-1/3", color: "bg-pink-400/70" },
                  ].map((line, i) => (
                    <div key={i} className={`h-3 ${line.w} ${line.color} rounded-full`} />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-green-400 text-sm font-mono">✓ Build successful</span>
                  <span className="text-slate-400 text-xs">v2.5.0</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                Next.js 15
              </div>
              <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-blue-500/40 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                TypeScript
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-md">
              {dict.metrics.map(({ value, label }, i) => {
                const Icon = metricIcons[i];
                return (
                  <div
                    key={label}
                    className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/12 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-tight">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
