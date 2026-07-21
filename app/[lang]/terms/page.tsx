import { hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import Link from "next/link";

const content = {
  es: {
    title: "Términos y Condiciones",
    lastUpdated: "Última actualización: junio 2026",
    backLabel: "← Regresar al inicio",
    sections: [
      {
        heading: "1. Aceptación de los términos",
        body: `Al acceder y utilizar el sitio web orbexasystems.com y/o contratar los servicios de Orbexa Systems, usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestro sitio ni contrate nuestros servicios.`,
      },
      {
        heading: "2. Descripción de los servicios",
        body: `Orbexa Systems ofrece servicios de desarrollo de software, aplicaciones web, integraciones de API, infraestructura en la nube (Cloud & DevOps), inteligencia artificial y soporte técnico. Los alcances, entregables, plazos y costos específicos de cada proyecto se definen en una propuesta o contrato firmado por ambas partes previo al inicio de los trabajos.`,
      },
      {
        heading: "3. Propuestas y contratación",
        body: `Las cotizaciones emitidas por Orbexa Systems tienen una vigencia de 30 días naturales a partir de su fecha de emisión. La aceptación de una propuesta implica el compromiso de pago conforme a los términos establecidos en la misma. Orbexa Systems se reserva el derecho de rechazar proyectos que no se alineen con sus capacidades o valores.`,
      },
      {
        heading: "4. Pagos y facturación",
        body: `Los pagos se realizarán conforme al esquema acordado en cada contrato (anticipo, pagos por hito o mensualidades). Los pagos deben efectuarse en los plazos establecidos. El retraso en pagos puede resultar en la suspensión temporal del servicio. Todos los precios se expresan en pesos mexicanos (MXN) salvo acuerdo en contrario. Se emite CFDI por cada pago recibido.`,
      },
      {
        heading: "5. Propiedad intelectual",
        body: `Una vez liquidado el total del proyecto, el cliente adquiere los derechos de uso del software desarrollado específicamente para su proyecto. Orbexa Systems conserva los derechos sobre:\n• Componentes, librerías y frameworks de uso general desarrollados de manera independiente.\n• Metodologías, procesos y conocimiento técnico acumulado.\n• El código fuente de proyectos no liquidados en su totalidad.\n\nEl cliente no podrá sublicenciar, vender ni transferir el software sin autorización escrita.`,
      },
      {
        heading: "6. Confidencialidad",
        body: `Orbexa Systems se compromete a mantener en estricta confidencialidad toda la información de negocio, datos, procesos y documentación que el cliente comparta durante el desarrollo del proyecto. Esta obligación persiste por un periodo de 3 años posteriores a la conclusión del proyecto. El cliente, por su parte, acepta no divulgar información sobre tarifas, metodologías ni documentación técnica interna de Orbexa Systems.`,
      },
      {
        heading: "7. Responsabilidades del cliente",
        body: `Para el correcto desarrollo del proyecto, el cliente se compromete a:\n• Proveer en tiempo y forma la información, accesos y recursos solicitados.\n• Designar un interlocutor con capacidad de toma de decisiones.\n• Revisar y aprobar entregables en los plazos acordados.\n• Mantener actualizadas las credenciales y accesos compartidos.\n\nLos retrasos derivados del incumplimiento de estas responsabilidades no serán imputables a Orbexa Systems.`,
      },
      {
        heading: "8. Limitación de responsabilidad",
        body: `Orbexa Systems no será responsable por:\n• Daños indirectos, pérdida de beneficios o datos derivados del uso o imposibilidad de uso del software.\n• Fallas causadas por modificaciones realizadas por el cliente o terceros sin autorización.\n• Interrupciones de servicio causadas por proveedores externos (hosting, DNS, pagos).\n• Incumplimientos derivados de causas de fuerza mayor.\n\nLa responsabilidad total de Orbexa Systems no excederá el monto pagado por el cliente en los 6 meses previos al evento que origina la reclamación.`,
      },
      {
        heading: "9. Garantías",
        body: `Orbexa Systems garantiza que el software entregado funcionará conforme a las especificaciones acordadas durante un periodo de 30 días naturales a partir de la entrega final. Durante este periodo, los errores funcionales serán corregidos sin costo adicional. Esta garantía no cubre modificaciones solicitadas post-entrega, errores introducidos por el cliente ni incompatibilidades con sistemas de terceros no contemplados en el alcance original.`,
      },
      {
        heading: "10. Cancelación y terminación",
        body: `Cualquiera de las partes puede terminar el contrato con 15 días naturales de aviso previo por escrito. En caso de cancelación por parte del cliente:\n• El anticipo pagado no es reembolsable.\n• Se facturará el trabajo realizado hasta la fecha de cancelación conforme al avance porcentual.\n\nEn caso de cancelación por parte de Orbexa Systems por incumplimiento del cliente, se aplicarán las mismas condiciones anteriores.`,
      },
      {
        heading: "11. Modificaciones a estos términos",
        body: `Orbexa Systems se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización. El uso continuado de nuestros servicios tras la publicación de cambios constituye aceptación de los nuevos términos.`,
      },
      {
        heading: "12. Ley aplicable y jurisdicción",
        body: `Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o cumplimiento, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.`,
      },
      {
        heading: "13. Contacto",
        body: `Para cualquier consulta sobre estos Términos y Condiciones:\n\nOrbexa Systems\nCorreo: contacto@orbexasystems.com\nWhatsApp: +52 55 8600 9578\nDomicilio: Lirio 20, Lomas de San Miguel, CP 52928, México`,
      },
    ],
  },
  en: {
    title: "Terms and Conditions",
    lastUpdated: "Last updated: June 2026",
    backLabel: "← Back to home",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: `By accessing and using orbexasystems.com and/or engaging Orbexa Systems' services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our site or services.`,
      },
      {
        heading: "2. Description of Services",
        body: `Orbexa Systems provides software development, web applications, API integrations, cloud infrastructure (Cloud & DevOps), artificial intelligence and technical support services. The specific scope, deliverables, timelines and costs of each project are defined in a proposal or contract signed by both parties prior to the start of work.`,
      },
      {
        heading: "3. Proposals and Contracting",
        body: `Quotes issued by Orbexa Systems are valid for 30 calendar days from the date of issue. Acceptance of a proposal implies a payment commitment per the terms stated therein. Orbexa Systems reserves the right to decline projects that do not align with its capabilities or values.`,
      },
      {
        heading: "4. Payments and Invoicing",
        body: `Payments will be made according to the schedule agreed in each contract (upfront, milestone-based or monthly). Payments must be made within the established deadlines. Late payments may result in temporary service suspension. All prices are expressed in Mexican pesos (MXN) unless otherwise agreed. An invoice is issued for each payment received.`,
      },
      {
        heading: "5. Intellectual Property",
        body: `Upon full payment of the project, the client acquires usage rights to the software developed specifically for their project. Orbexa Systems retains rights over:\n• General-purpose components, libraries and frameworks developed independently.\n• Methodologies, processes and accumulated technical knowledge.\n• Source code of projects not fully paid.\n\nThe client may not sublicense, sell or transfer the software without written authorization.`,
      },
      {
        heading: "6. Confidentiality",
        body: `Orbexa Systems agrees to keep strictly confidential all business information, data, processes and documentation shared by the client during project development. This obligation persists for 3 years after project completion. The client agrees not to disclose information about rates, methodologies or internal technical documentation of Orbexa Systems.`,
      },
      {
        heading: "7. Client Responsibilities",
        body: `For the successful development of the project, the client agrees to:\n• Provide information, access and resources requested in a timely manner.\n• Designate a point of contact with decision-making authority.\n• Review and approve deliverables within agreed timelines.\n• Keep shared credentials and accesses up to date.\n\nDelays resulting from failure to meet these responsibilities will not be attributable to Orbexa Systems.`,
      },
      {
        heading: "8. Limitation of Liability",
        body: `Orbexa Systems shall not be liable for:\n• Indirect damages, loss of profits or data arising from the use or inability to use the software.\n• Failures caused by modifications made by the client or unauthorized third parties.\n• Service interruptions caused by external providers (hosting, DNS, payments).\n• Non-performance due to force majeure events.\n\nOrbexa Systems' total liability shall not exceed the amount paid by the client in the 6 months prior to the event giving rise to the claim.`,
      },
      {
        heading: "9. Warranty",
        body: `Orbexa Systems warrants that the delivered software will function in accordance with the agreed specifications for a period of 30 calendar days from final delivery. During this period, functional bugs will be fixed at no additional cost. This warranty does not cover post-delivery change requests, client-introduced errors or incompatibilities with third-party systems not included in the original scope.`,
      },
      {
        heading: "10. Cancellation and Termination",
        body: `Either party may terminate the contract with 15 calendar days' written notice. In case of cancellation by the client:\n• The upfront payment is non-refundable.\n• Work completed up to the cancellation date will be invoiced based on percentage of completion.\n\nIn case of cancellation by Orbexa Systems due to client breach, the same conditions apply.`,
      },
      {
        heading: "11. Modifications to These Terms",
        body: `Orbexa Systems reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page with the update date. Continued use of our services after changes are posted constitutes acceptance of the new terms.`,
      },
      {
        heading: "12. Governing Law and Jurisdiction",
        body: `These Terms and Conditions are governed by the laws of the United Mexican States. For any dispute arising from their interpretation or enforcement, the parties submit to the jurisdiction of the competent courts of Mexico City, waiving any other jurisdiction that may apply to them.`,
      },
      {
        heading: "13. Contact",
        body: `For any inquiries about these Terms and Conditions:\n\nOrbexa Systems\nEmail: contacto@orbexasystems.com\nWhatsApp: +52 55 8600 9578\nAddress: Lirio 20, Lomas de San Miguel, CP 52928, Mexico`,
      },
    ],
  },
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const c = content[lang as keyof typeof content];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href={`/${lang}#footer`}
          className="text-sm text-blue-600 hover:underline mb-8 inline-block"
        >
          {c.backLabel}
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{c.title}</h1>
        <p className="text-sm text-slate-400 mb-12">{c.lastUpdated}</p>
        <div className="space-y-8">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold text-slate-800 mb-3">{s.heading}</h2>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
