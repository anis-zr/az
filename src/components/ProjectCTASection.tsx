import React from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  FileUp,
  MessageCircle,
  Mail,
  Sparkles,
  FileCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { CONTACT_CONFIG } from "@/config/contact"
import { cn } from "@/lib/utils"

export const ProjectCTASection = () => {
  const shouldReduceMotion = useReducedMotion()

  // WhatsApp link with prefilled file sending message
  const sendFilesWhatsAppUrl = CONTACT_CONFIG.whatsapp.getUrl(
    "Hi AZ Digital Services, I would like to send my files and discuss a project."
  )

  // Direct email link with prefilled subject
  const sendFilesEmailUrl = `mailto:${CONTACT_CONFIG.email.address}?subject=${encodeURIComponent(
    "Project Inquiry — AZ Digital Services"
  )}&body=${encodeURIComponent(
    "Hello AZ Digital Services,\n\nI have a project / files I would like to send and discuss with you.\n\nProject Overview:\nFile Types / Cloud Link:\nTimeline:\n\nThank you!"
  )}`

  return (
    <section
      id="project-cta"
      aria-label="Have a project in mind section"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0A0F1D]/90 via-[#0a142c]/85 to-[#0A0F1D]/95 backdrop-blur-2xl p-5 sm:p-10 lg:p-14 text-center shadow-[0_20px_60px_-15px_rgba(0,102,255,0.35)] overflow-hidden"
        >
          {/* Subtle cyber grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <Badge
              variant="default"
              className="mb-5 px-3.5 py-1 text-xs border-cyan-400/40 bg-cyan-950/40 text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400 animate-pulse" />
              <span>Turn Ideas Into Reality</span>
            </Badge>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a project in mind?
            </h2>

            {/* Subtitles as explicitly requested */}
            <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300">
              Send us your files or tell us what you need.
            </p>
            <p className="mt-1 text-base sm:text-lg text-slate-300 font-medium">
              We’ll help turn your idea into a digital solution.
            </p>

            {/* Multilingual line */}
            <div className="mt-3 space-y-1">
              <p dir="rtl" className="text-emerald-400 font-arabic text-base sm:text-lg font-semibold">
                أرسل ملفاتك أو أخبرنا بما تحتاج — نحول أفكارك إلى حلول رقمية
              </p>
              <p className="text-slate-400 italic text-xs sm:text-sm">
                Envoyez-nous vos fichiers ou dites-nous ce dont vous avez besoin.
              </p>
            </div>

            {/* Formats accepted chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>PDF / Word / Office</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>ZIP / RAR Archives</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Code & Cloud Links</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Media & Designs</span>
              </span>
            </div>

            {/* ======================================================== */}
            {/* CTA BUTTONS: Send Your Files + WhatsApp + Send us an Email */}
            {/* ======================================================== */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* PRIMARY CTA: Send Your Files */}
              <motion.a
                id="cta-send-files-btn"
                href={sendFilesWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send files to AZ Digital Services via WhatsApp"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "whatsapp", size: "lg" }),
                  "group relative w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-7 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.65)] border border-emerald-400/40 backdrop-blur-md transition-all duration-300"
                )}
              >
                <FileUp className="w-5 h-5" />
                <span>Send Your Files</span>
              </motion.a>

              {/* SECONDARY CTA: WhatsApp */}
              <motion.a
                id="cta-whatsapp-btn"
                href={sendFilesWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact AZ Digital Services on WhatsApp"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "group relative w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 text-emerald-300 hover:text-white backdrop-blur-md transition-all duration-300"
                )}
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
              </motion.a>

              {/* TERTIARY CTA: Send us an Email */}
              <motion.a
                id="cta-email-btn"
                href={sendFilesEmailUrl}
                aria-label="Send an email to AZ Digital Services"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  buttonVariants({ variant: "gmail", size: "lg" }),
                  "group relative w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 shadow-[0_4px_22px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.5)] border border-rose-400/40 backdrop-blur-md transition-all duration-300"
                )}
              >
                <Mail className="w-5 h-5" />
                <span>Send us an Email</span>
              </motion.a>
            </div>

            {/* Reassurance text */}
            <p className="mt-5 text-xs text-slate-400">
              ⚡ Typical response time: Within a few minutes on WhatsApp • Same-day review on Email
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
