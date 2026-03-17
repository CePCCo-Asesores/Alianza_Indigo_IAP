import React from 'react';
import IndigoSeal from './IndigoSeal';
import {
  Shield, Eye, Heart, Scale, Users, Globe, BookOpen,
  CheckCircle2, FileText, ArrowRight, Landmark, HandHeart
} from 'lucide-react';

interface AboutPageProps {
  lang: 'es' | 'en';
}

const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const es = lang === 'es';

  const values = es ? [
    { icon: Shield, title: 'Dignidad', desc: 'Toda persona neurodivergente merece respeto, reconocimiento y protección.' },
    { icon: Heart, title: 'Inclusión', desc: 'Promovemos entornos donde la diversidad neurológica sea valorada.' },
    { icon: Eye, title: 'Transparencia', desc: 'Actuamos con apertura, rendición de cuentas y honestidad institucional.' },
    { icon: Scale, title: 'Justicia', desc: 'Defendemos la equidad y los derechos de las personas neurodivergentes.' },
    { icon: Users, title: 'Colectividad', desc: 'Somos una institución colectiva, sin protagonismos individuales.' },
    { icon: Globe, title: 'Universalidad', desc: 'Nuestro alcance y compromiso trascienden fronteras y culturas.' },
    { icon: BookOpen, title: 'Rigor', desc: 'Basamos nuestras acciones en evidencia científica y mejores prácticas.' },
    { icon: HandHeart, title: 'Ética', desc: 'Cada decisión institucional se guía por principios éticos inquebrantables.' },
  ] : [
    { icon: Shield, title: 'Dignity', desc: 'Every neurodivergent person deserves respect, recognition and protection.' },
    { icon: Heart, title: 'Inclusion', desc: 'We promote environments where neurological diversity is valued.' },
    { icon: Eye, title: 'Transparency', desc: 'We act with openness, accountability and institutional honesty.' },
    { icon: Scale, title: 'Justice', desc: 'We defend equity and the rights of neurodivergent people.' },
    { icon: Users, title: 'Collectivity', desc: 'We are a collective institution, without individual protagonism.' },
    { icon: Globe, title: 'Universality', desc: 'Our reach and commitment transcend borders and cultures.' },
    { icon: BookOpen, title: 'Rigor', desc: 'We base our actions on scientific evidence and best practices.' },
    { icon: HandHeart, title: 'Ethics', desc: 'Every institutional decision is guided by unwavering ethical principles.' },
  ];

  const principles = es ? [
    'Respeto absoluto a la dignidad de toda persona neurodivergente.',
    'No discriminación por condición neurológica, género, origen o cualquier otra característica.',
    'Confidencialidad y protección de datos personales.',
    'Independencia institucional de intereses comerciales o políticos.',
    'Compromiso con la evidencia científica y la mejora continua.',
    'Rendición de cuentas pública y transparente.',
    'Promoción activa de la accesibilidad universal.',
    'Rechazo a toda forma de capacitismo y estigmatización.',
  ] : [
    'Absolute respect for the dignity of every neurodivergent person.',
    'Non-discrimination based on neurological condition, gender, origin or any other characteristic.',
    'Confidentiality and personal data protection.',
    'Institutional independence from commercial or political interests.',
    'Commitment to scientific evidence and continuous improvement.',
    'Public and transparent accountability.',
    'Active promotion of universal accessibility.',
    'Rejection of all forms of ableism and stigmatization.',
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="indigo-gradient pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
              {es ? 'Institucional' : 'Institutional'}
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              {es ? 'Nosotros' : 'About Us'}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {es
                ? 'Alianza Índigo es una institución colectiva, ética y universal dedicada a la protección, representación, certificación y promoción de la neurodivergencia.'
                : 'Alianza Índigo is a collective, ethical and universal institution dedicated to the protection, representation, certification and promotion of neurodivergence.'}
            </p>
          </div>
        </div>
      </section>

      {/* What is Alianza Índigo */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-6">
                {es ? '¿Qué es Alianza Índigo?' : 'What is Alianza Índigo?'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {es
                    ? 'Alianza Índigo es un organismo institucional dedicado a transformar la comprensión social de la neurodivergencia. Operamos como una entidad colectiva, sin protagonismos individuales, con el objetivo de construir un mundo donde cada mente diversa sea reconocida, protegida y valorada.'
                    : 'Alianza Índigo is an institutional body dedicated to transforming the social understanding of neurodivergence. We operate as a collective entity, without individual protagonism, with the goal of building a world where every diverse mind is recognized, protected and valued.'}
                </p>
                <p>
                  {es
                    ? 'Nuestra labor abarca cuatro ejes fundamentales: la protección de derechos, la representación digna, la certificación de prácticas neuroinclusivas y la promoción del conocimiento sobre neurodivergencia. Trabajamos con rigor científico, transparencia institucional y compromiso ético.'
                    : 'Our work encompasses four fundamental axes: the protection of rights, dignified representation, certification of neuroinclusive practices and the promotion of knowledge about neurodivergence. We work with scientific rigor, institutional transparency and ethical commitment.'}
                </p>
                <p>
                  {es
                    ? 'Alianza Índigo no es un proyecto individual ni una marca personal. Es una institución que pertenece a la comunidad neurodivergente y a la sociedad en su conjunto. Nuestra gobernanza es colectiva, nuestras decisiones son transparentes y nuestro compromiso es universal.'
                    : 'Alianza Índigo is not an individual project or a personal brand. It is an institution that belongs to the neurodivergent community and to society as a whole. Our governance is collective, our decisions are transparent and our commitment is universal.'}
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                <IndigoSeal size={140} className="mx-auto mb-4" />
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">
                  {es ? 'Sello Institucional' : 'Institutional Seal'}
                </h3>
                <p className="text-gray-500 text-sm">
                  {es ? 'Símbolo de compromiso con la neurodivergencia' : 'Symbol of commitment to neurodivergence'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mision" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#1B1F5A] flex items-center justify-center mb-6">
                <Landmark className="w-7 h-7 text-[#FFD700]" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-4">
                {es ? 'Misión' : 'Mission'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {es
                  ? 'Proteger, representar, certificar y promover la neurodivergencia mediante programas institucionales basados en evidencia, tecnología accesible y principios éticos universales. Trabajamos para que toda persona neurodivergente sea reconocida con dignidad y cuente con entornos inclusivos en todos los ámbitos de la vida.'
                  : 'Protect, represent, certify and promote neurodivergence through evidence-based institutional programs, accessible technology and universal ethical principles. We work so that every neurodivergent person is recognized with dignity and has inclusive environments in all areas of life.'}
              </p>
            </div>
            <div className="bg-[#1B1F5A] rounded-xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#1B1F5A]" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-[#FFD700] mb-4">
                {es ? 'Visión' : 'Vision'}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {es
                  ? 'Ser la institución de referencia global en neurodivergencia, reconocida por su rigor, transparencia y compromiso ético. Aspiramos a un mundo donde la diversidad neurológica sea comprendida, valorada y protegida como parte esencial de la condición humana.'
                  : 'To be the global reference institution in neurodivergence, recognized for its rigor, transparency and ethical commitment. We aspire to a world where neurological diversity is understood, valued and protected as an essential part of the human condition.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valores" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-3">
              {es ? 'Valores Institucionales' : 'Institutional Values'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {es ? 'Los principios que guían cada acción de Alianza Índigo.' : 'The principles that guide every action of Alianza Índigo.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="card-institutional p-6 group hover:border-[#FFD700]">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/10 transition-colors">
                    <Icon className="w-6 h-6 text-[#1B1F5A]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ethical Principles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-6">
                {es ? 'Principios Éticos' : 'Ethical Principles'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {es
                  ? 'Alianza Índigo opera bajo un marco ético riguroso que garantiza la integridad de todas nuestras acciones y programas institucionales.'
                  : 'Alianza Índigo operates under a rigorous ethical framework that guarantees the integrity of all our actions and institutional programs.'}
              </p>
              <ul className="space-y-3">
                {principles.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-6">
                {es ? 'Marco Normativo' : 'Regulatory Framework'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {es
                  ? 'Nuestras acciones se enmarcan en la legislación nacional e internacional sobre derechos humanos, discapacidad, inclusión y no discriminación.'
                  : 'Our actions are framed within national and international legislation on human rights, disability, inclusion and non-discrimination.'}
              </p>
              <div className="space-y-4">
                {(es ? [
                  'Convención sobre los Derechos de las Personas con Discapacidad (ONU)',
                  'Ley General para la Inclusión de las Personas con Discapacidad',
                  'Ley Federal para Prevenir y Eliminar la Discriminación',
                  'Normas de Accesibilidad WCAG 2.1',
                ] : [
                  'Convention on the Rights of Persons with Disabilities (UN)',
                  'General Law for the Inclusion of Persons with Disabilities',
                  'Federal Law to Prevent and Eliminate Discrimination',
                  'WCAG 2.1 Accessibility Standards',
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                    <Scale className="w-5 h-5 text-[#1B1F5A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Statutes download */}
              <div className="mt-8 bg-[#1B1F5A] rounded-xl p-6 flex items-center gap-4">
                <FileText className="w-10 h-10 text-[#FFD700] flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-white text-sm mb-1">
                    {es ? 'Estatutos Institucionales' : 'Institutional Statutes'}
                  </h3>
                  <p className="text-white/60 text-xs">
                    {es ? 'Documento PDF descargable' : 'Downloadable PDF document'}
                  </p>
                </div>
                <button className="btn-gold text-sm py-2 px-4">
                  {es ? 'Descargar' : 'Download'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section id="transparencia" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-4">
            {es ? 'Transparencia y Gobernanza' : 'Transparency and Governance'}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {es
              ? 'Alianza Índigo opera con total transparencia. Nuestra gobernanza es colectiva, nuestras finanzas son públicas y nuestras decisiones se toman con base en principios éticos y evidencia.'
              : 'Alianza Índigo operates with total transparency. Our governance is collective, our finances are public and our decisions are made based on ethical principles and evidence.'}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {(es ? [
              { title: 'Gobernanza Colectiva', desc: 'Decisiones institucionales tomadas de forma colegiada, sin protagonismos individuales.' },
              { title: 'Finanzas Públicas', desc: 'Informes financieros disponibles para consulta pública. Rendición de cuentas periódica.' },
              { title: 'Auditoría Institucional', desc: 'Procesos de revisión interna y externa para garantizar la integridad operativa.' },
            ] : [
              { title: 'Collective Governance', desc: 'Institutional decisions made collegially, without individual protagonism.' },
              { title: 'Public Finances', desc: 'Financial reports available for public consultation. Periodic accountability.' },
              { title: 'Institutional Audit', desc: 'Internal and external review processes to ensure operational integrity.' },
            ]).map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
