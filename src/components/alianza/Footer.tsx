import React, { useState } from 'react';
import IndigoSeal from './IndigoSeal';
import { Mail, MapPin, ExternalLink, ArrowRight, Globe, MessageCircle, Users, Share2 } from 'lucide-react';


interface FooterProps {
  onNavigate: (page: string) => void;
  lang: 'es' | 'en';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const t = {
    es: {
      institutional: 'Institucional',
      about: 'Nosotros',
      mission: 'Misión y Visión',
      values: 'Valores',
      transparency: 'Transparencia',
      statutes: 'Estatutos',
      programs: 'Programas',
      certifications: 'Certificaciones',
      platforms: 'Plataformas',
      research: 'Investigación',
      resources: 'Recursos',
      community: 'Comunidad',
      participate: 'Participa',
      raffles: 'Rifas Institucionales',
      donations: 'Donaciones',
      volunteer: 'Voluntariado',
      contact: 'Contacto',
      newsletter: 'Boletín Institucional',
      newsletterDesc: 'Recibe actualizaciones sobre neurodivergencia, certificaciones y programas.',
      emailPlaceholder: 'correo@ejemplo.com',
      subscribe: 'Suscribirse',
      subscribed: 'Suscrito correctamente',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      accessibility: 'Accesibilidad',
      tagline: 'Institución dedicada a la protección, representación, certificación y promoción de la neurodivergencia.',
      address: 'Dirección General Institucional',
      emailContact: 'contacto@alianzaindigo.org',
    },
    en: {
      institutional: 'Institutional',
      about: 'About Us',
      mission: 'Mission & Vision',
      values: 'Values',
      transparency: 'Transparency',
      statutes: 'Statutes',
      programs: 'Programs',
      certifications: 'Certifications',
      platforms: 'Platforms',
      research: 'Research',
      resources: 'Resources',
      community: 'Community',
      participate: 'Participate',
      raffles: 'Institutional Raffles',
      donations: 'Donations',
      volunteer: 'Volunteering',
      contact: 'Contact',
      newsletter: 'Institutional Newsletter',
      newsletterDesc: 'Receive updates on neurodivergence, certifications and programs.',
      emailPlaceholder: 'email@example.com',
      subscribe: 'Subscribe',
      subscribed: 'Successfully subscribed',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      accessibility: 'Accessibility',
      tagline: 'Institution dedicated to the protection, representation, certification and promotion of neurodivergence.',
      address: 'General Institutional Office',
      emailContact: 'contact@alianzaindigo.org',
    }
  };

  const text = t[lang];

  return (
    <footer className="bg-[#1B1F5A] text-white" role="contentinfo">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-xl text-[#FFD700] mb-2">{text.newsletter}</h3>
              <p className="text-white/70 text-sm">{text.newsletterDesc}</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={text.emailPlaceholder}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD700] transition-colors"
                aria-label={lang === 'es' ? 'Correo electrónico' : 'Email address'}
              />
              <button type="submit" className="btn-gold py-3 px-6 flex-shrink-0">
                {subscribed ? text.subscribed : text.subscribe}
                {!subscribed && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <IndigoSeal size={48} variant="compact" />
              <div>
                <div className="font-heading font-bold text-lg">Alianza Índigo</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">{text.tagline}</p>
            <div className="flex gap-3">
              {[
                { label: 'Facebook', letter: 'f' },
                { label: 'X (Twitter)', letter: 'X' },
                { label: 'LinkedIn', letter: 'in' },
                { label: 'Instagram', letter: 'ig' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1B1F5A] transition-all duration-300 text-xs font-bold"
                  aria-label={social.label}
                >
                  {social.letter}
                </a>
              ))}
            </div>

          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-[#FFD700] mb-4 uppercase tracking-wider">{text.institutional}</h4>
            <ul className="space-y-2.5">
              {[
                { label: text.about, page: 'nosotros' },
                { label: text.mission, page: 'nosotros' },
                { label: text.values, page: 'nosotros' },
                { label: text.transparency, page: 'nosotros' },
                { label: text.statutes, page: 'nosotros' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/60 hover:text-[#FFD700] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-[#FFD700] mb-4 uppercase tracking-wider">{text.programs}</h4>
            <ul className="space-y-2.5">
              {[
                { label: text.certifications, page: 'certificaciones' },
                { label: text.platforms, page: 'plataformas' },
                { label: text.research, page: 'investigacion' },
                { label: text.resources, page: 'recursos' },
                { label: text.community, page: 'comunidad' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/60 hover:text-[#FFD700] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-[#FFD700] mb-4 uppercase tracking-wider">{text.participate}</h4>
            <ul className="space-y-2.5">
              {[
                { label: text.raffles, page: 'rifas' },
                { label: text.donations, page: 'donaciones' },
                { label: text.volunteer, page: 'comunidad' },
                { label: text.contact, page: 'contacto' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/60 hover:text-[#FFD700] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{text.emailContact}</span>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{text.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Alianza Índigo. {text.rights}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <button onClick={() => onNavigate('nosotros')} className="hover:text-[#FFD700] transition-colors">{text.privacy}</button>
            <button onClick={() => onNavigate('nosotros')} className="hover:text-[#FFD700] transition-colors">{text.terms}</button>
            <button onClick={() => onNavigate('nosotros')} className="hover:text-[#FFD700] transition-colors">{text.accessibility}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
