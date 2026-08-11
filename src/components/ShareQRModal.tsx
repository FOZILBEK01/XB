import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Download, Copy, Check, Flame, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface ShareQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareQRModal: React.FC<ShareQRModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://xumo-burger.uz';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:BURGER;XUMO;;;',
      'FN:XUMO BURGER Olmaliq',
      'ORG:XUMO BURGER Fast Food',
      'TITLE:Fast food va taomlar yetkazish',
      `TEL;TYPE=CELL,VOICE:${BUSINESS_INFO.phoneRaw}`,
      `ADR;TYPE=WORK:;;${BUSINESS_INFO.addressFull};${BUSINESS_INFO.city};;Uzbekistan`,
      `URL:${BUSINESS_INFO.telegramUrl}`,
      `NOTE:${BUSINESS_INFO.slogan} - Burgerlar, lavash, hot-doglar va salqin ichimliklar.`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'XUMO_BURGER_Olmaliq.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#120804] border border-[#381B0E] rounded-3xl w-full max-w-sm p-6 shadow-2xl relative text-center animate-scale-up">
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-qr-modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#210F07] text-amber-200/60 hover:text-white flex items-center justify-center text-sm cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF5500] to-[#E63900] text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#FF5500]/30 text-2xl">
          🍔
        </div>
        <h3 className="text-xl font-black text-white mb-0.5 font-['Bebas_Neue',sans-serif] uppercase tracking-wide">
          XUMO BURGER VIZITKASI
        </h3>
        <p className="text-[11px] text-[#FFA366] font-semibold italic mb-1">
          {BUSINESS_INFO.slogan}
        </p>
        <p className="text-xs text-amber-200/50 mb-5">
          Kamera orqali skanerlang va kontaktni telefoningizga saqlang
        </p>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-2xl inline-block shadow-xl mx-auto mb-5 border-4 border-[#FF5500]/40">
          <QRCodeSVG
            value={currentUrl}
            size={180}
            level="H"
            includeMargin={false}
            imageSettings={{
              src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FF5500'%3E%3Ctext y='20' font-size='20'%3E%F0%9F%8D%94%3C/text%3E%3C/svg%3E",
              x: undefined,
              y: undefined,
              height: 28,
              width: 28,
              excavate: true,
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          {/* Download vCard Contact */}
          <button
            onClick={handleDownloadVCard}
            id="download-vcard-btn"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E63900] hover:from-[#FF6611] hover:to-[#FF3300] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#FF5500]/25 active:scale-98 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Kontaktni telefoningizga saqlash (.vcf)</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            id="copy-site-link-btn"
            className="w-full py-2.5 px-4 rounded-xl bg-[#1D0D06] hover:bg-[#2A140A] border border-[#3D1A0B] text-amber-200 font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Havola nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#FF7A00]" />
                <span>Havoladan nusxa olish</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
