import React from 'react';
import IndigoSeal from './IndigoSeal';
import {
  Award, Cpu, FlaskConical, BookOpen, Users, Ticket, Heart,
  ArrowRight, Shield, Eye, Scale, Lightbulb, Globe, CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  lang: 'es' | 'en';
}

const HERO_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666460824_764b07b3.jpg';
const CERT_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666481034_398844ac.jpg';

const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang }) => {
  const t = lang === 'es' ? {
    heroTitle: 'No necesitas PARECER para SER',
    heroSubtitle: 'Institución dedicada a la protección y promoción de la neurodivergencia',
    heroDesc: 'Alianza Índigo trabaja por un mundo donde cada mente diversa sea reconocida, protegida y valorada. Somos una institución colectiva, ética y universal.',
    btnNeurodiv: '¿Qué es la neurodivergencia?',
    btnCert: 'Certificaciones',
    btnPlatforms: 'Plataformas',
    btnRaffles: 'Rifas institucionales',
    btnJoin: 'Únete a la Alianza',
    purposeTitle: 'Propósito Institucional',
    purposeDesc: 'Alianza Índigo existe para transformar la comprensión social de la neurodivergencia. Promovemos entornos inclusivos, certificamos prácticas éticas, desarrollamos tecnología accesible y construimos comunidad.',
    purposeItems: [
      { icon: Shield, title: 'Protección', desc: 'Defendemos los derechos de las personas neurodivergentes en todos los ámbitos.' },
      { icon: Eye, title: 'Representación', desc: 'Visibilizamos la neurodivergencia con dignidad, rigor y respeto.' },
      { icon: Award, title: 'Certificación', desc: 'Validamos entornos, campañas y políticas neuroinclusivas.' },
      { icon: Lightbulb, title: 'Promoción', desc: 'Educamos, investigamos y difundimos conocimiento sobre neurodivergencia.' },
    ],
    programsTitle: 'Programas Destacados',
    programsSubtitle: 'Conoce nuestras líneas de acción institucional',
    programs: [
      { icon: Award, title: 'CENI', desc: 'Certificación de Entornos Neuroinclusivos para empresas, escuelas y gobiernos.', page: 'certificaciones', color: 'bg-indigo-50 text-[#1B1F5A]' },
      { icon: Cpu, title: 'ADIA', desc: 'Asistente de inteligencia artificial para la inclusión y accesibilidad.', page: 'plataformas', color: 'bg-blue-50 text-blue-700' },
      { icon: FlaskConical, title: 'Observatorio', desc: 'Investigación y datos abiertos sobre neuroinclusión a nivel global.', page: 'investigacion', color: 'bg-purple-50 text-purple-700' },
      { icon: BookOpen, title: 'Biblioteca ND', desc: 'Recursos educativos, guías y material para escuelas, empresas y gobiernos.', page: 'recursos', color: 'bg-emerald-50 text-emerald-700' },
      { icon: Users, title: 'Embajadores', desc: 'Red colectiva de representación y voluntariado institucional.', page: 'comunidad', color: 'bg-amber-50 text-amber-700' },
      { icon: Ticket, title: 'Rifas', desc: 'Programa de financiamiento transparente para proyectos de inclusión.', page: 'rifas', color: 'bg-rose-50 text-rose-700' },
    ],
    statsTitle: 'Impacto Institucional',
    stats: [
      { value: '4', label: 'Certificaciones activas' },
      { value: '6+', label: 'Plataformas tecnológicas' },
      { value: '100%', label: 'Transparencia institucional' },
      { value: 'Global', label: 'Alcance universal' },
    ],
    ctaTitle: '¿Tu organización es neuroinclusiva?',
    ctaDesc: 'Obtén la Certificación CENI y demuestra tu compromiso con la neurodivergencia. Proceso transparente, voluntario y basado en evidencia.',
    ctaBtn: 'Conocer certificaciones',
    neurodivTitle: '¿Qué es la neurodivergencia?',
    neurodivDesc: 'La neurodivergencia es un concepto que reconoce la diversidad natural del funcionamiento cerebral humano. Incluye condiciones como el autismo, TDAH, dislexia, dispraxia, síndrome de Tourette y otras variaciones neurológicas que forman parte de la diversidad humana.',
    neurodivPoints: [
      'No es una enfermedad ni un déficit',
      'Es una variación natural del cerebro humano',
      'Afecta a millones de personas en el mundo',
      'Requiere entornos inclusivos y comprensivos',
      'Cada persona neurodivergente es única',
      'La sociedad debe adaptarse a la diversidad neurológica',
    ],
  } : {
    heroTitle: 'No need to SEEM to BE',
    heroSubtitle: 'Institution dedicated to the protection and promotion of neurodivergence',
    heroDesc: 'Alianza Índigo works for a world where every diverse mind is recognized, protected and valued. We are a collective, ethical and universal institution.',
    btnNeurodiv: 'What is neurodivergence?',
    btnCert: 'Certifications',
    btnPlatforms: 'Platforms',
    btnRaffles: 'Institutional Raffles',
    btnJoin: 'Join the Alliance',
    purposeTitle: 'Institutional Purpose',
    purposeDesc: 'Alianza Índigo exists to transform the social understanding of neurodivergence. We promote inclusive environments, certify ethical practices, develop accessible technology and build community.',
    purposeItems: [
      { icon: Shield, title: 'Protection', desc: 'We defend the rights of neurodivergent people in all areas.' },
      { icon: Eye, title: 'Representation', desc: 'We make neurodivergence visible with dignity, rigor and respect.' },
      { icon: Award, title: 'Certification', desc: 'We validate neuroinclusive environments, campaigns and policies.' },
      { icon: Lightbulb, title: 'Promotion', desc: 'We educate, research and disseminate knowledge about neurodivergence.' },
    ],
    programsTitle: 'Featured Programs',
    programsSubtitle: 'Discover our institutional lines of action',
    programs: [
      { icon: Award, title: 'CENI', desc: 'Certification of Neuroinclusive Environments for companies, schools and governments.', page: 'certificaciones', color: 'bg-indigo-50 text-[#1B1F5A]' },
      { icon: Cpu, title: 'ADIA', desc: 'Artificial intelligence assistant for inclusion and accessibility.', page: 'plataformas', color: 'bg-blue-50 text-blue-700' },
      { icon: FlaskConical, title: 'Observatory', desc: 'Research and open data on neuroinclusion globally.', page: 'investigacion', color: 'bg-purple-50 text-purple-700' },
      { icon: BookOpen, title: 'ND Library', desc: 'Educational resources, guides and materials for schools, companies and governments.', page: 'recursos', color: 'bg-emerald-50 text-emerald-700' },
      { icon: Users, title: 'Ambassadors', desc: 'Collective network of institutional representation and volunteering.', page: 'comunidad', color: 'bg-amber-50 text-amber-700' },
      { icon: Ticket, title: 'Raffles', desc: 'Transparent funding program for inclusion projects.', page: 'rifas', color: 'bg-rose-50 text-rose-700' },
    ],
    statsTitle: 'Institutional Impact',
    stats: [
      { value: '4', label: 'Active certifications' },
      { value: '6+', label: 'Technology platforms' },
      { value: '100%', label: 'Institutional transparency' },
      { value: 'Global', label: 'Universal reach' },
    ],
    ctaTitle: 'Is your organization neuroinclusive?',
    ctaDesc: 'Obtain the CENI Certification and demonstrate your commitment to neurodivergence. Transparent, voluntary and evidence-based process.',
    ctaBtn: 'Learn about certifications',
    neurodivTitle: 'What is neurodivergence?',
    neurodivDesc: 'Neurodivergence is a concept that recognizes the natural diversity of human brain functioning. It includes conditions such as autism, ADHD, dyslexia, dyspraxia, Tourette syndrome and other neurological variations that are part of human diversity.',
    neurodivPoints: [
      'It is not a disease or a deficit',
      'It is a natural variation of the human brain',
      'It affects millions of people worldwide',
      'It requires inclusive and understanding environments',
      'Every neurodivergent person is unique',
      'Society must adapt to neurological diversity',
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label={lang === 'es' ? 'Sección principal' : 'Hero section'}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F5A]/95 via-[#1B1F5A]/85 to-[#1B1F5A]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 animate-fade-up">
              <IndigoSeal size={100} className="mb-6" />
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-white mb-4 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t.heroTitle}
            </h1>
            <p className="text-[#FFD700] font-heading font-semibold text-lg md:text-xl mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {t.heroSubtitle}
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button onClick={() => { const el = document.getElementById('neurodivergencia'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-gold">
                {t.btnNeurodiv}
              </button>
              <button onClick={() => onNavigate('certificaciones')} className="border-2 border-white/30 text-white px-5 py-3 rounded-lg font-medium hover:bg-white/10 transition-all inline-flex items-center gap-2">
                {t.btnCert}
              </button>
              <button onClick={() => onNavigate('plataformas')} className="border-2 border-white/30 text-white px-5 py-3 rounded-lg font-medium hover:bg-white/10 transition-all inline-flex items-center gap-2">
                {t.btnPlatforms}
              </button>
              <button onClick={() => onNavigate('rifas')} className="border-2 border-white/30 text-white px-5 py-3 rounded-lg font-medium hover:bg-white/10 transition-all inline-flex items-center gap-2">
                {t.btnRaffles}
              </button>
              <button onClick={() => onNavigate('donaciones')} className="border-2 border-[#FFD700]/50 text-[#FFD700] px-5 py-3 rounded-lg font-medium hover:bg-[#FFD700]/10 transition-all inline-flex items-center gap-2">
                {t.btnJoin} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-padding bg-white" aria-labelledby="purpose-title">
        <div className="container-institutional">
          <div className="text-center mb-16">
            <h2 id="purpose-title" className="font-heading font-bold text-3xl md:text-4xl text-[#1B1F5A] mb-4">{t.purposeTitle}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">{t.purposeDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.purposeItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-institutional p-8 text-center group hover:border-[#FFD700] hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#1B1F5A] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#FFD700] group-hover:text-[#1B1F5A] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 indigo-gradient" aria-labelledby="stats-title">
        <div className="container-institutional px-4 md:px-8">
          <h2 id="stats-title" className="sr-only">{t.statsTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-black text-3xl md:text-4xl text-[#FFD700] mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-gray-50" aria-labelledby="programs-title">
        <div className="container-institutional">
          <div className="text-center mb-12">
            <h2 id="programs-title" className="font-heading font-bold text-3xl md:text-4xl text-[#1B1F5A] mb-3">{t.programsTitle}</h2>
            <p className="text-gray-600 text-lg">{t.programsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <button
                  key={i}
                  onClick={() => onNavigate(prog.page)}
                  className="card-institutional p-8 text-left group hover:border-[#FFD700] hover:-translate-y-1 w-full"
                >
                  <div className={`w-12 h-12 rounded-lg ${prog.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2 group-hover:text-[#2B2D6D]">{prog.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.desc}</p>
                  <span className="text-[#1B1F5A] text-sm font-semibold inline-flex items-center gap-1 group-hover:text-[#FFD700] transition-colors">
                    {lang === 'es' ? 'Conocer más' : 'Learn more'} <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neurodivergence Section */}
      <section id="neurodivergencia" className="section-padding bg-white" aria-labelledby="neurodiv-title">
        <div className="container-institutional">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="neurodiv-title" className="font-heading font-bold text-3xl md:text-4xl text-[#1B1F5A] mb-6">{t.neurodivTitle}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.neurodivDesc}</p>
              <ul className="space-y-3">
                {t.neurodivPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-[#1B1F5A] rounded-2xl p-8 md:p-12 text-center">
                <IndigoSeal size={160} className="mx-auto mb-6" />
                <h3 className="font-heading font-bold text-xl text-[#FFD700] mb-3">
                  {lang === 'es' ? 'Sello Universal' : 'Universal Seal'}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === 'es'
                    ? 'El Sello Universal de Alianza Índigo representa nuestro compromiso con la dignidad, la inclusión y la diversidad neurológica.'
                    : 'The Universal Seal of Alianza Índigo represents our commitment to dignity, inclusion and neurological diversity.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0">
          <img src={CERT_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#1B1F5A]/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 id="cta-title" className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <button onClick={() => onNavigate('certificaciones')} className="btn-gold text-lg px-8 py-4">
            {t.ctaBtn} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
