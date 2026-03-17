import React, { useState, useEffect } from 'react';
import IndigoSeal from './IndigoSeal';
import {
  Menu, X, ChevronDown, Globe,
  Building2, Award, Cpu, BookOpen, FlaskConical,
  Users, Ticket, Heart, Mail
} from 'lucide-react';


interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  lang: 'es' | 'en';
  onToggleLang: () => void;
}

const navItems = [
  {
    id: 'nosotros',
    label: { es: 'Nosotros', en: 'About Us' },
    icon: Building2,
    children: [
      { id: 'nosotros', label: { es: 'Qué es Alianza Índigo', en: 'What is Alianza Índigo' } },
      { id: 'nosotros', label: { es: 'Misión y Visión', en: 'Mission & Vision' }, hash: 'mision' },
      { id: 'nosotros', label: { es: 'Valores Institucionales', en: 'Institutional Values' }, hash: 'valores' },
      { id: 'nosotros', label: { es: 'Transparencia', en: 'Transparency' }, hash: 'transparencia' },
    ]
  },
  {
    id: 'certificaciones',
    label: { es: 'Certificaciones', en: 'Certifications' },
    icon: Award,
    children: [
      { id: 'certificaciones', label: { es: 'CENI – Entornos Neuroinclusivos', en: 'CENI – Neuroinclusive Environments' } },
      { id: 'certificaciones', label: { es: 'Fuerza Índigo', en: 'Fuerza Índigo' }, hash: 'fuerza' },
      { id: 'certificaciones', label: { es: 'Sello Universal ND', en: 'Universal ND Seal' }, hash: 'sello' },
      { id: 'certificaciones', label: { es: 'NeuroPlan', en: 'NeuroPlan' }, hash: 'neuroplan' },
    ]
  },
  {
    id: 'plataformas',
    label: { es: 'Plataformas', en: 'Platforms' },
    icon: Cpu,
    children: [
      { id: 'plataformas', label: { es: 'ADIA – Asistente IA', en: 'ADIA – AI Assistant' } },
      { id: 'plataformas', label: { es: 'Verificador de Distintivos', en: 'Badge Verifier' }, hash: 'verificador' },
      { id: 'plataformas', label: { es: 'API Pública', en: 'Public API' }, hash: 'api' },
    ]
  },
  {
    id: 'investigacion',
    label: { es: 'Investigación', en: 'Research' },
    icon: FlaskConical,
  },
  {
    id: 'recursos',
    label: { es: 'Recursos', en: 'Resources' },
    icon: BookOpen,
  },
  {
    id: 'comunidad',
    label: { es: 'Comunidad', en: 'Community' },
    icon: Users,
  },
  {
    id: 'rifas',
    label: { es: 'Rifas', en: 'Raffles' },
    icon: Ticket,
  },
  {
    id: 'donaciones',
    label: { es: 'Donaciones', en: 'Donations' },
    icon: Heart,
  },
  {
    id: 'contacto',
    label: { es: 'Contacto', en: 'Contact' },
    icon: Mail,
  },
];

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        {/* Top bar */}
        <div className="bg-[#1B1F5A] text-white py-1.5 px-4 text-xs hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="font-label tracking-wide opacity-80">
              {lang === 'es'
                ? 'Institución dedicada a la protección y promoción de la neurodivergencia'
                : 'Institution dedicated to the protection and promotion of neurodivergence'}
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1 hover:text-[#FFD700] transition-colors"
                aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <button
                onClick={() => handleNav('contacto')}
                className="hover:text-[#FFD700] transition-colors"
              >
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </button>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => handleNav('inicio')}
              className="flex items-center gap-3 group"
              aria-label="Alianza Índigo - Inicio"
            >
              <IndigoSeal size={42} variant="compact" />
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-[#1B1F5A] text-lg leading-tight tracking-tight">
                  Alianza Índigo
                </div>
                <div className="text-[10px] text-gray-500 font-label tracking-widest uppercase">
                  Neurodivergente I.A.P.
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1" role="navigation" aria-label="Navegación principal">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-[#1B1F5A] bg-indigo-50'
                        : 'text-gray-600 hover:text-[#1B1F5A] hover:bg-gray-50'
                    }`}
                    aria-current={currentPage === item.id ? 'page' : undefined}
                  >
                    {item.label[lang]}
                    {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                  </button>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 pt-1 z-50 animate-fade-in">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[260px]">
                        {item.children.map((child, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNav(child.id)}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-[#1B1F5A] hover:bg-indigo-50 transition-colors"
                          >
                            {child.label[lang]}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleLang}
                className="md:hidden flex items-center gap-1 px-2 py-1.5 text-xs text-gray-600 hover:text-[#1B1F5A] rounded transition-colors"
                aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <button
                onClick={() => handleNav('donaciones')}
                className="hidden lg:inline-flex btn-gold text-sm py-2 px-4"
              >
                {lang === 'es' ? 'Únete' : 'Join Us'}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 text-[#1B1F5A] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 top-[64px] md:top-[88px] bg-white z-40 overflow-y-auto animate-fade-in">
            <nav className="max-w-lg mx-auto px-4 py-6 space-y-1" role="navigation" aria-label="Navegación móvil">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all ${
                      currentPage === item.id
                        ? 'bg-[#1B1F5A] text-white'
                        : 'text-gray-700 hover:bg-indigo-50 hover:text-[#1B1F5A]'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.label[lang]}</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleNav('donaciones')}
                  className="w-full btn-gold justify-center"
                >
                  {lang === 'es' ? 'Únete a la Alianza' : 'Join the Alliance'}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
