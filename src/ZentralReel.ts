import React from 'react';
import { Sequence, AbsoluteFill } from 'remotion';
import { Scene1_ChatExplosion } from './scenes/Scene1_ChatExplosion';
import { Scene2_MateoIntervention } from './scenes/Scene2_MateoIntervention';
import { Scene3_AppShowcase } from './scenes/Scene3_AppShowcase';
import { Scene4_OutroCTA } from './scenes/Scene4_OutroCTA';

export const ZentralReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Escena 1: El conflicto y la lista en WhatsApp (0s - 8s) */}
      <Sequence from={0} durationInFrames={240}>
        <Scene1_ChatExplosion />
      </Sequence>

      {/* Escena 2: Mateo interviene y menciona a Zentral (8s - 18s) */}
      <Sequence from={240} durationInFrames={300}>
        <Scene2_MateoIntervention />
      </Sequence>

      {/* Escena 3: Demostración de privacidad y conciliación de la App (18s - 28s) */}
      <Sequence from={540} durationInFrames={300}>
        <Scene3_AppShowcase />
      </Sequence>

      {/* Escena 4: Convivencia restaurada y CTA (28s - 35s) */}
      <Sequence from={840} durationInFrames={210}>
        <Scene4_OutroCTA />
      </Sequence>
    </AbsoluteFill>
  );
};