import { type FormEvent, useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContactSectionProps {
  selectedService: string;
}

interface FormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicle: string;
  preferredDate: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

function SocialIcon({ id }: { id: string }) {
  if (id === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
        <path
          d="M14 8h2.5V4.5H14c-2.5 0-4 1.5-4 4V11H7.5v3.5H10V20h3.5v-5.5h2.7l.5-3.5h-3.2V8.8c0-.5.2-.8.5-.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
      <path
        d="M15 4v9.5a3.5 3.5 0 1 1-3-3.46"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 4c.8 2 2.4 3.2 4.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  const { contact, services, contactSection } = SITE_CONFIG;

  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    email: '',
    service: selectedService || services.items[0].title,
    vehicle: '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Sync dropdown when user clicks "Enquire" on any service card
  useEffect(() => {
    if (selectedService) {
      setValues((prev) => ({ ...prev, service: selectedService }));
      setSubmitted(false);
    }
  }, [selectedService]);

  const validate = (formValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!formValues.name.trim() || formValues.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }

    const cleanedPhone = formValues.phone.replace(/[\s()-]/g, '');
    if (!cleanedPhone || !/^(\+?\d{8,15})$/.test(cleanedPhone)) {
      nextErrors.phone = 'Please enter a valid phone number (e.g. 0430 026 563).';
    }

    if (
      !formValues.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())
    ) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.service) {
      nextErrors.service = 'Please select a detailing service.';
    }

    if (!formValues.vehicle.trim()) {
      nextErrors.vehicle = 'Please enter your vehicle make, model & year.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputBaseClass =
    'w-full min-h-[44px] rounded-sm border bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder-[#767A82] transition-colors focus:outline-none focus:border-white';

  return (
    <section
      id="contact"
      className="relative bg-[#0A0A0A] bg-speed-stripes text-white py-16 sm:py-20 lg:py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3 mb-10">
          <p className="font-label text-xs sm:text-sm text-[#A8ABB0]">
            {contactSection.subheading}
          </p>
          <h2
            className="font-display chrome-text leading-tight"
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
              textWrap: 'balance',
            }}
          >
            {contactSection.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#C4C8CD] leading-relaxed">
            {contactSection.formIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Booking & Quote Request Form */}
          <div className="lg:col-span-7 rounded-md border border-white/15 bg-[#141414] p-6 sm:p-8 flex flex-col justify-between">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="my-auto py-8 space-y-5 text-left"
              >
                <div className="inline-flex items-center gap-2.5 text-white">
                  <CheckCircle2 className="w-6 h-6 text-[#F2F2F2]" aria-hidden="true" />
                  <h3 className="font-display text-xl sm:text-2xl">
                    Enquiry Received — Thank You
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#C4C8CD] leading-relaxed max-w-xl">
                  Thanks <strong className="text-white">{values.name}</strong>. Your quote request
                  for <strong className="text-white">{values.service}</strong> on your{' '}
                  <strong className="text-white">{values.vehicle}</strong> has been validated
                  and prepared. For immediate booking confirmation, call or text us directly on{' '}
                  <a
                    href={contact.phoneHref}
                    className="text-white underline underline-offset-4 font-semibold"
                  >
                    {contact.phoneDisplay}
                  </a>
                  .
                </p>

                <div className="rounded-sm border border-white/15 bg-[#0A0A0A] p-4 text-xs sm:text-sm text-[#A8ABB0] space-y-1">
                  <p>
                    <span className="text-white font-medium">Service:</span> {values.service}
                  </p>
                  <p>
                    <span className="text-white font-medium">Vehicle:</span> {values.vehicle}
                  </p>
                  {values.preferredDate && (
                    <p>
                      <span className="text-white font-medium">Preferred date:</span>{' '}
                      {values.preferredDate}
                    </p>
                  )}
                  <p>
                    <span className="text-white font-medium">Contact:</span> {values.phone} ·{' '}
                    {values.email}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={contact.phoneHref}
                    className="btn-chrome inline-flex items-center gap-2 px-5 min-h-[44px] rounded-sm text-sm font-bold"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {contact.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setValues((prev) => ({
                        ...prev,
                        vehicle: '',
                        preferredDate: '',
                        message: '',
                      }));
                    }}
                    className="inline-flex items-center justify-center px-5 min-h-[44px] rounded-sm border border-white/25 text-sm font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                    >
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'booking-name-error' : undefined}
                      className={`${inputBaseClass} ${
                        errors.name ? 'border-[#E10600]' : 'border-white/20'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="booking-name-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF8A85]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                    >
                      Phone <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={values.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="04XX XXX XXX"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                      className={`${inputBaseClass} ${
                        errors.phone ? 'border-[#E10600]' : 'border-white/20'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="booking-phone-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF8A85]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                    >
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'booking-email-error' : undefined}
                      className={`${inputBaseClass} ${
                        errors.email ? 'border-[#E10600]' : 'border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="booking-email-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF8A85]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                    >
                      Service Type <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="booking-service"
                      name="service"
                      required
                      value={values.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'booking-service-error' : undefined}
                      className={`${inputBaseClass} ${
                        errors.service ? 'border-[#E10600]' : 'border-white/20'
                      }`}
                    >
                      {services.items.map((item) => (
                        <option key={item.id} value={item.title} className="bg-[#141414]">
                          {item.title}
                        </option>
                      ))}
                      <option value="Custom / Not Sure Yet" className="bg-[#141414]">
                        Custom / Not Sure Yet
                      </option>
                    </select>
                    {errors.service && (
                      <p
                        id="booking-service-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF8A85]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vehicle Make / Model / Year */}
                  <div>
                    <label
                      htmlFor="booking-vehicle"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                    >
                      Vehicle Make / Model / Year <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="booking-vehicle"
                      name="vehicle"
                      type="text"
                      required
                      value={values.vehicle}
                      onChange={(e) => handleChange('vehicle', e.target.value)}
                      placeholder="e.g. 2021 Mazda 3 Hatch"
                      aria-invalid={Boolean(errors.vehicle)}
                      aria-describedby={errors.vehicle ? 'booking-vehicle-error' : undefined}
                      className={`${inputBaseClass} ${
                        errors.vehicle ? 'border-[#E10600]' : 'border-white/20'
                      }`}
                    />
                    {errors.vehicle && (
                      <p
                        id="booking-vehicle-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF8A85]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.vehicle}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="date"
                      value={values.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      className={`${inputBaseClass} border-white/20 [color-scheme:dark]`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#C4C8CD] mb-1.5"
                  >
                    Message / Condition Notes
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about any specific stains, swirl marks, pet hair, or questions..."
                    className={`${inputBaseClass} min-h-[96px] border-white/20 resize-y`}
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn-chrome inline-flex items-center justify-center px-7 py-3 min-h-[48px] rounded-sm text-sm sm:text-base font-bold tracking-wide cursor-pointer"
                  >
                    Request Free Quote
                  </button>
                  <span className="text-xs text-[#A8ABB0]">
                    Or call directly on{' '}
                    <a
                      href={contact.phoneHref}
                      className="text-white font-semibold underline underline-offset-4"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact Details + Serving Canberra Map Card */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Direct Contact Info Card */}
            <div className="rounded-md border border-white/15 bg-[#141414] p-6 space-y-5">
              {/* Click-to-Call & SMS Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={contact.phoneHref}
                  className="btn-chrome inline-flex items-center justify-center gap-2 px-4 min-h-[46px] rounded-sm text-sm font-bold whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call {contact.phoneDisplay}</span>
                </a>
                <a
                  href={contact.smsHref}
                  className="inline-flex items-center justify-center gap-2 px-4 min-h-[46px] rounded-sm border border-white/25 bg-[#0A0A0A] text-white hover:bg-[#1C1C1C] hover:border-white/50 transition-colors text-sm font-semibold whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-[#C4C8CD]" aria-hidden="true" />
                  <span>Text Us</span>
                </a>
              </div>

              {/* Email, Location, Hours */}
              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-[#C4C8CD] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A8ABB0]">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white hover:underline underline-offset-4 break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-[#C4C8CD] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A8ABB0]">
                      Location
                    </p>
                    <p className="text-white">
                      {contact.isMobileService
                        ? `Mobile Car Detailing — ${contact.cityRegion}`
                        : contact.streetAddress}
                    </p>
                    <p className="text-xs text-[#A8ABB0] mt-0.5">
                      {contact.serviceAreaNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-[#C4C8CD] shrink-0" aria-hidden="true" />
                  <div className="w-full">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A8ABB0] mb-1">
                      Hours
                    </p>
                    <dl className="space-y-1 text-xs sm:text-sm">
                      {contact.hours.map((row) => (
                        <div key={row.days} className="flex justify-between gap-4">
                          <dt className="text-[#A8ABB0]">{row.days}</dt>
                          <dd className="text-white font-medium tabular-nums">{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="text-[11px] text-[#8E939A] mt-1.5">
                      {contact.hoursNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A8ABB0]">
                  Follow Us
                </span>
                <div className="flex items-center gap-2">
                  {contact.socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (${social.handle})`}
                      title={`${social.label}: ${social.handle}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-sm border border-white/20 bg-[#0A0A0A] text-[#C4C8CD] hover:text-white hover:border-white/50 transition-colors"
                    >
                      <SocialIcon id={social.id} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Styled "Serving Canberra" Map SVG Card (+ optional real-address iframe) */}
            <div className="relative rounded-md border border-white/15 bg-[#141414] overflow-hidden flex flex-col justify-between">
              <div className="relative h-44 w-full bg-[#09090B]">
                {/* Styled Canberra Map SVG always present as crisp fallback */}
                <svg
                  viewBox="0 0 440 190"
                  className="h-full w-full block"
                  role="img"
                  aria-label="Map illustration highlighting Canberra, ACT service area"
                >
                  <defs>
                    <radialGradient id="canberra-glow" cx="50%" cy="50%" r="55%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
                      <stop offset="70%" stopColor="#8E939A" stopOpacity="0.04" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="440" height="190" fill="#09090B" />
                  <circle cx="220" cy="95" r="140" fill="url(#canberra-glow)" />

                  {/* Canberra geometric avenues & arterial lines */}
                  <g stroke="#2C2F36" strokeWidth="1.2">
                    <line x1="0" y1="45" x2="440" y2="45" />
                    <line x1="0" y1="95" x2="440" y2="95" />
                    <line x1="0" y1="145" x2="440" y2="145" />
                    <line x1="90" y1="0" x2="90" y2="190" />
                    <line x1="220" y1="0" x2="220" y2="190" />
                    <line x1="350" y1="0" x2="350" y2="190" />
                    <line x1="30" y1="180" x2="220" y2="95" stroke="#3D414A" strokeWidth="1.6" />
                    <line x1="410" y1="175" x2="220" y2="95" stroke="#3D414A" strokeWidth="1.6" />
                    <line x1="220" y1="95" x2="220" y2="12" stroke="#4D525D" strokeWidth="1.6" />
                  </g>

                  {/* Lake Burley Griffin stylized ribbon */}
                  <path
                    d="M 40 118 C 110 105, 165 130, 220 116 C 280 102, 340 124, 410 108"
                    fill="none"
                    stroke="#5A5E64"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.38"
                  />

                  {/* Parliamentary / Civic hex ring */}
                  <circle cx="220" cy="95" r="34" fill="none" stroke="#8E939A" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

                  {/* Chrome Location Pin */}
                  <g transform="translate(220, 82)">
                    <circle cx="0" cy="13" r="10" fill="rgba(255,255,255,0.12)" />
                    <path
                      d="M0 -14c-6.1 0-11 4.9-11 11 0 7.7 11 18 11 18s11-10.3 11-18c0-6.1-4.9-11-11-11Z"
                      fill="#F2F2F2"
                      stroke="#0A0A0A"
                      strokeWidth="1.5"
                    />
                    <circle cx="0" cy="-3" r="3.6" fill="#0A0A0A" />
                  </g>

                  <text
                    x="18"
                    y="26"
                    fill="#E2E5E9"
                    fontFamily="'Exo 2', sans-serif"
                    fontWeight="700"
                    fontStyle="italic"
                    fontSize="12"
                    letterSpacing="2.2"
                  >
                    SERVING CANBERRA, ACT
                  </text>
                </svg>

                {/* Optional keyless Google Maps iframe activated only when a real street address is configured */}
                {contact.useLiveMapIframe && (
                  <iframe
                    title="Mad Detailing Canberra Location Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      contact.mapQueryAddress
                    )}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                )}
              </div>

              <div className="px-5 py-3.5 border-t border-white/10 flex items-center justify-between gap-3 bg-[#141414]">
                <span className="text-xs font-medium text-[#C4C8CD]">
                  {contact.cityRegion}
                </span>
                <a
                  href={contact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 rounded-sm border border-white/25 text-xs font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
