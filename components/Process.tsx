"use client";

import { Search, BarChart2, Palette, Code2, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description:
      "Reuniones de kickoff para entender tu negocio, objetivos, usuarios y restricciones técnicas. Definimos el alcance y el plan de acción.",
    duration: "1-2 semanas",
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Análisis",
    description:
      "Evaluamos requerimientos funcionales y no funcionales, riesgos técnicos, integraciones existentes y definimos la arquitectura de la solución.",
    duration: "1-2 semanas",
  },
  {
    number: "03",
    icon: Palette,
    title: "Diseño",
    description:
      "Creamos wireframes, prototipos y diseño visual de alta fidelidad. Validamos la experiencia de usuario antes de escribir una sola línea de código.",
    duration: "2-3 semanas",
  },
  {
    number: "04",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Sprints de 2 semanas con demos continuas. Código revisado, testeado y documentado. Acceso a tablero en tiempo real con el avance del proyecto.",
    duration: "Variable",
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "Pruebas",
    description:
      "Testing automatizado, pruebas de carga, seguridad y aceptación de usuario. Garantizamos calidad antes del lanzamiento en producción.",
    duration: "1-2 semanas",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Despliegue y Soporte",
    description:
      "Lanzamiento controlado con rollback plan. Monitoreo activo post-go-live, capacitación del equipo y soporte continuo garantizado por SLA.",
    duration: "Continuo",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            De la idea al{" "}
            <span className="gradient-text">producto en producción</span>
          </h2>
          <p className="text-lg text-slate-600">
            Un proceso transparente, iterativo y orientado a resultados que garantiza
            proyectos exitosos en tiempo y presupuesto.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center group">
                  {/* Step bubble */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center mb-4 shadow-md group-hover:border-blue-500 group-hover:shadow-blue-200 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                    {/* Number badge */}
                    <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Duration pill */}
                  <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {step.duration}
                  </div>

                  {/* Text */}
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
