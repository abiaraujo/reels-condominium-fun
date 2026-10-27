import React from 'react';
import { Composition } from 'remotion';
import { ZentralReel } from './ZentralReel';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ZentralConflictReel"
      component={ZentralReel}
      durationInFrames={1050}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};