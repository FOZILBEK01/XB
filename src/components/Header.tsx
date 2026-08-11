import React from 'react';
import { UtensilsCrossed, Send, QrCode, Phone, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';
import logoImg from '../assets/images/xumo_burger_logo_1786443431633.jpg';

interface HeaderProps {
  onOpenQR: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQR }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0C0704]/90 border-b border-[#2A150A] transition-all duration-300">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 group focus:outline-none"
          id="header-brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-[#120703] border border-[#FF8A33]/40 p-0.5 flex items-center justify-center shadow-md shadow-[#FF5500]/30 group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src={logoImg} 
              alt="Xumo Burger" 
              className="w-full h-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-wider text-white uppercase font-['Bebas_Neue',sans-serif]">
                XUMO BURGER
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF7A00] text-[9px] font-bold uppercase tracking-wider flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5 fill-[#FF5500] text-[#FF5500]" /> Fast Food
              </span>
            </div>
            <span className="text-[10px] text-amber-200/70 font-medium -mt-1 tracking-tight">
              Olmaliq shahri
            </span>
          </div>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* QR Code Action */}
          <button
            onClick={onOpenQR}
            title="QR Vizitka"
            id="header-qr-btn"
            className="w-9 h-9 rounded-xl bg-[#1A0E08] border border-[#3D1D0F] text-amber-200/80 hover:text-white hover:border-[#FF5500]/50 hover:bg-[#2A140A] flex items-center justify-center transition-colors shadow-sm"
          >
            <QrCode className="w-4 h-4" />
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            title="Qo'ng'iroq qilish"
            id="header-call-btn"
            className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF3300] hover:from-[#FF6611] hover:to-[#E62E00] text-white flex items-center justify-center shadow-md shadow-[#FF5500]/30 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 fill-white" />
          </a>
        </div>
      </div>
    </header>
  );
};

