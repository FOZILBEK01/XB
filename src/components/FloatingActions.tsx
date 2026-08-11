import React from 'react';
import { Phone, QrCode, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface FloatingActionsProps {
  onOpenQR: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQR }) => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-3 pointer-events-none">
      <div className="bg-[#120804]/95 backdrop-blur-md border border-[#3D1A0B] p-2 rounded-2xl shadow-2xl flex items-center gap-1.5 pointer-events-auto">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="floating-call-btn"
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E63900] hover:from-[#FF6611] hover:to-[#FF3300] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF5500]/30 active:scale-95 transition-all whitespace-nowrap"
        >
          <Phone className="w-4 h-4 fill-white flex-shrink-0" />
          <span>Qo&apos;ng&apos;iroq qilish</span>
        </a>

        {/* Google Maps Direct */}
        <a
          href={BUSINESS_INFO.googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Google Xarita"
          id="floating-google-map-btn"
          className="py-3 px-3.5 rounded-xl bg-[#261107] hover:bg-[#38180A] border border-[#52240E] text-[#FF7A00] hover:text-white flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer text-xs font-bold"
        >
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>Xarita</span>
        </a>

        {/* QR Code Action Button */}
        <button
          onClick={onOpenQR}
          title="QR Vizitka"
          id="floating-qr-btn"
          className="p-3 rounded-xl bg-[#261107] hover:bg-[#38180A] border border-[#52240E] text-amber-200/70 hover:text-white flex items-center justify-center active:scale-95 transition-all cursor-pointer"
        >
          <QrCode className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
