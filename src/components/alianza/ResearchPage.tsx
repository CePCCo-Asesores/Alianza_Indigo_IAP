import React, { useState } from 'react';
import {
  FlaskConical, BarChart3, FileText, Database, Microscope,
  ArrowRight, Calendar, Tag, ExternalLink, Download
} from 'lucide-react';

interface ResearchPageProps {
  lang: 'es' | 'en';
}

const RESEARCH_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666580071_65fcde54.png';

const ResearchPage: React.FC<ResearchPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [activeSection, setActiveSection] = useState('observatory');

  const publications = es ? [
    { title: 'Estado de la Neuroinclusión en América Latina 2025', type: 'Informe', date: 'Enero 2026', tags: ['Neuroinclusión', 'Datos'] },
    { title: 'Guía de Buenas Prácticas para Entornos Laborales ND', type: 'Guía', date: 'Noviembre 2025', tags: ['Laboral', 'Inclusión'] },
    { title: 'Impacto de las Certificaciones CENI: Primer Análisis', type: 'Estudio', date: 'Septiembre 2025', tags: ['CENI', 'Impacto'] },
    { title: 'Neurodivergencia y Educación Superior: Retos y Oportunidades', type: 'Artículo', date: 'Julio 2025', tags: ['Educación', 'Universidad'] },
    { title: 'Marco Ético para la Representación de la Neurodivergencia en Medios', type: 'Documento', date: 'Mayo 2025', tags: ['Medios', 'Ética'] },
    { title: 'Indicadores de Neuroinclusión Municipal: Metodología NeuroPlan', type: 'Metodología', date: 'Marzo 2025', tags: ['NeuroPlan', 'Gobierno'] },
  ] : [
    { title: 'State of Neuroinclusion in Latin America 2025', type: 'Report', date: 'January 2026', tags: ['Neuroinclusion', 'Data'] },
    { title: 'Best Practices Guide for ND Work Environments', type: 'Guide', date: 'November 2025', tags: ['Work', 'Inclusion'] },
    { title: 'Impact of CENI Certifications: First Analysis', type: 'Study', date: 'September 2025', tags: ['CENI', 'Impact'] },
    { title: 'Neurodivergence and Higher Education: Challenges and Opportunities', type: 'Article', date: 'July 2025', tags: ['Education', 'University'] },
    { title: 'Ethical Framework for Neurodivergence Representation in Media', type: 'Document', date: 'May 2025', tags: ['Media', 'Ethics'] },
    { title: 'Municipal Neuroinclusion Indicators: NeuroPlan Methodology', type: 'Methodology', date: 'March 2025', tags: ['NeuroPlan', 'Government'] },
  ];

  const projects = es ? [
    { title: 'Índice Nacional de Neuroinclusión', status: 'En curso', desc: 'Desarrollo de un índice cuantitativo que mide el nivel de neuroinclusión en instituciones públicas y privadas.' },
    { title: 'Atlas de Neurodivergencia en Iberoamérica', status: 'En curso', desc: 'Mapeo geográfico y estadístico de la situación de la neurodivergencia en países iberoamericanos.' },
    { title: 'Estudio Longitudinal de Impacto CENI', status: 'Planificación', desc: 'Seguimiento a 5 años del impacto de la certificación CENI en organizaciones certificadas.' },
    { title: 'Protocolo de Evaluación ND en Educación Básica', status: 'En curso', desc: 'Desarrollo de herramientas de evaluación neuroinclusiva para escuelas de educación básica.' },
  ] : [
    { title: 'National Neuroinclusion Index', status: 'Ongoing', desc: 'Development of a quantitative index that measures the level of neuroinclusion in public and private institutions.' },
    { title: 'Atlas of Neurodivergence in Ibero-America', status: 'Ongoing', desc: 'Geographic and statistical mapping of the neurodivergence situation in Ibero-American countries.' },
    { title: 'CENI Impact Longitudinal Study', status: 'Planning', desc: '5-year follow-up of the impact of CENI certification on certified organizations.' },
    { title: 'ND Evaluation Protocol in Basic Education', status: 'Ongoing', desc: 'Development of neuroinclusive evaluation tools for basic education schools.' },
  ];

  const sections = [
    { id: 'observatory', label: es ? 'Observatorio' : 'Observatory', icon: BarChart3 },
    { id: 'publications', label: es ? 'Publicaciones' : 'Publications', icon: FileText },
    { id: 'data', label: es ? 'Datos Abiertos' : 'Open Data', icon: Database },
    { id: 'projects', label: es ? 'Proyectos' : 'Projects', icon: Microscope },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={RESEARCH_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1F5A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Conocimiento basado en evidencia' : 'Evidence-based knowledge'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Investigación' : 'Research'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Generamos conocimiento riguroso sobre neurodivergencia para informar políticas públicas, prácticas institucionales y la comprensión social.'
              : 'We generate rigorous knowledge about neurodivergence to inform public policies, institutional practices and social understanding.'}
          </p>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] md:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-1 py-2">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === s.id ? 'bg-[#1B1F5A] text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Observatory */}
      {activeSection === 'observatory' && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-4">
              {es ? 'Observatorio de Neuroinclusión' : 'Neuroinclusion Observatory'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              {es
                ? 'El Observatorio de Neuroinclusión de Alianza Índigo monitorea, analiza y publica datos sobre el estado de la inclusión neurológica a nivel nacional e internacional.'
                : 'The Alianza Índigo Neuroinclusion Observatory monitors, analyzes and publishes data on the state of neurological inclusion at national and international levels.'}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {(es ? [
                { value: '24', label: 'Indicadores monitoreados', color: 'bg-indigo-50 text-[#1B1F5A]' },
                { value: '12', label: 'Países analizados', color: 'bg-blue-50 text-blue-700' },
                { value: '6', label: 'Informes publicados', color: 'bg-purple-50 text-purple-700' },
                { value: '3', label: 'Alianzas de datos', color: 'bg-emerald-50 text-emerald-700' },
              ] : [
                { value: '24', label: 'Monitored indicators', color: 'bg-indigo-50 text-[#1B1F5A]' },
                { value: '12', label: 'Countries analyzed', color: 'bg-blue-50 text-blue-700' },
                { value: '6', label: 'Published reports', color: 'bg-purple-50 text-purple-700' },
                { value: '3', label: 'Data partnerships', color: 'bg-emerald-50 text-emerald-700' },
              ]).map((stat, i) => (
                <div key={i} className={`rounded-xl p-6 ${stat.color}`}>
                  <div className="font-heading font-black text-3xl mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-[#1B1F5A] mb-4">
                {es ? 'Áreas de Monitoreo' : 'Monitoring Areas'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(es ? [
                  'Educación inclusiva', 'Empleo y neurodivergencia', 'Políticas públicas',
                  'Accesibilidad digital', 'Salud y bienestar ND', 'Representación en medios',
                ] : [
                  'Inclusive education', 'Employment and neurodivergence', 'Public policies',
                  'Digital accessibility', 'ND health and wellbeing', 'Media representation',
                ]).map((area, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-100">
                    <FlaskConical className="w-4 h-4 text-[#FFD700]" />
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Publications */}
      {activeSection === 'publications' && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-8">
              {es ? 'Publicaciones Institucionales' : 'Institutional Publications'}
            </h2>
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <div key={i} className="card-institutional p-6 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#FFD700]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-[#1B1F5A]">{pub.type}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> {pub.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[#1B1F5A] group-hover:text-[#2B2D6D]">{pub.title}</h3>
                    <div className="flex gap-2 mt-2">
                      {pub.tags.map((tag, j) => (
                        <span key={j} className="text-xs text-gray-500 flex items-center gap-1"><Tag className="w-3 h-3" /> {tag}</span>
                      ))}
                    </div>
                  </div>
                  <button className="btn-outline-indigo text-sm py-2 px-4 flex-shrink-0">
                    <Download className="w-4 h-4" /> {es ? 'Descargar' : 'Download'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Data */}
      {activeSection === 'data' && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <Database className="w-16 h-16 text-[#1B1F5A] mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-4">
              {es ? 'Datos Abiertos' : 'Open Data'}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              {es
                ? 'Alianza Índigo publica datos abiertos sobre neurodivergencia e inclusión. Estos datos están disponibles para investigadores, periodistas, gobiernos y la sociedad civil.'
                : 'Alianza Índigo publishes open data on neurodivergence and inclusion. This data is available to researchers, journalists, governments and civil society.'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(es ? [
                { title: 'Índice de Neuroinclusión', format: 'CSV / JSON', size: '2.4 MB' },
                { title: 'Registro de Certificaciones', format: 'CSV', size: '156 KB' },
                { title: 'Indicadores Educativos ND', format: 'CSV / XLSX', size: '1.8 MB' },
                { title: 'Encuesta de Percepción ND', format: 'CSV', size: '890 KB' },
                { title: 'Mapa de Recursos ND', format: 'GeoJSON', size: '3.2 MB' },
                { title: 'Estadísticas de Certificaciones', format: 'JSON', size: '420 KB' },
              ] : [
                { title: 'Neuroinclusion Index', format: 'CSV / JSON', size: '2.4 MB' },
                { title: 'Certifications Registry', format: 'CSV', size: '156 KB' },
                { title: 'ND Educational Indicators', format: 'CSV / XLSX', size: '1.8 MB' },
                { title: 'ND Perception Survey', format: 'CSV', size: '890 KB' },
                { title: 'ND Resources Map', format: 'GeoJSON', size: '3.2 MB' },
                { title: 'Certification Statistics', format: 'JSON', size: '420 KB' },
              ]).map((dataset, i) => (
                <div key={i} className="card-institutional p-6 text-left">
                  <Database className="w-8 h-8 text-[#FFD700] mb-3" />
                  <h3 className="font-heading font-bold text-sm text-[#1B1F5A] mb-1">{dataset.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{dataset.format} · {dataset.size}</p>
                  <button className="text-[#1B1F5A] text-sm font-semibold flex items-center gap-1 hover:text-[#FFD700] transition-colors">
                    <Download className="w-4 h-4" /> {es ? 'Descargar' : 'Download'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Active Projects */}
      {activeSection === 'projects' && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-8">
              {es ? 'Proyectos Activos' : 'Active Projects'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="card-institutional p-6 hover:border-[#FFD700]">
                  <div className="flex items-center gap-2 mb-3">
                    <Microscope className="w-5 h-5 text-[#1B1F5A]" />
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      proj.status === 'En curso' || proj.status === 'Ongoing' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>{proj.status}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">{proj.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ResearchPage;
