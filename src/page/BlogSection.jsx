import React, { useEffect, useRef } from "react";

const ARTICLES_LIST = [
  {
    id: 1,
    title: "The Secret Revealed – Why Millennials Love Astrology",
    excerpt:
      "Aged around 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 - Millennials born 1980 through 1995, in their late twenties and early thirties, too",
    date: "28 MAY 2026",
  },
  {
    id: 2,
    title: "Born 1990-1995? Your Astrology for 2020-2029 is Calling",
    excerpt:
      "Aged around 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 - Millennials born 1980 through 1995, in their late twenties and early thirties, too",
    date: "28 MAY 2026",
  },
];

const GRID_ARTICLES = [
  {
    id: 1,
    title: "Study Astrology and Tarot for Yourself",
    excerpt:
      "Jupiter is in Capricorn from Tuesday 3rd May 2026 and brings new opportunities.",
    date: "28 MAY 2026",
    image:
      "https://vedi.codelayers.net/images/gallery/11.jpg",
  },
  {
    id: 2,
    title: "Wrong Birth Time Horoscopes",
    excerpt:
      "Discover how your birth time can influence your horoscope and astrological chart.",
    date: "28 MAY 2026",
    image:
      "https://vedi.codelayers.net/images/gallery/08.jpg",
  },
  {
    id: 3,
    title: "200 Astrology Secrets for 2025-26",
    excerpt:
      "Explore powerful astrology secrets and planetary movements for the coming years.",
    date: "28 MAY 2026",
    image:
      "https://vedi.codelayers.net/images/gallery/08.jpg",
  },
  {
    id: 4,
    title: "Understanding Your Birth Chart",
    excerpt:
      "Learn how planets, houses and zodiac signs work together to create your birth chart.",
    date: "30 MAY 2026",
    image:
      "https://vedi.codelayers.net/images/gallery/13.jpg",
  },
  {
    id: 5,
    title: "The Power of Planetary Transits",
    excerpt:
      "Understand how planetary movements can influence different areas of your life.",
    date: "02 JUN 2026",
    image:
      "https://vedi.codelayers.net/images/gallery/13.jpg",
  },
  {
    id: 6,
    title: "Astrology Guide for Beginners",
    excerpt:
      "A simple introduction to zodiac signs, planets, houses and important astrological terms.",
    date: "05 JUN 2026",
    image:
      "https://vedi.codelayers.net/images/gallery/13.jpg",
  },
  {
    id: 7,
    title: "Moon Signs and Emotional Energy",
    excerpt:
      "Discover the connection between your moon sign, emotions and personal expression.",
    date: "08 JUN 2026",
    image:
      "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "Tarot Reading and Astrology",
    excerpt:
      "Explore how tarot and astrology can be studied together for deeper self-reflection.",
    date: "10 JUN 2026",
    image:
      "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    title: "Zodiac Signs and Their Elements",
    excerpt:
      "Learn about fire, earth, air and water signs and the qualities associated with them.",
    date: "12 JUN 2026",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogSection() {
  const carouselRef = useRef(null);

  /* Automatic smooth scrolling */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const interval = setInterval(() => {
      const card = carousel.querySelector(".blog-card");

      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft + scrollAmount >= maxScroll - 5) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-[#070814] text-white py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-16">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
                Blog
              </span>

              <div className="h-[2px] w-12 bg-gradient-to-r from-slate-400 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#e93b77] tracking-wide">
              Last Materials In
              <br />
              Blog
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4 max-w-xs">
            <p className="text-slate-400 text-xs leading-relaxed text-left md:text-right font-light">
              On the leader of the pack. It is but hard to miss your charm, too,
              and everything about you seems to shout on.
            </p>

            <button className="px-6 py-2 text-[11px] uppercase tracking-widest font-semibold text-white rounded-full border border-pink-500/60 bg-pink-950/20 hover:bg-[#e93b77] hover:border-[#e93b77] transition-all duration-300 shadow-[0_0_15px_rgba(233,59,119,0.2)]">
              Start Shopping Now
            </button>
          </div>
        </div>

        {/* Top Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Hero Feature Image */}
          <div className="lg:col-span-7 relative min-h-[450px] sm:min-h-[520px] lg:min-h-[580px] rounded-sm overflow-hidden border border-slate-800/80 shadow-2xl">
            <img
              src="https://vedi.codelayers.net/images/2020/09/08/22.jpg"
              alt="Blog Hero Feature"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Article List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 divide-y divide-slate-800/60">
            {ARTICLES_LIST.map((article, idx) => (
              <div
                key={article.id}
                className={`${
                  idx > 0 ? "pt-10" : ""
                } space-y-5 group cursor-pointer`}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#3b82f6] group-hover:text-pink-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs sm:text-sm text-slate-400 font-mono tracking-wider">
                    {article.date}
                  </span>

                  <span className="text-sm sm:text-base text-slate-300 group-hover:text-pink-400 flex items-center font-light transition-colors">
                    Read More
                    <span className="ml-1.5 text-xl text-pink-400">›</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Blog Carousel */}
        <div className="relative pt-4">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-4
              z-10
              w-10
              h-10
              rounded-full
              border
              border-slate-700
              bg-[#0b0c1c]/95
              text-white
              hover:bg-pink-500
              hover:border-pink-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            ‹
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              px-1
              pb-2
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {GRID_ARTICLES.map((item) => (
              <div
                key={item.id}
                className="
                  blog-card
                  flex-none
                  w-full
                  sm:w-[calc((100%-24px)/2)]
                  lg:w-[calc((100%-48px)/3)]
                  snap-start
                  bg-[#0b0c1c]
                  border border-slate-800/80
                  rounded-sm
                  overflow-hidden
                  group
                  cursor-pointer
                  hover:border-pink-500/50
                  transition-all
                  duration-500
                  flex flex-col
                  justify-between
                  shadow-xl
                  hover:-translate-y-1
                "
              >
                {/* Image */}
                <div className="h-52 sm:h-56 lg:h-60 w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c1c] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h4 className="text-base sm:text-lg font-serif text-[#3b82f6] group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-5 sm:px-6 pb-5 pt-3 flex items-center justify-between border-t border-slate-800/40 mt-auto">
                  <span className="text-xs text-slate-400 font-mono tracking-wider">
                    {item.date}
                  </span>

                  <span className="text-xs sm:text-sm text-slate-300 group-hover:text-pink-400 flex items-center font-light transition-colors">
                    Read Now
                    <span className="ml-1 text-pink-400 text-lg">›</span>
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
