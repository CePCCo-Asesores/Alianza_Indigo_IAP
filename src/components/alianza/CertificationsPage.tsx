import React, { useState, useEffect } from 'react';
import IndigoSeal from './IndigoSeal';
import InfoModal from './InfoModal';
import {
  Award, Shield, CheckCircle2, ArrowRight, FileText,
  Building2, GraduationCap, Landmark, ClipboardCheck, Star, BadgeCheck
} from 'lucide-react';

interface CertificationsPageProps {
  lang: 'es' | 'en';
  section?: string;
}

const CERT_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666481034_398844ac.jpg';

const TAB_IDS = ['ceni', 'fuerza', 'sello', 'neuroplan'];

const CertificationsPage: React.FC<CertificationsPageProps> = ({ lang, section }) => {
  const es = lang === 'es';
  const [activeTab, setActiveTab] = useState(section && TAB_IDS.includes(section) ? section : 'ceni');

  useEffect(() => {
    if (section && TAB_IDS.includes(section)) setActiveTab(section);
  }, [section]);
  const [modal, setModal] = useState<{ open: boolean; subject?: string }>({ open: false });
  const openModal = (subject?: string) => setModal({ open: true, subject });
  const closeModal = () => setModal({ open: false });


  const tabs = [
    { id: 'ceni', label: 'CENI', icon: Award },
    { id: 'fuerza', label: es ? 'Fuerza Índigo' : 'Fuerza Índigo', icon: Shield },
    { id: 'sello', label: es ? 'Sello Universal' : 'Universal Seal', icon: BadgeCheck },
    { id: 'neuroplan', label: 'NeuroPlan', icon: ClipboardCheck },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CERT_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1F5A]/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Programas de Certificación' : 'Certification Programs'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Certificaciones' : 'Certifications'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Alianza Índigo Neurodivergente ofrece certificaciones voluntarias para organizaciones comprometidas con la neuroinclusión. Nuestros procesos son transparentes, basados en evidencia y alineados con estándares internacionales.'
              : 'Alianza Índigo Neurodivergente offers voluntary certifications for organizations committed to neuroinclusion. Our processes are transparent, evidence-based and aligned with international standards.'}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] md:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#1B1F5A] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CENI */}
      {activeTab === 'ceni' && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1B1F5A] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-2xl text-[#1B1F5A]">CENI</h2>
                    <p className="text-gray-500 text-sm">{es ? 'Certificación de Entornos Neuroinclusivos' : 'Certification of Neuroinclusive Environments'}</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>{es ? 'La Certificación CENI valida que una organización ha implementado prácticas, políticas y entornos que respetan y promueven la neurodivergencia. Es un proceso voluntario, transparente y basado en evidencia.' : 'The CENI Certification validates that an organization has implemented practices, policies and environments that respect and promote neurodivergence. It is a voluntary, transparent and evidence-based process.'}</p>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-4">{es ? '¿Qué certifica?' : 'What does it certify?'}</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {(es ? [
                    'Políticas de inclusión neurológica',
                    'Adaptaciones razonables en el entorno',
                    'Capacitación del personal',
                    'Comunicación accesible',
                    'Protocolos de apoyo ND',
                    'Cultura organizacional inclusiva',
                  ] : [
                    'Neurological inclusion policies',
                    'Reasonable environmental adaptations',
                    'Staff training',
                    'Accessible communication',
                    'ND support protocols',
                    'Inclusive organizational culture',
                  ]).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-indigo-50 rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#1B1F5A] flex-shrink-0" />
                      <span className="text-sm text-[#1B1F5A]">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-4">{es ? 'Proceso de Certificación' : 'Certification Process'}</h3>
                <div className="space-y-4 mb-8">
                  {(es ? [
                    { step: '01', title: 'Solicitud', desc: 'La organización presenta su solicitud formal a través del portal institucional.' },
                    { step: '02', title: 'Evaluación', desc: 'Un equipo evaluador analiza políticas, entornos y prácticas de la organización.' },
                    { step: '03', title: 'Informe', desc: 'Se genera un informe detallado con hallazgos y recomendaciones.' },
                    { step: '04', title: 'Certificación', desc: 'Si cumple los requisitos, se otorga la certificación CENI con vigencia de 2 años.' },
                  ] : [
                    { step: '01', title: 'Application', desc: 'The organization submits its formal application through the institutional portal.' },
                    { step: '02', title: 'Evaluation', desc: 'An evaluation team analyzes the organization\'s policies, environments and practices.' },
                    { step: '03', title: 'Report', desc: 'A detailed report is generated with findings and recommendations.' },
                    { step: '04', title: 'Certification', desc: 'If requirements are met, the CENI certification is granted for 2 years.' },
                  ]).map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                        <span className="font-heading font-bold text-sm text-[#1B1F5A]">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[#1B1F5A] mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn-indigo" onClick={() => openModal(es ? 'Certificación CENI' : 'CENI Certification')}>
                  {es ? 'Solicitar Certificación CENI' : 'Request CENI Certification'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-2">
                <div className="sticky top-32">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                    <h3 className="font-heading font-bold text-[#1B1F5A] mb-4">{es ? 'Requisitos' : 'Requirements'}</h3>
                    <ul className="space-y-2">
                      {(es ? [
                        'Ser una organización legalmente constituida',
                        'Contar con al menos 10 colaboradores',
                        'Tener políticas de inclusión documentadas',
                        'Designar un responsable de neuroinclusión',
                        'Comprometerse con la mejora continua',
                      ] : [
                        'Be a legally constituted organization',
                        'Have at least 10 employees',
                        'Have documented inclusion policies',
                        'Designate a neuroinclusion officer',
                        'Commit to continuous improvement',
                      ]).map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#1B1F5A] rounded-xl p-6">
                    <h3 className="font-heading font-bold text-[#FFD700] mb-2">{es ? '¿Para quién?' : 'For whom?'}</h3>
                    <div className="space-y-3 mt-4">
                      {[
                        { icon: Building2, label: es ? 'Empresas' : 'Companies' },
                        { icon: GraduationCap, label: es ? 'Escuelas y universidades' : 'Schools & universities' },
                        { icon: Landmark, label: es ? 'Instituciones gubernamentales' : 'Government institutions' },
                        { icon: Star, label: es ? 'Organizaciones de la sociedad civil' : 'Civil society organizations' },
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 text-white/80">
                            <Icon className="w-5 h-5 text-[#FFD700]" />
                            <span className="text-sm">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fuerza Índigo */}
      {activeTab === 'fuerza' && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#1B1F5A] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A]">Fuerza Índigo</h2>
                <p className="text-gray-500 text-sm">{es ? 'Distintivo para campañas éticas' : 'Badge for ethical campaigns'}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {es
                ? 'Fuerza Índigo es un distintivo institucional que avala campañas de comunicación, marketing o sensibilización que representan la neurodivergencia de manera ética, digna y basada en evidencia. Garantiza que el mensaje no perpetúa estereotipos ni estigmas.'
                : 'Fuerza Índigo is an institutional badge that endorses communication, marketing or awareness campaigns that represent neurodivergence in an ethical, dignified and evidence-based manner. It ensures that the message does not perpetuate stereotypes or stigma.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-institutional p-6">
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">{es ? 'Manual de Uso' : 'Usage Manual'}</h3>
                <p className="text-gray-600 text-sm mb-4">{es ? 'Guía completa para el uso correcto del distintivo Fuerza Índigo en campañas y materiales.' : 'Complete guide for the correct use of the Fuerza Índigo badge in campaigns and materials.'}</p>
                <button className="btn-outline-indigo text-sm py-2 px-4" onClick={() => openModal(es ? 'Manual Fuerza Índigo' : 'Fuerza Índigo Manual')}>
                  <FileText className="w-4 h-4" /> {es ? 'Descargar Manual' : 'Download Manual'}
                </button>
              </div>
              <div className="card-institutional p-6">
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">{es ? 'Solicitar Distintivo' : 'Request Badge'}</h3>
                <p className="text-gray-600 text-sm mb-4">{es ? 'Presenta tu campaña para evaluación y obtén el respaldo institucional de Alianza Índigo Neurodivergente.' : 'Submit your campaign for evaluation and obtain the institutional endorsement of Alianza Índigo Neurodivergente.'}</p>
                <button className="btn-indigo text-sm py-2 px-4" onClick={() => openModal(es ? 'Distintivo Fuerza Índigo' : 'Fuerza Índigo Badge')}>
                  {es ? 'Iniciar Solicitud' : 'Start Application'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sello Universal */}
      {activeTab === 'sello' && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <IndigoSeal size={180} className="mx-auto mb-8" />
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-4">
              {es ? 'Sello Universal de Apoyo ND' : 'Universal ND Support Seal'}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              {es
                ? 'El Sello Universal de Alianza Índigo Neurodivergente es el símbolo oficial de compromiso con la neurodivergencia. Su uso está regulado y protegido mediante registro ante el IMPI. Representa dignidad, inclusión y rigor institucional.'
                : 'The Universal Seal of Alianza Índigo Neurodivergente is the official symbol of commitment to neurodivergence. Its use is regulated and protected through IMPI registration. It represents dignity, inclusion and institutional rigor.'}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {(es ? [
                { title: 'Imagen Oficial', desc: 'Versiones del sello en alta resolución para uso autorizado.', btn: 'Descargar' },
                { title: 'Manual de Uso', desc: 'Lineamientos para el uso correcto del sello institucional.', btn: 'Ver Manual' },
                { title: 'Registro IMPI', desc: 'Información sobre la protección legal del sello universal.', btn: 'Consultar' },
              ] : [
                { title: 'Official Image', desc: 'High resolution seal versions for authorized use.', btn: 'Download' },
                { title: 'Usage Manual', desc: 'Guidelines for the correct use of the institutional seal.', btn: 'View Manual' },
                { title: 'IMPI Registration', desc: 'Information about the legal protection of the universal seal.', btn: 'Consult' },
              ]).map((item, i) => (
                <div key={i} className="card-institutional p-6">
                  <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <button className="btn-outline-indigo text-sm py-2 px-4" onClick={() => openModal(`${es ? 'Sello Universal' : 'Universal Seal'} – ${item.title}`)}>{item.btn}</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NeuroPlan */}
      {activeTab === 'neuroplan' && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#1B1F5A] flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A]">NeuroPlan</h2>
                <p className="text-gray-500 text-sm">{es ? 'Evaluación de políticas públicas' : 'Public policy evaluation'}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {es
                ? 'NeuroPlan es una herramienta de evaluación institucional que analiza políticas públicas desde la perspectiva de la neuroinclusión. Permite a gobiernos y organismos públicos medir, mejorar y certificar sus políticas en materia de neurodivergencia.'
                : 'NeuroPlan is an institutional evaluation tool that analyzes public policies from the perspective of neuroinclusion. It allows governments and public bodies to measure, improve and certify their policies on neurodivergence.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-institutional p-6">
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">{es ? 'Metodología' : 'Methodology'}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{es ? 'Evaluación basada en indicadores cuantitativos y cualitativos, alineados con estándares internacionales de derechos humanos y accesibilidad.' : 'Evaluation based on quantitative and qualitative indicators, aligned with international human rights and accessibility standards.'}</p>
              </div>
              <div className="card-institutional p-6">
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">{es ? 'Solicitar Evaluación' : 'Request Evaluation'}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{es ? 'Gobiernos y organismos públicos pueden solicitar una evaluación NeuroPlan.' : 'Governments and public bodies can request a NeuroPlan evaluation.'}</p>
                <button className="btn-indigo text-sm py-2 px-4" onClick={() => openModal('NeuroPlan')}>
                  {es ? 'Solicitar' : 'Request'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <InfoModal open={modal.open} onClose={closeModal} lang={lang} subject={modal.subject} />

      {/* Public Registry */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-2">
            {es ? 'Registro Público de Instituciones Certificadas' : 'Public Registry of Certified Institutions'}
          </h2>
          <p className="text-gray-600 mb-6">
            {es ? 'Consulta las organizaciones que han obtenido certificaciones de Alianza Índigo Neurodivergente.' : 'Check the organizations that have obtained Alianza Índigo Neurodivergente certifications.'}
          </p>

          <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
            <BadgeCheck className="w-14 h-14 text-gray-200 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">
              {es ? 'Sin certificaciones emitidas' : 'No certifications issued'}
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              {es
                ? 'Aún no se han emitido certificaciones. El registro público se habilitará a partir de la primera certificación oficial otorgada por Alianza Índigo Neurodivergente A.C.'
                : 'No certifications have been issued yet. The public registry will be enabled starting from the first official certification granted by Alianza Índigo Neurodivergente A.C.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
