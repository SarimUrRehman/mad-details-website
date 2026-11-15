import { ArrowDownRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-black bg-speed-stripes text-white overflow-hidden slant-edge-bottom pb-16 pt-10 sm:pt-14 lg:pt-20 lg:pb-24"
    >
      {/* Subtle overhead silver specular ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[340px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(242,242,242,0.5) 0%, rgba(142,147,154,0.12) 45%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Primary Actions */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            {/* Clean unboxed metallic kicker */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-label text-[#C4C8CD]">
              <span className="inline-block h-[2px] w-7 bg-gradient-to-r from-white to-[#5A5E64]" aria-hidden="true" />
              <span>{SITE_CONFIG.brand.tagline}</span>
            </div>

            <h1
              className="font-display text-white leading-[1.03] tracking-tight max-w-2xl"
              style={{
                fontSize: 'clamp(2.25rem, 4.4vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              Detailing That Looks{' '}
              <span className="chrome-text">Better Than New.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#C4C8CD] max-w-xl leading-relaxed">
              {SITE_CONFIG.hero.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="btn-chrome inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-sm text-sm sm:text-base font-bold tracking-wide whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.hero.primaryCtaLabel}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-sm border border-[#8E939A]/60 bg-[#141414]/80 text-white hover:bg-[#1C1C1C] hover:border-white transition-colors text-sm sm:text-base font-semibold whitespace-nowrap"
              >
                <span>{SITE_CONFIG.hero.secondaryCtaLabel}</span>
                <ArrowDownRight className="w-4 h-4 text-[#C4C8CD]" aria-hidden="true" />
              </a>
            </div>

            {/* Honest Trust Badges Strip (uncluttered chrome hairline borders) */}
            <div
              aria-label="Business highlights"
              className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#C4C8CD]"
            >
              {SITE_CONFIG.hero.badges.map((badge, index) => (
                <div key={badge.label} className="inline-flex items-center gap-2.5">
                  {index > 0 && (
                    <span aria-hidden="true" className="hidden sm:inline text-[#5A5E64]">
                      /
                    </span>
                  )}
                  <span
                    className={
                      badge.emphasize
                        ? 'font-semibold text-white tracking-wide'
                        : 'font-medium text-[#A8ABB0]'
                    }
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pure Inline SVG & CSS Chrome Car Silhouette Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-md border border-white/15 bg-gradient-to-b from-[#161719] via-[#0B0B0C] to-black p-6 sm:p-8 shine-sweep shine-sweep-auto shadow-2xl">
              {/* Top specular metallic bar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />

              {/* Chrome MAD emblem header inside artwork frame */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-label text-[11px] text-[#A8ABB0]">
                  CANBERRA · ACT
                </span>
                <span className="font-label text-[11px] text-[#E2E5E9]">
                  5.0 ★ GOOGLE
                </span>
              </div>

              {/* Inline SVG Chrome Car Silhouette + Speed Lines (zero external photo dependency) */}
              <svg
                viewBox="0 0 520 260"
                className="w-full h-auto block"
                role="img"
                aria-label="Sleek chrome sports car silhouette with speed lines representing Mad Detailing"
              >
                <defs>
                  <linearGradient id="hero-car-stroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8E939A" stopOpacity="0.35" />
                    <stop offset="30%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="75%" stopColor="#D7DBE0" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#5A5E64" stopOpacity="0.25" />
                  </linearGradient>

                  <linearGradient id="hero-body-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
                    <stop offset="55%" stopColor="#C4C8CD" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="hero-speed-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="45%" stopColor="#F2F2F2" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#8E939A" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Subtle horizon floor grid line */}
                <line
                  x1="18"
                  y1="205"
                  x2="502"
                  y2="205"
                  stroke="url(#hero-speed-line)"
                  strokeWidth="1.2"
                />

                {/* Precision chrome aerodynamic airflow arcs */}
                <path
                  d="M 28 112 C 110 72, 235 58, 378 86"
                  fill="none"
                  stroke="url(#hero-speed-line)"
                  strokeWidth="1.2"
                  opacity="0.55"
                />
                <path
                  d="M 52 94 C 138 56, 250 48, 354 70"
                  fill="none"
                  stroke="url(#hero-speed-line)"
                  strokeWidth="0.9"
                  opacity="0.35"
                />

                {/* Trailing dynamic speed lines */}
                <line x1="16" y1="138" x2="220" y2="138" stroke="url(#hero-speed-line)" strokeWidth="1.5" />
                <line x1="40" y1="154" x2="190" y2="154" stroke="url(#hero-speed-line)" strokeWidth="1" opacity="0.65" />
                <line x1="295" y1="116" x2="500" y2="116" stroke="url(#hero-speed-line)" strokeWidth="1.2" opacity="0.7" />
                <line x1="330" y1="184" x2="496" y2="184" stroke="url(#hero-speed-line)" strokeWidth="1" opacity="0.55" />

                {/* Upper body reflection fill */}
                <path
                  d="M 52 174 L 74 150 C 102 142, 134 132, 166 112 C 204 88, 266 84, 326 108 L 418 122 C 446 127, 466 142, 474 162 L 474 178 L 52 178 Z"
                  fill="url(#hero-body-fill)"
                />

                {/* Main sleek coupe silhouette line-art */}
                <path
                  d="M 46 174 C 46 164, 56 154, 72 149 L 154 128 C 194 94, 262 86, 328 110 L 422 123 C 452 128, 472 144, 476 166 C 477 173, 472 179, 462 180 L 426 180"
                  fill="none"
                  stroke="url(#hero-car-stroke)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Glasshouse & pillar highlight */}
                <path
                  d="M 176 125 C 208 99, 262 96, 314 114 L 344 127 L 176 127 Z"
                  fill="rgba(255,255,255,0.08)"
                  stroke="#E2E5E9"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <line x1="252" y1="101" x2="246" y2="127" stroke="#8E939A" strokeWidth="1.4" />

                {/* Lower rocker panel & wheel arch sweep */}
                <path
                  d="M 56 180 L 96 180 C 102 152, 148 152, 154 180 L 348 180 C 354 152, 400 152, 406 180 L 452 180"
                  fill="none"
                  stroke="#F2F2F2"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* Front & rear chrome wheels */}
                <g stroke="#E2E5E9" fill="none">
                  <circle cx="125" cy="180" r="24" strokeWidth="2.4" />
                  <circle cx="125" cy="180" r="14" stroke="#8E939A" strokeWidth="1.4" />
                  <circle cx="125" cy="180" r="4" fill="#F2F2F2" />
                  <path d="M125 166v28M111 180h28M115 170l20 20M135 170l-20 20" stroke="#8E939A" strokeWidth="1" />

                  <circle cx="377" cy="180" r="24" strokeWidth="2.4" />
                  <circle cx="377" cy="180" r="14" stroke="#8E939A" strokeWidth="1.4" />
                  <circle cx="377" cy="180" r="4" fill="#F2F2F2" />
                  <path d="M377 166v28M363 180h28M367 170l20 20M387 170l-20 20" stroke="#8E939A" strokeWidth="1" />
                </g>

                {/* Crisp headlight & taillight specular gleam */}
                <path
                  d="M 442 142 L 466 146 L 454 152 Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M 58 152 L 78 148 L 74 155 Z"
                  fill="#E10600"
                  opacity="0.85"
                />

                {/* Reflection sheen beneath vehicle */}
                <ellipse
                  cx="260"
                  cy="214"
                  rx="195"
                  ry="8"
                  fill="rgba(255,255,255,0.06)"
                />
              </svg>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-xs text-[#A8ABB0]">
                <span>Showroom-quality interior &amp; exterior care</span>
                <span className="font-semibold text-white whitespace-nowrap">
                  Canberra, AU
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
