import React, { useState } from 'react';
import {
  Heart, Star, Building2, ArrowRight, CheckCircle2,
  Shield, Eye, Users, Award, Copy, CreditCard
} from 'lucide-react';

interface DonationsPageProps {
  lang: 'es' | 'en';
}

const CLABE = '728969000041539157';
const CLABE_DISPLAY = '7289 6900 0041 5391 57';

const TransferCard: React.FC<{ es: boolean }> = ({ es }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CLABE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="bg-[#1B1F5A] rounded-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-4">
        <CreditCard className="w-6 h-6 text-[#FFD700]" />
        <h3 className="font-heading font-bold text-lg">
          {es ? 'Transferencia bancaria' : 'Bank transfer'}
        </h3>
      </div>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-white/60 text-xs mb-0.5">{es ? 'Banco' : 'Bank'}</p>
          <p className="font-semibold">Spin by OXXO</p>
        </div>
        <div>
          <p className="text-white/60 text-xs mb-0.5">CLABE</p>
          <div className="flex items-center gap-2">
            <p className="font-mono font-bold text-[#FFD700] text-base tracking-wide">{CLABE_DISPLAY}</p>
            <button onClick={copy} className="p-1 hover:bg-white/10 rounded transition-colors" title={es ? 'Copiar CLABE' : 'Copy CLABE'}>
              <Copy className="w-4 h-4 text-white/70" />
            </button>
            {copied && <span className="text-xs text-emerald-400">{es ? '¡Copiado!' : 'Copied!'}</span>}
          </div>
        </div>
        <div>
          <p className="text-white/60 text-xs mb-0.5">{es ? 'Beneficiario' : 'Beneficiary'}</p>
          <p className="font-semibold">Alianza Índigo Neurodivergente A.C.</p>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-white/60 text-xs mb-0.5">{es ? 'Concepto / referencia' : 'Reference'}</p>
          <p className="text-white/90">{es ? 'Tu nombre completo o escribe "Anónimo"' : 'Your full name or write "Anónimo"'}</p>
        </div>
      </div>
    </div>
  );
};

const DonationsPage: React.FC<DonationsPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [donationType, setDonationType] = useState<'single' | 'membership' | 'sponsor'>('single');

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
              ? 'Tu apoyo hace posible que Alianza Índigo Neurodivergente continúe protegiendo, representando y promoviendo la neurodivergencia. Cada contribución tiene un impacto directo y transparente.'
              : 'Your support makes it possible for Alianza Índigo Neurodivergente to continue protecting, representing and promoting neurodivergence. Every contribution has a direct and transparent impact.'}
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
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-2">
                  {es ? 'Donación Única' : 'Single Donation'}
                </h2>
                <p className="text-gray-600">
                  {es
                    ? 'Realiza una transferencia bancaria al monto que desees. Indica tu nombre o dona de forma anónima.'
                    : 'Make a bank transfer for any amount you choose. Include your name or donate anonymously.'}
                </p>
              </div>
              <TransferCard es={es} />
              <div className="bg-indigo-50 rounded-xl p-4 text-sm text-[#1B1F5A]">
                <p className="font-semibold mb-1">{es ? 'Después de tu transferencia' : 'After your transfer'}</p>
                <p className="text-[#1B1F5A]/80">
                  {es
                    ? 'Puedes notificarnos a contacto@alianzaindigo.org con tu comprobante para enviarte un acuse de recibo institucional.'
                    : 'You may notify us at contacto@alianzaindigo.org with your receipt and we will send you an institutional acknowledgement.'}
                </p>
              </div>
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
                {es ? 'Únete como miembro de Alianza Índigo Neurodivergente y apoya de forma sostenida la misión institucional.' : 'Join as a member of Alianza Índigo Neurodivergente and sustainably support the institutional mission.'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {membershipTiers.map((tier, i) => (
                <div key={i} className={`bg-white rounded-xl p-8 border-2 ${tier.color} relative ${tier.featured ? 'shadow-lg' : 'shadow-sm'}`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#1B1F5A] text-xs font-bold px-4 py-1 rounded-full">
                      {es ? 'Recomendado' : 'Recommended'}
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-xl text-[#1B1F5A] mb-2">{tier.name}</h3>
                  <p className="font-heading font-black text-2xl text-[#FFD700] mb-6">{tier.price}</p>
                  <ul className="space-y-3">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="max-w-xl">
              <TransferCard es={es} />
              <p className="text-sm text-gray-500 mt-4">
                {es
                  ? 'Transfiere el monto de la membresía que deseas e indica tu nombre y nivel en el concepto. Envía tu comprobante a contacto@alianzaindigo.org.'
                  : 'Transfer the membership amount you want and include your name and tier in the reference. Send your receipt to contacto@alianzaindigo.org.'}
              </p>
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
                ? 'Alianza Índigo Neurodivergente acepta patrocinios de organizaciones que compartan nuestros valores y principios éticos. Todo patrocinio es evaluado para garantizar la alineación con la misión institucional.'
                : 'Alianza Índigo Neurodivergente accepts sponsorships from organizations that share our values and ethical principles. Every sponsorship is evaluated to ensure alignment with the institutional mission.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {(es ? [
                { title: 'Patrocinio de Programa', desc: 'Apoya un programa específico: certificaciones, investigación, tecnología o comunidad.', icon: Award },
                { title: 'Patrocinio de Evento', desc: 'Financia foros, talleres, seminarios y eventos institucionales.', icon: Users },
                { title: 'Patrocinio de Investigación', desc: 'Contribuye al Observatorio de Neuroinclusión y proyectos de investigación.', icon: Eye },
                { title: 'Patrocinio Institucional', desc: 'Apoyo general a la operación y crecimiento de Alianza Índigo Neurodivergente.', icon: Shield },
              ] : [
                { title: 'Program Sponsorship', desc: 'Support a specific program: certifications, research, technology or community.', icon: Award },
                { title: 'Event Sponsorship', desc: 'Fund forums, workshops, seminars and institutional events.', icon: Users },
                { title: 'Research Sponsorship', desc: 'Contribute to the Neuroinclusion Observatory and research projects.', icon: Eye },
                { title: 'Institutional Sponsorship', desc: 'General support for the operation and growth of Alianza Índigo Neurodivergente.', icon: Shield },
              ]).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card-institutional p-6 group hover:border-[#FFD700]">
                    <Icon className="w-8 h-8 text-[#1B1F5A] mb-3" />
                    <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <a href="mailto:contacto@alianzaindigo.org" className="text-[#1B1F5A] text-sm font-semibold flex items-center gap-1 hover:text-[#FFD700] transition-colors">
                      {es ? 'Solicitar información' : 'Request information'} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DonationsPage;
