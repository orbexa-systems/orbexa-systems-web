"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "Fintech",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Plataforma de Pagos Digitales",
    problem:
      "Una fintech regional necesitaba procesar transacciones en tiempo real con alta disponibilidad y cumplimiento regulatorio PCI-DSS.",
    solution:
      "Arquitectura de microservicios en AWS con Spring Boot, procesamiento de eventos con Kafka, y frontend React con actualizaciones en tiempo real via WebSockets.",
    result: "Procesamiento de +50,000 transacciones/día con 99.98% de uptime y reducción del 40% en costos operativos.",
    metrics: [
      { label: "Transacciones/día", value: "50K+" },
      { label: "Uptime", value: "99.98%" },
      { label: "Reducción costos", value: "40%" },
    ],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    tag: "Gastronomía",
    tagColor: "bg-green-100 text-green-700",
    title: "Landing Page + Menú Digital QR",
    problem:
      "BarraFresh, negocio de comida saludable en Atizapán de Zaragoza, operaba sin presencia digital: sin sitio web, sin menú en línea y sin canal directo para recibir pedidos.",
    solution:
      "Landing page con Next.js 15 y Tailwind CSS, menú digital accesible vía código QR, integración directa con WhatsApp para pedidos, y SEO local optimizado para búsquedas en la zona.",
    result: "Presencia digital completa desde el día uno, menú disponible 24/7 por QR, nuevos pedidos directos por WhatsApp y posicionamiento en búsquedas locales de comida saludable.",
    metrics: [
      { label: "Tiempo de carga", value: "<1s" },
      { label: "Canales digitales", value: "x3" },
      { label: "Pedidos digitales", value: "+40%" },
    ],
    gradient: "from-green-500 to-teal-600",
  },
  {
    tag: "Salud",
    tagColor: "bg-violet-100 text-violet-700",
    title: "Sistema de Gestión Hospitalaria",
    problem:
      "Una red de hospitales operaba con sistemas legacy aislados, causando duplicación de datos, demoras en diagnósticos y riesgo en la atención al paciente.",
    solution:
      "Plataforma centralizada con módulos de HIS, LIS y RIS integrados, HL7 FHIR API, dashboard clínico en tiempo real y notificaciones push críticas.",
    result: "Reducción del 55% en tiempo de diagnóstico, cero pérdidas de datos en 2 años y adopción del 92% del personal médico.",
    metrics: [
      { label: "Tiempo diagnóstico", value: "-55%" },
      { label: "Pérdida de datos", value: "0%" },
      { label: "Adopción staff", value: "92%" },
    ],
    gradient: "from-violet-600 to-purple-600",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Resultados que{" "}
            <span className="gradient-text">hablan por sí solos</span>
          </h2>
          <p className="text-lg text-slate-600">
            Proyectos reales, métricas reales. Descubre cómo ayudamos a empresas
            de diferentes industrias a alcanzar sus objetivos tecnológicos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group flex flex-col"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${c.gradient} p-6`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3`}>
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
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Resultado</p>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{c.result}</p>
                </div>

                {/* Metrics */}
                <div className="mt-auto pt-4 border-t border-gray-100 grid grid-cols-3 gap-2">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-lg font-bold text-blue-600 flex items-center justify-center gap-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
