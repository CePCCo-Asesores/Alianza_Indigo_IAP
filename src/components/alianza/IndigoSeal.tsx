import React from 'react';

interface IndigoSealProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'compact';
}

const IndigoSeal: React.FC<IndigoSealProps> = ({ size = 120, className = '', variant = 'full' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Sello Universal de Alianza Índigo"
    >
      {/* Outer circle - laurel border */}
      <circle cx="100" cy="100" r="96" stroke="#FFD700" strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="90" stroke="#1B1F5A" strokeWidth="3" fill="none" />
      
      {/* Laurel leaves - left */}
      <path d="M30 100 Q35 80 45 70 Q35 85 38 100 Q35 115 45 130 Q35 120 30 100Z" fill="#FFD700" opacity="0.8" />
      <path d="M35 90 Q42 72 52 64 Q42 78 44 90 Q42 102 52 116 Q42 108 35 90Z" fill="#FFD700" opacity="0.7" />
      <path d="M40 80 Q48 65 58 58 Q48 72 50 82 Q48 92 58 105 Q48 98 40 80Z" fill="#FFD700" opacity="0.6" />
      
      {/* Laurel leaves - right */}
      <path d="M170 100 Q165 80 155 70 Q165 85 162 100 Q165 115 155 130 Q165 120 170 100Z" fill="#FFD700" opacity="0.8" />
      <path d="M165 90 Q158 72 148 64 Q158 78 156 90 Q158 102 148 116 Q158 108 165 90Z" fill="#FFD700" opacity="0.7" />
      <path d="M160 80 Q152 65 142 58 Q152 72 150 82 Q152 92 142 105 Q152 98 160 80Z" fill="#FFD700" opacity="0.6" />
      
      {/* Inner circle */}
      <circle cx="100" cy="100" r="65" fill="#1B1F5A" />
      <circle cx="100" cy="100" r="62" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      
      {/* Brain stylized icon */}
      <g transform="translate(70, 65)">
        {/* Left hemisphere */}
        <path
          d="M30 5 C20 5 10 12 8 22 C6 32 10 38 8 45 C6 52 12 58 20 58 C25 58 28 55 30 50"
          stroke="#FFD700"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M15 20 C12 25 14 32 18 35"
          stroke="#FFD700"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 35 C10 40 13 48 18 50"
          stroke="#FFD700"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Right hemisphere */}
        <path
          d="M30 5 C40 5 50 12 52 22 C54 32 50 38 52 45 C54 52 48 58 40 58 C35 58 32 55 30 50"
          stroke="#FFD700"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M45 20 C48 25 46 32 42 35"
          stroke="#FFD700"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M48 35 C50 40 47 48 42 50"
          stroke="#FFD700"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Central connection */}
        <line x1="30" y1="8" x2="30" y2="50" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
        
        {/* Neural dots */}
        <circle cx="18" cy="25" r="2" fill="#FFD700" />
        <circle cx="42" cy="25" r="2" fill="#FFD700" />
        <circle cx="15" cy="42" r="2" fill="#FFD700" />
        <circle cx="45" cy="42" r="2" fill="#FFD700" />
        <circle cx="30" cy="30" r="2.5" fill="#FFD700" />
        
        {/* Diverse waves at bottom */}
        <path d="M10 62 Q17 56 24 62 Q31 68 38 62 Q45 56 52 62" stroke="#FFD700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M14 67 Q20 62 26 67 Q32 72 38 67 Q44 62 50 67" stroke="#FFD700" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
      
      {/* Text around the seal */}
      {variant === 'full' && (
        <>
          <path id="topArc" d="M 40 100 A 60 60 0 0 1 160 100" fill="none" />
          <text fontSize="9" fill="#FFD700" fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="2">
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              ALIANZA ÍNDIGO
            </textPath>
          </text>
          
          <path id="bottomArc" d="M 40 100 A 60 60 0 0 0 160 100" fill="none" />
          <text fontSize="7" fill="#FFD700" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="1.5">
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              NEURODIVERGENCIA
            </textPath>
          </text>
        </>
      )}
      
      {/* Outer decorative dots */}
      <circle cx="100" cy="6" r="2" fill="#FFD700" />
      <circle cx="100" cy="194" r="2" fill="#FFD700" />
      <circle cx="6" cy="100" r="2" fill="#FFD700" />
      <circle cx="194" cy="100" r="2" fill="#FFD700" />
    </svg>
  );
};

export default IndigoSeal;
