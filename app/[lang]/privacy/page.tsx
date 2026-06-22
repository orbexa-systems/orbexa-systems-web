import { hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import Link from "next/link";

const content = {
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: junio 2026",
    backLabel: "← Regresar al inicio",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: `Orbexa Systems, con domicilio en Lirio 20, Lomas de San Miguel, CP 52928, Ciudad de México, México, es responsable del tratamiento de los datos personales que usted nos proporcione a través de este sitio web (orbexasystems.com). Para cualquier consulta sobre privacidad puede contactarnos en: contacto@orbexasystems.com`,
      },
      {
        heading: "2. Datos personales que recopilamos",
        body: `A través del formulario de contacto recopilamos: nombre completo, nombre de empresa (opcional), correo electrónico, teléfono (opcional) y el mensaje que usted nos envíe. No recopilamos datos sensibles, financieros ni de menores de edad.`,
      },
      {
        heading: "3. Finalidades del tratamiento",
        body: `Los datos personales que nos proporcione serán utilizados exclusivamente para:\n• Responder a sus consultas y solicitudes de información.\n• Elaborar y enviar cotizaciones de servicios.\n• Dar seguimiento a proyectos en curso.\n\nNo utilizamos sus datos para fines publicitarios de terceros ni los vendemos a ninguna empresa.`,
      },
      {
        heading: "4. Transferencia de datos a terceros",
        body: `Para el funcionamiento del sitio y el envío de correos electrónicos, sus datos pueden ser procesados por:\n• Resend Inc. (servicio de envío de correos) — política de privacidad en resend.com\n• Vercel Inc. (infraestructura de hosting) — política de privacidad en vercel.com\n\nAmbos proveedores cuentan con estándares de seguridad adecuados y no utilizan sus datos para fines propios.`,
      },
      {
        heading: "5. Cookies y tecnologías similares",
        body: `Este sitio utiliza cookies esenciales necesarias para su funcionamiento correcto (preferencia de idioma, consentimiento de cookies). No utilizamos cookies publicitarias ni de rastreo entre sitios. Puede gestionar sus preferencias de cookies en cualquier momento a través del aviso que aparece al ingresar al sitio.`,
      },
      {
        heading: "6. Derechos ARCO",
        body: `Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos, envíe una solicitud a contacto@orbexasystems.com indicando: nombre completo, descripción del derecho que desea ejercer y documentos que acrediten su identidad. Responderemos en un plazo máximo de 20 días hábiles.`,
      },
      {
        heading: "7. Retención de datos",
        body: `Conservamos sus datos personales durante el tiempo necesario para atender su solicitud y, en caso de establecer una relación comercial, durante la vigencia de dicha relación más el tiempo que exijan las disposiciones legales aplicables. Una vez cumplidos estos plazos, procederemos a su eliminación segura.`,
      },
      {
        heading: "8. Seguridad",
        body: `Implementamos medidas técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. La transmisión de datos a través del formulario de contacto se realiza mediante cifrado HTTPS.`,
      },
      {
        heading: "9. Cambios a esta política",
        body: `Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. La versión vigente estará siempre disponible en esta página con la fecha de última actualización. Le recomendamos revisarla periódicamente.`,
      },
      {
        heading: "10. Contacto",
        body: `Si tiene preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad, puede contactarnos en:\n\nOrbexa Systems\nCorreo: contacto@orbexasystems.com\nWhatsApp: +52 55 8600 9578\nDomicilio: Lirio 20, Lomas de San Miguel, CP 52928, México`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: June 2026",
    backLabel: "← Back to home",
    sections: [
      {
        heading: "1. Data Controller",
        body: `Orbexa Systems, located at Lirio 20, Lomas de San Miguel, CP 52928, Mexico City, Mexico, is the data controller for personal information you provide through this website (orbexasystems.com). For privacy-related inquiries, contact us at: contacto@orbexasystems.com`,
      },
      {
        heading: "2. Personal Data We Collect",
        body: `Through the contact form we collect: full name, company name (optional), email address, phone number (optional) and the message you send us. We do not collect sensitive, financial or children's data.`,
      },
      {
        heading: "3. Purposes of Processing",
        body: `The personal data you provide will be used exclusively to:\n• Respond to your inquiries and information requests.\n• Prepare and send service quotes.\n• Follow up on ongoing projects.\n\nWe do not use your data for third-party advertising and we never sell it.`,
      },
      {
        heading: "4. Third-Party Data Transfers",
        body: `For site operation and email delivery, your data may be processed by:\n• Resend Inc. (email delivery service) — privacy policy at resend.com\n• Vercel Inc. (hosting infrastructure) — privacy policy at vercel.com\n\nBoth providers maintain appropriate security standards and do not use your data for their own purposes.`,
      },
      {
        heading: "5. Cookies and Similar Technologies",
        body: `This site uses essential cookies required for proper operation (language preference, cookie consent). We do not use advertising or cross-site tracking cookies. You can manage your cookie preferences at any time through the banner displayed when you visit the site.`,
      },
      {
        heading: "6. Your Rights",
        body: `You have the right to access, rectify, erase, restrict processing of, or object to the processing of your personal data. To exercise any of these rights, send a request to contacto@orbexasystems.com including: your full name, a description of the right you wish to exercise and documents verifying your identity. We will respond within 20 business days.`,
      },
      {
        heading: "7. Data Retention",
        body: `We retain your personal data for as long as necessary to address your request and, if a commercial relationship is established, for the duration of that relationship plus any period required by applicable law. Once these periods have elapsed, we will securely delete your data.`,
      },
      {
        heading: "8. Security",
        body: `We implement technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure or destruction. Data transmitted through the contact form is encrypted via HTTPS.`,
      },
      {
        heading: "9. Changes to This Policy",
        body: `We reserve the right to update this Privacy Policy at any time. The current version will always be available on this page with the date of last update. We recommend reviewing it periodically.`,
      },
      {
        heading: "10. Contact",
        body: `If you have questions, comments or requests related to this Privacy Policy, you can reach us at:\n\nOrbexa Systems\nEmail: contacto@orbexasystems.com\nWhatsApp: +52 55 8600 9578\nAddress: Lirio 20, Lomas de San Miguel, CP 52928, Mexico`,
      },
    ],
  },
};

export default async function PrivacyPage({
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
          href={`/${lang}`}
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
