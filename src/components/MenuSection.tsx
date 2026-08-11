import React, { useState } from 'react';
import { Flame, Sparkles, Check, Coffee } from 'lucide-react';
import { MENU_ITEMS } from '../data/content.ts';
import { MenuItem, MenuCategoryId } from '../types.ts';

interface MenuSectionProps {}

const CATEGORIES: { id: MenuCategoryId; label: string; icon: string }[] = [
  { id: 'all', label: 'Barchasi', icon: '🔥' },
  { id: 'burger', label: 'Burgerlar', icon: '🍔' },
  { id: 'lavash', label: 'Lavashlar', icon: '🌯' },
  { id: 'hotdog', label: 'Hot-Doglar', icon: '🌭' },
  { id: 'dessert', label: 'Desert', icon: '🍰' },
  { id: 'drinks', label: 'Ichimliklar', icon: '🥤' },
];

export const MenuSection: React.FC<MenuSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const getItemEmoji = (type: MenuItem['itemType']) => {
    switch (type) {
      case 'burger': return '🍔';
      case 'lavash': return '🌯';
      case 'hotdog': return '🌭';
      case 'dessert': return '🍰';
      case 'tea': return '🍵';
      case 'coffee': return '☕';
      case 'drink': return '🥤';
      default: return '🍔';
    }
  };

  return (
    <section className="py-6 px-4 max-w-md mx-auto" id="menu-section">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-1.5 text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-1">
            <Flame className="w-3.5 h-3.5 fill-[#FF5500]" />
            <span>Mazali Menyu</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight font-['Bebas_Neue',sans-serif] uppercase">
            XUMO BURGER TAOMLARI
          </h2>
        </div>
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#2A1208] border border-[#FF5500]/40 text-[#FFA366]">
          {MENU_ITEMS.length} xil taom
        </span>
      </div>

      {/* Categories Scroll */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`category-tab-${cat.id}`}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF5500] to-[#E63900] text-white shadow-md shadow-[#FF5500]/30 scale-[1.02]'
                  : 'bg-[#180D07] border border-[#381B0E] text-amber-100/70 hover:text-white hover:bg-[#26130A]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Menu Grid */}
      <div className="flex flex-col gap-2.5">
        {filteredItems.map((item) => {
          const isHotOrSpecial = item.badge === 'Maxsus Qazili' || item.badge === 'Xit savdo' || item.badge === 'Pishloqli';
          return (
            <div
              key={item.id}
              id={`menu-item-${item.id}`}
              className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 relative overflow-hidden ${
                isHotOrSpecial
                  ? 'bg-gradient-to-r from-[#1C0D06] to-[#261309] border-[#FF5500]/50 shadow-md shadow-[#FF5500]/10'
                  : 'bg-[#140B06] border-[#2E160B] hover:border-[#4D2412]'
              }`}
            >
              {/* Left Item Info */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                {/* Emoji Icon Avatar */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#29140A] to-[#170B05] border border-[#472210] flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                  {getItemEmoji(item.itemType)}
                </div>

                <div className="flex-1 min-w-0 pr-1">
                  {/* Name and Badge */}
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3 className="font-bold text-white text-sm sm:text-base leading-tight truncate">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md leading-none ${
                        item.badge === 'Maxsus Qazili'
                          ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300'
                          : item.badge === 'Xit savdo'
                          ? 'bg-red-500/20 border border-red-500/50 text-red-300'
                          : 'bg-[#FF5500]/20 border border-[#FF5500]/50 text-[#FF8533]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-amber-100/60 line-clamp-2 leading-relaxed mb-1">
                    {item.description}
                  </p>

                  {/* Price & Calories */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF7A00] font-black text-sm font-['Bebas_Neue',sans-serif] tracking-wide">
                      {item.formattedPrice}
                    </span>
                    {item.calories && (
                      <span className="text-[10px] text-amber-200/40">
                        • {item.calories}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Yoqimli ishtaha banner matching screenshot */}
      <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-[#241006] via-[#331708] to-[#241006] border border-[#FF5500]/40 text-center shadow-lg">
        <span className="text-base font-black text-[#FFA366] tracking-wide font-['Bebas_Neue',sans-serif] uppercase flex items-center justify-center gap-2">
          <span>✨</span> Yoqimli ishtaxa! <span>✨</span>
        </span>
      </div>
    </section>
  );
};
