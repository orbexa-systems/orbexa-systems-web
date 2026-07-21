"use client";

import { Code2, Globe, Puzzle, Cloud, Brain, LifeBuoy } from "lucide-react";

const icons = [Code2, Globe, Puzzle, Cloud, Brain, LifeBuoy];
const colors = [
  { color: "from-blue-500 to-blue-600", bg: "bg-blue-50", iconColor: "text-blue-600" },
  { color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-50", iconColor: "text-indigo-600" },
  { color: "from-violet-500 to-violet-600", bg: "bg-violet-50", iconColor: "text-violet-600" },
  { color: "from-sky-500 to-sky-600", bg: "bg-sky-50", iconColor: "text-sky-600" },
  { color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { color: "from-orange-500 to-orange-600", bg: "bg-orange-50", iconColor: "text-orange-600" },
];

type ServicesDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  items: { title: string; description: string }[];
};

export default function Services({ dict }: { dict: ServicesDict }) {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dict.items.map((service, i) => {
            const Icon = icons[i];
            const { color, bg, iconColor } = colors[i];
            return (
              <div
                key={service.title}
                className="card-hover group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-blue-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${bg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{service.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
