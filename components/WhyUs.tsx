"use client";

import { Users, Zap, Layers, ShieldCheck, BarChart3, HeadphonesIcon } from "lucide-react";

const reasonIcons = [Users, Zap, Layers, BarChart3, ShieldCheck, HeadphonesIcon];

type WhyUsDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  reasons: { title: string; description: string; stat: string; statLabel: string }[];
};

export default function WhyUs({ dict }: { dict: WhyUsDict }) {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
              {dict.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {dict.title}{" "}
              <span className="gradient-text">{dict.titleGradient}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{dict.subtitle}</p>
            <div className="grid grid-cols-2 gap-6">
              {dict.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{s.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dict.reasons.map((reason, i) => {
              const Icon = reasonIcons[i];
              return (
                <div
                  key={reason.title}
                  className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900 text-[15px] mb-1">{reason.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
                      <div className="mt-3 flex items-center gap-1.5">
                        <span className="text-blue-600 font-bold text-lg">{reason.stat}</span>
                        <span className="text-slate-400 text-xs">{reason.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
