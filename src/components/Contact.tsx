import React from "react"
import { motion, useReducedMotion } from "motion/react"
import { ContactCard } from "./ContactCard"
import { Badge } from "./ui/badge"
import { MessageSquare } from "lucide-react"
import {
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY_PLACEHOLDER,
  WHATSAPP_PHONE_PLACEHOLDER,
  GMAIL_LINK,
  GMAIL_EMAIL_PLACEHOLDER,
} from "@/config/contact"

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#050811] via-[#091024] to-[#050811]">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4 px-3.5 py-1 text-xs">
            <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            Direct Communication Channels
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact AZ Digital Services
          </h2>

          <div className="mt-3 space-y-1">
            <p className="text-cyan-300 font-arabic text-xl sm:text-2xl dir-rtl font-bold">
              تواصل معنا مباشرة عبر واتساب أو البريد الإلكتروني
            </p>
          </div>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Get in touch directly with our team to discuss your project, request a cost estimate, or ask questions. We respond promptly.
          </p>
        </div>

        {/* TWO Large Premium Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 25 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="contact-card-wrap h-full"
          >
            <ContactCard
              type="whatsapp"
              title="WhatsApp"
              subtitle="Direct Chat & Voice"
              description="Discuss your project directly with us. Get immediate answers, estimate costs, and brainstorm your requirements."
              buttonLabel="Contact on WhatsApp"
              actionUrl={WHATSAPP_LINK}
              displayInfo={WHATSAPP_DISPLAY_PLACEHOLDER}
              rawInfo={WHATSAPP_PHONE_PLACEHOLDER}
            />
          </motion.div>

          {/* Gmail Card */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 25 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="contact-card-wrap h-full"
          >
            <ContactCard
              type="gmail"
              title="Gmail"
              subtitle="Email & Document Dispatch"
              description="Send us your files, requirements, or project details. Ideal for sharing briefs, theses, datasets, and design specs."
              buttonLabel="Send us an Email"
              actionUrl={GMAIL_LINK}
              displayInfo={GMAIL_EMAIL_PLACEHOLDER}
              rawInfo={GMAIL_EMAIL_PLACEHOLDER}
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
