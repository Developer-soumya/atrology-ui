import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Psychic Reading",
    image:
      "https://i.pinimg.com/1200x/fe/99/23/fe99232b7bbc3c8c06269680c77a4bfb.jpg",
  },
  {
    id: 2,
    title: "Birth Stone",
    image:
      "https://i.pinimg.com/736x/d7/b6/33/d7b63320a6504b1bda4daf98c3cbd57d.jpg",
  },
  {
    id: 3,
    title: "Transit Chart",
    image:
      "https://i.pinimg.com/736x/05/b2/17/05b217c763cf3695894a2639990fefe5.jpg",
  },
  {
    id: 4,
    title: "Natal Chart",
    image:
      "https://i.pinimg.com/736x/ea/b8/c6/eab8c6edc7a5ab13de33833096f66edd.jpg",
  },

];

export default function ServicesSection() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const card = container.querySelector(".service-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 16;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  // Smooth auto scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const card = container.querySelector(".service-card");

      if (!card) return;

      const cardWidth = card.offsetWidth + 16;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 5) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#070814] text-white flex items-center justify-center py-16 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Hero Feature Image */}
        <div className="lg:col-span-4 relative min-h-[500px] lg:min-h-[620px] w-full overflow-hidden flex items-end p-8">
          {/* Background Feature Image with subtle blur */}
          <img
            src="https://i.pinimg.com/736x/de/72/c4/de72c46d654d09dbe0c9d526795ee229.jpg"
            alt="Magic Feature"
            className="absolute inset-0 w-full h-full object-cover object-center blur-xs scale-105"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070814] via-transparent to-black/30" />

          {/* Navigation Buttons */}
          <div className="relative z-10 ml-auto flex items-center space-x-3">
            <button
              onClick={() => handleScroll("prev")}
              aria-label="Previous service"
              className="w-10 h-10 rotate-45 border border-pink-500/50 bg-[#0d0f22]/80 hover:bg-[#e93b77] hover:border-[#e93b77] text-white flex items-center justify-center transition-all duration-300 shadow-lg group"
            >
              <ChevronLeft
                size={18}
                className="-rotate-45 group-hover:scale-110 transition-transform"
              />
            </button>

            <button
              onClick={() => handleScroll("next")}
              aria-label="Next service"
              className="w-10 h-10 rotate-45 border border-pink-500/50 bg-[#0d0f22]/80 hover:bg-[#e93b77] hover:border-[#e93b77] text-white flex items-center justify-center transition-all duration-300 shadow-lg group"
            >
              <ChevronRight
                size={18}
                className="-rotate-45 group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-8 pl-4 lg:pl-0 pr-4 lg:pr-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/40 pb-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
                  Services
                </span>

                <div className="h-[2px] w-12 bg-gradient-to-r from-slate-400 to-transparent" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#e93b77] tracking-wide">
                Let's Make
                <br />
                Some Magic
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col items-start md:items-end space-y-4 max-w-xs">
              <p className="text-slate-400 text-xs leading-relaxed text-left md:text-right font-light">
                They will provide the best free horoscope astrology to you by
                analysing your sign.
              </p>

              <button className="px-6 py-2.5 text-[11px] uppercase tracking-widest font-semibold text-white rounded-full border border-pink-500/60 bg-pink-950/20 hover:bg-[#e93b77] hover:border-[#e93b77] transition-all duration-300 shadow-[0_0_15px_rgba(233,59,119,0.2)]">
                Read Reading Now
              </button>
            </div>
          </div>

          {/* Service Cards Slider Container */}
          <div
            ref={scrollRef}
            className="
      flex items-center
      space-x-5
      overflow-x-auto
      scroll-smooth
      snap-x snap-mandatory
      py-4
      scrollbar-hide
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
      will-change-transform
      touch-pan-x
    "
          >
            {SERVICES.map((item) => (
              <div
                key={item.id}
                className="
          service-card
          flex-none
          snap-start
          w-56 sm:w-60
          group
          cursor-pointer
          bg-[#0b0c1c]
          border border-slate-800/80
          rounded-sm
          overflow-hidden
          hover:border-pink-500/50
          transition-all
          duration-500
          shadow-xl
        "
              >
                {/* Image */}
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c1c] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Title */}
                <div className="p-4 bg-[#080a18] flex items-center justify-between border-t border-slate-800/60">
                  <span className="text-xs font-medium text-slate-200 group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </span>

                  <span className="text-[10px] text-slate-400 group-hover:text-white flex items-center font-light">
                    Read Now
                    <span className="ml-1 text-pink-400">›</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
