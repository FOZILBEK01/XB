import React from 'react';
import { Flame, ChevronDown, Phone, MapPin, Clock, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_INFO, WORKING_SCHEDULE } from '../data/content.ts';

interface HeroProps {
  onScrollToMenu: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu, onScrollToContact }) => {
  // Check if open now based on Tashkent time (UTC+5)
  const now = new Date();
  const utcHours = now.getUTCHours();
  const currentDay = now.getUTCDay(); // 0 = Sunday
  const uzbHours = (utcHours + 5) % 24;

  const isSunday = currentDay === 0;
  const isOpen = !isSunday && uzbHours >= 8 && uzbHours < 22;

  return (
    <section className="pt-6 pb-8 px-4 max-w-md mx-auto flex flex-col items-center text-center relative overflow-hidden" id="hero-section">
      {/* Background flame radiant glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#FF5500]/25 via-[#FF3300]/10 to-transparent blur-[100px] pointer-events-none rounded-full" />

      {/* Slogan Pill Badge */}
      <div 
        id="hero-slogan-badge"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2B1207] to-[#1F0A04] border border-[#FF5500]/50 text-[#FF8533] text-xs font-bold tracking-wide mb-5 shadow-lg shadow-[#FF5500]/15 backdrop-blur-sm animate-pulse"
      >
        <Flame className="w-4 h-4 fill-[#FF5500] text-[#FF5500]" />
        <span className="italic">O&apos;zgacha ta&apos;m — o&apos;zgacha sifat...</span>
      </div>

      {/* Hero Visual Card / Mascot */}
      <div className="relative mb-5 group">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#FF6B00] via-[#FF4500] to-[#CC2900] p-1 shadow-2xl shadow-[#FF5500]/30 border-2 border-[#FFA366]/40 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
          <div className="w-full h-full rounded-[22px] bg-[#120703]/90 flex flex-col items-center justify-center p-2 relative overflow-hidden">
            <span className="text-5xl sm:text-6xl drop-shadow-[0_4px_12px_rgba(255,100,0,0.6)] animate-bounce-subtle">
              🍔
            </span>
            <span className="text-[10px] font-black text-[#FFA366] uppercase tracking-widest mt-1 font-['Bebas_Neue',sans-serif]">
              XUMO BURGER
            </span>
          </div>
        </div>

        {/* Live Open / Closed indicator tag */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className={`px-3 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1.5 shadow-md backdrop-blur-md ${
            isOpen 
              ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-400' 
              : 'bg-[#2A1108]/90 border-amber-500/40 text-amber-300'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
            <span>{isOpen ? 'Hozir Ochiq • 22:00 gacha' : '8:00 – 22:00 (Yakshanba yopiq)'}</span>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 mt-3 font-['Bebas_Neue',sans-serif] uppercase">
        XUMO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#FF5500] to-[#FF3300]">BURGER</span>
      </h1>

      {/* Subtitle with Olmaliq mention */}
      <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-normal">
        Olmaliq shahridagi eng mazali burgerlar, sersuv lavashlar, qazili maxsus hot-doglar va salqin ichimliklar!
      </p>

      {/* CTA Buttons matching Flame Palette */}
      <div className="w-full flex flex-col gap-2.5">
        {/* View Menu CTA */}
        <button
          onClick={onScrollToMenu}
          id="hero-btn-menu"
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] via-[#FF6A00] to-[#FF4400] hover:from-[#FF6611] hover:to-[#FF3300] text-white font-bold text-sm sm:text-base active:scale-[0.99] transition-all shadow-xl shadow-[#FF5500]/25 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🍔 Mazali Menyuni Ko&apos;rish</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>

        <div className="grid grid-cols-2 gap-2 w-full">
          {/* Quick Call */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="hero-btn-call"
            className="py-3 px-3 rounded-2xl bg-[#1C0E07] border border-[#421D0E] text-amber-200 hover:text-white hover:border-[#FF5500]/50 hover:bg-[#2B140A] active:scale-[0.99] transition-all font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF5500] fill-[#FF5500]" />
            <span>Qo&apos;ng&apos;iroq qilish</span>
          </a>

          {/* Google Maps Direct */}
          <a
            href={BUSINESS_INFO.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-btn-google-map"
            className="py-3 px-3 rounded-2xl bg-[#1C0E07] border border-[#421D0E] text-amber-200 hover:text-white hover:border-[#FF5500]/50 hover:bg-[#2B140A] active:scale-[0.99] transition-all font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Google Xarita</span>
          </a>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="grid grid-cols-3 gap-2 w-full mt-7 pt-5 border-t border-[#2A140A]">
        <div className="flex flex-col items-center">
          <span className="text-[#FF7A00] font-bold text-base sm:text-lg">100% Halol</span>
          <span className="text-amber-200/60 text-[11px] mt-0.5">Sof go&apos;sht</span>
        </div>
        <div className="flex flex-col items-center border-x border-[#2A140A]">
          <span className="text-[#FF7A00] font-bold text-base sm:text-lg">Issiq & Tez</span>
          <span className="text-amber-200/60 text-[11px] mt-0.5">Yetkazish bor</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#FF7A00] font-bold text-base sm:text-lg">Qazili</span>
          <span className="text-amber-200/60 text-[11px] mt-0.5">Maxsus ta&apos;m</span>
        </div>
      </div>
    </section>
  );
};

