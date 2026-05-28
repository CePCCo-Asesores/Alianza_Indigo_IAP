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
import PrivacyPage from './alianza/PrivacyPage';
import TermsPage from './alianza/TermsPage';

type PageId = 'inicio' | 'nosotros' | 'certificaciones' | 'plataformas' | 'investigacion' | 'recursos' | 'comunidad' | 'rifas' | 'donaciones' | 'contacto' | 'privacidad' | 'terminos';

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
      inicio: { es: 'Alianza Índigo Neurodivergente – Neurodivergencia', en: 'Alianza Índigo Neurodivergente – Neurodivergence' },
      nosotros: { es: 'Nosotros – Alianza Índigo Neurodivergente', en: 'About Us – Alianza Índigo Neurodivergente' },
      certificaciones: { es: 'Certificaciones – Alianza Índigo Neurodivergente', en: 'Certifications – Alianza Índigo Neurodivergente' },
      plataformas: { es: 'Plataformas – Alianza Índigo Neurodivergente', en: 'Platforms – Alianza Índigo Neurodivergente' },
      investigacion: { es: 'Investigación – Alianza Índigo Neurodivergente', en: 'Research – Alianza Índigo Neurodivergente' },
      recursos: { es: 'Recursos – Alianza Índigo Neurodivergente', en: 'Resources – Alianza Índigo Neurodivergente' },
      comunidad: { es: 'Comunidad – Alianza Índigo Neurodivergente', en: 'Community – Alianza Índigo Neurodivergente' },
      rifas: { es: 'Rifas Institucionales – Alianza Índigo Neurodivergente', en: 'Institutional Raffles – Alianza Índigo Neurodivergente' },
      donaciones: { es: 'Donaciones – Alianza Índigo Neurodivergente', en: 'Donations – Alianza Índigo Neurodivergente' },
      contacto: { es: 'Contacto – Alianza Índigo Neurodivergente', en: 'Contact – Alianza Índigo Neurodivergente' },
      privacidad: { es: 'Política de Privacidad – Alianza Índigo Neurodivergente', en: 'Privacy Policy – Alianza Índigo Neurodivergente' },
      terminos: { es: 'Términos de Uso – Alianza Índigo Neurodivergente', en: 'Terms of Use – Alianza Índigo Neurodivergente' },
    };
    document.title = titles[currentPage]?.[lang] || 'Alianza Índigo Neurodivergente';
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
      case 'privacidad':
        return <PrivacyPage lang={lang} />;
      case 'terminos':
        return <TermsPage lang={lang} />;
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
