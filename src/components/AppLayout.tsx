import React, { useState, useEffect } from 'react';
import Header from './alianza/Header';
import Footer from './alianza/Footer';
import HomePage from './alianza/HomePage';
import AboutPage from './alianza/AboutPage';
import CertificationsPage from './alianza/CertificationsPage';
import PlatformsPage from './alianza/PlatformsPage';
import ResearchPage from './alianza/ResearchPage';
import ResourcesPage from './alianza/ResourcesPage';
import CommunityPage from './alianza/CommunityPage';
import RafflesPage from './alianza/RafflesPage';
import DonationsPage from './alianza/DonationsPage';
import ContactPage from './alianza/ContactPage';

type PageId = 'inicio' | 'nosotros' | 'certificaciones' | 'plataformas' | 'investigacion' | 'recursos' | 'comunidad' | 'rifas' | 'donaciones' | 'contacto';

const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  // Update document title based on current page
  useEffect(() => {
    const titles: Record<PageId, { es: string; en: string }> = {
      inicio: { es: 'Alianza Índigo – Neurodivergencia', en: 'Alianza Índigo – Neurodivergence' },
      nosotros: { es: 'Nosotros – Alianza Índigo', en: 'About Us – Alianza Índigo' },
      certificaciones: { es: 'Certificaciones – Alianza Índigo', en: 'Certifications – Alianza Índigo' },
      plataformas: { es: 'Plataformas – Alianza Índigo', en: 'Platforms – Alianza Índigo' },
      investigacion: { es: 'Investigación – Alianza Índigo', en: 'Research – Alianza Índigo' },
      recursos: { es: 'Recursos – Alianza Índigo', en: 'Resources – Alianza Índigo' },
      comunidad: { es: 'Comunidad – Alianza Índigo', en: 'Community – Alianza Índigo' },
      rifas: { es: 'Rifas Institucionales – Alianza Índigo', en: 'Institutional Raffles – Alianza Índigo' },
      donaciones: { es: 'Donaciones – Alianza Índigo', en: 'Donations – Alianza Índigo' },
      contacto: { es: 'Contacto – Alianza Índigo', en: 'Contact – Alianza Índigo' },
    };
    document.title = titles[currentPage]?.[lang] || 'Alianza Índigo';
  }, [currentPage, lang]);

  // Update html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage onNavigate={handleNavigate} lang={lang} />;
      case 'nosotros':
        return <AboutPage lang={lang} />;
      case 'certificaciones':
        return <CertificationsPage lang={lang} />;
      case 'plataformas':
        return <PlatformsPage lang={lang} />;
      case 'investigacion':
        return <ResearchPage lang={lang} />;
      case 'recursos':
        return <ResourcesPage lang={lang} />;
      case 'comunidad':
        return <CommunityPage lang={lang} onNavigate={handleNavigate} />;
      case 'rifas':
        return <RafflesPage lang={lang} />;
      case 'donaciones':
        return <DonationsPage lang={lang} />;
      case 'contacto':
        return <ContactPage lang={lang} />;
      default:
        return <HomePage onNavigate={handleNavigate} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <main id="main-content" className="flex-1" role="main">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
};

export default AppLayout;
