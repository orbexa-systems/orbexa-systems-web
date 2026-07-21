"use client";

import { Building2, Shield, Radio, ShoppingBag, UtensilsCrossed, Truck } from "lucide-react";

const icons = [Building2, Shield, Radio, ShoppingBag, UtensilsCrossed, Truck];
const colorClasses = [
  "bg-blue-50 text-blue-600",
  "bg-violet-50 text-violet-600",
  "bg-sky-50 text-sky-600",
  "bg-emerald-50 text-emerald-600",
  "bg-orange-50 text-orange-600",
  "bg-amber-50 text-amber-600",
];

type IndustriesDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  disclaimer: string;
  items: { title: string; description: string }[];
};

export default function Industries({ dict }: { dict: IndustriesDict }) {
  return (
    <section id="industrias" className="py-24 lg:py-32 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex gap-4 items-start group"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[i % colorClasses.length]} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-400 text-xs mt-10 max-w-2xl mx-auto italic">
          {dict.disclaimer}
        </p>
      </div>
    </section>
  );
}
