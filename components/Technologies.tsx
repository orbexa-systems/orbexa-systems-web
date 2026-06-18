"use client";

const allTechs = [
  { name: "React", emoji: "⚛️", category: "Frontend" },
  { name: "Next.js", emoji: "▲", category: "Frontend" },
  { name: "Angular", emoji: "🅰️", category: "Frontend" },
  { name: "TypeScript", emoji: "📘", category: "Frontend" },
  { name: "Tailwind", emoji: "🎨", category: "Frontend" },
  { name: "Java", emoji: "☕", category: "Backend" },
  { name: "Spring Boot", emoji: "🍃", category: "Backend" },
  { name: "Node.js", emoji: "🟢", category: "Backend" },
  { name: "Python", emoji: "🐍", category: "Backend" },
  { name: "Go", emoji: "🐹", category: "Backend" },
  { name: "PostgreSQL", emoji: "🐘", category: "Base de datos" },
  { name: "MySQL", emoji: "🐬", category: "Base de datos" },
  { name: "MongoDB", emoji: "🍃", category: "Base de datos" },
  { name: "Redis", emoji: "🔴", category: "Base de datos" },
  { name: "AWS", emoji: "☁️", category: "Cloud" },
  { name: "Azure", emoji: "🔷", category: "Cloud" },
  { name: "Docker", emoji: "🐳", category: "DevOps" },
  { name: "Kubernetes", emoji: "☸️", category: "DevOps" },
  { name: "Terraform", emoji: "🏗️", category: "DevOps" },
  { name: "GitHub Actions", emoji: "🐙", category: "CI/CD" },
  { name: "GitLab CI", emoji: "🦊", category: "CI/CD" },
];

const row1 = [...allTechs, ...allTechs];
const row2 = [...[...allTechs].reverse(), ...[...allTechs].reverse()];

function TechPill({ name, emoji, category }: { name: string; emoji: string; category: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-default">
      <span className="text-2xl" role="img" aria-label={name}>{emoji}</span>
      <div>
        <div className="text-slate-900 font-semibold text-sm leading-tight">{name}</div>
        <div className="text-slate-400 text-[11px] leading-tight">{category}</div>
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto">
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
      </div>

      {/* Row 1 — izquierda a derecha */}
      <div className="mb-4 overflow-hidden">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "scroll-left 35s linear infinite" }}
        >
          {row1.map((tech, i) => (
            <TechPill key={`r1-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Row 2 — derecha a izquierda */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "scroll-right 40s linear infinite" }}
        >
          {row2.map((tech, i) => (
            <TechPill key={`r2-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
