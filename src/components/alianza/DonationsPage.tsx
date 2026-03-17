import React, { useState } from 'react';
import {
  Heart, Star, Building2, ArrowRight, CheckCircle2,
  Shield, Eye, DollarSign, Users, Award
} from 'lucide-react';

interface DonationsPageProps {
  lang: 'es' | 'en';
}

const DonationsPage: React.FC<DonationsPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [donationType, setDonationType] = useState<'single' | 'membership' | 'sponsor'>('single');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [100, 250, 500, 1000, 2500, 5000];

  const membershipTiers = es ? [
    {
      name: 'Aliado',
      price: '$500 MXN/año',
      features: ['Boletín institucional mensual', 'Acceso a recursos exclusivos', 'Certificado digital de membresía', 'Participación en eventos virtuales'],
      color: 'border-gray-200',
    },
    {
      name: 'Protector',
      price: '$1,500 MXN/año',
      features: ['Todo lo de Aliado', 'Acceso anticipado a publicaciones', 'Invitación a foros institucionales', 'Reconocimiento en informe anual', 'Descuento en certificaciones'],
      color: 'border-[#FFD700]',
      featured: true,
    },
    {
      name: 'Guardián',
      price: '$5,000 MXN/año',
      features: ['Todo lo de Protector', 'Participación en comités consultivos', 'Acceso a datos abiertos premium', 'Mención institucional especial', 'Reunión anual con equipo institucional'],
      color: 'border-[#1B1F5A]',
    },
  ] : [
    {
      name: 'Ally',
      price: '$500 MXN/year',
      features: ['Monthly institutional newsletter', 'Access to exclusive resources', 'Digital membership certificate', 'Participation in virtual events'],
      color: 'border-gray-200',
    },
    {
      name: 'Protector',
      price: '$1,500 MXN/year',
      features: ['Everything in Ally', 'Early access to publications', 'Invitation to institutional forums', 'Recognition in annual report', 'Certification discount'],
      color: 'border-[#FFD700]',
      featured: true,
    },
    {
      name: 'Guardian',
      price: '$5,000 MXN/year',
      features: ['Everything in Protector', 'Participation in advisory committees', 'Access to premium open data', 'Special institutional mention', 'Annual meeting with institutional team'],
      color: 'border-[#1B1F5A]',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="indigo-gradient pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Apoya la misión' : 'Support the mission'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Donaciones y Afiliación' : 'Donations and Membership'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Tu apoyo hace posible que Alianza Índigo continúe protegiendo, representando y promoviendo la neurodivergencia. Cada contribución tiene un impacto directo y transparente.'
              : 'Your support makes it possible for Alianza Índigo to continue protecting, representing and promoting neurodivergence. Every contribution has a direct and transparent impact.'}
          </p>
        </div>
      </section>

      {/* Type Toggle */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] md:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 py-2">
            {[
              { id: 'single' as const, label: es ? 'Donación Única' : 'Single Donation', icon: Heart },
              { id: 'membership' as const, label: es ? 'Membresía Anual' : 'Annual Membership', icon: Star },
              { id: 'sponsor' as const, label: es ? 'Patrocinios' : 'Sponsorships', icon: Building2 },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setDonationType(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    donationType === tab.id ? 'bg-[#1B1F5A] text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Single Donation */}
      {donationType === 'single' && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-2">
                {es ? 'Donación Única' : 'Single Donation'}
              </h2>
              <p className="text-gray-600 mb-6">
                {es ? 'Selecciona un monto o ingresa una cantidad personalizada.' : 'Select an amount or enter a custom quantity.'}
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {amounts.map(amount => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                    className={`py-3 rounded-lg font-heading font-bold text-lg transition-all ${
                      selectedAmount === amount
                        ? 'bg-[#1B1F5A] text-white'
                        : 'bg-gray-50 text-[#1B1F5A] border border-gray-200 hover:border-[#1B1F5A]'
                    }`}
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {es ? 'Monto personalizado (MXN)' : 'Custom amount (MXN)'}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    placeholder="0"
                    min="1"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all text-lg font-heading"
                  />
                </div>
              </div>
              <button className="btn-gold w-full justify-center text-lg py-4">
                {es ? 'Donar ahora' : 'Donate now'} <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-gray-400 text-center mt-4">
                {es ? 'Serás redirigido a una plataforma de pago segura.' : 'You will be redirected to a secure payment platform.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Membership */}
      {donationType === 'membership' && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-3">
                {es ? 'Membresía Anual' : 'Annual Membership'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {es ? 'Únete como miembro de Alianza Índigo y apoya de forma sostenida la misión institucional.' : 'Join as a member of Alianza Índigo and sustainably support the institutional mission.'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {membershipTiers.map((tier, i) => (
                <div key={i} className={`bg-white rounded-xl p-8 border-2 ${tier.color} relative ${tier.featured ? 'shadow-lg' : 'shadow-sm'}`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#1B1F5A] text-xs font-bold px-4 py-1 rounded-full">
                      {es ? 'Recomendado' : 'Recommended'}
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-xl text-[#1B1F5A] mb-2">{tier.name}</h3>
                  <p className="font-heading font-black text-2xl text-[#FFD700] mb-6">{tier.price}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full justify-center ${tier.featured ? 'btn-gold' : 'btn-outline-indigo'}`}>
                    {es ? 'Seleccionar' : 'Select'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sponsorships */}
      {donationType === 'sponsor' && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-4">
              {es ? 'Patrocinios Éticos' : 'Ethical Sponsorships'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {es
                ? 'Alianza Índigo acepta patrocinios de organizaciones que compartan nuestros valores y principios éticos. Todo patrocinio es evaluado para garantizar la alineación con la misión institucional.'
                : 'Alianza Índigo accepts sponsorships from organizations that share our values and ethical principles. Every sponsorship is evaluated to ensure alignment with the institutional mission.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {(es ? [
                { title: 'Patrocinio de Programa', desc: 'Apoya un programa específico: certificaciones, investigación, tecnología o comunidad.', icon: Award },
                { title: 'Patrocinio de Evento', desc: 'Financia foros, talleres, seminarios y eventos institucionales.', icon: Users },
                { title: 'Patrocinio de Investigación', desc: 'Contribuye al Observatorio de Neuroinclusión y proyectos de investigación.', icon: Eye },
                { title: 'Patrocinio Institucional', desc: 'Apoyo general a la operación y crecimiento de Alianza Índigo.', icon: Shield },
              ] : [
                { title: 'Program Sponsorship', desc: 'Support a specific program: certifications, research, technology or community.', icon: Award },
                { title: 'Event Sponsorship', desc: 'Fund forums, workshops, seminars and institutional events.', icon: Users },
                { title: 'Research Sponsorship', desc: 'Contribute to the Neuroinclusion Observatory and research projects.', icon: Eye },
                { title: 'Institutional Sponsorship', desc: 'General support for the operation and growth of Alianza Índigo.', icon: Shield },
              ]).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card-institutional p-6 group hover:border-[#FFD700]">
                    <Icon className="w-8 h-8 text-[#1B1F5A] mb-3" />
                    <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <button className="text-[#1B1F5A] text-sm font-semibold flex items-center gap-1 hover:text-[#FFD700] transition-colors">
                      {es ? 'Solicitar información' : 'Request information'} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Transparency */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Shield className="w-12 h-12 text-[#1B1F5A] mx-auto mb-4" />
          <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-4">
            {es ? 'Transparencia Financiera' : 'Financial Transparency'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {es
              ? 'Alianza Índigo publica informes financieros periódicos. Cada peso recibido tiene un destino claro, público y auditable.'
              : 'Alianza Índigo publishes periodic financial reports. Every peso received has a clear, public and auditable destination.'}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {(es ? [
              { value: '$1.05M', label: 'Recaudado en 2025', sub: 'Rifas y donaciones' },
              { value: '92%', label: 'A programas', sub: 'Destino directo' },
              { value: '8%', label: 'Operación', sub: 'Costos administrativos' },
            ] : [
              { value: '$1.05M', label: 'Raised in 2025', sub: 'Raffles and donations' },
              { value: '92%', label: 'To programs', sub: 'Direct destination' },
              { value: '8%', label: 'Operations', sub: 'Administrative costs' },
            ]).map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <div className="font-heading font-black text-3xl text-[#1B1F5A] mb-1">{stat.value}</div>
                <div className="font-semibold text-sm text-gray-700">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationsPage;
