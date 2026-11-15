import { useState } from 'react';
import { SITE_CONFIG } from './config/siteConfig';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState<string>(
    SITE_CONFIG.services.items[0].title
  );

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-semibold focus:rounded-sm"
      >
        Skip to main content
      </a>

      {/* Sticky Top Navigation (not counted as a section) */}
      <Navbar />

      {/* Main Content: Exactly 5 Sections */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 3: Why Choose Us + Our Work */}
        <WhyChooseUsSection />

        {/* Section 4: Reviews */}
        <ReviewsSection />

        {/* Section 5: Contact & Booking */}
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer (not counted as a section) */}
      <Footer />
    </div>
  );
}

export default App;
