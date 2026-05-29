import React, { useState } from 'react';
import InfoModal from './InfoModal';
import {
  Cpu, Bot, QrCode, Code2, Users, LayoutDashboard,
  ArrowRight, CheckCircle2, AlertCircle, Workflow, BookOpen
} from 'lucide-react';

interface PlatformsPageProps {
  lang: 'es' | 'en';
}

const TECH_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666507517_cd735311.jpg';

const PlatformsPage: React.FC<PlatformsPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [modalOpen, setModalOpen] = useState(false);
  const platforms = es ? [
    {
      icon: Bot,
      title: 'ADIA – Asistente Docente de IA',
      desc: 'El asistente permanente del docente que lo acompaña antes, durante y después de clase. Genera planeaciones inclusivas con adaptaciones específicas para estudiantes neurodivergentes, estrategias en tiempo real para situaciones de aula y documentación oficial (PTI, ACI, informes SEP). Gratuito para docentes de escuelas públicas.',
      status: 'Activo',
      features: [
        'Planeaciones con adaptaciones ND por sesión',
        'Estrategias en tiempo real para el aula',
        'Documentación oficial: PTI, ACI, informes SEP',
        'IIP v4.0: Ingeniero de Inclusión Pedagógica Total',
        'Gratuito para escuelas públicas',
      ],
    },
   {
  icon: BookOpen,
  title: 'NeuroPlan 360',
  desc: 'La plataforma de IA más poderosa del ecosistema Alianza Índigo Neurodivergente. Crea protocolos personalizados de autonomía funcional para personas neurodivergentes basados en el Framework FAN. Diseñada para familias, docentes, terapeutas, psicólogos y cualquier especialista que trabaje con personas ND. El perfil generado se comparte entre todos los actores del entorno del estudiante — conectando hogar, escuela y clínica en un solo sistema.',
  status: 'Activo',
  features: [
    'Perfil ND personalizado y compartible',
    'Protocolos para vida diaria, escuela y clínica',
    'Para familias, docentes y especialistas',
    'Framework FAN (Adaptación Neuro-Funcional)',
    'Gratuito para familias afiliadas a Alianza Índigo Neurodivergente',
  ],
},
    {
      icon: Workflow,
      title: 'Arquitecto de Pipelines (n8n)',
      desc: 'Sistema de automatización de procesos institucionales basado en n8n. Permite crear flujos de trabajo automatizados para certificaciones, registros y comunicaciones.',
      status: 'Activo',
      features: ['Automatización de certificaciones', 'Flujos de comunicación', 'Integración con CRM', 'Reportes automatizados'],
    },
    {
      icon: Users,
      title: 'RENAP-ND',
      desc: 'Registro Nacional de Prestadores de Servicios Neurodivergentes. Directorio público verificable de terapeutas, médicos y centros que han firmado el Código de Ética Neuroafirmativa de Alianza Índigo Neurodivergente.',
      status: 'En desarrollo',
      features: ['Directorio verificado y público', 'Búsqueda por especialidad', 'Verificación por QR dinámico', 'Tres estados: vigente, suspendido, retirado'],
    },
    {
      icon: QrCode,
      title: 'Verificador de Distintivos',
      desc: 'Sistema de verificación mediante código QR y código único que permite validar la autenticidad de certificaciones y distintivos otorgados por Alianza Índigo Neurodivergente en tiempo real.',
      status: 'Activo',
      features: ['Verificación por QR', 'Código único por certificación', 'Validación en tiempo real', 'Registro público consultable'],
    },
    {
      icon: Code2,
      title: 'API Pública',
      desc: 'Interfaz de programación que permite a terceros validar certificaciones, consultar el registro público y acceder a datos abiertos de Alianza Índigo Neurodivergente.',
      status: 'En desarrollo',
      features: ['Endpoints RESTful', 'Documentación completa', 'Autenticación segura', 'Rate limiting'],
    },
  ] : [
    {
      icon: Bot,
      title: 'ADIA – AI Teaching Assistant',
      desc: 'The permanent assistant that accompanies teachers before, during and after class. Generates inclusive lesson plans with specific adaptations for neurodivergent students, real-time strategies for classroom situations and official documentation (PTI, ACI, SEP reports). Free for public school teachers.',
      status: 'Active',
      features: [
        'Lesson plans with ND adaptations per session',
        'Real-time classroom strategies',
        'Official documentation: PTI, ACI, SEP reports',
        'IIP v4.0: Total Pedagogical Inclusion Engineer',
        'Free for public schools',
      ],
    },
    {
  icon: BookOpen,
  title: 'NeuroPlan 360',
  desc: 'The most powerful platform in the Alianza Índigo Neurodivergente ecosystem. Creates personalized functional autonomy protocols for neurodivergent people based on the FAN Framework. Designed for families, teachers, therapists, psychologists and any specialist working with ND individuals. The generated profile is shared across all actors in the student\'s environment — connecting home, school and clinic in a single system.',
  status: 'Active',
  features: [
    'Personalized and shareable ND profile',
    'Protocols for daily life, school and clinic',
    'For families, teachers and specialists',
    'FAN Framework (Neuro-Functional Adaptation)',
    'Free for families affiliated with Alianza Índigo Neurodivergente',
  ],
},
    {
      icon: Workflow,
      title: 'Pipeline Architect (n8n)',
      desc: 'Institutional process automation system based on n8n. Allows creating automated workflows for certifications, registrations and communications.',
      status: 'Active',
      features: ['Certification automation', 'Communication flows', 'CRM integration', 'Automated reports'],
    },
    {
      icon: Users,
      title: 'RENAP-ND',
      desc: 'National Registry of Neurodivergent Service Providers. Public verifiable directory of therapists, doctors and centers that have signed the Alianza Índigo Neurodivergente Neuroaffirmative Code of Ethics.',
      status: 'In development',
      features: ['Verified public directory', 'Search by specialty', 'Dynamic QR verification', 'Three states: valid, suspended, withdrawn'],
    },
    {
      icon: QrCode,
      title: 'Badge Verifier',
      desc: 'QR code and unique code verification system that validates the authenticity of certifications and badges granted by Alianza Índigo Neurodivergente in real time.',
      status: 'Active',
      features: ['QR verification', 'Unique code per certification', 'Real-time validation', 'Public registry'],
    },
    {
      icon: Code2,
      title: 'Public API',
      desc: 'Programming interface that allows third parties to validate certifications, consult the public registry and access open data from Alianza Índigo Neurodivergente.',
      status: 'In development',
      features: ['RESTful endpoints', 'Complete documentation', 'Secure authentication', 'Rate limiting'],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TECH_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1F5A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Tecnología para la Inclusión' : 'Technology for Inclusion'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Plataformas Tecnológicas' : 'Technology Platforms'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Inteligencia artificial al servicio de quienes más la necesitan. ADIA y NeuroPlan 360 son completamente gratuitos para docentes de escuelas públicas y familias afiliadas a Alianza Índigo Neurodivergente. Financiados por certificaciones y Sorteos Índigo.'
              : 'Artificial intelligence at the service of those who need it most. ADIA and NeuroPlan 360 are completely free for public school teachers and families affiliated with Alianza Índigo Neurodivergente. Funded by certifications and Sorteos Índigo.'}
          </p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <div key={i} className="card-institutional p-6 group hover:border-[#FFD700]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-[#FFD700]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#1B1F5A]" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      platform.status === 'Activo' || platform.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-700'
                        : platform.status === 'Interno' || platform.status === 'Internal'
                        ? 'bg-gray-100 text-gray-600'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {platform.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">{platform.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{platform.desc}</p>
                  <ul className="space-y-1.5">
                    {platform.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Badge Verifier */}
      <section id="verificador" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <QrCode className="w-16 h-16 text-[#1B1F5A] mx-auto mb-4" />
          <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-4">
            {es ? 'Verificador de Distintivos' : 'Badge Verifier'}
          </h2>
          <p className="text-gray-600 mb-6">
            {es
              ? 'Herramienta para verificar la autenticidad de certificaciones y distintivos otorgados por Alianza Índigo Neurodivergente.'
              : 'Tool to verify the authenticity of certifications and badges granted by Alianza Índigo Neurodivergente.'}
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-md mx-auto">
            <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <p className="font-heading font-semibold text-amber-800 text-sm mb-1">
              {es ? 'Verificador en construcción' : 'Verifier under construction'}
            </p>
            <p className="text-amber-700 text-xs leading-relaxed">
              {es
                ? 'El verificador estará activo a partir de la primera certificación oficial emitida. Aún no hay distintivos registrados en el sistema.'
                : 'The verifier will be active from the first official certification issued. There are no registered badges in the system yet.'}
            </p>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="section-padding bg-[#1B1F5A]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                {es ? 'API Pública' : 'Public API'}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                {es
                  ? 'Nuestra API permite a desarrolladores y organizaciones integrar la validación de certificaciones de Alianza Índigo Neurodivergente en sus propios sistemas.'
                  : 'Our API allows developers and organizations to integrate Alianza Índigo Neurodivergente certification validation into their own systems.'}
              </p>
              <button className="btn-gold" onClick={() => setModalOpen(true)}>
                {es ? 'Ver Documentación' : 'View Documentation'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-[#12143D] rounded-xl p-6 font-mono text-sm">
              <div className="text-gray-400 mb-2">// {es ? 'Ejemplo de uso' : 'Usage example'}</div>
              <div className="text-emerald-400">GET</div>
              <div className="text-white/80 text-xs break-all mb-3">/api/v1/certifications/verify</div>
              <div className="text-gray-400 mb-1">{'{'}</div>
              <div className="text-white/80 pl-4">"code": <span className="text-[#FFD700]">"AI-CENI-2026-001"</span>,</div>
              <div className="text-white/80 pl-4">"status": <span className="text-emerald-400">"valid"</span>,</div>
              <div className="text-white/80 pl-4">"type": <span className="text-[#FFD700]">"CENI"</span>,</div>
              <div className="text-white/80 pl-4">"expires": <span className="text-[#FFD700]">"2028-03-16"</span></div>
              <div className="text-gray-400">{'}'}</div>
            </div>
          </div>
        </div>
      </section>
      <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} subject={es ? 'API Pública' : 'Public API'} />
    </div>
  );
};

export default PlatformsPage;
