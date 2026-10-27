import React from 'react';

export type CharacterType = 'lucas' | 'gladys' | 'mateo' | 'admin';
export type Expression = 'panicked' | 'angry' | 'smug' | 'neutral' | 'happy';

interface Props {
  character: CharacterType;
  expression: Expression;
  size?: number;
}

export const CharacterAvatar: React.FC<Props> = ({ character, expression, size = 160 }) => {
  const getSkinColor = () => {
    switch (character) {
      case 'lucas': return '#E08775';
      case 'gladys': return '#F3A683';
      case 'mateo': return '#E59866';
      case 'admin': return '#F5CBA7';
    }
  };

  const getHair = () => {
    switch (character) {
      case 'gladys':
        return (
          <g fill="#9B59B6">
            <circle cx="65" cy="35" r="24" />
            <circle cx="100" cy="25" r="26" />
            <circle cx="135" cy="35" r="24" />
            <circle cx="45" cy="70" r="20" />
            <circle cx="155" cy="70" r="20" />
          </g>
        );
      case 'lucas':
        return (
          <path
            d="M 45 60 C 40 10, 160 10, 155 60 C 140 35, 120 48, 100 28 C 80 48, 60 30, 45 60 Z"
            fill="#2C3E50"
          />
        );
      case 'mateo':
        return (
          <g>
            <path d="M 40 60 C 40 20, 160 20, 160 60 Z" fill="#E67E22" />
            <rect x="36" y="52" width="128" height="14" rx="7" fill="#D35400" />
            <path d="M 50 120 C 50 160, 150 160, 150 120 Z" fill="#2C3E50" opacity={0.9} />
          </g>
        );
      default:
        return <circle cx="100" cy="28" r="22" fill="#34495E" />;
    }
  };

  const renderEyesAndMouth = () => {
    switch (expression) {
      case 'panicked':
        return (
          <g>
            <ellipse cx="70" cy="90" rx="14" ry="18" fill="#FFF" />
            <ellipse cx="130" cy="90" rx="14" ry="18" fill="#FFF" />
            <circle cx="70" cy="90" r="5" fill="#1A252F" />
            <circle cx="130" cy="90" r="5" fill="#1A252F" />
            <path d="M 55 68 Q 70 54 85 68" stroke="#1A252F" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 115 68 Q 130 54 145 68" stroke="#1A252F" strokeWidth="4" fill="none" strokeLinecap="round" />
            <ellipse cx="100" cy="135" rx="12" ry="18" fill="#C0392B" />
            <path d="M 150 78 C 150 72 158 60 158 60 C 158 60 166 72 166 78 C 166 82 162 86 158 86 C 154 86 150 82 150 78 Z" fill="#3498DB" />
          </g>
        );
      case 'angry':
        return (
          <g>
            <circle cx="70" cy="95" r="9" fill="#1A252F" />
            <circle cx="130" cy="95" r="9" fill="#1A252F" />
            <line x1="55" y1="78" x2="85" y2="90" stroke="#1A252F" strokeWidth="5" strokeLinecap="round" />
            <line x1="145" y1="78" x2="115" y2="90" stroke="#1A252F" strokeWidth="5" strokeLinecap="round" />
            <path d="M 75 130 L 125 130 L 120 142 L 80 142 Z" fill="#FFF" stroke="#1A252F" strokeWidth="3" />
            {character === 'gladys' && (
              <g stroke="#E74C3C" strokeWidth="4" fill="none">
                <polygon points="52,82 85,82 75,108" />
                <polygon points="115,82 148,82 125,108" />
                <line x1="85" y1="88" x2="115" y2="88" />
              </g>
            )}
          </g>
        );
      case 'smug':
        return (
          <g>
            <ellipse cx="72" cy="95" rx="10" ry="12" fill="#FFF" />
            <circle cx="74" cy="95" r="4.5" fill="#1A252F" />
            <path d="M 118 95 Q 130 87 142 95" stroke="#1A252F" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 78 128 Q 100 142 124 122" stroke="#1A252F" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          </g>
        );
      case 'happy':
        return (
          <g>
            <path d="M 58 95 Q 72 82 86 95" stroke="#1A252F" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 114 95 Q 128 82 142 95" stroke="#1A252F" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 75 125 Q 100 148 125 125 Z" fill="#FFF" stroke="#1A252F" strokeWidth="3.5" />
          </g>
        );
      default:
        return (
          <g>
            <circle cx="70" cy="95" r="8" fill="#1A252F" />
            <circle cx="130" cy="95" r="8" fill="#1A252F" />
            <path d="M 80 130 Q 100 136 120 130" stroke="#1A252F" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        );
    }
  };

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <ellipse cx="100" cy="190" rx="55" ry="8" fill="#000" opacity={0.1} />
      <path
        d="M 40 85 C 40 30, 160 30, 160 85 L 160 155 C 160 178, 40 178, 40 155 Z"
        fill={getSkinColor()}
      />
      {getHair()}
      {renderEyesAndMouth()}
    </svg>
  );
};