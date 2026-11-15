import type { ServiceIconId } from '../config/siteConfig';

interface ServiceIconProps {
  icon: ServiceIconId;
  className?: string;
}

/**
 * Clean monochrome automotive detailing icons rendered as inline SVGs.
 * Uses currentColor so they inherit dark ink on light cards and chrome silver on dark surfaces.
 */
export function ServiceIcon({ icon, className = 'w-6 h-6' }: ServiceIconProps) {
  switch (icon) {
    case 'interior':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M7 18V7.5C7 6.12 8.12 5 9.5 5h2c1.1 0 2 .9 2 2v4.5l3.8 1.3c1.02.35 1.7 1.3 1.7 2.38V18H7Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M5 18h15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M10 9h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );

    case 'wash':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 3.5C12 3.5 6.5 10 6.5 14.2a5.5 5.5 0 0 0 11 0C17.5 10 12 3.5 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M10 15.2a2.4 2.4 0 0 0 2.2 2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'full-detail':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M3.5 14.5h17l-1.4-4.2a2 2 0 0 0-1.9-1.37H6.8a2 2 0 0 0-1.9 1.37L3.5 14.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 14.5v3.2c0 .44.36.8.8.8h1.4c.44 0 .8-.36.8-.8V16.5h9v1.2c0 .44.36.8.8.8h1.4c.44 0 .8-.36.8-.8v-3.2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M12 3v3M7 4.5l1.2 2M17 4.5l-1.2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'polish':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="13" r="6.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="13" r="2.2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 3.5v3M8 5l1.5 1.5M16 5l-1.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'ceramic':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 3.2 19 6.2v5.3c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6.2l7-3Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="m9.2 12 2 2 3.8-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'headlight':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M11 6.5c-3.8 0-6.5 2.4-6.5 5.5s2.7 5.5 6.5 5.5h2V6.5h-2Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 8.5h4.5M15.5 12h5M15.5 15.5h4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'upholstery':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M4 11.5h16M9.5 6v12M14.5 6v12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'odour':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M4 10h11a2.5 2.5 0 1 0-2.5-2.5M3 14h15a2.5 2.5 0 1 1-2.5 2.5M6 18h6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function StarRow({ count = 5, className = 'w-4 h-4' }: { count?: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.171c.969 0 1.371 1.24.588 1.81l-3.375 2.452a1 1 0 0 0-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.375-2.452a1 1 0 0 0-1.176 0l-3.375 2.452c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.171a1 1 0 0 0 .95-.69l1.29-3.967Z" />
        </svg>
      ))}
    </span>
  );
}
