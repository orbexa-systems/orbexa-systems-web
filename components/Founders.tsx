"use client";

import { ExternalLink } from "lucide-react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

type Founder = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  github: string;
  photo: string | null;
  initials: string;
};

type FoundersDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  storyTitle: string;
  story: string;
  linkedinLabel: string;
  githubLabel: string;
  items: Founder[];
};

export default function Founders({ dict }: { dict: FoundersDict }) {
  return (
    <section id="fundadores" className="py-24 lg:py-32 bg-slate-50">
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

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto mb-12 items-start">
          {dict.items.map((founder) => (
            <div
              key={founder.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
            >
              <div className="flex justify-center mb-5">
                {founder.photo ? (
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg select-none">
                    {founder.initials}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{founder.name}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">{founder.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed text-left mb-6">{founder.bio}</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {dict.linkedinLabel}
                  </a>
                )}
                {founder.github && (
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-400 hover:bg-slate-50 px-4 py-2 rounded-xl transition-colors"
                  >
                    <GitHubIcon />
                    {dict.githubLabel}
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{dict.storyTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{dict.story}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
