import React, { useEffect } from 'react';
import { X, Mail, Phone, ArrowRight } from 'lucide-react';

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  lang: 'es' | 'en';
  subject?: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ open, onClose, lang, subject }) => {
  const es = lang === 'es';

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400"
          aria-label={es ? 'Cerrar' : 'Close'}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-4">
          <Mail className="w-6 h-6 text-[#1B1F5A]" />
        </div>

        <h3 className="font-heading font-bold text-xl text-[#1B1F5A] mb-1">
          {es ? 'Solicitar información' : 'Request information'}
        </h3>
        {subject && (
          <p className="text-sm text-[#FFD700] font-semibold mb-3">{subject}</p>
        )}
        <p className="text-gray-600 text-sm mb-6">
          {es
            ? 'Para obtener más información sobre este tema, contáctanos directamente. Responderemos a la brevedad posible.'
            : 'For more information about this topic, contact us directly. We will respond as soon as possible.'}
        </p>

        <div className="space-y-3 mb-6">
          <a
            href="mailto:contacto@alianzaindigo.org"
            className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors group"
          >
            <Mail className="w-5 h-5 text-[#1B1F5A] flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">{es ? 'Correo electrónico' : 'Email'}</p>
              <p className="text-sm font-medium text-[#1B1F5A] group-hover:text-[#2B2D6D]">
                contacto@alianzaindigo.org
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#1B1F5A] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="tel:6572396866"
            className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors group"
          >
            <Phone className="w-5 h-5 text-[#1B1F5A] flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">{es ? 'Teléfono' : 'Phone'}</p>
              <p className="text-sm font-medium text-[#1B1F5A] group-hover:text-[#2B2D6D]">657-239-6866</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#1B1F5A] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
        >
          {es ? 'Cerrar' : 'Close'}
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
