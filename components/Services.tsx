"use client";

import { Code2, Globe, Puzzle, Cloud, Brain, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Construimos aplicaciones a medida con arquitecturas robustas, código limpio y las mejores prácticas de la industria para garantizar escalabilidad y mantenibilidad.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description:
      "Desarrollamos experiencias web modernas con React y Next.js, optimizadas para rendimiento, SEO y conversión. Desde MVPs hasta plataformas enterprise.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Puzzle,
    title: "APIs e Integraciones",
    description:
      "Diseñamos e integramos APIs RESTful y GraphQL, conectando sistemas legacy con plataformas modernas y automatizando flujos de negocio críticos.",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Migración y despliegue en AWS, Azure y GCP. Implementamos CI/CD, contenedores Docker y orquestación Kubernetes para entregas continuas y seguras.",
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Integramos modelos de IA y ML para automatizar decisiones, analizar datos a escala y crear asistentes inteligentes que potencian tu negocio.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: LifeBuoy,
    title: "Soporte e Infraestructura",
    description:
      "Monitoreo continuo, mantenimiento preventivo y soporte técnico especializado para garantizar la disponibilidad y rendimiento de tus sistemas.",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Soluciones tecnológicas para{" "}
            <span className="gradient-text">cada desafío</span>
          </h2>
          <p className="text-lg text-slate-600">
            Desde el diseño hasta el despliegue, ofrecemos un ecosistema completo de servicios
            tecnológicos para impulsar la transformación digital de tu empresa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-hover group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-blue-100"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.bg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{service.description}</p>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
