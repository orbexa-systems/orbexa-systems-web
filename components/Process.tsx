"use client";

import { Search, BarChart2, Palette, Code2, FlaskConical, Rocket } from "lucide-react";

const stepIcons = [Search, BarChart2, Palette, Code2, FlaskConical, Rocket];

type ProcessDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  steps: { title: string; description: string; duration: string }[];
};

export default function Process({ dict }: { dict: ProcessDict }) {
  return (
    <section className="py-24 lg:py-32 bg-white">
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

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {dict.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center mb-4 shadow-md group-hover:border-blue-500 group-hover:shadow-blue-200 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {step.duration}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
