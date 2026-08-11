import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Send, 
  Navigation, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';
import { WorkingHoursCard } from './WorkingHoursCard.tsx';

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.addressFull);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section className="py-6 px-4 max-w-md mx-auto" id="contact-section">
      {/* Section Header */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-1">
          <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>Manzil & Joylashuv</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight font-['Bebas_Neue',sans-serif] uppercase">
          BOG&apos;LANISH VA XARITA
        </h2>
        <p className="text-xs text-amber-100/60 mt-0.5">
          Bizga tashrif buyuring yoki qo&apos;ng&apos;iroq qiling
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Working Hours Card (Accordion) */}
        <WorkingHoursCard />

        {/* Location Info Card */}
        <div className="p-4 rounded-2xl bg-[#140B06] border border-[#2B140A] shadow-md flex flex-col gap-3">
          {/* Main Address */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wide block">
                  Manzil
                </span>
                <p className="text-xs font-semibold text-white leading-relaxed">
                  {BUSINESS_INFO.addressFull}
                </p>
                <span className="text-[11px] text-amber-200/50 block mt-0.5">
                  {BUSINESS_INFO.city}, {BUSINESS_INFO.region}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              title="Manzilni nusxalash"
              id="copy-address-btn"
              className="p-2 rounded-xl bg-[#1F0E07] border border-[#3D1A0B] text-amber-200/70 hover:text-white hover:border-[#FF5500]/40 transition-colors cursor-pointer"
            >
              {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-between pt-2 border-t border-[#241007]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 fill-[#FF5500]" />
              </div>
              <div>
                <span className="text-[10px] text-amber-200/50 block">Telefon raqam</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-sm font-bold text-white hover:text-[#FF7A00] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyPhone}
              title="Raqamni nusxalash"
              id="copy-phone-btn"
              className="p-2 rounded-xl bg-[#1F0E07] border border-[#3D1A0B] text-amber-200/70 hover:text-white hover:border-[#FF5500]/40 transition-colors cursor-pointer"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Dedicated GOOGLE MAPS Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1C0D06] to-[#120703] border border-[#FF5500]/60 shadow-2xl overflow-hidden relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-sm shadow-inner">
                G
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Google Xarita (Google Maps)
                </h3>
                <span className="text-xs text-amber-200/60">Xumo Burger joylashuvi & yo&apos;nalish</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold">
              Google Maps
            </span>
          </div>

          {/* Embedded Large Google Map */}
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-[#471E0C] relative bg-[#1A0A04] mb-3.5 shadow-inner">
            <iframe 
              src={`https://maps.google.com/maps?q=40.8675388,69.6051907+(XUMO+BURGER)&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true}
              title="Google Maps Xumo Burger"
              className="w-full h-full opacity-95 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Google Map Action Buttons */}
          <div className="flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="open-google-map-btn"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E63900] hover:from-[#FF6611] hover:to-[#FF3300] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF5500]/25 active:scale-98 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Google Xaritasida ochish</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=40.8675388,69.6051907&destination_place_id=ChIJp2v-M5U3rj8RP3YTATMty68`}
              target="_blank"
              rel="noopener noreferrer"
              id="google-maps-route-btn"
              className="w-full py-3 px-4 rounded-xl bg-[#1F0E07] hover:bg-[#2B140A] border border-[#3D1A0B] text-amber-200 text-xs font-semibold flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <span>🚗 Yo&apos;nalish (Marshrut) tuzish</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
