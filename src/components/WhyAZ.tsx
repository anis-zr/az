import React from "react"
import { motion, useReducedMotion } from "motion/react"
import { WHY_AZ_FEATURES } from "@/constants/content"
import { Badge } from "./ui/badge"
import {
  Lightbulb,
  Rocket,
  Palette,
  MessageCircle,
  Wrench,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react"

const featureIcons: Record<string, React.ElementType> = {
  Lightbulb,
  Rocket,
  Palette,
  MessageCircle,
  Wrench,
  MonitorSmartphone,
}

export const WhyAZ = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="why-az"
      dir="rtl"
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#050811] via-[#090f20] to-[#050811] font-arabic"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="default"
            className="mb-4 px-4 py-1.5 text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AZ Digital Services • Your Idea • Our Skills</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            لماذا <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">AZ</span>؟
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            لأن فكرتك تستحق حلولًا رقمية احترافية.
          </p>
        </div>

        {/* 6 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_AZ_FEATURES.map((feature, idx) => {
            const Icon = featureIcons[feature.icon] || Sparkles

            return (
              <motion.div
                key={feature.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 25 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                className="group relative rounded-3xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.25)] flex flex-col justify-between overflow-hidden"
              >
                {/* Accent hover glow */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top row with Icon and Emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${feature.accentColor}18`,
                        borderColor: `${feature.accentColor}40`,
                        color: feature.accentColor,
                        boxShadow: `0 0 20px -5px ${feature.accentColor}30`,
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <span className="text-2xl sm:text-3xl select-none filter drop-shadow-sm group-hover:scale-125 transition-transform duration-300">
                      {feature.emoji}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors text-right">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-right font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/80 group-hover:text-cyan-300 font-medium transition-colors">
                    جودة واحترافية رقمية
                  </span>
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-300 group-hover:shadow-[0_0_8px_#00F0FF]"
                    style={{ backgroundColor: feature.accentColor }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

