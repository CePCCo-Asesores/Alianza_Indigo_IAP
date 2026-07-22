import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useOutletContext } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/contexts/AppContext";
import AppLayout, { LayoutContext } from "@/components/AppLayout";

import HomePage from "@/components/alianza/HomePage";
import AboutPage from "@/components/alianza/AboutPage";
import CertificationsPage from "@/components/alianza/CertificationsPage";
import PlatformsPage from "@/components/alianza/PlatformsPage";
import ResearchPage from "@/components/alianza/ResearchPage";
import ResourcesPage from "@/components/alianza/ResourcesPage";
import CommunityPage from "@/components/alianza/CommunityPage";
import RafflesPage from "@/components/alianza/RafflesPage";
import DonationsPage from "@/components/alianza/DonationsPage";
import ContactPage from "@/components/alianza/ContactPage";
import NotFound from "@/pages/NotFound";

// Wrappers que consumen el contexto del layout (lang + onNavigate)
const HomeWrap = () => {
  const { lang, onNavigate } = useOutletContext<LayoutContext>();
  return <HomePage lang={lang} onNavigate={onNavigate} />;
};
const AboutWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <AboutPage lang={lang} />;
};
const CertWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <CertificationsPage lang={lang} />;
};
const PlatWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <PlatformsPage lang={lang} />;
};
const ResearchWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <ResearchPage lang={lang} />;
};
const ResourcesWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <ResourcesPage lang={lang} />;
};
const CommunityWrap = () => {
  const { lang, onNavigate } = useOutletContext<LayoutContext>();
  return <CommunityPage lang={lang} onNavigate={onNavigate} />;
};
const RafflesWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <RafflesPage lang={lang} />;
};
const DonationsWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <DonationsPage lang={lang} />;
};
const ContactWrap = () => {
  const { lang } = useOutletContext<LayoutContext>();
  return <ContactPage lang={lang} />;
};

const App = () => (
  <ThemeProvider defaultTheme="light">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomeWrap />} />
              <Route path="nosotros" element={<AboutWrap />} />
              <Route path="certificaciones" element={<CertWrap />} />
              <Route path="plataformas" element={<PlatWrap />} />
              <Route path="investigacion" element={<ResearchWrap />} />
              <Route path="recursos" element={<ResourcesWrap />} />
              <Route path="comunidad" element={<CommunityWrap />} />
              <Route path="rifas" element={<RafflesWrap />} />
              <Route path="donaciones" element={<DonationsWrap />} />
              <Route path="contacto" element={<ContactWrap />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
