import React from "react";
import { ChevronUp } from "lucide-react";

import {
  GiRam,
  GiBull,
  GiGemini,
  GiCancer,
  GiLion,
  GiVirgo,
  GiLibra,
  GiScorpio,
  GiSagittarius,
  GiCapricorn,
  GiAquarius,
  GiPisces,
} from "react-icons/gi";

const ZODIAC_CARDS = [
  { name: "Aries", icon: GiRam, dates: "Mar 21 - Apr 19" },
  { name: "Taurus", icon: GiBull, dates: "Apr 20 - May 20" },
  { name: "Gemini", icon: GiGemini, dates: "May 21 - Jun 20" },
  { name: "Cancer", icon: GiCancer, dates: "Jun 21 - Jul 22" },
  { name: "Leo", icon: GiLion, dates: "Jul 23 - Aug 22" },
  { name: "Virgo", icon: GiVirgo, dates: "Aug 23 - Sep 22" },
  { name: "Libra", icon: GiLibra, dates: "Sep 23 - Oct 22" },
  { name: "Scorpio", icon: GiScorpio, dates: "Oct 23 - Nov 21" },
  {
    name: "Sagittarius",
    icon: GiSagittarius,
    dates: "Nov 22 - Dec 21",
  },
  { name: "Capricorn", icon: GiCapricorn, dates: "Dec 22 - Jan 19" },
  { name: "Aquarius", icon: GiAquarius, dates: "Jan 20 - Feb 18" },
  { name: "Pisces", icon: GiPisces, dates: "Feb 19 - Mar 20" },
];

export default function ZodiacGridSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen bg-[#070814] text-white flex flex-col items-center justify-center px-6 lg:px-10 py-20 lg:py-24 overflow-hidden">
      {/* Background Star Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center space-y-14">
        {/* Header Title Section */}
        <div className="space-y-5">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#e93b77] tracking-wide leading-tight">
            Choose Your Zodiac Sign
          </h2>

          {/* Centered Accent Divider Line */}
          <div className="flex items-center justify-center pt-2 pb-2">
            <div className="h-[2px] w-20 sm:w-24 bg-[#e93b77]/60 relative">
              <div className="absolute left-1/2 -top-[1px] -translate-x-1/2 w-6 h-[4px] bg-[#e93b77] rounded-full shadow-[0_0_10px_#e93b77]" />
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            What's Your Sign? Read Your Daily
            <br className="hidden sm:block" />
            Horoscope Today
          </p>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 w-full max-w-6xl pt-4">
          {ZODIAC_CARDS.map((sign) => {
            const ZodiacIcon = sign.icon;

            return (
              <div
                key={sign.name}
                className="
                  relative
                  group
                  min-h-[140px]
                  sm:min-h-[150px]
                  lg:min-h-[150px]
                  bg-transparent
                  border
                  border-slate-800/80
                  hover:border-pink-500/50
                  px-5
                  py-8
                  sm:px-7
                  sm:py-10
                  lg:px-8
                  lg:py-12
                  flex
                  flex-col
                  items-center
                  justify-center
                  space-y-5
                  transition-all
                  duration-300
                  hover:bg-[#121435]/60
                  hover:shadow-[0_0_30px_rgba(233,59,119,0.15)]
                  cursor-pointer
                "
              >
                {/* Corner Framing Brackets */}
                <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t border-l border-slate-600 group-hover:border-pink-400 transition-colors" />

                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t border-r border-slate-600 group-hover:border-pink-400 transition-colors" />

                <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b border-l border-slate-600 group-hover:border-pink-400 transition-colors" />

                <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b border-r border-slate-600 group-hover:border-pink-400 transition-colors" />

                {/* Zodiac Icon */}
                <div
                  className="
                    text-5xl
                    sm:text-6xl
                    lg:text-7xl
                    text-slate-200
                    group-hover:text-pink-400
                    transform
                    group-hover:scale-110
                    transition-all
                    duration-300
                    leading-none
                  "
                >
                  <ZodiacIcon />
                </div>

                {/* Sign Name & Dates */}
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold tracking-wider text-[#439cfb] uppercase">
                    {sign.name}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-base text-slate-400 font-light">
                    {sign.dates}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
