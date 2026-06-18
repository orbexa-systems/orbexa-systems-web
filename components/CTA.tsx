"use client";

import { Calendar, ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 lg:p-20 text-center shadow-2xl">
          {/* Background orbs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          {/* Grid decoration */}
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">Primera consulta 100% gratuita</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              ¿Listo para transformar{" "}
              <span className="text-yellow-300">tu negocio</span>?
            </h2>

            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Agenda una consulta gratuita con nuestros expertos. Analizamos tu proyecto,
              proponemos la solución tecnológica ideal y te damos una estimación sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5 hover:shadow-xl group"
              >
                <Calendar className="w-5 h-5" />
                Agenda una Consulta Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                "Sin compromiso",
                "Respuesta en 24h",
                "Expertos disponibles",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-blue-100">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
