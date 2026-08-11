import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ShareQRModal } from './components/ShareQRModal.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0603] text-amber-50 flex flex-col selection:bg-[#FF5500] selection:text-white" id="top">
      {/* Background fiery radiant ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-b from-[#FF5500]/15 via-[#FF3300]/8 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-[-120px] w-[380px] h-[380px] bg-[#FF6600]/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-[15%] left-[-120px] w-[380px] h-[380px] bg-[#E62E00]/8 blur-[120px] rounded-full" />
      </div>

      {/* App Container */}
      <div className="relative z-10 flex flex-col flex-1 pb-20">
        {/* Header */}
        <Header 
          onOpenQR={() => setIsQRModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero 
            onScrollToMenu={handleScrollToMenu}
            onScrollToContact={handleScrollToContact}
          />

          {/* Section Divider */}
          <div className="max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#3D1A0B] to-transparent my-3" />

          {/* Fast Food Menu Section */}
          <MenuSection />

          {/* Section Divider */}
          <div className="max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#3D1A0B] to-transparent my-3" />

          {/* Features & Restaurant Info Section */}
          <FeaturesSection />

          {/* Section Divider */}
          <div className="max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#3D1A0B] to-transparent my-3" />

          {/* Contact & Google Map Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Mobile Floating Action Bar */}
      <FloatingActions 
        onOpenQR={() => setIsQRModalOpen(true)}
      />

      {/* QR Code & Share Modal */}
      <ShareQRModal 
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
}
