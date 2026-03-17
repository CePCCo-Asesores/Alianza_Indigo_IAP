import React from 'react';

interface IndigoSealProps {
  size?: number;
  className?: string;
}

const IndigoSeal: React.FC<IndigoSealProps> = ({ size = 120, className = '' }) => {
  return (
    <img
      src="/sello-alianza-indigo.png"
      alt="Sello oficial Alianza Índigo Neurodivergente"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default IndigoSeal;
