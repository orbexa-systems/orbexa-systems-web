import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Copiloto",
  description:
    "Copiloto no recopila ni transmite datos personales. Todo el procesamiento ocurre localmente en tu dispositivo.",
};

const sections = [
  {
    heading: "1. Quiénes somos",
    body: "Copiloto es una aplicación desarrollada por Orbexa Systems (contacto@orbexasystems.com). La app ayuda a conductores de plataformas de transporte (Uber Driver, DiDi Conductor) a evaluar en segundos si una oferta de viaje es rentable, mostrando un veredicto automático en pantalla.\n\nCopiloto está diseñada para conductores que operan en México. Los cálculos de rentabilidad utilizan pesos mexicanos (MXN) y están calibrados para tarifas y costos de combustible del mercado mexicano.",
  },
  {
    heading: "2. Información que la app lee y por qué",
    body: "Para funcionar, Copiloto utiliza el Servicio de Accesibilidad de Android. Este servicio le permite a la app leer el texto visible en la pantalla cuando la aplicación de Uber Driver o DiDi Conductor está activa.\n\nEspecíficamente, la app lee:\n• El monto de la tarifa ofrecida (en pesos mexicanos)\n• La distancia estimada del viaje (km)\n• El tiempo estimado del trayecto (minutos)\n\nEsta información se usa únicamente para calcular la rentabilidad del viaje en el momento y mostrar el resultado en pantalla. No se guarda ni se envía a ningún servidor.",
  },
  {
    heading: "3. Datos que NO recopilamos",
    body: "• Nombre, correo electrónico o cualquier dato de identificación personal\n• Ubicación GPS del conductor\n• Historial de viajes aceptados o rechazados (más allá del conteo local en sesión)\n• Contraseñas, tokens o credenciales de Uber o DiDi\n• Información de pago o bancaria\n• Fotografías, audio o cualquier otro contenido multimedia",
  },
  {
    heading: "4. Almacenamiento local",
    body: "La app guarda en el dispositivo únicamente tu configuración personal:\n• Tipo de vehículo (gasolina, eléctrico, híbrido)\n• Parámetros de consumo de combustible o energía\n• Metas mínimas de ganancia por km y por hora\n\nEsta información reside exclusivamente en tu teléfono y nunca sale de él.",
  },
  {
    heading: "5. Compartición de datos con terceros",
    body: "Copiloto no comparte ningún dato con terceros. No utilizamos servicios de analítica, publicidad, seguimiento ni redes sociales dentro de la app.",
  },
  {
    heading: "6. Permisos requeridos",
    body: "• Servicio de Accesibilidad — para leer el texto de ofertas de viaje en Uber Driver y DiDi Conductor.\n• Mostrar sobre otras apps — para superponer el veredicto de rentabilidad sin interrumpir la app de la plataforma.\n• Notificaciones (Android 13+) — para mostrar la notificación persistente que indica que el análisis automático está activo.",
  },
  {
    heading: "7. Seguridad",
    body: "Dado que no transmitimos datos fuera del dispositivo, el riesgo de exposición de información personal es mínimo. La configuración local se almacena en el almacenamiento privado de la app, inaccesible para otras aplicaciones.",
  },
  {
    heading: "8. Menores de edad",
    body: "Copiloto está dirigida exclusivamente a conductores mayores de edad registrados en plataformas de transporte. No recopilamos conscientemente información de menores.",
  },
  {
    heading: "9. Cambios a esta política",
    body: "Si realizamos cambios relevantes a esta política, actualizaremos la fecha en la parte superior de esta página. Te recomendamos revisarla periódicamente.",
  },
  {
    heading: "10. Contacto",
    body: "Si tienes preguntas sobre esta política de privacidad, escríbenos a:\ncontacto@orbexasystems.com",
  },
];

export default function CopilotoPoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-800 text-white px-6 py-8 text-center">
        <h1 className="text-2xl font-bold">Política de Privacidad — Copiloto</h1>
        <p className="text-slate-400 text-sm mt-1">Orbexa Systems · Última actualización: julio 2026</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <div className="bg-green-50 border-l-4 border-green-600 rounded-md px-5 py-4 mb-8 text-green-800 text-sm font-medium">
          Copiloto no recopila, almacena ni transmite ningún dato personal a servidores externos. Todo el procesamiento ocurre localmente en tu dispositivo.
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
          <Link href="/rentaviaje/terminos" className="text-blue-600 text-sm hover:underline">
            Ver Términos y Condiciones →
          </Link>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 py-6 border-t border-slate-200">
        © 2026 Orbexa Systems · orbexasystems.com
      </footer>
    </main>
  );
}
