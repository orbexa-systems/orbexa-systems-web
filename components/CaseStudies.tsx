"use client";

import { ImageIcon, CheckCircle } from "lucide-react";

const gradients = ["from-blue-600 to-indigo-600", "from-green-500 to-teal-600"];

type Case = {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  technologies?: string[];
  highlights?: string[];
  impact?: string | null;
  estado: string | null;
  screenshotPlaceholder?: boolean;
};

type CaseStudiesDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  challengeLabel: string;
  solutionLabel: string;
  highlightsLabel: string;
  technologiesLabel: string;
  impactLabel: string;
  statusLabel: string;
  screenshotLabel: string;
  screenshotComingSoon: string;
  cases: Case[];
};

export default function CaseStudies({ dict }: { dict: CaseStudiesDict }) {
  return (
    <section id="casos" className="py-24 lg:py-32 bg-slate-50">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dict.cases.map((c, i) => (
            <div
              key={c.title}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group flex flex-col"
            >
              <div className={`bg-gradient-to-r ${gradients[i % gradients.length]} p-6`}>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3">
                  {c.tag}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">{c.title}</h3>
              </div>

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {dict.challengeLabel}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {dict.solutionLabel}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.solution}</p>
                </div>

                {c.highlights && c.highlights.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {dict.highlightsLabel}
                    </p>
                    <ul className="space-y-3">
                      {c.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {c.technologies && c.technologies.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {dict.technologiesLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {c.impact && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {dict.impactLabel}
                    </p>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{c.impact}</p>
                  </div>
                )}

                {c.estado && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {dict.statusLabel}
                    </p>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{c.estado}</p>
                  </div>
                )}

                {c.screenshotPlaceholder && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {dict.screenshotLabel}
                    </p>
                    <div className="w-full h-36 bg-slate-100 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400">
                      <ImageIcon className="w-7 h-7" />
                      <span className="text-xs">{dict.screenshotComingSoon}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
