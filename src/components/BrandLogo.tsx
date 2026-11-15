import { useId } from 'react';

interface BrandLogoProps {
  /** Compact mode shows the bold chrome "MAD" lockup for narrow mobile headers */
  compact?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BrandLogo({
  compact = false,
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const uid = useId().replace(/:/g, '');
  const chromeGradId = `mad-chrome-${uid}`;
  const speedGradId = `mad-speed-${uid}`;
  const carGradId = `mad-car-${uid}`;

  if (compact) {
    return (
      <svg
        viewBox="0 0 156 54"
        className={`h-8 w-auto select-none ${className}`}
        role="img"
        aria-label="Mad Detailing"
      >
        <defs>
          <linearGradient id={chromeGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="36%" stopColor="#D7DBE0" />
            <stop offset="50%" stopColor="#6C7179" />
            <stop offset="64%" stopColor="#F4F6F9" />
            <stop offset="100%" stopColor="#858A92" />
          </linearGradient>
        </defs>
        <text
          x="6"
          y="40"
          fill={`url(#${chromeGradId})`}
          stroke="#141518"
          strokeWidth="1.4"
          paintOrder="stroke"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="40"
          letterSpacing="-1.5"
        >
          MAD
        </text>
        <text
          x="10"
          y="52"
          fill="#E2E5E9"
          fontFamily="'Exo 2', sans-serif"
          fontWeight="600"
          fontStyle="italic"
          fontSize="10.5"
          letterSpacing="5.5"
        >
          DETAILING
        </text>
      </svg>
    );
  }

  const heightClass =
    size === 'lg' ? 'h-14 sm:h-16' : size === 'sm' ? 'h-9' : 'h-10 sm:h-11';

  return (
    <svg
      viewBox="0 0 280 68"
      className={`${heightClass} w-auto select-none ${className}`}
      role="img"
      aria-label="Mad Detailing"
    >
      <defs>
        {/* Polished top-to-bottom chrome gradient with bright horizon highlight */}
        <linearGradient id={chromeGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="34%" stopColor="#DCDFE4" />
          <stop offset="48%" stopColor="#6A6E76" />
          <stop offset="56%" stopColor="#FFFFFF" />
          <stop offset="76%" stopColor="#C4C8CD" />
          <stop offset="100%" stopColor="#7C8189" />
        </linearGradient>

        {/* Fading speed-line gradient */}
        <linearGradient id={speedGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#C4C8CD" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8E939A" stopOpacity="0" />
        </linearGradient>

        {/* Crisp white/silver stroke for the flowing car silhouette */}
        <linearGradient id={carGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#E6E9ED" />
          <stop offset="100%" stopColor="#A8ABB0" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Bold, Italic Chrome MAD Wordmark */}
      <text
        x="4"
        y="43"
        fill={`url(#${chromeGradId})`}
        stroke="#101114"
        strokeWidth="1.6"
        paintOrder="stroke"
        fontFamily="'Exo 2', sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="44"
        letterSpacing="-1.8"
      >
        MAD
      </text>

      {/* Subtle bright top highlight line inside wordmark */}
      <path
        d="M 122 14 C 145 9, 178 7, 206 11"
        fill="none"
        stroke={`url(#${speedGradId})`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Sleek white line-art car silhouette flowing seamlessly out of the "D" */}
      <path
        d="M 103 24 L 128 21 C 146 13, 174 12, 198 19 L 236 22 C 250 23, 259 27, 263 32 L 246 34"
        fill="none"
        stroke={`url(#${carGradId})`}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side glass & roofline accent */}
      <path
        d="M 142 20 C 156 15, 177 15, 192 21 L 142 22 Z"
        fill="rgba(255,255,255,0.14)"
        stroke="#FFFFFF"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Lower body & wheel arch sweep */}
      <path
        d="M 110 34 L 136 34 C 140 27, 152 27, 156 34 L 210 34 C 214 27, 226 27, 230 34 L 258 34"
        fill="none"
        stroke={`url(#${speedGradId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Fading speed lines trailing from the silhouette */}
      <line
        x1="108"
        y1="39"
        x2="268"
        y2="39"
        stroke={`url(#${speedGradId})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="128"
        y1="43"
        x2="252"
        y2="43"
        stroke={`url(#${speedGradId})`}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Wide-spaced white italic DETAILING sub-label */}
      <text
        x="7"
        y="61"
        fill="#F2F2F2"
        fontFamily="'Exo 2', sans-serif"
        fontWeight="600"
        fontStyle="italic"
        fontSize="12.5"
        letterSpacing="8.5"
      >
        DETAILING
      </text>
    </svg>
  );
}
