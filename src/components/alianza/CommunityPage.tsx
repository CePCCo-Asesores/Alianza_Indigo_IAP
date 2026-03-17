import React, { useState } from 'react';
import {
  Users, Heart, Calendar, MapPin, ArrowRight, Star,
  HandHeart, MessageCircle, Clock, ChevronRight
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

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setVolunteerForm({ name: '', email: '', area: '', message: '' });
    setTimeout(() => setVolunteerSubmitted(false), 5000);
  };

  const stories = es ? [
    { title: 'Encontrar mi lugar en el mundo laboral', excerpt: 'Una historia colectiva sobre la experiencia de personas neurodivergentes en entornos laborales que implementaron adaptaciones razonables.', tag: 'Laboral' },
    { title: 'La escuela que entendió la diferencia', excerpt: 'Relato institucional sobre una escuela que obtuvo la certificación CENI y transformó su cultura educativa.', tag: 'Educación' },
    { title: 'Cuando la tecnología se convierte en aliada', excerpt: 'Experiencias colectivas sobre el uso de herramientas tecnológicas accesibles para personas neurodivergentes.', tag: 'Tecnología' },
    { title: 'Comunidad que sostiene', excerpt: 'Testimonios anónimos sobre el impacto de pertenecer a una red de apoyo neurodivergente.', tag: 'Comunidad' },
  ] : [
    { title: 'Finding my place in the work world', excerpt: 'A collective story about the experience of neurodivergent people in work environments that implemented reasonable adaptations.', tag: 'Work' },
    { title: 'The school that understood difference', excerpt: 'Institutional account of a school that obtained CENI certification and transformed its educational culture.', tag: 'Education' },
    { title: 'When technology becomes an ally', excerpt: 'Collective experiences about the use of accessible technological tools for neurodivergent people.', tag: 'Technology' },
    { title: 'Community that sustains', excerpt: 'Anonymous testimonials about the impact of belonging to a neurodivergent support network.', tag: 'Community' },
  ];

  const events = es ? [
    { title: 'Foro Nacional de Neuroinclusión 2026', date: '15-17 Mayo 2026', location: 'Virtual', type: 'Foro' },
    { title: 'Taller: Adaptaciones Razonables en el Aula', date: '22 Abril 2026', location: 'Virtual', type: 'Taller' },
    { title: 'Convocatoria: Embajadores Índigo 2026', date: 'Hasta 30 Junio 2026', location: 'Nacional', type: 'Convocatoria' },
    { title: 'Seminario: Neurodivergencia y Políticas Públicas', date: '8 Julio 2026', location: 'Virtual', type: 'Seminario' },
  ] : [
    { title: 'National Neuroinclusion Forum 2026', date: 'May 15-17, 2026', location: 'Virtual', type: 'Forum' },
    { title: 'Workshop: Reasonable Adaptations in the Classroom', date: 'April 22, 2026', location: 'Virtual', type: 'Workshop' },
    { title: 'Call: Índigo Ambassadors 2026', date: 'Until June 30, 2026', location: 'National', type: 'Call' },
    { title: 'Seminar: Neurodivergence and Public Policies', date: 'July 8, 2026', location: 'Virtual', type: 'Seminar' },
  ];

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
              ? 'La comunidad de Alianza Índigo es una red colectiva de personas, organizaciones y aliados comprometidos con la neurodivergencia.'
              : 'The Alianza Índigo community is a collective network of people, organizations and allies committed to neurodivergence.'}
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
                  ? 'Los Embajadores Índigo son una red colectiva de representación institucional. No son figuras individuales, sino un cuerpo colectivo que lleva el mensaje de Alianza Índigo a comunidades, instituciones y espacios públicos.'
                  : 'Índigo Ambassadors are a collective network of institutional representation. They are not individual figures, but a collective body that carries the Alianza Índigo message to communities, institutions and public spaces.'}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {(es ? [
                  { value: '50+', label: 'Embajadores activos' },
                  { value: '12', label: 'Estados representados' },
                  { value: '30+', label: 'Eventos realizados' },
                  { value: '100%', label: 'Voluntario' },
                ] : [
                  { value: '50+', label: 'Active ambassadors' },
                  { value: '12', label: 'States represented' },
                  { value: '30+', label: 'Events held' },
                  { value: '100%', label: 'Voluntary' },
                ]).map((stat, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-4">
                    <div className="font-heading font-bold text-xl text-[#1B1F5A]">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn-indigo">
                {es ? 'Conocer el programa' : 'Learn about the program'} <ArrowRight className="w-4 h-4" />
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
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map((story, i) => (
              <div key={i} className="card-institutional p-6 group hover:border-[#FFD700]">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FFD700]/20 text-[#1B1F5A] mb-3 inline-block">{story.tag}</span>
                <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{story.excerpt}</p>
                <button className="text-[#1B1F5A] text-sm font-semibold flex items-center gap-1 hover:text-[#FFD700] transition-colors">
                  {es ? 'Leer más' : 'Read more'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-[#1B1F5A] mb-8">
            {es ? 'Eventos y Convocatorias' : 'Events and Calls'}
          </h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="card-institutional p-6 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#FFD700]">
                <div className="w-14 h-14 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#1B1F5A]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FFD700]/20 text-[#1B1F5A]">{event.type}</span>
                  <h3 className="font-heading font-bold text-[#1B1F5A] mt-1">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                  </div>
                </div>
                <button className="btn-outline-indigo text-sm py-2 px-4 flex-shrink-0">
                  {es ? 'Más información' : 'More info'}
                </button>
              </div>
            ))}
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
              {es ? 'Únete como voluntario/a y contribuye a la misión de Alianza Índigo.' : 'Join as a volunteer and contribute to the Alianza Índigo mission.'}
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
              <button type="submit" className="btn-indigo w-full justify-center">
                {es ? 'Enviar solicitud' : 'Submit application'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
