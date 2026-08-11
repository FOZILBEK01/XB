import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { WORKING_SCHEDULE } from '../data/content.ts';

export const WorkingHoursCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Check current day and time (Tashkent UTC+5)
  const now = new Date();
  const utcDay = now.getUTCDay(); // 0 = Sunday
  const utcHours = now.getUTCHours();
  const uzbHours = (utcHours + 5) % 24;

  const isTodaySunday = utcDay === 0;
  const isCurrentlyOpen = !isTodaySunday && uzbHours >= 8 && uzbHours < 22;

  // Day names order in screenshot: Seshanba, Chorshanba, Payshanba, Juma, Shanba, Yakshanba, Dushanba
  const screenshotOrderedDays = [
    { dayName: 'Seshanba', dayIndex: 2, hours: '8:00 TO–10:00 TK', isClosed: false },
    { dayName: 'Chorshanba', dayIndex: 3, hours: '8:00 TO–10:00 TK', isClosed: false },
    { dayName: 'Payshanba', dayIndex: 4, hours: '8:00 TO–10:00 TK', isClosed: false },
    { dayName: 'Juma', dayIndex: 5, hours: '8:00 TO–10:00 TK', isClosed: false },
    { dayName: 'Shanba', dayIndex: 6, hours: '8:00 TO–10:00 TK', isClosed: false },
    { dayName: 'Yakshanba', dayIndex: 0, hours: 'Yopiq', isClosed: true },
    { dayName: 'Dushanba', dayIndex: 1, hours: '8:00 TO–10:00 TK', isClosed: false },
  ];

  return (
    <div className="w-full bg-[#130A05] border border-[#2D160B] rounded-2xl overflow-hidden shadow-lg" id="working-hours-card">
      {/* Header Button (Clickable Accordion) */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        id="working-hours-toggle-btn"
        className="w-full p-3.5 flex items-center justify-between hover:bg-[#1C0F08] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
            isCurrentlyOpen 
              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
              : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
          }`}>
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${isCurrentlyOpen ? 'text-emerald-400' : 'text-amber-400'}`}>
                {isCurrentlyOpen ? '● Ochiq' : '● Hozir dam olish'}
              </span>
              <span className="text-xs text-amber-100/70 font-medium">
                • {isCurrentlyOpen ? 'Yopiladi: 10:00 TK (22:00)' : 'Ochiladi: 8:00 TK'}
              </span>
            </div>
            <span className="text-[10px] text-amber-200/40">Ish jadvalini ko&apos;rish</span>
          </div>
        </div>

        <div className="text-amber-200/60 p-1">
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Schedule matching screenshot */}
      {isExpanded && (
        <div className="px-4 pb-3.5 pt-1 border-t border-[#261309] bg-[#0E0703]/60 animate-fade-in">
          <div className="divide-y divide-[#211007]">
            {screenshotOrderedDays.map((day) => {
              const isCurrentDay = utcDay === day.dayIndex;
              return (
                <div
                  key={day.dayName}
                  className={`py-2 flex items-center justify-between text-xs ${
                    isCurrentDay ? 'font-bold text-[#FFA366]' : 'text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {isCurrentDay && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />}
                    <span>{day.dayName}</span>
                    {isCurrentDay && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-[#FF5500]/20 text-[#FF7A00] font-bold">
                        Bugun
                      </span>
                    )}
                  </div>
                  <span className={day.isClosed ? 'text-rose-400 font-semibold' : 'text-amber-100/80 font-mono'}>
                    {day.hours}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2 pt-2 text-center border-t border-[#211007]">
            <span className="text-[10px] text-amber-200/50">
              * 8:00 TO - 10:00 TK (Ertalabki 08:00 dan kechki 22:00 gacha)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
