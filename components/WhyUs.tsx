"use client";

import { Users, Zap, Layers, ShieldCheck, BarChart3, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Ingenieros certificados con experiencia en proyectos enterprise internacionales.",
    stat: "15+",
    statLabel: "expertos en plantilla",
  },
  {
    icon: Zap,
    title: "Metodologías Ágiles",
    description: "Sprints de 2 semanas con entregas continuas y retroalimentación constante del cliente.",
    stat: "2 sem",
    statLabel: "ciclos de entrega",
  },
  {
    icon: Layers,
    title: "Tecnología Moderna",
    description: "Stack tecnológico actualizado con las últimas versiones y mejores prácticas del sector.",
    stat: "2024",
    statLabel: "stack actualizado",
  },
  {
    icon: BarChart3,
    title: "Arquitectura Escalable",
    description: "Diseñamos sistemas que crecen con tu negocio, desde startups hasta millones de usuarios.",
    stat: "10x",
    statLabel: "capacidad de escala",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Empresarial",
    description: "Cumplimiento OWASP, cifrado de datos y auditorías de seguridad en cada proyecto.",
    stat: "ISO",
    statLabel: "estándares de seguridad",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Continuo",
    description: "Acompañamiento post-lanzamiento, monitoreo 24/7 y SLA garantizado por contrato.",
    stat: "24/7",
    statLabel: "soporte disponible",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
              ¿Por Qué Elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              La diferencia que{" "}
              <span className="gradient-text">marca el resultado</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No solo escribimos código. Entendemos tu negocio, proponemos soluciones
              estratégicas y acompañamos cada fase del proyecto para asegurar el éxito.
            </p>

            {/* Big stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "98%", label: "Proyectos en tiempo" },
                { value: "+50", label: "Clientes atendidos" },
                { value: "8+", label: "Años de experiencia" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{s.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
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
                      <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-[15px]">{reason.title}</h3>
                      </div>
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
