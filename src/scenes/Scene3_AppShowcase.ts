import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { ZENTRAL_THEME } from '../theme';
import { ZentralLogo } from '../components/ZentralLogo';

export const Scene3_AppShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phoneSlide = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const checkPop = spring({ frame: Math.max(0, frame - 45), fps, config: { damping: 10, stiffness: 180 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: ZENTRAL_THEME.colors.primaryBlue,
        padding: '100px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: ZENTRAL_THEME.fonts.main,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span
          style={{
            color: ZENTRAL_THEME.colors.secondaryBlue,
            fontWeight: 800,
            fontSize: 28,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Solución Digital
        </span>
        <h1 style={{ color: '#FFF', fontSize: 50, margin: '8px 0 0 0' }}>Gestión Privada y Transparente</h1>
      </div>

      {/* Mockup de Celular con la App de Zentral */}
      <div
        style={{
          transform: `translateY(${(1 - phoneSlide) * 200}px)`,
          width: 580,
          backgroundColor: '#FFF',
          borderRadius: 48,
          border: `12px solid ${ZENTRAL_THEME.colors.darkBlue}`,
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Cabecera de la App */}
        <div
          style={{
            backgroundColor: ZENTRAL_THEME.colors.darkBlue,
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <ZentralLogo size={44} color={ZENTRAL_THEME.colors.white} />
            <span style={{ color: '#FFF', fontWeight: 800, fontSize: 24 }}>Zentral Condominios</span>
          </div>
          <span style={{ color: ZENTRAL_THEME.colors.secondaryBlue, fontSize: 18, fontWeight: 700 }}>
            Depto 402
          </span>
        </div>

        {/* Cuerpo del dashboard */}
        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              backgroundColor: ZENTRAL_THEME.colors.lightBg,
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div style={{ fontSize: 20, color: ZENTRAL_THEME.colors.textMuted }}>Estado de Cuenta Personal</div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: ZENTRAL_THEME.colors.primaryBlue,
                marginTop: 6,
              }}
            >
              $160.00
            </div>
            <div style={{ fontSize: 18, color: ZENTRAL_THEME.colors.successGreen, marginTop: 4, fontWeight: 700 }}>
              ● 1 cuota pendiente (2 cuotas conciliadas)
            </div>
          </div>

          {/* Botón de reporte y conciliación */}
          <div
            style={{
              backgroundColor: ZENTRAL_THEME.colors.secondaryBlue,
              color: '#FFF',
              borderRadius: 18,
              padding: '18px 24px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: 24,
              boxShadow: '0 8px 16px rgba(41,128,185,0.3)',
            }}
          >
            Reportar Pago en 1 Clic
          </div>

          {/* Notificación de confirmación animada */}
          <div
            style={{
              transform: `scale(${checkPop})`,
              backgroundColor: '#EAFAF1',
              border: `2px solid ${ZENTRAL_THEME.colors.successGreen}`,
              borderRadius: 18,
              padding: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: ZENTRAL_THEME.colors.successGreen,
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
              }}
            >
              ✓
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#1E8449' }}>Comprobante Conciliado</div>
              <div style={{ fontSize: 16, color: '#52BE80' }}>Notificación enviada sin exponer datos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};