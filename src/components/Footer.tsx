import { useEffect, useState } from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-black text-white border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            {/* Brand & Description */}
            <div className="md:col-span-5 space-y-4">
              <a
                href="#hero"
                aria-label="Mad Detailing — Back to top"
                className="inline-flex items-center"
              >
                <BrandLogo size="md" />
              </a>
              <p className="text-sm text-[#A8ABB0] max-w-sm leading-relaxed">
                {SITE_CONFIG.brand.shortFooterDescription}
              </p>
              <p className="text-xs font-medium text-[#C4C8CD]">
                {SITE_CONFIG.brand.category} · 5.0 ★ (1 Google Review)
              </p>
            </div>

            {/* Quick Links to the 5 Sections */}
            <div className="md:col-span-3 space-y-3">
              <h2 className="font-label text-xs text-[#C4C8CD]">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                {SITE_CONFIG.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#A8ABB0] hover:text-white transition-colors inline-flex py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Socials */}
            <div className="md:col-span-4 space-y-3">
              <h2 className="font-label text-xs text-[#C4C8CD]">Contact &amp; Hours</h2>
              <ul className="space-y-2.5 text-sm text-[#A8ABB0]">
                <li>
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4 font-medium"
                  >
                    <Phone className="w-4 h-4 text-[#C4C8CD]" aria-hidden="true" />
                    <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#C4C8CD] shrink-0" aria-hidden="true" />
                    <span>{SITE_CONFIG.contact.email}</span>
                  </a>
                </li>
                <li className="inline-flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C4C8CD] mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    {SITE_CONFIG.contact.isMobileService
                      ? `Mobile Service — ${SITE_CONFIG.contact.cityRegion}`
                      : SITE_CONFIG.contact.streetAddress}
                  </span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                {SITE_CONFIG.contact.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-sm border border-white/15 bg-[#0A0A0A] text-[#C4C8CD] hover:text-white hover:border-white/40 transition-colors"
                  >
                    {social.label}: {social.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8E939A]">
            <p>
              &copy; {SITE_CONFIG.brand.copyrightYear} {SITE_CONFIG.brand.name}. All rights
              reserved.
            </p>
            <p>
              {SITE_CONFIG.brand.category} in {SITE_CONFIG.contact.cityRegion}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Circular Silver Call Button (Mobile) */}
      <a
        href={SITE_CONFIG.contact.phoneHref}
        aria-label={`Call Mad Detailing on ${SITE_CONFIG.contact.phoneDisplay}`}
        className="md:hidden fixed bottom-4 right-4 z-40 btn-chrome w-12 h-12 rounded-full inline-flex items-center justify-center shadow-2xl border border-white/60"
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
      </a>

      {/* Back-to-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-4 left-4 md:left-auto md:right-6 md:bottom-6 z-40 w-11 h-11 rounded-full border border-white/30 bg-[#141414]/95 text-white hover:bg-[#1C1C1C] hover:border-white transition-colors inline-flex items-center justify-center shadow-lg cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
