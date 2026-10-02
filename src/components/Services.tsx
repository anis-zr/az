import React, { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "motion/react"
import { SERVICES } from "@/constants/content"
import { ServiceCard } from "./ServiceCard"
import { Badge } from "./ui/badge"
import { Layers } from "lucide-react"

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const shouldReduceMotion = useReducedMotion()

  const categories = [
    { id: "all", label: "جميع الخدمات" },
    { id: "development", label: "💻 التطوير الرقمي" },
    { id: "design", label: "🎨 التصميم والإبداع" },
    { id: "marketing", label: "📱 التسويق الرقمي" },
    { id: "academic", label: "🎓 الخدمات الأكاديمية والمهنية" },
  ]

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header (Arabic & Professional) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="default" className="mb-4 px-3.5 py-1 text-xs border-cyan-400/30 bg-cyan-950/40 text-cyan-300">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            <span>قدرات وحلول رقمية شاملة</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-arabic tracking-tight">
            خدماتنا الرقمية
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-arabic leading-relaxed">
            من تطوير تطبيقات الهاتف والمواقع إلى التصميم الإبداعي، التسويق الرقمي، والخدمات الأكاديمية والمهنية — حلول متكاملة تترجم أفكارك إلى واقع.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[42px] px-3.5 sm:px-4 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-arabic font-medium inline-flex items-center justify-center transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Motion */}
        <motion.div
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="service-card-item h-full"
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
