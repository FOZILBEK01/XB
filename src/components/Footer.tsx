import React from 'react';
import { Flame, Send, Phone, MapPin, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-8 pb-16 px-4 border-t border-[#261208] bg-[#0A0503] text-center" id="footer-section">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Brand */}
        <div className="flex items-center gap-2 mb-2" id="footer-brand">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF5500] to-[#E63900] flex items-center justify-center text-white text-base shadow-md shadow-[#FF5500]/25">
            🍔
          </div>
          <span className="text-xl font-black text-white tracking-wider uppercase font-['Bebas_Neue',sans-serif]">
            XUMO<span className="text-[#FF5500]">_</span>BURGER
          </span>
        </div>

        {/* Slogan */}
        <p className="text-xs font-semibold text-[#FF8533] italic mb-3">
          {BUSINESS_INFO.slogan}
        </p>

        {/* Quick Social & Maps */}
        <div className="flex items-center justify-center gap-2.5 my-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="p-2.5 rounded-xl bg-[#190C06] border border-[#381B0E] text-amber-200/80 hover:text-white hover:border-[#FF5500]/50 transition-colors"
            title="Qo'ng'iroq"
          >
            <Phone className="w-4 h-4 fill-[#FF5500] text-[#FF5500]" />
          </a>
          <a
            href={BUSINESS_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#190C06] border border-[#381B0E] text-amber-200/80 hover:text-white hover:border-[#FF5500]/50 transition-colors"
            title="Telegram"
          >
            <Send className="w-4 h-4 text-[#FF5500]" />
          </a>
          <a
            href={BUSINESS_INFO.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#190C06] border border-[#381B0E] text-amber-200/80 hover:text-white hover:border-[#FF5500]/50 transition-colors"
            title="Google Xarita"
          >
            <MapPin className="w-4 h-4 text-[#FF5500]" />
          </a>
        </div>

        {/* Address and hours */}
        <p className="text-[11px] text-amber-200/50 leading-relaxed mb-1">
          {BUSINESS_INFO.addressFull} • Tel: {BUSINESS_INFO.phone}
        </p>
        <p className="text-[11px] text-amber-200/40 leading-relaxed">
          Ish vaqti: 08:00 – 22:00 (Yakshanba yopiq)
        </p>

        {/* Copyright */}
        <p className="text-stone-600 text-[11px] mt-4 pt-3 border-t border-[#1C0E07] w-full">
          © 2026 XUMO BURGER Olmaliq. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};
