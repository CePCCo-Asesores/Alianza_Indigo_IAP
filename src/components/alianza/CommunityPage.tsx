import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { trackEvent } from '../../lib/analytics';
import {
  Heart, Calendar, ArrowRight, Star,
  HandHeart, MessageCircle, ChevronRight, AlertCircle
} from 'lucide-react';

interface CommunityPageProps {
  lang: 'es' | 'en';
  onNavigate: (page: string) => void;
}

const COMMUNITY_IMG = 'https://d64gsuwffb70l.cloudfront.net/69b80020a63de7c690b4919a_1773666695069_0b230c88.jpg';

const CommunityPage: React.FC<CommunityPageProps> = ({ lang, onNavigate }) => {
  const es = lang === 'es';
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', area: '', message: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerSending, setVolunteerSending] = useState(false);
  const [volunteerError, setVolunteerError] = useState(false);

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSending(true);
    setVolunteerError(false);
    try {
      await emailjs.send(
        'alianza_indigo',
        'template_h2g5dit',
        {
          from_name: volunteerForm.name,
          from_email: volunteerForm.email,
          inquiry_type: volunteerForm.area || (lang === 'es' ? 'Voluntariado' : 'Volunteering'),
          subject: lang === 'es' ? 'Solicitud de Voluntariado' : 'Volunteering Application',
          message: volunteerForm.message || (lang === 'es' ? '(Sin mensaje adicional)' : '(No additional message)'),
        },
        'aoWEMTr5Wdhy17jqA'
      );
      setVolunteerSubmitted(true);
      const area = volunteerForm.area;
      setVolunteerForm({ name: '', email: '', area: '', message: '' });
      trackEvent('generate_lead', { event_category: 'volunteer', event_label: area || 'general' });
      setTimeout(() => setVolunteerSubmitted(false), 8000);
    } catch {
      setVolunteerError(true);
    } finally {
      setVolunteerSending(false);
    }
  };


  return (
    <div>
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={COMMUNITY_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1F5A]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Red colectiva' : 'Collective network'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Comunidad' : 'Community'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'La comunidad de Alianza Índigo Neurodivergente es una red colectiva de personas, organizaciones y aliados comprometidos con la neurodivergencia.'
              : 'The Alianza Índigo Neurodivergente community is a collective network of people, organizations and allies committed to neurodivergence.'}
          </p>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#1B1F5A]" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-[#1B1F5A]">
                  {es ? 'Embajadores Índigo' : 'Índigo Ambassadors'}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {es
                  ? 'Los Embajadores Índigo son una red colectiva de representación institucional. No son figuras individuales, sino un cuerpo colectivo que lleva el mensaje de Alianza Índigo Neurodivergente a comunidades, instituciones y espacios públicos.'
                  : 'Índigo Ambassadors are a collective network of institutional representation. They are not individual figures, but a collective body that carries the Alianza Índigo Neurodivergente message to communities, institutions and public spaces.'}
              </p>
              <div className="bg-indigo-50 rounded-xl p-4 text-sm text-[#1B1F5A] mb-6">
                {es
                  ? 'El programa de Embajadores Índigo está en construcción. Próximamente abriremos la convocatoria oficial.'
                  : 'The Índigo Ambassadors program is under development. We will open the official call soon.'}
              </div>
              <button className="btn-indigo" onClick={() => onNavigate('contacto')}>
                {es ? 'Contactar para más información' : 'Contact for more information'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-[#1B1F5A] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-[#FFD700] text-lg mb-4">
                {es ? 'Perfil del Embajador' : 'Ambassador Profile'}
              </h3>
              <ul className="space-y-3">
                {(es ? [
                  'Compromiso con la misión institucional',
                  'Formación en neurodivergencia',
                  'Capacidad de representación colectiva',
                  'Ética y profesionalismo',
                  'Disponibilidad para eventos y actividades',
                  'Respeto al código de conducta institucional',
                ] : [
                  'Commitment to the institutional mission',
                  'Training in neurodivergence',
                  'Capacity for collective representation',
                  'Ethics and professionalism',
                  'Availability for events and activities',
                  'Respect for the institutional code of conduct',
                ]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <ChevronRight className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-2">
            {es ? 'Historias ND' : 'ND Stories'}
          </h2>
          <p className="text-gray-600 mb-8">
            {es ? 'Relatos colectivos y anónimos sobre la experiencia neurodivergente.' : 'Collective and anonymous accounts of the neurodivergent experience.'}
          </p>
          <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
            <MessageCircle className="w-14 h-14 text-gray-200 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">
              {es ? 'Próximamente' : 'Coming Soon'}
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              {es
                ? 'Estamos recopilando historias colectivas y anónimas de la comunidad neurodivergente. Si quieres compartir tu experiencia, escríbenos a contacto@alianzaindigo.org.'
                : 'We are collecting collective and anonymous stories from the neurodivergent community. If you want to share your experience, write to contacto@alianzaindigo.org.'}
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-8">
            {es ? 'Eventos y Convocatorias' : 'Events and Calls'}
          </h2>
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-10 text-center">
            <Calendar className="w-14 h-14 text-gray-200 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">
              {es ? 'Sin eventos programados' : 'No scheduled events'}
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              {es
                ? 'Aún no hay eventos publicados. Los foros, talleres y convocatorias institucionales se anunciarán aquí en cuanto estén confirmados. Suscríbete a nuestro boletín a través del formulario de contacto para recibir avisos.'
                : 'No events published yet. Institutional forums, workshops and calls will be announced here once confirmed. Subscribe to our newsletter via the contact form to receive updates.'}
            </p>
          </div>
        </div>
      </section>

      {/* Volunteering Form */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HandHeart className="w-12 h-12 text-[#1B1F5A] mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-3">
              {es ? 'Voluntariado' : 'Volunteering'}
            </h2>
            <p className="text-gray-600">
              {es ? 'Únete como voluntario/a y contribuye a la misión de Alianza Índigo Neurodivergente.' : 'Join as a volunteer and contribute to the Alianza Índigo Neurodivergente mission.'}
            </p>
          </div>
          {volunteerSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
              <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-emerald-700 text-xl mb-2">
                {es ? '¡Gracias por tu interés!' : 'Thank you for your interest!'}
              </h3>
              <p className="text-emerald-600">
                {es ? 'Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.' : 'We have received your application. We will contact you soon.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Nombre' : 'Name'}</label>
                  <input
                    type="text"
                    required
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Correo electrónico' : 'Email'}</label>
                  <input
                    type="email"
                    required
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Área de interés' : 'Area of interest'}</label>
                <select
                  value={volunteerForm.area}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, area: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all"
                >
                  <option value="">{es ? 'Selecciona un área' : 'Select an area'}</option>
                  <option>{es ? 'Embajadores Índigo' : 'Índigo Ambassadors'}</option>
                  <option>{es ? 'Investigación' : 'Research'}</option>
                  <option>{es ? 'Comunicación' : 'Communication'}</option>
                  <option>{es ? 'Tecnología' : 'Technology'}</option>
                  <option>{es ? 'Eventos' : 'Events'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Mensaje' : 'Message'}</label>
                <textarea
                  rows={4}
                  value={volunteerForm.message}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all resize-none"
                />
              </div>
              {volunteerError && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {es ? 'Ocurrió un error al enviar. Intenta de nuevo.' : 'An error occurred. Please try again.'}
                </div>
              )}
              <button type="submit" disabled={volunteerSending} className="btn-indigo w-full justify-center disabled:opacity-60">
                {volunteerSending
                  ? (es ? 'Enviando...' : 'Sending...')
                  : (es ? 'Enviar solicitud' : 'Submit application')}
                {!volunteerSending && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
