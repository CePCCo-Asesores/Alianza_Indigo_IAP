import React, { useState } from 'react';
import {
  Mail, MapPin, Phone, Send, ArrowRight, CheckCircle2,
  Globe, MessageSquare, Share2, ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  lang: 'es' | 'en';
}

const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const es = lang === 'es';
  const [form, setForm] = useState({ name: '', email: '', subject: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = es ? 'Nombre requerido' : 'Name required';
    if (!form.email.includes('@')) newErrors.email = es ? 'Correo inválido' : 'Invalid email';
    if (!form.subject.trim()) newErrors.subject = es ? 'Asunto requerido' : 'Subject required';
    if (!form.message.trim()) newErrors.message = es ? 'Mensaje requerido' : 'Message required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', type: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const contactInfo = es ? [
    { icon: Mail, label: 'Correo institucional', value: 'contacto@alianzaindigo.org', href: 'mailto:contacto@alianzaindigo.org' },
    { icon: Globe, label: 'Sitio web', value: 'www.alianzaindigo.org', href: '#' },
    { icon: MapPin, label: 'Dirección general', value: 'Dirección General Institucional, México', href: '#' },
  ] : [
    { icon: Mail, label: 'Institutional email', value: 'contact@alianzaindigo.org', href: 'mailto:contact@alianzaindigo.org' },
    { icon: Globe, label: 'Website', value: 'www.alianzaindigo.org', href: '#' },
    { icon: MapPin, label: 'General address', value: 'General Institutional Office, Mexico', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', letter: 'f' },
    { label: 'X (Twitter)', href: '#', letter: 'X' },
    { label: 'LinkedIn', href: '#', letter: 'in' },
    { label: 'Instagram', href: '#', letter: 'ig' },
  ];


  return (
    <div>
      {/* Header */}
      <section className="indigo-gradient pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FFD700] font-label text-sm tracking-widest uppercase mb-3">
            {es ? 'Comunicación institucional' : 'Institutional communication'}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {es ? 'Contacto' : 'Contact'}
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {es
              ? 'Estamos disponibles para consultas institucionales, solicitudes de certificación, colaboraciones y cualquier comunicación relacionada con nuestra misión.'
              : 'We are available for institutional inquiries, certification requests, collaborations and any communication related to our mission.'}
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-10 text-center animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h2 className="font-heading font-bold text-2xl text-emerald-700 mb-2">
                    {es ? '¡Mensaje enviado!' : 'Message sent!'}
                  </h2>
                  <p className="text-emerald-600">
                    {es ? 'Hemos recibido tu mensaje. Responderemos a la brevedad posible.' : 'We have received your message. We will respond as soon as possible.'}
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="font-heading font-bold text-2xl text-[#1B1F5A] mb-6">
                    {es ? 'Formulario Institucional' : 'Institutional Form'}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Nombre completo' : 'Full name'} *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Correo electrónico' : 'Email'} *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Tipo de consulta' : 'Inquiry type'}</label>
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all"
                      >
                        <option value="">{es ? 'Selecciona una opción' : 'Select an option'}</option>
                        <option>{es ? 'Certificaciones' : 'Certifications'}</option>
                        <option>{es ? 'Donaciones y membresías' : 'Donations and memberships'}</option>
                        <option>{es ? 'Colaboración institucional' : 'Institutional collaboration'}</option>
                        <option>{es ? 'Medios de comunicación' : 'Media'}</option>
                        <option>{es ? 'Rifas institucionales' : 'Institutional raffles'}</option>
                        <option>{es ? 'Voluntariado' : 'Volunteering'}</option>
                        <option>{es ? 'Otro' : 'Other'}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Asunto' : 'Subject'} *</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-400' : 'border-gray-200'} focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all`}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{es ? 'Mensaje' : 'Message'} *</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:border-[#1B1F5A] focus:ring-2 focus:ring-[#1B1F5A]/20 outline-none transition-all resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn-indigo w-full justify-center">
                      <Send className="w-4 h-4" /> {es ? 'Enviar mensaje' : 'Send message'}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-4">
                    {es ? 'Información de Contacto' : 'Contact Information'}
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={i}
                          href={item.href}
                          onClick={(e) => { if (item.href === '#') e.preventDefault(); }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700]/10 transition-colors">
                            <Icon className="w-5 h-5 text-[#1B1F5A]" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">{item.label}</p>
                            <p className="text-sm text-[#1B1F5A] font-medium group-hover:text-[#FFD700] transition-colors">{item.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-[#1B1F5A] mb-4">
                    {es ? 'Redes Sociales' : 'Social Media'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-[#1B1F5A] transition-all text-sm"
                      >
                        <span className="w-6 h-6 rounded bg-[#1B1F5A] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{link.letter}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>

                </div>

                <div className="bg-[#1B1F5A] rounded-xl p-6">
                  <MessageSquare className="w-8 h-8 text-[#FFD700] mb-3" />
                  <h3 className="font-heading font-bold text-white mb-2">
                    {es ? '¿Necesitas respuesta urgente?' : 'Need an urgent response?'}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {es
                      ? 'Para consultas urgentes sobre certificaciones o situaciones que requieran atención inmediata.'
                      : 'For urgent inquiries about certifications or situations requiring immediate attention.'}
                  </p>
                  <a
                    href="mailto:urgente@alianzaindigo.org"
                    className="btn-gold text-sm py-2 px-4"
                  >
                    {es ? 'Correo urgente' : 'Urgent email'} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
