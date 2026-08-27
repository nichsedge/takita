import React from 'react';

export const TakitaLogoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="takitaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Rounded squircle background */}
      <rect width="120" height="120" rx="30" fill="url(#takitaGrad)" />

      {/* Subtle modern geometric background lines */}
      <circle cx="95" cy="25" r="35" stroke="white" strokeWidth="1.5" strokeOpacity="0.12" />
      <circle cx="20" cy="100" r="45" stroke="white" strokeWidth="1.5" strokeOpacity="0.08" />

      {/* Geometric T + Web Bracket Structure */}
      {/* Top Bar of T (with angled modern cut) */}
      <path
        d="M26 36C26 33.7909 27.7909 32 30 32H90C92.2091 32 94 33.7909 94 36V44C94 46.2091 92.2091 48 90 48H30C27.7909 48 26 46.2091 26 44V36Z"
        fill="white"
        filter="url(#subtleShadow)"
      />

      {/* Modern Accent Chip on top left */}
      <rect x="30" y="32" width="16" height="16" rx="4" fill="url(#accentGrad)" />

      {/* Vertical Stem of T */}
      <path
        d="M51 44H69V84C69 87.3137 66.3137 90 63 90H57C53.6863 90 51 87.3137 51 84V44Z"
        fill="white"
        filter="url(#subtleShadow)"
      />

      {/* Tech brackets / Code cursor accents */}
      <path
        d="M75 58L85 67L75 76"
        stroke="#A7F3D0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 58L35 67L45 76"
        stroke="#A7F3D0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sparkle badge point */}
      <circle cx="60" cy="74" r="3.5" fill="#34D399" />
    </svg>
  );
};
