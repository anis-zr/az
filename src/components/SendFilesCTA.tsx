import React from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  FileUp,
  MessageCircle,
  Mail,
  FileCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { CONTACT_CONFIG } from "@/config/contact"
import { cn } from "@/lib/utils"

export const SendFilesCTA = () => {
  const shouldReduceMotion = useReducedMotion()

  const sendFilesWhatsAppUrl = CONTACT_CONFIG.whatsapp.getUrl(
    "Hello AZ Digital Services, I have files and project details I would like to send and discuss with you."
  )

  const sendFilesEmailUrl = CONTACT_CONFIG.email.getUrl(
    "Sending Project Files & Details — AZ Digital Services",
    "Hello AZ Digital Services,\n\nI have project files, specifications, or documents that I would like to send and discuss with you.\n\nProject Overview:\nFile Types attached / cloud link:\nTimeline:\n\nThank you!"
  )

  return (
    <div className="relative my-14 sm:my-18 rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-r from-blue-950/70 via-[#0A0F1D] to-purple-950/70 backdrop-blur-2xl p-7 sm:p-12 shadow-[0_15px_50px_-10px_rgba(0,102,255,0.35)]">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
        
        {/* Left Side: Headlines & Explanation */}
        <div className="max-w-2xl text-center lg:text-left">
          <Badge variant="default" className="mb-4 px-3.5 py-1 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            Direct File Dispatch & Consultation
          </Badge>

          {/* Big Headline */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a project in mind?
          </h3>

          {/* Subtitle */}
          <p className="mt-2 text-xl sm:text-2xl font-bold text-cyan-300">
            Send your files or tell us what you need.
          </p>

          {/* Multilingual Arabic / French touch */}
          <div className="mt-2 space-y-1">
            <p dir="rtl" className="text-emerald-400 font-arabic text-sm sm:text-base font-semibold">
              أرسل ملفاتك أو أخبرنا باحتياجك — نحول أفكارك إلى حلول رقمية
            </p>
          </div>

          {/* Description */}
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We turn your ideas into digital solutions. Whether you have complete project specifications, graduation thesis drafts, design briefs, or media assets, send them directly to us for immediate review.
          </p>

          {/* Formats accepted chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>PDF / Word / Office</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>ZIP / Archives</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Code & Cloud Links</span>
            </span>
          </div>
        </div>

        {/* Right Side: Three Large Action Buttons */}
        <div className="flex flex-col gap-3.5 w-full sm:w-auto shrink-0 min-w-[280px]">
          {/* 1. Send Your Files (via WhatsApp) */}
          <motion.a
            href={sendFilesWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className={cn(
              buttonVariants({ variant: "whatsapp", size: "lg" }),
              "w-full rounded-2xl justify-center font-bold text-base flex items-center gap-2.5 shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.65)] py-4"
            )}
          >
            <FileUp className="w-5 h-5" />
            <span>Send Your Files</span>
          </motion.a>

          {/* 2. Direct WhatsApp */}
          <motion.a
            href={CONTACT_CONFIG.whatsapp.getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full rounded-2xl justify-center font-bold text-base border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 text-emerald-300 hover:text-white flex items-center gap-2.5 py-4"
            )}
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </motion.a>

          {/* 3. Direct Email */}
          <motion.a
            href={sendFilesEmailUrl}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full rounded-2xl justify-center border-white/20 hover:border-cyan-400/50 bg-white/5 font-bold text-base text-slate-200 hover:text-white flex items-center gap-2.5 py-4"
            )}
          >
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>Send via Email</span>
          </motion.a>
        </div>

      </div>
    </div>
  )
}
