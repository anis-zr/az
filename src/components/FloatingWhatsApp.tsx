import React, { useState, useEffect } from "react"
import { motion, useReducedMotion } from "motion/react"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/config/contact"

export const FloatingWhatsApp = () => {
  const shouldReduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show quickly after slight scroll (> 80px) or on touch
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    // Set initial
    if (window.scrollY > 80) setVisible(true)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <aside
      aria-label="Direct WhatsApp contact floating action"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50"
    >
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.08, y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.75)] border border-emerald-300/40"
      >
        {/* Breathing pulse ring */}
        {!shouldReduceMotion && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500/35 animate-ping pointer-events-none" />
        )}

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" />

        {/* Desktop Tooltip bubble on hover */}
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0A0F1D] text-xs font-semibold text-emerald-300 whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>
    </aside>
  )
}
