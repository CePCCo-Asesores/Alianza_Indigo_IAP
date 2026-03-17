import React, { useState } from 'react';
import {
  BookOpen, FileText, Video, PenTool, GraduationCap, Building2,
  Landmark, Download, Search, Filter, ArrowRight, ExternalLink
} from 'lucide-react';

interface ResourcesPageProps {
  lang: 'es' | 'en';
}

const RESOURCES_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666667367_9c528e2b.jpg';

const ResourcesPage: React.FC<ResourcesPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: es ? 'Todos' : 'All' },
    { id: 'guide', label: es ? 'Guías' : 'Guides' },
    { id: 'pdf', label: 'PDFs' },
    { id: 'video', label: es ? 'Videos' : 'Videos' },
    { id: 'blog', label: 'Blog' },
    { id: 'material', label: es ? 'Materiales' : 'Materials' },
  ];

  const resources = es ? [
    { title: 'Guía de Neuroinclusión para Empresas', type: 'guide', audience: 'Empresas', format: 'PDF', icon: Building2 },
    { title: 'Manual de Adaptaciones Razonables en el Aula', type: 'guide', audience: 'Escuelas', format: 'PDF', icon: GraduationCap },
    { title: 'Protocolo de Atención ND para Gobiernos', type: 'pdf', audience: 'Gobiernos', format: 'PDF', icon: Landmark },
    { title: '¿Qué es la Neurodivergencia? – Video Introductorio', type: 'video', audience: 'General', format: 'Video', icon: Video },
    { title: 'Neurodivergencia en el Trabajo: Mitos y Realidades', type: 'blog', audience: 'General', format: 'Artículo', icon: PenTool },
    { title: 'Kit de Sensibilización ND para Escuelas', type: 'material', audience: 'Escuelas', format: 'Kit', icon: GraduationCap },
    { title: 'Glosario Institucional de Neurodivergencia', type: 'pdf', audience: 'General', format: 'PDF', icon: BookOpen },
    { title: 'Cómo Crear Entornos Sensorialmente Amigables', type: 'guide', audience: 'Empresas', format: 'PDF', icon: Building2 },
    { title: 'Derechos de las Personas Neurodivergentes', type: 'pdf', audience: 'General', format: 'PDF', icon: FileText },
    { title: 'Webinar: Certificación CENI Paso a Paso', type: 'video', audience: 'Empresas', format: 'Video', icon: Video },
    { title: 'Inclusión ND en la Educación Superior', type: 'blog', audience: 'Escuelas', format: 'Artículo', icon: PenTool },
    { title: 'Plantilla de Política de Neuroinclusión', type: 'material', audience: 'Empresas', format: 'DOCX', icon: FileText },
  ] : [
    { title: 'Neuroinclusion Guide for Companies', type: 'guide', audience: 'Companies', format: 'PDF', icon: Building2 },
    { title: 'Classroom Reasonable Adaptations Manual', type: 'guide', audience: 'Schools', format: 'PDF', icon: GraduationCap },
    { title: 'ND Service Protocol for Governments', type: 'pdf', audience: 'Governments', format: 'PDF', icon: Landmark },
    { title: 'What is Neurodivergence? – Introductory Video', type: 'video', audience: 'General', format: 'Video', icon: Video },
    { title: 'Neurodivergence at Work: Myths and Realities', type: 'blog', audience: 'General', format: 'Article', icon: PenTool },
    { title: 'ND Awareness Kit for Schools', type: 'material', audience: 'Schools', format: 'Kit', icon: GraduationCap },
    { title: 'Institutional Neurodivergence Glossary', type: 'pdf', audience: 'General', format: 'PDF', icon: BookOpen },
    { title: 'How to Create Sensory-Friendly Environments', type: 'guide', audience: 'Companies', format: 'PDF', icon: Building2 },
    { title: 'Rights of Neurodivergent People', type: 'pdf', audience: 'General', format: 'PDF', icon: FileText },
    { title: 'Webinar: CENI Certification Step by Step', type: 'video', audience: 'Companies', format: 'Video', icon: Video },
    { title: 'ND Inclusion in Higher Education', type: 'blog', audience: 'Schools', format: 'Article', icon: PenTool },
    { title: 'Neuroinclusion Policy Template', type: 'material', audience: 'Companies', format: 'DOCX', icon: FileText },
  ];

  const filtered = resources.filter(r => {
    const matchesFilter = activeFilter === 'all' || r.type === activeFilter;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={RESOURCES_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1F5A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Conocimiento accesible' : 'Accessible knowledge'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Recursos' : 'Resources'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Biblioteca de recursos educativos, guías, materiales y contenido sobre neurodivergencia para escuelas, empresas, gobiernos y la sociedad en general.'
              : 'Library of educational resources, guides, materials and content about neurodivergence for schools, companies, governments and society in general.'}
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] md:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex overflow-x-auto gap-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeFilter === cat.id ? 'bg-[#1B1F5A] text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={es ? 'Buscar recurso...' : 'Search resource...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500 mb-6">
            {filtered.length} {es ? 'recursos encontrados' : 'resources found'}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <div key={i} className="card-institutional p-6 group hover:border-[#FFD700] flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1B1F5A]" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">{resource.format}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[#1B1F5A] mb-2 group-hover:text-[#2B2D6D] flex-1">{resource.title}</h3>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                    <span className="text-xs text-gray-400">{resource.audience}</span>
                    <button className="text-[#1B1F5A] text-xs font-semibold flex items-center gap-1 hover:text-[#FFD700] transition-colors">
                      {resource.format === 'Video' || resource.format === 'Artículo' || resource.format === 'Article' ? (
                        <><ExternalLink className="w-3.5 h-3.5" /> {es ? 'Ver' : 'View'}</>
                      ) : (
                        <><Download className="w-3.5 h-3.5" /> {es ? 'Descargar' : 'Download'}</>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400">{es ? 'No se encontraron recursos.' : 'No resources found.'}</p>
            </div>
          )}
        </div>
      </section>

      {/* Material for sectors */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-8 text-center">
            {es ? 'Material por Sector' : 'Material by Sector'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(es ? [
              { icon: GraduationCap, title: 'Para Escuelas', desc: 'Guías, kits de sensibilización, protocolos de atención y material didáctico para entornos educativos neuroinclusivos.', color: 'bg-blue-50' },
              { icon: Building2, title: 'Para Empresas', desc: 'Manuales de adaptación, plantillas de políticas, guías de reclutamiento inclusivo y material de capacitación.', color: 'bg-emerald-50' },
              { icon: Landmark, title: 'Para Gobiernos', desc: 'Protocolos de atención, indicadores de neuroinclusión, guías de política pública y herramientas de evaluación.', color: 'bg-purple-50' },
            ] : [
              { icon: GraduationCap, title: 'For Schools', desc: 'Guides, awareness kits, service protocols and teaching materials for neuroinclusive educational environments.', color: 'bg-blue-50' },
              { icon: Building2, title: 'For Companies', desc: 'Adaptation manuals, policy templates, inclusive recruitment guides and training materials.', color: 'bg-emerald-50' },
              { icon: Landmark, title: 'For Governments', desc: 'Service protocols, neuroinclusion indicators, public policy guides and evaluation tools.', color: 'bg-purple-50' },
            ]).map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div key={i} className={`${sector.color} rounded-xl p-8 text-center`}>
                  <Icon className="w-12 h-12 text-[#1B1F5A] mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-3">{sector.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{sector.desc}</p>
                  <button className="btn-outline-indigo text-sm py-2 px-4">
                    {es ? 'Ver recursos' : 'View resources'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
