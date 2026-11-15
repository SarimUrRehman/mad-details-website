import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-white/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-6">
        {/* Zone 1: Brand Logo */}
        <a
          href="#hero"
          aria-label="Mad Detailing — Back to top"
          className="inline-flex items-center shrink-0 focus-visible:rounded-sm"
        >
          <span className="sm:hidden">
            <BrandLogo compact />
          </span>
          <span className="hidden sm:inline-flex">
            <BrandLogo size="sm" />
          </span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {SITE_CONFIG.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-[#C4C8CD] hover:text-white transition-colors whitespace-nowrap shrink-0 group"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Call Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="btn-chrome inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-sm text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm border border-white/25 bg-[#141414] text-white hover:border-white/50 transition-colors shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/15 bg-[#0A0A0A] px-4 py-4 space-y-1"
        >
          {SITE_CONFIG.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between px-3 min-h-[44px] text-sm font-medium text-[#E2E5E9] hover:text-white hover:bg-white/5 rounded-sm transition-colors"
            >
              <span>{item.label}</span>
              <span aria-hidden="true" className="text-[#8E939A] text-xs">
                →
              </span>
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href={SITE_CONFIG.contact.phoneHref}
              onClick={handleLinkClick}
              className="btn-chrome w-full inline-flex items-center justify-center gap-2 px-4 min-h-[44px] rounded-sm text-sm font-bold"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
