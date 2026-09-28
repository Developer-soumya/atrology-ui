import React, { useState, useEffect } from "react";

import {
  Menu,
  X,
  Phone,
  ChevronRight,
  Sparkles,
  Compass,
  Moon,
  Sun,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSign, setActiveSign] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="min-h-screen bg-[#070814] text-slate-100 font-sans relative select-none">
      {/* Dynamic Cosmic Background */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Deep space gradients */}

        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-pink-900/20 rounded-full blur-[160px]" />

        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-900/25 rounded-full blur-[120px]" />

        {/* Twinkling Stars */}

        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        {/* HEADER / NAVIGATION AREA */}

        <header className="pt-6 pb-4">
          {/* Top Bar: Brand Logo + Phone + CTA */}
          <div className="flex items-center justify-between p-7">
            {/* Logo */}

            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                {/* Crescent Moon Icon */}

                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[#e93b77] fill-current transform group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z" />
                </svg>

                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping" />
              </div>

              <span className="text-3xl font-serif tracking-[0.2em] font-light text-white uppercase group-hover:text-pink-200 transition-colors">
                V E D I
              </span>
            </div>

            {/* Right Header Controls (Desktop) */}

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-2xl tracking-wide font-medium">
                <span className="text-[#e93b77] font-bold">8 800</span>
                <span className="text-slate-200">353-24-55</span>
              </div>

              <button className="relative inline-flex items-center justify-center px-6 py-4 text-xs uppercase tracking-widest font-semibold text-white rounded-full border border-pink-500/60 bg-pink-950/20 hover:bg-pink-600 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(233,59,119,0.6)]">
                Book Reading Now
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}

            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* Secondary Nav Links & Social Icons */}
          <nav className="hidden md:flex w-screen relative left-1/2 -translate-x-1/2 bg-black/20">
            <div className="w-full max-w-[1300px] mx-auto px-7 py-8 flex items-center justify-between">
              <ul className="flex items-center space-x-8 text-sm font-medium tracking-wider text-slate-300">
                {[
                  {
                    name: "Home",
                    items: ["Welcome", "About Us", "Our Story"],
                  },
                  {
                    name: "Blog",
                    items: [
                      "Astrology",
                      "Zodiac Signs",
                      "Tarot Reading",
                      "Spirituality",
                    ],
                  },
                  {
                    name: "Features",
                    items: [
                      "Daily Horoscope",
                      "Birth Chart",
                      "Compatibility",
                      "Moon Signs",
                    ],
                  },
                  {
                    name: "Pages",
                    items: ["About Us", "Services", "Pricing", "Testimonials"],
                  },
                  {
                    name: "Gallery",
                    items: ["Astrology", "Events", "Meditation", "Our Moments"],
                  },
                  {
                    name: "Contact",
                    items: ["Contact Us", "Book Reading", "FAQ", "Support"],
                  },
                ].map((item, idx) => (
                  <li
                    key={item.name}
                    className="relative group flex items-center cursor-pointer"
                  >
                    {/* Nav Item */}
                    <div className="flex items-center">
                      <span
                        className={`${
                          idx === 0
                            ? "text-[#e93b77]"
                            : "text-slate-300 group-hover:text-pink-400"
                        } transition-colors duration-300`}
                      >
                        {item.name}
                      </span>

                      <ChevronRight
                        className={`w-3.5 h-3.5 ml-1 transition-all duration-300 ${
                          idx === 0
                            ? "text-[#e93b77]"
                            : "text-slate-500 group-hover:text-pink-400 group-hover:rotate-90"
                        }`}
                      />
                    </div>

                    {/* Hover Dropdown */}
                    <div
                      className="
              absolute
              left-0
              top-full
              pt-5
              z-50
              opacity-0
              invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-300
            "
                    >
                      <div
                        className="
                w-56
                rounded-xl
                bg-[#0b0c1c]/95
                backdrop-blur-xl
                shadow-[0_15px_50px_rgba(0,0,0,0.5)]
                p-3
              "
                      >
                        {/* Small top glow */}
                        <div className="absolute top-4 left-6 w-10 h-[2px] bg-[#e93b77] rounded-full shadow-[0_0_10px_#e93b77]" />

                        <ul className="pt-3 space-y-1">
                          {item.items.map((subItem) => (
                            <li
                              key={subItem}
                              className="
                      flex
                      items-center
                      justify-between
                      px-3
                      py-2.5
                      rounded-lg
                      text-slate-400
                      hover:text-white
                      hover:bg-pink-500/10
                      hover:pl-4
                      transition-all
                      duration-200
                    "
                            >
                              <span>{subItem}</span>

                              <ChevronRight
                                size={14}
                                className="
                        text-slate-600
                        group-hover:text-pink-400
                        transition-colors
                      "
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 text-slate-400">
                {/* Facebook */}
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 4.948 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618-6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          {/* Mobile Dropdown Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-5 bg-slate-900/95 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
              <ul className="space-y-3">
                {[
                  "Home",
                  "Blog",
                  "Features",
                  "Pages",
                  "Gallery",
                  "Contact",
                ].map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-1 text-slate-200 hover:text-pink-400 cursor-pointer border-b border-slate-800/50 pb-2"
                  >
                    <span
                      className={
                        idx === 0 ? "text-[#e93b77] font-semibold" : ""
                      }
                    >
                      {item}
                    </span>

                    <ChevronRight size={16} className="text-slate-500" />
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-col space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} className="text-[#e93b77]" />
                  <span className="text-[#e93b77] font-bold">8 800</span>
                  <span className="text-slate-200">353-24-55</span>
                </div>

                <button className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-white rounded-full bg-gradient-to-r from-pink-600 to-pink-500 shadow-lg shadow-pink-600/30">
                  Book Reading Now
                </button>
              </div>
            </div>
          )}
        </header>

        {/* HERO MAIN CONTENT SECTION */}

        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
          {/* Left Text Content */}

          <div className="lg:col-span-5 space-y-7 z-10 text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-slate-200 text-2xl font-serif font-medium tracking-wide block">
                Sun Signs
              </span>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
                There are 12 signs of the zodiac, each one taking up 30 degrees
                in your birth chart, making a complete 360 degree circle
              </p>
            </div>

            {/* Accent Line with Glow */}

            <div className="flex items-center justify-center lg:justify-start pt-1 pb-2">
              <div className="h-[2px] w-24 bg-gradient-to-r from-slate-400 to-transparent relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[3px] bg-[#439cfb] rounded-full shadow-[0_0_8px_#439cfb]" />
              </div>
            </div>

            {/* Main Headline */}

            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-sans font-extrabold tracking-tight">
                <span className="block text-[#439cfb] drop-shadow-[0_0_20px_rgba(67,156,251,0.5)]">
                  Ultimate
                </span>

                <span className="block text-[#439cfb] drop-shadow-[0_0_20px_rgba(67,156,251,0.5)]">
                  Guide
                </span>
              </h1>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-slate-100 pt-2 tracking-wide">
                To Astrology
              </h2>
            </div>

            {/* Action CTA Button */}

            <div className="pt-4">
              <button className="px-9 py-4 bg-gradient-to-r from-[#e93b77] to-[#d62860] hover:from-[#f44783] hover:to-[#e93b77] text-base font-medium rounded-full shadow-[0_0_25px_rgba(233,59,119,0.5)] hover:shadow-[0_0_35px_rgba(233,59,119,0.8)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 mx-auto lg:mx-0">
                <span>Let's Begin</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Zodiac Graphic Wheel */}

          {/* Right Column: Spinning Horoscope Image */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative my-8 lg:my-0">
            {/* Cosmic Glow */}
            <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-pink-600/20 via-indigo-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Horoscope Image */}
            <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:w-[620px] lg:h-[620px] flex items-center justify-center">
              {/* Outer Glow Ring */}
              <div className="absolute inset-4 rounded-full border border-pink-500/20 shadow-[0_0_60px_rgba(233,59,119,0.15)]" />

              {/* Spinning Horoscope */}
              <img
                src="https://vedi.codelayers.net/images/2020/09/03/horoscope.png"
                alt="Astrology Horoscope Wheel"
                className="
        relative
        w-full
        h-full
        object-contain
        animate-[spin_60s_linear_infinite]
        drop-shadow-[0_0_25px_rgba(233,59,119,0.25)]
      "
              />

              {/* Center Glow */}
              <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-pink-500/10 blur-2xl pointer-events-none" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
