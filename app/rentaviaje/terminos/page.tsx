import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — RentaViaje",
  description:
    "Términos y condiciones de uso de RentaViaje, la app de análisis de rentabilidad para conductores de Uber Driver y DiDi Conductor en México.",
};

const sections = [
  {
    heading: "1. Descripción del servicio",
    body: "RentaViaje es una aplicación móvil desarrollada por Orbexa Systems que analiza automáticamente las ofertas de viaje de plataformas como Uber Driver y DiDi Conductor, y muestra al conductor un veredicto de rentabilidad en tiempo real. La app está diseñada exclusivamente para el mercado mexicano y opera únicamente en dispositivos Android.",
  },
  {
    heading: "2. Uso permitido",
    body: "RentaViaje está destinada exclusivamente a:\n• Conductores mayores de edad registrados en plataformas de transporte por app.\n• Uso personal, no comercial.\n• Operación en territorio mexicano.\n\nQueda prohibido modificar, descompilar, distribuir o revender la aplicación o cualquiera de sus componentes sin autorización escrita de Orbexa Systems.",
  },
  {
    heading: "3. Carácter informativo de los cálculos",
    body: "Los resultados que muestra RentaViaje son estimaciones orientativas. No constituyen asesoría financiera ni garantizan rentabilidad real. El conductor es el único responsable de las decisiones que tome con base en la información mostrada.\n\nLa precisión de los cálculos depende de factores externos como:\n• La calidad de lectura del texto en pantalla (árbol de accesibilidad).\n• Los parámetros de consumo y metas configurados por el propio usuario.\n• Variaciones en el precio de la gasolina, electricidad u otros costos operativos.\n• Condiciones de tráfico o cambios en la oferta durante el trayecto.\n\nOrbexa Systems no se responsabiliza por pérdidas económicas derivadas del uso o la interpretación de los resultados de la app.",
  },
  {
    heading: "4. Relación con plataformas de terceros",
    body: "RentaViaje no tiene relación comercial, técnica ni legal con Uber, DiDi, inDrive ni ninguna otra plataforma de transporte. El uso del Servicio de Accesibilidad de Android para leer información de estas apps puede estar sujeto a sus propios Términos de Servicio.\n\nEl usuario acepta que el uso de RentaViaje en conjunto con dichas plataformas es bajo su propia responsabilidad, y que Orbexa Systems no será responsable de suspensiones, bloqueos o sanciones que una plataforma de terceros pueda aplicar a la cuenta del conductor.",
  },
  {
    heading: "5. Disponibilidad del servicio",
    body: 'RentaViaje se ofrece "tal como está" (as is). Orbexa Systems no garantiza que la app funcione de forma ininterrumpida ni que sea compatible con todas las versiones de Android o con todos los modelos de dispositivo. Nos reservamos el derecho de actualizar, modificar o discontinuar la app en cualquier momento sin previo aviso.',
  },
  {
    heading: "6. Limitación de responsabilidad",
    body: "En la máxima medida permitida por la ley mexicana, Orbexa Systems no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de RentaViaje, incluyendo pero no limitado a pérdidas de ingresos, pérdida de datos o interrupción del negocio.",
  },
  {
    heading: "7. Propiedad intelectual",
    body: "RentaViaje, su código fuente, diseño, logotipos y contenido son propiedad de Orbexa Systems y están protegidos por las leyes de propiedad intelectual aplicables en México. Ningún elemento de la app puede reproducirse sin autorización expresa.",
  },
  {
    heading: "8. Modificaciones a estos términos",
    body: 'Orbexa Systems puede actualizar estos Términos y Condiciones en cualquier momento. La fecha de "Última actualización" al inicio de esta página indica cuándo se realizaron los cambios más recientes. El uso continuado de la app tras una actualización implica la aceptación de los nuevos términos.',
  },
  {
    heading: "9. Ley aplicable",
    body: "Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se resolverá ante los tribunales competentes de la República Mexicana.",
  },
  {
    heading: "10. Contacto",
    body: "Para cualquier consulta relacionada con estos términos:\ncontacto@orbexasystems.com.mx\norbexasystems.com",
  },
];

export default function RentaViajeTerminos() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-800 text-white px-6 py-8 text-center">
        <h1 className="text-2xl font-bold">Términos y Condiciones — RentaViaje</h1>
        <p className="text-slate-400 text-sm mt-1">Orbexa Systems · Última actualización: julio 2026</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <div className="bg-amber-50 border-l-4 border-orange-600 rounded-md px-5 py-4 mb-8 text-orange-900 text-sm font-medium">
          Al descargar o usar RentaViaje aceptas estos términos. Si no estás de acuerdo, desinstala la aplicación.
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-base font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-3">
                {s.heading}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200">
          <Link href="/rentaviaje/privacidad" className="text-blue-600 text-sm hover:underline">
            ← Ver Política de Privacidad
          </Link>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 py-6 border-t border-slate-200">
        © 2026 Orbexa Systems · orbexasystems.com
      </footer>
    </main>
  );
}
