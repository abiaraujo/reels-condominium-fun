import React from 'react';
import { ZENTRAL_THEME } from '../theme';

interface LogoProps {
  size?: number;
  color?: string;
  showText?: boolean;
}

export const ZentralLogo: React.FC<LogoProps> = ({
  size = 180,
  color = ZENTRAL_THEME.colors.white,
  showText = false,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Conexiones perimetrales del hexágono */}
        <line x1="100" y1="30" x2="165" y2="68" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="165" y1="68" x2="165" y2="142" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="165" y1="142" x2="100" y2="180" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="100" y1="180" x2="35" y2="142" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="35" y1="142" x2="35" y2="68" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="35" y1="68" x2="100" y2="30" stroke={color} strokeWidth="9" strokeLinecap="round" />

        {/* Radios hacia el nodo central */}
        <line x1="35" y1="68" x2="100" y2="105" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="165" y1="68" x2="100" y2="105" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="35" y1="142" x2="100" y2="105" stroke={color} strokeWidth="9" strokeLinecap="round" />
        <line x1="165" y1="142" x2="100" y2="105" stroke={color} strokeWidth="9" strokeLinecap="round" />

        {/* Nodos exteriores */}
        <circle cx="100" cy="30" r="14" fill={color} />
        <circle cx="165" cy="68" r="14" fill={color} />
        <circle cx="165" cy="142" r="14" fill={color} />
        <circle cx="100" cy="180" r="14" fill={color} />
        <circle cx="35" cy="142" r="14" fill={color} />
        <circle cx="35" cy="68" r="14" fill={color} />

        {/* Anillo central hueco */}
        <circle cx="100" cy="105" r="24" stroke={color} strokeWidth="10" fill="none" />
      </svg>

      {showText && (
        <span
          style={{
            fontFamily: ZENTRAL_THEME.fonts.main,
            fontSize: size * 0.32,
            fontWeight: 800,
            letterSpacing: '0.12em',
            color,
            textTransform: 'uppercase',
          }}
        >
          ZENTRAL
        </span>
      )}
    </div>
  );
};