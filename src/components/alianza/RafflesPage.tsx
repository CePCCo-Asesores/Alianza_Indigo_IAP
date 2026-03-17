import React, { useState } from 'react';
import {
  Ticket, Calendar, Clock, ArrowRight, Shield, Eye,
  CheckCircle2, History, DollarSign, Target, Gift
} from 'lucide-react';

interface RafflesPageProps {
  lang: 'es' | 'en';
}

const RAFFLES_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666714351_fcc9be1c.jpg';

const RafflesPage: React.FC<RafflesPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [activeView, setActiveView] = useState<'active' | 'history' | 'transparency'>('active');

  const activeRaffles = es ? [
    {
      id: 1,
      title: 'Rifa Pro-Inclusión Educativa 2026',
      desc: 'Todos los fondos recaudados serán destinados al programa de certificación CENI para escuelas públicas.',
      price: '$150 MXN',
      closeDate: '30 de Junio, 2026',
      totalTickets: 5000,
      soldTickets: 2340,
      prize: 'Automóvil compacto 2026',
      destination: 'Programa CENI para escuelas públicas',
    },
    {
      id: 2,
      title: 'Rifa Tecnología Accesible 2026',
      desc: 'Financiamiento para el desarrollo de la plataforma ADIA y herramientas tecnológicas accesibles.',
      price: '$100 MXN',
      closeDate: '15 de Agosto, 2026',
      totalTickets: 3000,
      soldTickets: 890,
      prize: 'Laptop profesional + Kit tecnológico',
      destination: 'Desarrollo de plataforma ADIA',
    },
  ] : [
    {
      id: 1,
      title: 'Pro-Educational Inclusion Raffle 2026',
      desc: 'All funds raised will be allocated to the CENI certification program for public schools.',
      price: '$150 MXN',
      closeDate: 'June 30, 2026',
      totalTickets: 5000,
      soldTickets: 2340,
      prize: '2026 Compact car',
      destination: 'CENI program for public schools',
    },
    {
      id: 2,
      title: 'Accessible Technology Raffle 2026',
      desc: 'Funding for the development of the ADIA platform and accessible technological tools.',
      price: '$100 MXN',
      closeDate: 'August 15, 2026',
      totalTickets: 3000,
      soldTickets: 890,
      prize: 'Professional laptop + Tech kit',
      destination: 'ADIA platform development',
    },
  ];

  const pastRaffles = es ? [
    { title: 'Rifa Navideña 2025', winner: 'Código: AI-RF-2025-4872', raised: '$450,000 MXN', destination: 'Biblioteca ND y recursos educativos' },
    { title: 'Rifa Día de la Neurodivergencia 2025', winner: 'Código: AI-RF-2025-1293', raised: '$280,000 MXN', destination: 'Observatorio de Neuroinclusión' },
    { title: 'Rifa Pro-Investigación 2025', winner: 'Código: AI-RF-2025-3561', raised: '$320,000 MXN', destination: 'Proyectos de investigación activos' },
  ] : [
    { title: 'Christmas Raffle 2025', winner: 'Code: AI-RF-2025-4872', raised: '$450,000 MXN', destination: 'ND Library and educational resources' },
    { title: 'Neurodivergence Day Raffle 2025', winner: 'Code: AI-RF-2025-1293', raised: '$280,000 MXN', destination: 'Neuroinclusion Observatory' },
    { title: 'Pro-Research Raffle 2025', winner: 'Code: AI-RF-2025-3561', raised: '$320,000 MXN', destination: 'Active research projects' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={RAFFLES_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1F5A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Financiamiento transparente' : 'Transparent funding'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Rifas Institucionales' : 'Institutional Raffles'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Las rifas institucionales de Alianza Índigo son un mecanismo transparente de financiamiento para programas de inclusión y apoyo a la neurodivergencia. Cada peso recaudado tiene un destino claro y público.'
              : 'Alianza Índigo institutional raffles are a transparent funding mechanism for inclusion programs and neurodivergence support. Every peso raised has a clear and public destination.'}
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-12 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {(es ? [
              { icon: Target, title: 'Objetivo', desc: 'Financiar programas de inclusión, certificaciones y tecnología accesible.' },
              { icon: Eye, title: 'Transparencia', desc: 'Cada rifa publica resultados, ganadores (por código) y destino de fondos.' },
              { icon: Shield, title: 'Ética', desc: 'Proceso regulado, auditable y alineado con los principios institucionales.' },
            ] : [
              { icon: Target, title: 'Objective', desc: 'Fund inclusion programs, certifications and accessible technology.' },
              { icon: Eye, title: 'Transparency', desc: 'Each raffle publishes results, winners (by code) and fund destination.' },
              { icon: Shield, title: 'Ethics', desc: 'Regulated, auditable process aligned with institutional principles.' },
            ]).map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B1F5A] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#1B1F5A] mb-1">{item.title}</h3>
                    <p className="text-[#1B1F5A]/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] md:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 py-2">
            {[
              { id: 'active' as const, label: es ? 'Rifas Activas' : 'Active Raffles', icon: Ticket },
              { id: 'history' as const, label: es ? 'Historial' : 'History', icon: History },
              { id: 'transparency' as const, label: es ? 'Transparencia' : 'Transparency', icon: Eye },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeView === tab.id ? 'bg-[#1B1F5A] text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Raffles */}
      {activeView === 'active' && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {activeRaffles.map((raffle) => {
                const progress = Math.round((raffle.soldTickets / raffle.totalTickets) * 100);
                return (
                  <div key={raffle.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-[#1B1F5A] p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="w-5 h-5 text-[#FFD700]" />
                        <span className="text-[#FFD700] text-xs font-semibold uppercase tracking-wider">
                          {es ? 'Rifa Activa' : 'Active Raffle'}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2">{raffle.title}</h3>
                      <p className="text-white/70 text-sm">{raffle.desc}</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{es ? 'Premio' : 'Prize'}</p>
                          <p className="font-heading font-bold text-[#1B1F5A] text-sm">{raffle.prize}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{es ? 'Costo del boleto' : 'Ticket cost'}</p>
                          <p className="font-heading font-bold text-[#FFD700] text-lg">{raffle.price}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">{es ? 'Destino de fondos' : 'Fund destination'}</p>
                        <p className="text-sm text-gray-700">{raffle.destination}</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{raffle.soldTickets.toLocaleString()} / {raffle.totalTickets.toLocaleString()} {es ? 'boletos' : 'tickets'}</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className="bg-[#FFD700] h-2.5 rounded-full transition-all" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        {es ? 'Cierre:' : 'Closes:'} {raffle.closeDate}
                      </div>
                      <button className="btn-gold w-full justify-center">
                        {es ? 'Comprar Boleto' : 'Buy Ticket'} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* History */}
      {activeView === 'history' && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-6">
              {es ? 'Historial de Rifas' : 'Raffle History'}
            </h2>
            <div className="space-y-4">
              {pastRaffles.map((raffle, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading font-bold text-[#1B1F5A] mb-3">{raffle.title}</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{es ? 'Ganador' : 'Winner'}</p>
                      <p className="text-sm font-mono text-[#1B1F5A]">{raffle.winner}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{es ? 'Fondos recaudados' : 'Funds raised'}</p>
                      <p className="text-sm font-bold text-[#FFD700]">{raffle.raised}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{es ? 'Destino' : 'Destination'}</p>
                      <p className="text-sm text-gray-700">{raffle.destination}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transparency */}
      {activeView === 'transparency' && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-6">
              {es ? 'Transparencia del Programa de Rifas' : 'Raffle Program Transparency'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <DollarSign className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">
                  {es ? 'Total Recaudado 2025' : 'Total Raised 2025'}
                </h3>
                <p className="font-heading font-black text-3xl text-[#1B1F5A] mb-2">$1,050,000 MXN</p>
                <p className="text-gray-600 text-sm">{es ? 'Distribuido en 3 programas institucionales' : 'Distributed across 3 institutional programs'}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <Ticket className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">
                  {es ? 'Rifas Realizadas' : 'Raffles Held'}
                </h3>
                <p className="font-heading font-black text-3xl text-[#1B1F5A] mb-2">3</p>
                <p className="text-gray-600 text-sm">{es ? 'Todas con resultados públicos y auditables' : 'All with public and auditable results'}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-heading font-bold text-[#1B1F5A] mb-4">{es ? 'Destino de Fondos 2025' : 'Fund Destination 2025'}</h3>
              <div className="space-y-3">
                {(es ? [
                  { label: 'Programa CENI para escuelas', amount: '$450,000', pct: 43 },
                  { label: 'Observatorio de Neuroinclusión', amount: '$280,000', pct: 27 },
                  { label: 'Proyectos de investigación', amount: '$320,000', pct: 30 },
                ] : [
                  { label: 'CENI program for schools', amount: '$450,000', pct: 43 },
                  { label: 'Neuroinclusion Observatory', amount: '$280,000', pct: 27 },
                  { label: 'Research projects', amount: '$320,000', pct: 30 },
                ]).map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-semibold text-[#1B1F5A]">{item.amount} MXN ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RafflesPage;
