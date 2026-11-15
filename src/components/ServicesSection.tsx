import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ServiceIcon } from './ServiceIcons';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="relative bg-[#F2F2F2] bg-speed-stripes-light text-[#0A0A0A] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#C4C8CD]">
          <div className="space-y-3 max-w-2xl">
            <p className="font-label text-xs sm:text-sm text-[#5A5E64]">
              {SITE_CONFIG.services.subheading}
            </p>
            <h2
              className="font-display text-[#0A0A0A] leading-tight"
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                textWrap: 'balance',
              }}
            >
              {SITE_CONFIG.services.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#3F434A] leading-relaxed">
              {SITE_CONFIG.services.quoteNote}
            </p>
          </div>

          <div className="lg:text-right space-y-2 max-w-sm">
            <p className="text-xs sm:text-sm text-[#5A5E64] leading-relaxed">
              {SITE_CONFIG.services.configNote}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#44484F] underline underline-offset-4 decoration-[#8E939A]"
            >
              <span>Request a free custom quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 8 Editable Service Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.services.items.map((service, index) => {
            const indexLabel = String(index + 1).padStart(2, '0');
            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between rounded-md border border-[#C4C8CD] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A0A0A] hover:shadow-lg shine-sweep shine-sweep-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-[#0A0A0A] text-white border border-[#2C2F34]">
                      <ServiceIcon icon={service.icon} className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#5A5E64]">
                      {indexLabel}
                    </span>
                  </div>

                  <h3 className="font-display text-lg text-[#0A0A0A] leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#3F434A] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E6EA] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#5A5E64]">
                    Request a quote
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 min-h-[44px] px-3 -mr-3 text-sm font-semibold text-[#0A0A0A] hover:text-[#44484F] transition-colors cursor-pointer whitespace-nowrap"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <span>Enquire</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
