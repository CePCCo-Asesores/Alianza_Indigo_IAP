import React, { useState } from 'react';
import InfoModal from './InfoModal';
import {
  Cpu, Bot, QrCode, Code2, Users, LayoutDashboard,
  ArrowRight, CheckCircle2, AlertCircle, Workflow, BookOpen,
  Server, Brain, TrendingUp, Heart, School, BarChart3, Zap, DollarSign, AlertTriangle
} from 'lucide-react';

interface PlatformsPageProps {
  lang: 'es' | 'en';
}

const TECH_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666507517_cd735311.jpg';

const PlatformsPage: React.FC<PlatformsPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [modalOpen, setModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
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
      icon: QrCode,
      title: 'Verificador de Distintivos',
      desc: 'Sistema de verificación mediante código QR y código único que permite validar la autenticidad de certificaciones y distintivos otorgados por Alianza Índigo Neurodivergente en tiempo real.',
      status: 'Activo',
      features: ['Verificación por QR', 'Código único por certificación', 'Validación en tiempo real', 'Registro público consultable'],
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
      icon: QrCode,
      title: 'Badge Verifier',
      desc: 'QR code and unique code verification system that validates the authenticity of certifications and badges granted by Alianza Índigo Neurodivergente in real time.',
      status: 'Active',
      features: ['QR verification', 'Unique code per certification', 'Real-time validation', 'Public registry'],
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

      {/* ADIA – Métricas clave */}
      <section className="section-padding bg-[#1B1F5A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
              {es ? 'El proyecto más ambicioso del ecosistema' : 'The most ambitious project in the ecosystem'}
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              {es ? 'ADIA: Centro de Datos Dedicado a la Inclusión' : 'ADIA: Data Center Dedicated to Inclusion'}
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              {es
                ? 'Un programa nacional de 5 años con infraestructura GPU propia para generar planeaciones de clase con IA para cada uno de los 1.3 millones de docentes de México — completamente gratuito para escuelas públicas.'
                : 'A 5-year national program with dedicated GPU infrastructure to generate AI-powered lesson plans for each of Mexico\'s 1.3 million teachers — completely free for public schools.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: School, value: '1.3M', label: es ? 'docentes en México' : 'teachers in Mexico' },
              { icon: Users, value: '30M+', label: es ? 'estudiantes beneficiados' : 'students impacted' },
              { icon: Brain, value: '1,000M+', label: es ? 'planeaciones anuales' : 'annual lesson plans' },
              { icon: DollarSign, value: '~$8 MXN', label: es ? 'por docente/año' : 'per teacher/year' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white/10 rounded-xl p-6 text-center">
                  <Icon className="w-8 h-8 text-[#FFD700] mx-auto mb-3" />
                  <p className="font-heading font-black text-3xl text-[#FFD700] mb-1">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-[#1B1F5A] flex-shrink-0" />
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A]">
              {es ? 'La crisis de inclusión en las aulas mexicanas' : 'The inclusion crisis in Mexican classrooms'}
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            {es
              ? 'Más del 15% del alumnado en México presenta alguna condición neurodivergente — TDAH, autismo, dislexia, discalculia, entre otras — pero el sistema educativo carece de las herramientas, la formación y el tiempo para atenderlos adecuadamente. El resultado: millones de niñas y niños invisibilizados en su propio salón de clases.'
              : 'More than 15% of students in Mexico have a neurodivergent condition — ADHD, autism, dyslexia, dyscalculia, among others — but the education system lacks the tools, training and time to support them properly. The result: millions of children made invisible in their own classrooms.'}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {(es ? [
              { stat: '15%+', desc: 'del alumnado con condición ND no diagnosticada o sin apoyo formal' },
              { stat: '1 de cada 3', desc: 'docentes reporta no haber recibido ninguna formación en NEE' },
              { stat: '80%', desc: 'de los PTI elaborados no cumplen con los estándares SEP mínimos' },
              { stat: '6 hrs/semana', desc: 'pierde el docente promedio en burocracia y documentación' },
              { stat: '40%', desc: 'de estudiantes ND abandonan la escuela antes de secundaria' },
              { stat: '$0 MXN', desc: 'presupuesto SEP asignado a herramientas de IA para docentes en 2024' },
            ] : [
              { stat: '15%+', desc: 'of students with ND condition undiagnosed or without formal support' },
              { stat: '1 in 3', desc: 'teachers report receiving no training in special educational needs' },
              { stat: '80%', desc: 'of IEPs written do not meet minimum SEP standards' },
              { stat: '6 hrs/week', desc: 'the average teacher loses to bureaucracy and documentation' },
              { stat: '40%', desc: 'of ND students drop out before middle school' },
              { stat: '$0 MXN', desc: 'SEP budget allocated to AI tools for teachers in 2024' },
            ]).map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <p className="font-heading font-black text-2xl text-[#1B1F5A] mb-1">{item.stat}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
            <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">
              {es ? '¿Por qué no se ha resuelto?' : 'Why hasn\'t it been solved?'}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {(es ? [
                'Los docentes no tienen tiempo: entre 40 y 50 alumnos por grupo',
                'La formación continua en NEE no es obligatoria ni financiada',
                'Las herramientas digitales existentes no están en español ni son gratuitas',
                'La documentación oficial (PTI, ACI) consume horas que se restan al aula',
              ] : [
                'Teachers have no time: between 40 and 50 students per group',
                'Ongoing training in SEN is neither mandatory nor funded',
                'Existing digital tools are not in Spanish nor free',
                'Official documentation (IEP, ACI) consumes hours taken from the classroom',
              ]).map((barrier, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#1B1F5A]/80">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1B1F5A]" />
                  {barrier}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#FFD700] flex-shrink-0" />
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A]">
              {es ? 'La solución: infraestructura propia, sin depender de terceros' : 'The solution: own infrastructure, no dependency on third parties'}
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
            {es
              ? 'ADIA no es un chatbot sobre un API de pago. Es un sistema completo con GPU dedicadas, modelos optimizados para educación y un motor de adaptación pedagógica capaz de generar planeaciones personalizadas a escala nacional — sin costo variable por consulta y sin riesgo de cortes de servicio por terceros.'
              : 'ADIA is not a chatbot on a paid API. It is a complete system with dedicated GPUs, models optimized for education and a pedagogical adaptation engine capable of generating personalized lesson plans at national scale — with no per-query variable cost and no risk of third-party service interruptions.'}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {(es ? [
              { icon: Server, title: 'Centro de datos GPU', desc: 'Infraestructura H100/A100 dedicada. Capacidad estimada: 150,000 solicitudes simultáneas. Sin costos variables por uso.' },
              { icon: Brain, title: 'Motor IIP v4.0', desc: 'Ingeniero de Inclusión Pedagógica Total: genera planeaciones con adaptaciones específicas por perfil ND, nivel y asignatura.' },
              { icon: TrendingUp, title: 'Escala nacional', desc: '1.3 millones de docentes atendidos desde año 1. Más de 1,000 millones de planeaciones generadas al año en plena operación.' },
            ] : [
              { icon: Server, title: 'GPU Data Center', desc: 'Dedicated H100/A100 infrastructure. Estimated capacity: 150,000 simultaneous requests. No variable usage costs.' },
              { icon: Brain, title: 'IIP v4.0 Engine', desc: 'Total Pedagogical Inclusion Engineer: generates lesson plans with specific adaptations by ND profile, level and subject.' },
              { icon: TrendingUp, title: 'National scale', desc: '1.3 million teachers served from year 1. More than 1 billion lesson plans generated per year at full operation.' },
            ]).map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-institutional p-6 hover:border-[#FFD700]">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1B1F5A]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 mb-6">
            <h3 className="font-heading font-bold text-[#1B1F5A] mb-4">
              {es ? 'Comparativa de costo: API externa vs. infraestructura propia' : 'Cost comparison: external API vs. own infrastructure'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-indigo-200">
                    <th className="text-left py-2 pr-4 text-[#1B1F5A] font-semibold">{es ? 'Modelo' : 'Model'}</th>
                    <th className="text-right py-2 px-4 text-[#1B1F5A] font-semibold">{es ? 'Costo/año (1.3M docentes)' : 'Cost/year (1.3M teachers)'}</th>
                    <th className="text-right py-2 pl-4 text-[#1B1F5A] font-semibold">{es ? 'Costo/docente/año' : 'Cost/teacher/year'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-100">
                  <tr>
                    <td className="py-2 pr-4 text-gray-600">API externa (OpenAI / Claude)</td>
                    <td className="py-2 px-4 text-right text-red-600 font-semibold">~$10M–40M USD</td>
                    <td className="py-2 pl-4 text-right text-red-600">$8–30 USD</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="py-2 pr-4 text-gray-800 font-semibold">
                      {es ? 'Centro de datos ADIA (propio)' : 'ADIA data center (own)'}
                    </td>
                    <td className="py-2 px-4 text-right text-emerald-700 font-bold">~$600K USD</td>
                    <td className="py-2 pl-4 text-right text-emerald-700 font-bold">~$0.46 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-indigo-600 mt-3">
              {es
                ? '* Proyección basada en 2 planeaciones/semana por docente × 40 semanas. Inversión de hardware amortizada en 5 años.'
                : '* Projection based on 2 lesson plans/week per teacher × 40 weeks. Hardware investment amortized over 5 years.'}
            </p>
          </div>
          <div className="bg-[#1B1F5A] rounded-xl p-6">
            <h3 className="font-heading font-bold text-white mb-4">
              {es ? 'Presupuesto del proyecto a 5 años' : '5-year project budget'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 pr-4 text-white/60">{es ? 'Componente' : 'Component'}</th>
                    <th className="text-right py-2 pl-4 text-white/60">USD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {(es ? [
                    { item: 'Hardware GPU (H100 / A100, servidores, networking)', cost: '$1,800,000' },
                    { item: 'Desarrollo de software y modelo IIP v4.0', cost: '$450,000' },
                    { item: 'Operación y mantenimiento (5 años)', cost: '$500,000' },
                    { item: 'Energía y colocation (5 años)', cost: '$150,000' },
                    { item: 'Equipo técnico y pedagógico (5 años)', cost: '$100,000' },
                  ] : [
                    { item: 'GPU Hardware (H100 / A100, servers, networking)', cost: '$1,800,000' },
                    { item: 'Software development and IIP v4.0 model', cost: '$450,000' },
                    { item: 'Operations and maintenance (5 years)', cost: '$500,000' },
                    { item: 'Energy and colocation (5 years)', cost: '$150,000' },
                    { item: 'Technical and pedagogical team (5 years)', cost: '$100,000' },
                  ]).map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-4 text-white/80">{row.item}</td>
                      <td className="py-2 pl-4 text-right text-[#FFD700] font-mono font-semibold">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#FFD700]">
                    <td className="py-3 pr-4 text-white font-bold text-base">{es ? 'Total estimado' : 'Estimated total'}</td>
                    <td className="py-3 pl-4 text-right text-[#FFD700] font-heading font-black text-xl">~$3,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto proyectado */}
      <section className="section-padding bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-8 h-8 text-[#1B1F5A] flex-shrink-0" />
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A]">
              {es ? 'Impacto proyectado a 5 años' : 'Projected 5-year impact'}
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-indigo-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B1F5A] text-white">
                  <th className="text-left py-3 px-4">{es ? 'Año' : 'Year'}</th>
                  <th className="text-right py-3 px-4">{es ? 'Docentes activos' : 'Active teachers'}</th>
                  <th className="text-right py-3 px-4">{es ? 'Planeaciones/año' : 'Plans/year'}</th>
                  <th className="text-right py-3 px-4">{es ? 'Estudiantes alcanzados' : 'Students reached'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-100">
                {[
                  { year: es ? 'Año 1' : 'Year 1', teachers: '200,000', plans: '16M', students: '8M' },
                  { year: es ? 'Año 2' : 'Year 2', teachers: '500,000', plans: '40M', students: '20M' },
                  { year: es ? 'Año 3' : 'Year 3', teachers: '800,000', plans: '64M', students: '32M' },
                  { year: es ? 'Año 4' : 'Year 4', teachers: '1,100,000', plans: '88M', students: '44M' },
                  { year: es ? 'Año 5' : 'Year 5', teachers: '1,300,000+', plans: '104M+', students: '52M+' },
                ].map((row, i) => (
                  <tr key={i} className={i === 4 ? 'bg-emerald-50 font-semibold' : ''}>
                    <td className="py-3 px-4 text-[#1B1F5A] font-medium">{row.year}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{row.teachers}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{row.plans}</td>
                    <td className="py-3 px-4 text-right text-emerald-700 font-semibold">{row.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA – Únete por $200 */}
      <section className="section-padding bg-[#FFD700]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-7 h-7 text-[#1B1F5A]" />
                <p className="text-[#1B1F5A] font-label text-sm tracking-widest uppercase font-bold">
                  {es ? 'Sé parte del cambio' : 'Be part of the change'}
                </p>
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-[#1B1F5A] mb-4">
                {es
                  ? 'Únete a Alianza Índigo y haz posible ADIA'
                  : 'Join Alianza Índigo and make ADIA possible'}
              </h2>
              <p className="text-[#1B1F5A]/80 leading-relaxed mb-6">
                {es
                  ? 'El centro de datos dedicado se financia a través de certificaciones, rifas institucionales y la comunidad que nos respalda. Con tu aportación de ingreso de $200 MXN te conviertes en parte oficial de Alianza Índigo Neurodivergente y apoyas directamente el acceso gratuito de millones de docentes a inteligencia artificial inclusiva.'
                  : 'The dedicated data center is funded through certifications, institutional raffles and the community that supports us. With your $200 MXN entry contribution you become an official part of Alianza Índigo Neurodivergente and directly support free access for millions of teachers to inclusive artificial intelligence.'}
              </p>
              <ul className="space-y-3">
                {(es ? [
                  'Credencial digital de miembro de Alianza Índigo Neurodivergente',
                  'Acceso a la comunidad y recursos exclusivos',
                  'Participación en sorteos institucionales',
                  'Tu nombre en el muro de fundadores del centro de datos',
                  'Boletín institucional mensual',
                ] : [
                  'Digital membership credential of Alianza Índigo Neurodivergente',
                  'Access to community and exclusive resources',
                  'Participation in institutional raffles',
                  'Your name on the data center founders wall',
                  'Monthly institutional newsletter',
                ]).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#1B1F5A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1B1F5A] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1B1F5A] rounded-2xl p-8 text-white text-center shadow-xl">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                {es ? 'Aportación de ingreso única' : 'One-time entry contribution'}
              </p>
              <p className="font-heading font-black text-6xl text-[#FFD700] mb-1">$200</p>
              <p className="text-white/60 text-sm mb-6">MXN</p>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                {es
                  ? 'Una sola aportación. Membresía de por vida en Alianza Índigo Neurodivergente. Impacto directo en la educación inclusiva de México.'
                  : 'A single contribution. Lifetime membership in Alianza Índigo Neurodivergente. Direct impact on inclusive education in Mexico.'}
              </p>
              <button
                onClick={() => setJoinModalOpen(true)}
                className="block w-full bg-[#FFD700] hover:bg-[#FFC800] text-[#1B1F5A] font-heading font-bold py-4 px-6 rounded-xl text-center transition-colors text-lg"
              >
                {es ? 'Quiero unirme ahora' : 'I want to join now'}
              </button>
              <p className="text-white/40 text-xs mt-4">
                {es
                  ? 'Te contactaremos en menos de 48 horas para confirmar tu ingreso.'
                  : 'We will contact you within 48 hours to confirm your membership.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre – frase institucional */}
      <section className="py-16 bg-gray-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            {es
              ? <>No necesitas <span className="text-[#FFD700]">PARECER</span> para <span className="text-[#FFD700]">SER.</span></>
              : <>You don't need to <span className="text-[#FFD700]">SEEM</span> to <span className="text-[#FFD700]">BE.</span></>}
          </p>
          <p className="text-white/60 text-lg">
            {es
              ? 'Alianza Índigo Neurodivergente — tecnología, comunidad y dignidad para la neurodivergencia.'
              : 'Alianza Índigo Neurodivergente — technology, community and dignity for neurodivergence.'}
          </p>
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
              {es ? 'Sin registros vigentes' : 'No active records'}
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
      <InfoModal open={joinModalOpen} onClose={() => setJoinModalOpen(false)} lang={lang} subject={es ? 'Unirse a Alianza Índigo – $200 MXN' : 'Join Alianza Índigo – $200 MXN'} />
    </div>
  );
};

export default PlatformsPage;
