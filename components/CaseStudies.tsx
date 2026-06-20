"use client";

import { TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "Seguros · Banca · Telecom · Retail",
    tagColor: "bg-blue-100 text-blue-700",
    title: "15 años en sistemas críticos",
    problem:
      "Sectores donde un fallo impacta millones de transacciones, pólizas activas o contratos regulados.",
    solution:
      "He formado parte de equipos de desarrollo en proyectos para compañías líderes de los sectores asegurador, bancario, telecomunicaciones y retail, incluyendo operaciones internacionales, trabajando con arquitecturas robustas donde la disponibilidad y el cumplimiento regulatorio son innegociables.",
    result: null,
    metrics: [],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    tag: "Gastronomía · En desarrollo",
    tagColor: "bg-green-100 text-green-700",
    title: "Landing Page + Menú Digital QR",
    problem:
      "BarraFresh, negocio de comida saludable en Atizapán de Zaragoza, operaba sin presencia digital: sin sitio web, sin menú en línea y sin canal directo para recibir pedidos.",
    solution:
      "Landing page con Next.js 15 y Tailwind CSS, menú digital accesible vía código QR, integración directa con WhatsApp para pedidos, y SEO local optimizado para búsquedas en la zona.",
    result: null,
    estado: "Proyecto en fase de desarrollo activo.",
    metrics: [],
    gradient: "from-green-500 to-teal-600",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Experiencia y Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Trayectoria real en sectores donde el{" "}
            <span className="gradient-text">software no puede fallar</span>
          </h2>
          <p className="text-lg text-slate-600">
            Proyectos desarrollados en sectores de alta exigencia, donde la disponibilidad,
            la seguridad y el cumplimiento regulatorio son parte del día a día.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cases.map((c) => (
            <div
              key={c.title}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group flex flex-col"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${c.gradient} p-6`}>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3">
                  {c.tag}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">{c.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Desafío</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solución</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.solution}</p>
                </div>
                {"estado" in c && (
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Estado actual</p>
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
