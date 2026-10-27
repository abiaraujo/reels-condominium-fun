import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { ZENTRAL_THEME } from '../theme';
import { ZentralLogo } from '../components/ZentralLogo';
import { CharacterAvatar } from '../components/CharacterAvatar';

export const Scene4_OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({ frame, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: ZENTRAL_THEME.colors.darkBlue,
        padding: '100px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: ZENTRAL_THEME.fonts.main,
      }}
    >
      <div style={{ display: 'flex', gap: 24, marginTop: 40 }}>
        <CharacterAvatar character="lucas" expression="happy" size={130} />
        <CharacterAvatar character="gladys" expression="happy" size={130} />
        <CharacterAvatar character="mateo" expression="happy" size={130} />
        <CharacterAvatar character="admin" expression="happy" size={130} />
      </div>

      <div
        style={{
          transform: `scale(${logoSpring})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <ZentralLogo size={220} color={ZENTRAL_THEME.colors.secondaryBlue} showText />

        <h1
          style={{
            color: '#FFF',
            fontSize: 48,
            fontWeight: 800,
            marginTop: 36,
            maxWidth: 800,
            lineHeight: 1.25,
          }}
        >
          Administración clara, privada y sin discusiones.
        </h1>

        <p
          style={{
            color: ZENTRAL_THEME.colors.secondaryBlue,
            fontSize: 30,
            fontWeight: 600,
            marginTop: 12,
          }}
        >
          Control de pagos, morosidad y comunicación transparente.
        </p>
      </div>

      {/* Tarjeta de Llamada a la Acción (CTA) */}
      <div
        style={{
          backgroundColor: ZENTRAL_THEME.colors.primaryBlue,
          color: '#FFF',
          padding: '26px 64px',
          borderRadius: 60,
          fontSize: 32,
          fontWeight: 800,
          boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
          marginBottom: 40,
        }}
      >
        Solicita una Demo en zentralgroup.com
      </div>
    </div>
  );
};