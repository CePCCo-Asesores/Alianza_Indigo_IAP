import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

interface TermsPageProps {
  lang: 'es' | 'en';
}

const TermsPage: React.FC<TermsPageProps> = ({ lang }) => {
  const es = lang === 'es';

  return (
    <div>
      <section className="indigo-gradient pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Legal' : 'Legal'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Términos de Uso' : 'Terms of Use'}
          </h1>
          <p className="text-white/70 text-sm">
            {es ? 'Última actualización: 28 de mayo de 2026' : 'Last updated: May 28, 2026'}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {es ? (
            <div className="space-y-10 text-gray-700 leading-relaxed">

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1B1F5A]">
                    El uso de este sitio web implica la aceptación total de los presentes Términos de Uso. Si no estás de acuerdo, te pedimos que no utilices el sitio. Responsable: Asociación Mexicana de Criptominería Ecológica A.C. (RFC: AMC40807GA9), bajo cuya figura legal opera Alianza Índigo Neurodivergente A.C.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">1. Objeto</h2>
                <p>Los presentes Términos de Uso regulan el acceso y la utilización del sitio web alianzaindigo.org (en adelante, "el Sitio"), titularidad de la Asociación Mexicana de Criptominería Ecológica A.C., bajo cuya figura legal opera Alianza Índigo Neurodivergente A.C.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">2. Uso permitido</h2>
                <p>El usuario se compromete a utilizar el Sitio de conformidad con la ley, estos Términos y las buenas costumbres. Queda expresamente prohibido:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Utilizar el Sitio con fines ilícitos o que lesionen derechos de terceros.</li>
                  <li>Reproducir, distribuir o modificar el contenido sin autorización escrita de Alianza Índigo Neurodivergente A.C.</li>
                  <li>Introducir virus, malware o cualquier código dañino.</li>
                  <li>Realizar acciones que puedan dañar, saturar o deteriorar el Sitio o sus sistemas.</li>
                  <li>Usar el Sitio para enviar comunicaciones no solicitadas (spam).</li>
                  <li>Suplantar la identidad de Alianza Índigo Neurodivergente A.C. o de sus representantes.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">3. Propiedad intelectual</h2>
                <p>Todos los contenidos del Sitio (textos, imágenes, logotipos, diseños, código fuente, marcas, denominaciones) son propiedad de Alianza Índigo Neurodivergente A.C. o cuentan con licencia de uso. El Sello Universal de Alianza Índigo está protegido mediante registro ante el IMPI.</p>
                <p className="mt-3">Queda prohibida su reproducción total o parcial sin autorización expresa y por escrito. Para solicitudes de uso, contacta a contacto@alianzaindigo.org.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">4. Certificaciones y distintivos</h2>
                <p>Las certificaciones (CENI, Fuerza Índigo, Sello Universal, NeuroPlan) emitidas por Alianza Índigo Neurodivergente A.C. son verificables a través del Verificador de Distintivos disponible en el Sitio. El uso no autorizado de estas certificaciones o del Sello Universal constituye una infracción a los derechos de la organización y podrá ser perseguida legalmente.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">5. Donaciones y transacciones</h2>
                <p>Las donaciones realizadas a través del Sitio son voluntarias y se destinan a los programas institucionales de Alianza Índigo Neurodivergente A.C. La organización publicará informes de transparencia financiera periódicos. Las donaciones no son reembolsables salvo error técnico comprobable.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">6. Rifas institucionales</h2>
                <p>Las rifas organizadas por Alianza Índigo Neurodivergente A.C. se rigen por sus propias bases y reglamentos, disponibles al momento de cada convocatoria. La participación implica la aceptación de dichas bases.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">7. Exención de responsabilidad</h2>
                <p>Alianza Índigo Neurodivergente A.C. no se hace responsable de:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Daños derivados del uso o imposibilidad de uso del Sitio.</li>
                  <li>Errores u omisiones en el contenido publicado.</li>
                  <li>Contenido de sitios externos enlazados desde el Sitio.</li>
                  <li>Interrupciones del servicio por causas ajenas a su control.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">8. Legislación aplicable y jurisdicción</h2>
                <p>Los presentes Términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Chihuahua, Chihuahua, México, renunciando a cualquier otro fuero.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">9. Modificaciones</h2>
                <p>Alianza Índigo Neurodivergente A.C. se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios serán publicados en esta página. El uso continuado del Sitio implica la aceptación de los nuevos Términos.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">10. Contacto</h2>
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
                  <FileText className="w-6 h-6 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1B1F5A]">
                    Use of this website implies full acceptance of these Terms of Use. Responsible party: Asociación Mexicana de Criptominería Ecológica A.C. (RFC: AMC40807GA9), under whose legal entity Alianza Índigo Neurodivergente A.C. operates.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">1. Purpose</h2>
                <p>These Terms of Use govern access to and use of the website alianzaindigo.org (hereinafter "the Site"), owned by Asociación Mexicana de Criptominería Ecológica A.C., under whose legal entity Alianza Índigo Neurodivergente A.C. operates.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">2. Permitted use</h2>
                <p>Users agree to use the Site in accordance with the law, these Terms and good practices. The following are expressly prohibited:</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Using the Site for unlawful purposes or that harm third-party rights.</li>
                  <li>Reproducing, distributing or modifying content without written authorization from Alianza Índigo Neurodivergente A.C.</li>
                  <li>Introducing viruses, malware or any harmful code.</li>
                  <li>Taking actions that may damage, overload or deteriorate the Site or its systems.</li>
                  <li>Using the Site to send unsolicited communications (spam).</li>
                  <li>Impersonating Alianza Índigo Neurodivergente A.C. or its representatives.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">3. Intellectual property</h2>
                <p>All Site content (texts, images, logos, designs, source code, trademarks, names) is owned by Alianza Índigo Neurodivergente A.C. or licensed for use. The Universal Seal of Alianza Índigo is protected through IMPI registration.</p>
                <p className="mt-3">Reproduction in whole or in part without express written authorization is prohibited. For use requests, contact contacto@alianzaindigo.org.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">4. Certifications and badges</h2>
                <p>Certifications (CENI, Fuerza Índigo, Universal Seal, NeuroPlan) issued by Alianza Índigo Neurodivergente A.C. are verifiable through the Badge Verifier on the Site. Unauthorized use of these certifications or the Universal Seal constitutes an infringement and may be legally pursued.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">5. Donations and transactions</h2>
                <p>Donations made through the Site are voluntary and allocated to Alianza Índigo Neurodivergente A.C.'s institutional programs. The organization will publish periodic financial transparency reports. Donations are non-refundable except in cases of verifiable technical error.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">6. Institutional raffles</h2>
                <p>Raffles organized by Alianza Índigo Neurodivergente A.C. are governed by their own rules and regulations, available at the time of each announcement. Participation implies acceptance of those rules.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">7. Disclaimer</h2>
                <p>Alianza Índigo Neurodivergente A.C. is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Damages resulting from use or inability to use the Site.</li>
                  <li>Errors or omissions in published content.</li>
                  <li>Content on external sites linked from the Site.</li>
                  <li>Service interruptions caused by factors beyond its control.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">8. Applicable law and jurisdiction</h2>
                <p>These Terms are governed by the laws of the United Mexican States. For any disputes arising from use of the Site, the parties submit to the jurisdiction of competent courts in Chihuahua, Chihuahua, Mexico.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">9. Modifications</h2>
                <p>Alianza Índigo Neurodivergente A.C. reserves the right to modify these Terms at any time. Changes will be published on this page. Continued use of the Site implies acceptance of the new Terms.</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-3">10. Contact</h2>
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

export default TermsPage;
