"use client";

const techCategories = [
  {
    category: "Frontend",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    techs: [
      { name: "React", emoji: "⚛️" },
      { name: "Next.js", emoji: "▲" },
      { name: "Angular", emoji: "🅰️" },
      { name: "TypeScript", emoji: "📘" },
      { name: "Tailwind", emoji: "🎨" },
    ],
  },
  {
    category: "Backend",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    techs: [
      { name: "Java", emoji: "☕" },
      { name: "Spring Boot", emoji: "🍃" },
      { name: "Node.js", emoji: "🟢" },
      { name: "Python", emoji: "🐍" },
      { name: "Go", emoji: "🐹" },
    ],
  },
  {
    category: "Bases de Datos",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    techs: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "MySQL", emoji: "🐬" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "Redis", emoji: "🔴" },
      { name: "Elasticsearch", emoji: "🔍" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    techs: [
      { name: "AWS", emoji: "☁️" },
      { name: "Azure", emoji: "🔷" },
      { name: "Docker", emoji: "🐳" },
      { name: "Kubernetes", emoji: "☸️" },
      { name: "Terraform", emoji: "🏗️" },
    ],
  },
  {
    category: "CI/CD",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    techs: [
      { name: "GitHub Actions", emoji: "🐙" },
      { name: "GitLab CI", emoji: "🦊" },
      { name: "Jenkins", emoji: "🤖" },
      { name: "ArgoCD", emoji: "🚀" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Tecnologías de{" "}
            <span className="gradient-text">vanguardia</span>
          </h2>
          <p className="text-lg text-slate-600">
            Trabajamos con el ecosistema tecnológico más moderno y probado de la industria
            para entregar soluciones de clase mundial.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-8">
          {techCategories.map((cat) => (
            <div key={cat.category} className="bg-slate-50 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full`} />
                <h3 className={`text-lg font-bold ${cat.color}`}>{cat.category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`tech-item flex items-center gap-3 ${cat.bg} border ${cat.border} rounded-xl px-4 py-3 cursor-default`}
                  >
                    <span className="text-xl" role="img" aria-label={tech.name}>
                      {tech.emoji}
                    </span>
                    <span className="text-slate-700 font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
