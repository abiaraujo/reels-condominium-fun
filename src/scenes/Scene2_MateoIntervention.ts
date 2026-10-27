import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { ZENTRAL_THEME } from '../theme';
import { CharacterAvatar } from '../components/CharacterAvatar';
import { ZentralLogo } from '../components/ZentralLogo';

export const Scene2_MateoIntervention: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const pulseLogo = 1 + Math.sin(frame * 0.1) * 0.05;

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: ZENTRAL_THEME.colors.darkBlue,
        padding: '120px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: ZENTRAL_THEME.fonts.main,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: ZENTRAL_THEME.colors.secondaryBlue, fontSize: 42, margin: 0 }}>
          ¿Exponer a tus vecinos en WhatsApp?
        </h2>
        <p style={{ color: '#FFF', fontSize: 32, opacity: 0.9, marginTop: 12 }}>
          Eso solo genera peleas y no resuelve las cobranzas.
        </p>
      </div>

      <div
        style={{
          transform: `scale(${entrance})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CharacterAvatar character="mateo" expression="smug" size={240} />
        <div
          style={{
            backgroundColor: '#FFF',
            borderRadius: 24,
            padding: '24px 32px',
            marginTop: 20,
            maxWidth: 620,
            textAlign: 'center',
            boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 26, color: ZENTRAL_THEME.colors.primaryBlue }}>
            Mateo (Residente digital):
          </div>
          <div style={{ fontSize: 28, color: ZENTRAL_THEME.colors.textDark, marginTop: 8 }}>
            "En el edificio de mi tío ya no usan listas públicas. Tienen <b>Zentral</b>: cada quien ve su cuenta con total privacidad."
          </div>
        </div>
      </div>

      <div style={{ transform: `scale(${pulseLogo})`, marginTop: 30 }}>
        <ZentralLogo size={120} color={ZENTRAL_THEME.colors.secondaryBlue} showText />
      </div>
    </div>
  );
};