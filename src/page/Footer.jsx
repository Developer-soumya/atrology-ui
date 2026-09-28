import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#070814] text-white pt-20 pb-10 px-6 sm:px-8 md:px-12 lg:px-20 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 items-start">
          {/* Brand Logo Column */}
          <div className="lg:col-span-5 flex items-start">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                {/* Crescent Moon Icon */}

                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-[#e93b77] fill-current transform group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z" />
                </svg>
              </div>

              <span className="text-3xl font-serif tracking-[0.2em] font-light text-white uppercase group-hover:text-pink-200 transition-colors">
                V E D I
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-lg sm:text-xl font-serif text-[#3b82f6] tracking-wide">
              Services
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-slate-400 font-light">
              <li>
                <a
                  href="#services"
                  className="hover:text-pink-400 transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#single-service"
                  className="hover:text-pink-400 transition-colors"
                >
                  Single Service
                </a>
              </li>
            </ul>
          </div>

          {/* About Me Column */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-lg sm:text-xl font-serif text-[#3b82f6] tracking-wide">
              About Me
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-slate-400 font-light">
              <li>
                <a
                  href="#homeblocks"
                  className="hover:text-pink-400 transition-colors"
                >
                  Homeblocks
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-pink-400 transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-lg sm:text-xl font-serif text-[#3b82f6] tracking-wide">
              Contact Info
            </h3>

            <div className="text-sm sm:text-base text-slate-400 font-light leading-relaxed space-y-2">
              <p>Odisha</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-300 hover:text-pink-400 hover:scale-125 transition-all duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-300 hover:text-pink-400 hover:scale-125 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-300 hover:text-pink-400 hover:scale-125 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-300 hover:text-pink-400 hover:scale-125 transition-all duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="text-slate-300 hover:text-pink-400 hover:scale-125 transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line Divider */}
        <div className="border-t border-slate-800/60 w-full my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-light tracking-wide">
            Developed by{" "}
            <a
              href="https://qlith.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e93b77] hover:text-pink-400 transition-colors duration-300 font-medium"
            >
              Qlith
            </a>
          </p>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed
          bottom-6
          right-6
          w-12
          h-12
          rounded-full
          bg-[#e93b77]
          hover:bg-pink-600
          hover:scale-110
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          transition-all
          duration-300
          z-50
        "
      >
        <ChevronUp size={25} />
      </button>
    </footer>
  );
}
