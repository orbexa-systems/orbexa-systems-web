"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CTO",
    company: "FinanzasPro S.A.",
    comment:
      "Orbexa Systems transformó por completo nuestra plataforma de pagos. El equipo demostró un nivel técnico excepcional, cumplieron cada sprint puntualmente y la calidad del código es impresionante. Superaron todas nuestras expectativas.",
    rating: 5,
    initials: "CM",
    color: "bg-blue-600",
  },
  {
    name: "Mary González",
    role: "Fundadora",
    company: "BarraFresh",
    comment:
      "No teníamos ninguna presencia en internet y Orbexa Systems nos llevó de cero a tener un sitio profesional con menú digital por QR en muy poco tiempo. Ahora recibimos pedidos por WhatsApp todos los días. Fue la mejor inversión para el negocio.",
    rating: 5,
    initials: "MG",
    color: "bg-green-600",
  },
  {
    name: "Dr. Luis Herrera",
    role: "Director de Tecnología",
    company: "Red Hospitalaria del Norte",
    comment:
      "Implementar un sistema hospitalario es extremadamente delicado. Orbexa Systems gestionó la complejidad con madurez, seguridad y profesionalismo. El sistema lleva 2 años en producción sin incidentes críticos. Es una alianza que continuaremos.",
    rating: 5,
    initials: "LH",
    color: "bg-violet-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37,99,235,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Lo que dicen nuestros{" "}
            <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-lg text-slate-400">
            La satisfacción de nuestros clientes es la mejor validación de nuestro trabajo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/8 hover:border-white/20"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-400/60" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-300 leading-relaxed flex-1 text-[15px] italic">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
