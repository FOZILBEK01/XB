import React from 'react';
import { 
  Check, 
  Sparkles, 
  Truck, 
  Flame, 
  Utensils, 
  Coffee, 
  CreditCard, 
  Users, 
  Baby, 
  Car 
} from 'lucide-react';
import { RESTAURANT_FEATURES } from '../data/content.ts';

export const FeaturesSection: React.FC = () => {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'services': return <Truck className="w-4 h-4 text-[#FF5500]" />;
      case 'popularity': return <Flame className="w-4 h-4 text-[#FF5500]" />;
      case 'offers': return <Sparkles className="w-4 h-4 text-[#FF5500]" />;
      case 'dining': return <Utensils className="w-4 h-4 text-[#FF5500]" />;
      case 'atmosphere': return <Coffee className="w-4 h-4 text-[#FF5500]" />;
      case 'payments': return <CreditCard className="w-4 h-4 text-[#FF5500]" />;
      default: return <Sparkles className="w-4 h-4 text-[#FF5500]" />;
    }
  };

  return (
    <section className="py-6 px-4 max-w-md mx-auto" id="features-section">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5 fill-[#FF5500]" />
          <span>Qulayliklar & Xizmatlar</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight font-['Bebas_Neue',sans-serif] uppercase">
          XUMO BURGER HAQIDA
        </h2>
        <p className="text-xs text-amber-100/60 mt-0.5">
          Mijozlarimiz uchun yaratilgan barcha shart-sharoit va xizmatlar
        </p>
      </div>

      {/* Feature Groups Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {RESTAURANT_FEATURES.map((group) => (
          <div
            key={group.id}
            id={`feature-card-${group.id}`}
            className="p-3.5 rounded-2xl bg-[#140B06] border border-[#2B140A] hover:border-[#4A220F] transition-all flex flex-col gap-2.5 shadow-sm"
          >
            {/* Title */}
            <div className="flex items-center gap-2 border-b border-[#241007] pb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center">
                {getGroupIcon(group.id)}
              </div>
              <h3 className="font-bold text-white text-xs sm:text-sm">
                {group.title}
              </h3>
            </div>

            {/* Items List matching screenshots */}
            <ul className="space-y-1.5">
              {group.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-amber-100/80">
                  <span className="w-4 h-4 rounded-full bg-[#291308] border border-[#FF5500]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#FF7A00]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
