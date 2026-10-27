import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { ZENTRAL_THEME } from '../theme';
import { CharacterAvatar } from '../components/CharacterAvatar';

export const Scene1_ChatExplosion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const popCard = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const shakeLucas = frame > 120 ? Math.sin(frame * 0.8) * 8 : 0;

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: ZENTRAL_THEME.colors.lightBg,
        padding: '120px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: ZENTRAL_THEME.fonts.main,
      }}
    >
      <div
        style={{
          backgroundColor: ZENTRAL_THEME.colors.darkBlue,
          color: '#FFF',
          padding: '16px 36px',
          borderRadius: 40,
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        💬 Chat Vecinal: Edificio Los Rosales
      </div>

      {/* Tarjeta de mensaje con lista */}
      <div
        style={{
          transform: `scale(${popCard})`,
          width: '100%',
          backgroundColor: '#FFF',
          borderRadius: 32,
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          padding: 36,
          marginBottom: 48,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <CharacterAvatar character="admin" expression="neutral" size={60} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 26, color: ZENTRAL_THEME.colors.primaryBlue }}>
              Administradora Marta
            </div>
            <div style={{ fontSize: 20, color: ZENTRAL_THEME.colors.textMuted }}>Hoy 8:01 AM</div>
          </div>
        </div>

        <div style={{ fontSize: 26, color: ZENTRAL_THEME.colors.textDark, lineHeight: 1.4 }}>
          Adjunto relación mensual de cuentas pendientes para conocimiento de la asamblea:
        </div>

        <div
          style={{
            marginTop: 20,
            padding: 24,
            backgroundColor: '#FDEDEC',
            border: `2px dashed ${ZENTRAL_THEME.colors.dangerRed}`,
            borderRadius: 20,
          }}
        >
          <div style={{ fontWeight: 800, color: ZENTRAL_THEME.colors.dangerRed, fontSize: 24 }}>
            ⚠️ LISTA DE MOROSIDAD - JUNIO
          </div>
          <div
            style={{
              marginTop: 12,
              padding: '10px 14px',
              backgroundColor: '#FFF',
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 26,
              color: ZENTRAL_THEME.colors.dangerRed,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>Depto 402 (Lucas M.)</span>
            <span>$480.00 (3 meses)</span>
          </div>
        </div>
      </div>

      {/* Fila de Personajes Enfrentados */}
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: 30 }}>
        {/* Doña Gladys acusando */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: '#FFF',
              padding: '16px 20px',
              borderRadius: 20,
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
              marginBottom: 12,
              fontSize: 22,
              fontWeight: 700,
              color: ZENTRAL_THEME.colors.dangerRed,
              maxWidth: 320,
              textAlign: 'center',
            }}
          >
            "¡Por su culpa no arreglan el ascensor!"
          </div>
          <CharacterAvatar character="gladys" expression={frame > 90 ? 'angry' : 'neutral'} size={180} />
          <span style={{ marginTop: 8, fontWeight: 700, fontSize: 24, color: ZENTRAL_THEME.colors.textDark }}>
            Doña Gladys
          </span>
        </div>

        {/* Lucas Deudor Aterrado */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: `translateX(${shakeLucas}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: '#FFF',
              padding: '16px 20px',
              borderRadius: 20,
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
              marginBottom: 12,
              fontSize: 22,
              fontWeight: 700,
              color: ZENTRAL_THEME.colors.textMuted,
              maxWidth: 320,
              textAlign: 'center',
            }}
          >
            "¡Qué pena... yo ya pagué una parte!"
          </div>
          <CharacterAvatar character="lucas" expression={frame > 110 ? 'panicked' : 'neutral'} size={180} />
          <span style={{ marginTop: 8, fontWeight: 700, fontSize: 24, color: ZENTRAL_THEME.colors.textDark }}>
            Lucas (402)
          </span>
        </div>
      </div>
    </div>
  );
};