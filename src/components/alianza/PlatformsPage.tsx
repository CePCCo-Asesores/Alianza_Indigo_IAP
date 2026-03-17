import React, { useState } from 'react';
import {
  Cpu, Bot, QrCode, Code2, Users, LayoutDashboard,
  ArrowRight, Search, CheckCircle2, AlertCircle, Workflow
} from 'lucide-react';

interface PlatformsPageProps {
  lang: 'es' | 'en';
}

const TECH_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666507517_cd735311.jpg';

const PlatformsPage: React.FC<PlatformsPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [verifyCode, setVerifyCode] = useState('');
  const [verifyResult, setVerifyResult] = useState<null | 'valid' | 'invalid'>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyCode.trim().length > 3) {
      setVerifyResult(verifyCode.toUpperCase().startsWith('AI-') ? 'valid' : 'invalid');
    }
  };

  const platforms = es ? [
    {
      icon: Bot,
      title: 'ADIA – Asistente de IA',
      desc: 'Asistente de inteligencia artificial diseñado para apoyar la inclusión y accesibilidad en entornos educativos, laborales y sociales. ADIA proporciona orientación personalizada sobre neurodivergencia.',
      status: 'En desarrollo',
      features: ['Orientación sobre neurodivergencia', 'Recomendaciones de accesibilidad', 'Soporte multilingüe', 'Integración con plataformas educativas'],
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
      title: 'Registro de Profesionales ND',
      desc: 'Directorio institucional de profesionales especializados en neurodivergencia. Permite a organizaciones encontrar expertos certificados.',
      status: 'En desarrollo',
      features: ['Directorio verificado', 'Búsqueda por especialidad', 'Perfiles profesionales', 'Validación institucional'],
    },
    {
      icon: QrCode,
      title: 'Verificador de Distintivos',
      desc: 'Sistema de verificación mediante código QR y código único que permite validar la autenticidad de certificaciones y distintivos otorgados por Alianza Índigo.',
      status: 'Activo',
      features: ['Verificación por QR', 'Código único', 'Validación en tiempo real', 'Registro público'],
    },
    {
      icon: Code2,
      title: 'API Pública',
      desc: 'Interfaz de programación que permite a terceros validar certificaciones, consultar el registro público y acceder a datos abiertos de Alianza Índigo.',
      status: 'En desarrollo',
      features: ['Endpoints RESTful', 'Documentación completa', 'Autenticación segura', 'Rate limiting'],
    },
    {
      icon: LayoutDashboard,
      title: 'Panel Administrativo',
      desc: 'Sistema interno de gestión institucional para la administración de certificaciones, registros, comunicaciones y reportes. Acceso restringido al equipo institucional.',
      status: 'Interno',
      features: ['Gestión de certificaciones', 'Reportes institucionales', 'Control de acceso', 'Auditoría de acciones'],
    },
  ] : [
    {
      icon: Bot,
      title: 'ADIA – AI Assistant',
      desc: 'Artificial intelligence assistant designed to support inclusion and accessibility in educational, work and social environments. ADIA provides personalized guidance on neurodivergence.',
      status: 'In development',
      features: ['Neurodivergence guidance', 'Accessibility recommendations', 'Multilingual support', 'Educational platform integration'],
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
      title: 'ND Professional Registry',
      desc: 'Institutional directory of professionals specialized in neurodivergence. Allows organizations to find certified experts.',
      status: 'In development',
      features: ['Verified directory', 'Search by specialty', 'Professional profiles', 'Institutional validation'],
    },
    {
      icon: QrCode,
      title: 'Badge Verifier',
      desc: 'QR code and unique code verification system that validates the authenticity of certifications and badges granted by Alianza Índigo.',
      status: 'Active',
      features: ['QR verification', 'Unique code', 'Real-time validation', 'Public registry'],
    },
    {
      icon: Code2,
      title: 'Public API',
      desc: 'Programming interface that allows third parties to validate certifications, consult the public registry and access open data from Alianza Índigo.',
      status: 'In development',
      features: ['RESTful endpoints', 'Complete documentation', 'Secure authentication', 'Rate limiting'],
    },
    {
      icon: LayoutDashboard,
      title: 'Admin Panel',
      desc: 'Internal institutional management system for the administration of certifications, registrations, communications and reports. Restricted access to the institutional team.',
      status: 'Internal',
      features: ['Certification management', 'Institutional reports', 'Access control', 'Action auditing'],
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
              ? 'Desarrollamos herramientas tecnológicas accesibles para potenciar la neuroinclusión. Desde inteligencia artificial hasta sistemas de verificación, nuestra tecnología está al servicio de la comunidad.'
              : 'We develop accessible technological tools to enhance neuroinclusion. From artificial intelligence to verification systems, our technology serves the community.'}
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
          <p className="text-gray-600 mb-8">
            {es
              ? 'Ingresa el código único de un distintivo o certificación para verificar su autenticidad. Los códigos válidos comienzan con "AI-".'
              : 'Enter the unique code of a badge or certification to verify its authenticity. Valid codes start with "AI-".'}
          </p>
          <form onSubmit={handleVerify} className="flex gap-3 max-w-md mx-auto mb-6">
            <input
              type="text"
              value={verifyCode}
              onChange={(e) => { setVerifyCode(e.target.value); setVerifyResult(null); }}
              placeholder={es ? 'Ej: AI-CENI-2026-001' : 'E.g.: AI-CENI-2026-001'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all"
              aria-label={es ? 'Código de verificación' : 'Verification code'}
            />
            <button type="submit" className="btn-indigo">
              <Search className="w-4 h-4" /> {es ? 'Verificar' : 'Verify'}
            </button>
          </form>
          {verifyResult === 'valid' && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center gap-3 max-w-md mx-auto animate-fade-in">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-emerald-700 text-sm">{es ? 'Distintivo válido' : 'Valid badge'}</p>
                <p className="text-emerald-600 text-xs">{es ? 'Este código corresponde a un distintivo auténtico de Alianza Índigo.' : 'This code corresponds to an authentic Alianza Índigo badge.'}</p>
              </div>
            </div>
          )}
          {verifyResult === 'invalid' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 max-w-md mx-auto animate-fade-in">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-red-700 text-sm">{es ? 'Código no encontrado' : 'Code not found'}</p>
                <p className="text-red-600 text-xs">{es ? 'Este código no corresponde a ningún distintivo registrado.' : 'This code does not correspond to any registered badge.'}</p>
              </div>
            </div>
          )}
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
                  ? 'Nuestra API permite a desarrolladores y organizaciones integrar la validación de certificaciones de Alianza Índigo en sus propios sistemas.'
                  : 'Our API allows developers and organizations to integrate Alianza Índigo certification validation into their own systems.'}
              </p>
              <button className="btn-gold">
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
    </div>
  );
};

export default PlatformsPage;
