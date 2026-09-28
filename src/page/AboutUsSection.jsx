import React from "react";
import { ChevronUp } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="relative min-h-screen bg-[#070814] text-white flex items-center justify-center px-8 lg:px-12 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        {/* Left Side: Diamond Gallery Grid */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[620px]">
          {/* Main Large Diamond */}
          <div className="absolute w-96 h-96 sm:w-[300px] sm:h-[300px] rotate-45 border border-slate-500/60 p-2 z-20">
            {/* Inner Image Container */}
            <div className="w-full h-full overflow-hidden bg-slate-900">
              <div className="-rotate-45 w-[140%] h-[140%] -top-[20%] -left-[20%] relative">
                <img
                  src="https://i.pinimg.com/736x/36/d1/33/36d133d60e678d1888838aaa7778fe58.jpg"
                  alt="Astrologer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Bottom Left Small Diamond */}
          <div className="absolute -bottom-2  left-2 sm:left-10 w-52 h-52 rotate-45 overflow-hidden z-10 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="-rotate-45 w-[140%] h-[140%] -top-[20%] -left-[20%] relative">
              <img
                src="https://i.pinimg.com/736x/26/1a/62/261a62bf4455bffdf4aedd9d80bc2831.jpg"
                alt="Portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Bottom Right Small Diamond */}
          <div className="absolute -bottom-3 right-2 sm:right-13 w-52 h-52 rotate-45 overflow-hidden z-10 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="-rotate-45 w-[140%] h-[140%] -top-[20%] -left-[20%] relative">
              <img
                src="https://i.pinimg.com/1200x/71/12/ac/7112acb6fb49fea1abe6c7ffdab100cc.jpg"
                alt="Astrology Session"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="lg:col-span-6 space-y-8 text-left z-20">
          {/* Subheading with line */}
          <div className="flex items-center space-x-4">
            <span className="text-slate-300 text-lg font-medium tracking-wide">
              About Us
            </span>

            <div className="h-[2px] w-24 bg-gradient-to-r from-slate-400 to-transparent" />
          </div>

          {/* Headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#e93b77] tracking-wide leading-tight">
            We Are Welcome
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            <p>
              We have the World Famous Astrologers on the Best Astrology Website
              in India, practising both Indian Astrology and Western Astrology
              for astrology today.
            </p>

            <p>
              They will provide the best free horoscope astrology to you by
              analysing your birth chart and your astrology sign.
            </p>
          </div>

          {/* Experience Counter Section */}
          <div className="flex items-center space-x-6 pt-4">
            <span className="text-7xl sm:text-8xl font-extrabold text-[#439cfb] tracking-tight drop-shadow-[0_0_20px_rgba(67,156,251,0.4)]">
              25
            </span>

            <div className="flex flex-col text-lg sm:text-xl font-medium text-slate-100 leading-snug">
              <span>Years Of</span>
              <span>Experience</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="px-10 py-4 text-sm uppercase tracking-widest font-semibold text-white rounded-full border border-pink-500/60 bg-pink-950/20 hover:bg-[#e93b77] hover:border-[#e93b77] transition-all duration-300 shadow-[0_0_20px_rgba(233,59,119,0.2)] hover:shadow-[0_0_30px_rgba(233,59,119,0.6)]">
              Book Reading Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
