import { useState } from 'react';
import { Check } from 'lucide-react';
import { SITE_CONFIG, type ShowcasePair } from '../config/siteConfig';

interface PhotoSlotProps {
  src: string;
  alt: string;
  placeholderLabel: string;
  variant: 'before' | 'after';
}

/**
 * Renders either a user-supplied local photo (with fixed 4:3 geometry and
 * graceful fallback) or a styled SVG/CSS "coming soon" placeholder.
 */
function PhotoSlot({ src, alt, placeholderLabel, variant }: PhotoSlotProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src) && !hasError;

  const isAfter = variant === 'after';

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm border ${
        isAfter
          ? 'border-white/30 bg-gradient-to-br from-[#1D1F22] via-[#121316] to-[#080809]'
          : 'border-white/15 bg-gradient-to-br from-[#141416] via-[#0D0D0F] to-[#050506]'
      }`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          width={400}
          height={300}
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="relative h-full w-full flex flex-col items-center justify-center p-3 text-center bg-speed-stripes">
          {/* Subtle car silhouette outline inside placeholder */}
          <svg
            viewBox="0 0 180 76"
            className={`w-24 sm:w-28 h-auto mb-2 ${
              isAfter ? 'text-white/45' : 'text-[#8E939A]/35'
            }`}
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M16 52 C18 45, 25 41, 34 39 L60 31 C74 20, 99 18, 122 26 L152 31 C162 33, 168 39, 170 48 L166 53 L148 53"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M24 53 L40 53 C43 43, 57 43, 60 53 L120 53 C123 43, 137 43, 140 53 L156 53"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <circle cx="50" cy="53" r="8" stroke="currentColor" strokeWidth="1.75" />
            <circle cx="130" cy="53" r="8" stroke="currentColor" strokeWidth="1.75" />
            {isAfter && (
              <path
                d="M72 14 L76 22 M84 11 L85 20 M96 13 L94 21"
                stroke="#F2F2F2"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.7"
              />
            )}
          </svg>

          <span className="font-label text-[10px] tracking-[0.18em] text-[#C4C8CD] mb-1">
            {isAfter ? 'AFTER' : 'BEFORE'}
          </span>
          <p className="text-[11px] sm:text-xs font-medium text-[#A8ABB0] leading-snug max-w-[16ch]">
            {placeholderLabel}
          </p>
        </div>
      )}
    </div>
  );
}

function BeforeAfterCard({ item }: { item: ShowcasePair }) {
  return (
    <article className="rounded-md border border-white/15 bg-[#141414] p-4 sm:p-5 flex flex-col justify-between shine-sweep shine-sweep-hover">
      <div>
        <div className="grid grid-cols-2 gap-3">
          <PhotoSlot
            src={item.beforeImage}
            alt={item.beforeAlt}
            placeholderLabel={item.beforeLabel}
            variant="before"
          />
          <PhotoSlot
            src={item.afterImage}
            alt={item.afterAlt}
            placeholderLabel={item.afterLabel}
            variant="after"
          />
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <h4 className="font-display text-base sm:text-lg text-white leading-snug">
            {item.title}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-[#A8ABB0]">{item.subtitle}</p>
        </div>
      </div>
    </article>
  );
}

export function WhyChooseUsSection() {
  const { whyChooseUs } = SITE_CONFIG;

  return (
    <section
      id="why-us"
      className="relative bg-[#0A0A0A] bg-speed-stripes text-white py-16 sm:py-20 lg:py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="font-label text-xs sm:text-sm text-[#A8ABB0]">
              {whyChooseUs.subheading}
            </p>
            <h2
              className="font-display chrome-text leading-tight"
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                textWrap: 'balance',
              }}
            >
              {whyChooseUs.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#C4C8CD] leading-relaxed">
              {whyChooseUs.intro}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-md border border-white/12 bg-[#141414] p-5 transition-colors hover:border-white/30"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-sm bg-white/10 text-white shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base text-white tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#A8ABB0] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Our Work — 3 Before/After Placeholder Cards */}
        <div className="mt-16 pt-14 border-t border-white/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-2">
              <p className="font-label text-xs sm:text-sm text-[#A8ABB0]">
                {whyChooseUs.workSubheading}
              </p>
              <h3
                className="font-display text-white leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.15rem)' }}
              >
                {whyChooseUs.workHeading}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A8ABB0] max-w-md">
              {whyChooseUs.workNote}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {whyChooseUs.showcasePairs.map((pair) => (
              <BeforeAfterCard key={pair.id} item={pair} />
            ))}
          </div>
        </div>

        {/* Part 3: Honest Stats Row (Zero invented metrics) */}
        <div
          aria-label="Business metrics"
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-md border border-white/15 bg-[#141414] p-6"
        >
          {whyChooseUs.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center ${
                idx > 0 ? 'sm:border-l sm:border-white/12 sm:pl-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/10' : ''
              }`}
            >
              <span className="font-display text-2xl sm:text-3xl chrome-text tabular-nums">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-medium text-[#A8ABB0]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
