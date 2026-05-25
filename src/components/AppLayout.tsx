import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './alianza/Header';
import Footer from './alianza/Footer';

// Mapa de rutas ↔ pageId
const PATH_TO_PAGE: Record<string, PageId> = {
  '/': 'inicio',
  '/nosotros': 'nosotros',
  '/certificaciones': 'certificaciones',
  '/plataformas': 'plataformas',
  '/investigacion': 'investigacion',
  '/recursos': 'recursos',
  '/comunidad': 'comunidad',
  '/rifas': 'rifas',
  '/donaciones': 'donaciones',
  '/contacto': 'contacto',
};

const PAGE_TO_PATH: Record<string, string> = {
  inicio: '/',
  nosotros: '/nosotros',
  certificaciones: '/certificaciones',
  plataformas: '/plataformas',
  investigacion: '/investigacion',
  recursos: '/recursos',
  comunidad: '/comunidad',
  rifas: '/rifas',
  donaciones: '/donaciones',
  contacto: '/contacto',
};

type PageId =
  | 'inicio'
  | 'nosotros'
  | 'certificaciones'
  | 'plataformas'
  | 'investigacion'
  | 'recursos'
  | 'comunidad'
  | 'rifas'
  | 'donaciones'
  | 'contacto';

// Tipo exportado para que App.tsx lo pueda usar en useOutletContext
export type LayoutContext = {
  lang: 'es' | 'en';
  onNavigate: (page: string) => void;
};

const TITLES: Record<PageId, { es: string; en: string }> = {
  inicio:          { es: 'Alianza Índigo – Neurodivergencia',          en: 'Alianza Índigo – Neurodivergence' },
  nosotros:        { es: 'Nosotros – Alianza Índigo',                  en: 'About Us – Alianza Índigo' },
  certificaciones: { es: 'Certificaciones – Alianza Índigo',           en: 'Certifications – Alianza Índigo' },
  plataformas:     { es: 'Plataformas – Alianza Índigo',               en: 'Platforms – Alianza Índigo' },
  investigacion:   { es: 'Investigación – Alianza Índigo',             en: 'Research – Alianza Índigo' },
  recursos:        { es: 'Recursos – Alianza Índigo',                  en: 'Resources – Alianza Índigo' },
  comunidad:       { es: 'Comunidad – Alianza Índigo',                 en: 'Community – Alianza Índigo' },
  rifas:           { es: 'Rifas Institucionales – Alianza Índigo',     en: 'Institutional Raffles – Alianza Índigo' },
  donaciones:      { es: 'Donaciones – Alianza Índigo',                en: 'Donations – Alianza Índigo' },
  contacto:        { es: 'Contacto – Alianza Índigo',                  en: 'Contact – Alianza Índigo' },
};

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Deriva el pageId activo desde la URL real
  const currentPage: PageId = PATH_TO_PAGE[location.pathname] ?? 'inicio';

  const handleNavigate = (page: string) => {
    const path = PAGE_TO_PATH[page] ?? '/';
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  // Actualiza el <title> del documento según la ruta y el idioma
  useEffect(() => {
    document.title = TITLES[currentPage]?.[lang] ?? 'Alianza Índigo';
  }, [currentPage, lang]);

  // Actualiza el atributo lang del <html>
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <main id="main-content" className="flex-1" role="main">
        {/* Outlet pasa lang y onNavigate a todos los componentes hijos */}
        <Outlet context={{ lang, onNavigate: handleNavigate } satisfies LayoutContext} />
      </main>
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
};

export default AppLayout;
