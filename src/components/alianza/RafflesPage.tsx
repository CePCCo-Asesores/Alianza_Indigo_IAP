import React, { useState } from 'react';
import {
  Ticket, Shield, Eye, History, Target, Gift, Copy, CreditCard, Clock
} from 'lucide-react';

interface RafflesPageProps {
  lang: 'es' | 'en';
}

const RAFFLES_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666714351_fcc9be1c.jpg';

const CLABE = '728969000041539157';
const CLABE_DISPLAY = '7289 6900 0041 5391 57';

const RaffleTransferCard: React.FC<{ es: boolean }> = ({ es }) => {
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
          {es ? 'Datos para transferencia' : 'Transfer details'}
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

const RafflesPage: React.FC<RafflesPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [activeView, setActiveView] = useState<'active' | 'transparency'>('active');

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
              ? 'Las rifas institucionales de Alianza Índigo Neurodivergente son un mecanismo transparente de financiamiento para programas de inclusión y apoyo a la neurodivergencia. Cada peso recaudado tiene un destino claro y público.'
              : 'Alianza Índigo Neurodivergente institutional raffles are a transparent funding mechanism for inclusion programs and neurodivergence support. Every peso raised has a clear and public destination.'}
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
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#1B1F5A] p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h2 className="font-heading font-bold text-2xl text-white mb-2">
                  {es ? 'Próximamente' : 'Coming Soon'}
                </h2>
                <p className="text-white/70">
                  {es
                    ? 'Aún no hay rifas activas. Estamos preparando la primera edición.'
                    : 'No active raffles yet. We are preparing the first edition.'}
                </p>
              </div>
              <div className="p-8 space-y-4">
                <p className="text-gray-600 text-sm">
                  {es
                    ? 'Cuando lancemos nuestra primera rifa institucional, los boletos podrán adquirirse mediante transferencia bancaria. Para recibir notificaciones, escríbenos a contacto@alianzaindigo.org.'
                    : 'When we launch our first institutional raffle, tickets will be available by bank transfer. To receive notifications, write to contacto@alianzaindigo.org.'}
                </p>
                <RaffleTransferCard es={es} />
                <p className="text-xs text-gray-400">
                  {es
                    ? 'Los datos de transferencia se activarán cuando haya una rifa en curso. Antes de transferir, verifica que haya una convocatoria oficial publicada.'
                    : 'Transfer details will be active when a raffle is in progress. Before transferring, verify that an official announcement is published.'}
                </p>
              </div>
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
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {(es ? [
                { icon: Target, title: 'Objetivo', desc: 'Cada rifa tiene un destino de fondos definido y publicado antes del inicio de la convocatoria.' },
                { icon: Eye, title: 'Resultados públicos', desc: 'Los ganadores se anuncian por código. El destino de cada peso recaudado se publica en el informe de cierre.' },
                { icon: Shield, title: 'Proceso regulado', desc: 'Las rifas se rigen por sus propias bases disponibles en cada convocatoria, alineadas con los Términos de Uso institucionales.' },
              ] : [
                { icon: Target, title: 'Objective', desc: 'Each raffle has a defined fund destination published before the announcement opens.' },
                { icon: Eye, title: 'Public results', desc: 'Winners are announced by code. The destination of every peso raised is published in the closing report.' },
                { icon: Shield, title: 'Regulated process', desc: 'Raffles are governed by their own rules available at each announcement, aligned with institutional Terms of Use.' },
              ]).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                    <Icon className="w-8 h-8 text-[#FFD700] mb-3" />
                    <h3 className="font-heading font-bold text-[#1B1F5A] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-[#1B1F5A] text-sm leading-relaxed">
                {es
                  ? 'Alianza Índigo Neurodivergente A.C. no ha realizado rifas hasta la fecha. Los informes de transparencia se publicarán a partir de la primera edición.'
                  : 'Alianza Índigo Neurodivergente A.C. has not held any raffles to date. Transparency reports will be published starting from the first edition.'}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RafflesPage;
