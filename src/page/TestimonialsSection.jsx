import React, { useState } from "react";
import { ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Karen J. Hogan",
    role: "Happy Customer",
    banner:
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=800",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    quote:
      "Writing case studies was a daunting task for us. We didn't know where to begin or what questions to ask.",
  },
  {
    id: 2,
    name: "Sonny V. Love",
    role: "Happy Customer",
    banner:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    quote:
      "Writing case studies was a daunting task for us. We didn't know where to begin or what questions to ask.",
  },
  {
    id: 3,
    name: "Stephie J. Bellamy",
    role: "Happy Customer",
    banner:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    quote:
      "Writing case studies was a daunting task for us. We didn't know where to begin or what questions to ask.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative min-h-screen bg-[#070814] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#070814] to-[#070814] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#e93b77] tracking-wide mb-4">
          What Clients Are Saying
        </h2>

        {/* Divider */}
        <div className="w-16 h-[3px] bg-slate-500/70 my-3" />

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mb-14 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit, sed do eiusmod.
        </p>

        {/* Main Content */}
        <div className="relative w-full flex items-center justify-center">

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 lg:-left-8 z-20 text-slate-400 hover:text-white transition-all duration-300 p-3 hover:scale-125"
          >
            <ArrowLeft size={28} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-9 w-full max-w-6xl px-10 sm:px-14">

            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="
                  bg-[#0b0c1e]
                  border border-slate-800/80
                  rounded-sm
                  overflow-hidden
                  flex flex-col
                  items-center
                  shadow-xl
                  group
                  hover:border-pink-500/40
                  transition-all
                  duration-300
                "
              >

                {/* Banner */}
                <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                  <img
                    src={item.banner}
                    alt="Space Background"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c1e] via-transparent to-transparent opacity-80" />
                </div>

                {/* Avatar */}
                <div className="-mt-14 relative z-10 w-24 h-24 sm:w-26 sm:h-26 rounded-full p-1.5 bg-[#0b0c1e] border-2 border-white/20 shadow-lg">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="p-7 pt-4 flex flex-col items-center text-center space-y-2 flex-1">

                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-medium text-[#439cfb] group-hover:text-white transition-colors">
                    {item.name}
                  </h3>

                  {/* Role */}
                  <span className="text-xs sm:text-sm text-slate-400 font-light tracking-wide">
                    {item.role}
                  </span>

                  {/* Quote */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light pt-4 max-w-sm">
                    "{item.quote}"
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 lg:-right-8 z-20 text-slate-400 hover:text-white transition-all duration-300 p-3 hover:scale-125"
          >
            <ArrowRight size={28} />
          </button>

        </div>
      </div>
    </section>
  );
}

