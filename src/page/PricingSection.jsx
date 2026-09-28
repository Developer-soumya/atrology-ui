import React from "react";
import { ChevronUp, Diamond, Gem, Sparkles } from "lucide-react";

const PLANS = [
  {
    id: 1,
    name: "Starter",
    subtitle: "Starting Business",
    price: "$25",
    period: "Per Month",
    highlighted: false,
    icon: <Diamond className="w-10 h-10 text-[#e93b77]" />,
    features: [
      "Ask One Question",
      "Half-Hour Reading",
      "Newborn / Child Reading",
      "Relationship Reading",
    ],
  },
  {
    id: 2,
    name: "Pro",
    subtitle: "Starting Business",
    price: "$73",
    period: "Per Month",
    highlighted: true,
    icon: <Sparkles className="w-10 h-10 text-white" />,
    features: [
      "Ask One Question",
      "Half-Hour Reading",
      "Newborn / Child Reading",
      "Relationship Reading",
    ],
  },
  {
    id: 3,
    name: "Business",
    subtitle: "Starting Business",
    price: "$109",
    period: "Per Month",
    highlighted: false,
    icon: <Gem className="w-10 h-10 text-[#439cfb]" />,
    features: [
      "Ask One Question",
      "Half-Hour Reading",
      "Newborn / Child Reading",
      "Relationship Reading",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative min-h-screen bg-[#070814] text-white flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-20 lg:py-24 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#070814] to-[#070814] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-5">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#e93b77] tracking-wide">
            Purchase Monthly Plan
          </h2>

          {/* Accent Line */}
          <div className="w-20 h-[3px] bg-slate-500/60 my-1" />

          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg">
            What's Your Sign? Read Your Daily Horoscope Today
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 w-full max-w-5xl items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-sm min-h-[500px] flex flex-col justify-between p-9 lg:p-10 text-center transition-all duration-300 shadow-2xl relative ${
                plan.highlighted
                  ? "bg-[#e93b77] text-white scale-105 z-10"
                  : "bg-[#0b0c1e] text-slate-200 border border-slate-800/80 hover:border-pink-500/40"
              }`}
            >
              {/* Icon & Title Area */}
              <div className="flex flex-col items-center space-y-4 pt-2">
                {/* Icon */}
                <div className="mb-3 flex items-center justify-center">
                  {plan.icon}
                </div>

                <h3
                  className={`text-3xl sm:text-4xl font-serif tracking-wide ${
                    plan.highlighted
                      ? "text-white"
                      : plan.id === 3
                        ? "text-[#439cfb]"
                        : "text-slate-100"
                  }`}
                >
                  {plan.name}
                </h3>

                <span
                  className={`text-sm sm:text-base font-light tracking-wide ${
                    plan.highlighted ? "text-pink-100" : "text-slate-400"
                  }`}
                >
                  {plan.subtitle}
                </span>
              </div>

              {/* Features List */}
              <ul className="my-12 space-y-5 text-sm sm:text-base font-light text-left inline-block mx-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span
                      className={`text-[11px] ${
                        plan.highlighted ? "text-pink-200" : "text-pink-500"
                      }`}
                    >
                      ▶
                    </span>

                    <span
                      className={
                        plan.highlighted ? "text-white" : "text-slate-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-center space-x-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
                  {plan.price}
                </span>

                <span
                  className={`text-xs sm:text-sm font-light leading-tight text-left ${
                    plan.highlighted ? "text-pink-100" : "text-slate-400"
                  }`}
                >
                  Per
                  <br />
                  Month
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
