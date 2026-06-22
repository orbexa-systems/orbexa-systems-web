"use client";

const gradients = ["from-blue-600 to-indigo-600", "from-green-500 to-teal-600"];
const tagColors = ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700"];

type Case = {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  estado: string | null;
};

type CaseStudiesDict = {
  label: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  challengeLabel: string;
  solutionLabel: string;
  statusLabel: string;
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {dict.cases.map((c, i) => (
            <div
              key={c.title}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group flex flex-col"
            >
              <div className={`bg-gradient-to-r ${gradients[i]} p-6`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3`}>
                  {c.tag}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">{c.title}</h3>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{dict.challengeLabel}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{dict.solutionLabel}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.solution}</p>
                </div>
                {c.estado && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{dict.statusLabel}</p>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{c.estado}</p>
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
