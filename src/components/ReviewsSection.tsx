import { ExternalLink, Quote } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { StarRow } from './ServiceIcons';

export function ReviewsSection() {
  const { reviews } = SITE_CONFIG;
  const reviewCount = reviews.items.length;
  const isSingleReview = reviewCount === 1;

  return (
    <section
      id="reviews"
      className="relative bg-[#F2F2F2] bg-speed-stripes-light text-[#0A0A0A] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#C4C8CD]">
          <div className="space-y-3">
            <p className="font-label text-xs sm:text-sm text-[#5A5E64]">
              {reviews.subheading}
            </p>
            <h2
              className="font-display text-[#0A0A0A] leading-tight"
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                textWrap: 'balance',
              }}
            >
              {reviews.heading}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3.5">
              <span className="font-display text-3xl sm:text-4xl text-[#0A0A0A] tabular-nums">
                {reviews.ratingValue}
              </span>
              <div className="space-y-1">
                <StarRow count={5} className="w-4 h-4 text-[#0A0A0A]" />
                <p className="text-xs sm:text-sm font-medium text-[#3F434A]">
                  {reviews.summaryText}
                </p>
              </div>
            </div>

            <a
              href={reviews.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-sm border border-[#0A0A0A] bg-[#0A0A0A] text-white hover:bg-[#1C1C1C] transition-colors text-xs sm:text-sm font-semibold whitespace-nowrap"
            >
              <span>{reviews.googleButtonLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Adaptive Reviews Layout: Featured card for 1 review, responsive grid for multiple */}
        <div
          className={`mt-10 ${
            isSingleReview
              ? 'max-w-4xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          }`}
        >
          {reviews.items.map((review) => (
            <article
              key={review.id}
              className={`rounded-md border border-[#C4C8CD] bg-white shadow-sm ${
                isSingleReview ? 'p-7 sm:p-10' : 'p-6 flex flex-col justify-between'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <StarRow count={review.rating} className="w-5 h-5 text-[#0A0A0A]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5A5E64]">
                    {review.sourceLabel}
                  </span>
                </div>

                <div className="relative">
                  <Quote
                    className="w-7 h-7 text-[#C4C8CD] mb-3"
                    aria-hidden="true"
                  />
                  <blockquote
                    className={`text-[#141414] leading-relaxed ${
                      isSingleReview ? 'text-lg sm:text-xl font-medium' : 'text-sm sm:text-base'
                    }`}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              <footer className="mt-6 pt-5 border-t border-[#E4E6EA] flex flex-wrap items-center justify-between gap-2">
                <div>
                  <cite className="not-italic font-display text-base sm:text-lg text-[#0A0A0A]">
                    {review.author}
                  </cite>
                  <p className="text-xs text-[#5A5E64]">
                    {review.sourceLabel} · Canberra, ACT
                  </p>
                </div>
                {review.dateLabel && (
                  <span className="text-xs text-[#5A5E64]">{review.dateLabel}</span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
