import React from 'react';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';

interface PrivacyPageProps {
  lang: 'es' | 'en';
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const updated = '28 de mayo de 2026';

  return (
    <div>
      <section className="indigo-gradient pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Legal' : 'Legal'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-white/70 text-sm">
            {es ? `Última actualización: ${updated}` : `Last updated: May 28, 2026`}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">

          {es ? (
            <div className="space-y-10 text-gray-700 leading-relaxed">

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1B1F5A]">
                    <strong>Responsable del tratamiento:</strong> Asociación Mexicana de Criptominería Ecológica A.C., bajo cuya figura legal opera Alianza Índigo Neurodivergente A.C. RFC: AMC40807GA9. Uxmal 7315B, Chihuahua, Chihuahua, C.P. 31120. Tel: 657-239-6866. Correo: contacto@alianzaindigo.org
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">1. Datos personales que recabamos</h2>
                <p>Alianza Índigo Neurodivergente, a través de su sitio web alianzaindigo.org, puede recabar los siguientes datos personales:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono (cuando se proporcione)</li>
                  <li>Área de interés o tipo de consulta</li>
                  <li>Mensaje o contenido del formulario de contacto</li>
                  <li>Datos de navegación (cookies técnicas y analíticas)</li>
                </ul>
                <p className="mt-3">No recabamos datos sensibles (salud, origen étnico, opiniones políticas, datos biométricos) a través de este sitio.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">2. Finalidades del tratamiento</h2>
                <p><strong>Finalidades primarias (necesarias):</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Atender solicitudes de información, certificaciones o colaboración enviadas a través del formulario de contacto.</li>
                  <li>Responder a consultas institucionales.</li>
                  <li>Gestionar solicitudes de voluntariado.</li>
                  <li>Procesar donaciones o membresías (cuando aplique).</li>
                </ul>
                <p className="mt-3"><strong>Finalidades secundarias (opcionales):</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Envío del boletín institucional (solo con suscripción explícita).</li>
                  <li>Análisis estadístico anónimo del uso del sitio web.</li>
                  <li>Mejora de nuestros programas y plataformas.</li>
                </ul>
                <p className="mt-3">Si no deseas que tus datos sean tratados para finalidades secundarias, puedes manifestarlo escribiendo a contacto@alianzaindigo.org.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">3. Transferencia de datos</h2>
                <p>Alianza Índigo Neurodivergente no vende, renta ni comercializa tus datos personales. Solo podrán transferirse en los siguientes casos:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>A la Asociación Mexicana de Criptominería Ecológica A.C. como organización responsable legal, únicamente para fines operativos y de cumplimiento.</li>
                  <li>A proveedores de servicios tecnológicos que procesen datos en nuestro nombre (hosting, correo electrónico), bajo acuerdos de confidencialidad.</li>
                  <li>Cuando sea requerido por autoridad competente en términos de ley.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">4. Derechos ARCO</h2>
                <p>En términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), tienes derecho a:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Acceso:</strong> Conocer qué datos personales tenemos de ti y cómo los usamos.</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                  <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos cuando no sean necesarios.</li>
                  <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para finalidades específicas.</li>
                </ul>
                <p className="mt-3">Para ejercer tus derechos ARCO, envía un correo a <a href="mailto:contacto@alianzaindigo.org" className="text-[#1B1F5A] font-semibold hover:text-[#FFD700]">contacto@alianzaindigo.org</a> con el asunto "Derechos ARCO", indicando tu nombre, datos de contacto y la solicitud específica. Responderemos en un plazo máximo de 20 días hábiles.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">5. Cookies y tecnologías de rastreo</h2>
                <p>Este sitio web puede utilizar cookies técnicas necesarias para el funcionamiento del sitio, así como cookies analíticas para comprender el comportamiento de los visitantes. Las cookies analíticas son anónimas y no permiten identificarte individualmente.</p>
                <p className="mt-3">Puedes configurar tu navegador para rechazar o eliminar cookies. Esto puede afectar la funcionalidad del sitio.</p>
                <p className="mt-3">Este sitio puede integrarse con servicios de Google (Google Analytics, Google Ad Grants) cuyos términos de privacidad están disponibles en <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1B1F5A] font-semibold hover:text-[#FFD700]">policies.google.com/privacy</a>.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">6. Medidas de seguridad</h2>
                <p>Implementamos medidas técnicas y administrativas para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida, incluyendo transmisión cifrada mediante HTTPS/SSL.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">7. Cambios a esta política</h2>
                <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización. El uso continuado del sitio implica la aceptación de los cambios.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">8. Contacto</h2>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-[#1B1F5A]" />
                    <a href="mailto:contacto@alianzaindigo.org" className="text-[#1B1F5A] hover:text-[#FFD700]">contacto@alianzaindigo.org</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-[#1B1F5A]" />
                    <a href="tel:6572396866" className="text-[#1B1F5A] hover:text-[#FFD700]">657-239-6866</a>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Uxmal 7315B, Chihuahua, Chihuahua, C.P. 31120, México</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-10 text-gray-700 leading-relaxed">

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1B1F5A]">
                    <strong>Data controller:</strong> Asociación Mexicana de Criptominería Ecológica A.C., under whose legal entity Alianza Índigo Neurodivergente A.C. operates. RFC: AMC40807GA9. Uxmal 7315B, Chihuahua, Chihuahua, ZIP 31120. Tel: 657-239-6866. Email: contacto@alianzaindigo.org
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">1. Personal data we collect</h2>
                <p>Alianza Índigo Neurodivergente, through its website alianzaindigo.org, may collect the following personal data:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number (when provided)</li>
                  <li>Area of interest or inquiry type</li>
                  <li>Message or contact form content</li>
                  <li>Browsing data (technical and analytical cookies)</li>
                </ul>
                <p className="mt-3">We do not collect sensitive data (health, ethnic origin, political opinions, biometric data) through this site.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">2. Purposes of processing</h2>
                <p><strong>Primary purposes (necessary):</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Responding to information requests, certifications or collaborations sent through the contact form.</li>
                  <li>Responding to institutional inquiries.</li>
                  <li>Managing volunteering applications.</li>
                  <li>Processing donations or memberships (when applicable).</li>
                </ul>
                <p className="mt-3"><strong>Secondary purposes (optional):</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Sending the institutional newsletter (only with explicit subscription).</li>
                  <li>Anonymous statistical analysis of website usage.</li>
                  <li>Improvement of our programs and platforms.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">3. Data transfers</h2>
                <p>Alianza Índigo Neurodivergente does not sell, rent or commercialize your personal data. Data may only be transferred in the following cases:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>To Asociación Mexicana de Criptominería Ecológica A.C. as the legally responsible organization, solely for operational and compliance purposes.</li>
                  <li>To technology service providers who process data on our behalf (hosting, email), under confidentiality agreements.</li>
                  <li>When required by competent authority by law.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">4. Your rights</h2>
                <p>Under Mexico's Federal Law on Protection of Personal Data (LFPDPPP), you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Access:</strong> Know what personal data we hold about you and how we use it.</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
                  <li><strong>Cancellation:</strong> Request deletion of your data when it is no longer necessary.</li>
                  <li><strong>Opposition:</strong> Object to the processing of your data for specific purposes.</li>
                </ul>
                <p className="mt-3">To exercise your rights, send an email to <a href="mailto:contacto@alianzaindigo.org" className="text-[#1B1F5A] font-semibold hover:text-[#FFD700]">contacto@alianzaindigo.org</a> with the subject "Privacy Rights". We will respond within 20 business days.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">5. Cookies</h2>
                <p>This website may use technical cookies necessary for site operation, as well as analytical cookies to understand visitor behavior. Analytical cookies are anonymous and do not allow individual identification.</p>
                <p className="mt-3">This site may integrate with Google services (Google Analytics, Google Ad Grants) whose privacy terms are available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1B1F5A] font-semibold hover:text-[#FFD700]">policies.google.com/privacy</a>.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">6. Security measures</h2>
                <p>We implement technical and administrative measures to protect your personal data against unauthorized access, loss, alteration or improper disclosure, including encrypted transmission via HTTPS/SSL.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">7. Changes to this policy</h2>
                <p>We reserve the right to modify this Privacy Policy at any time. Changes will be published on this page with the update date. Continued use of the site implies acceptance of the changes.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">8. Contact</h2>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-[#1B1F5A]" />
                    <a href="mailto:contacto@alianzaindigo.org" className="text-[#1B1F5A] hover:text-[#FFD700]">contacto@alianzaindigo.org</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-[#1B1F5A]" />
                    <a href="tel:6572396866" className="text-[#1B1F5A] hover:text-[#FFD700]">657-239-6866</a>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Uxmal 7315B, Chihuahua, Chihuahua, ZIP 31120, Mexico</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
