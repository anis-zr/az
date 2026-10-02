import React from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"
import { buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import {
  MessageCircle,
  Mail,
  ArrowDown,
  Sparkles,
  Code2,
  Smartphone,
  Layers,
  Palette,
  CheckCircle2,
  FileUp,
  Zap,
} from "lucide-react"
import { BRAND } from "@/constants/content"
import { CONTACT_CONFIG } from "@/config/contact"

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  // Staggered container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  // Individual item entrance animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.45,
        ease: "easeOut",
      },
    },
  }

  // Emblem scale & reveal animation
  const emblemVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: "easeOut",
      },
    },
  }

  const buttonHover = shouldReduceMotion ? undefined : { y: -3 }
  const buttonTap = shouldReduceMotion ? undefined : { scale: 0.98 }
  const buttonTransition = { duration: 0.2, ease: "easeOut" as const }

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById("services")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      aria-label="AZ Digital Services Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-14 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Premium Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/12 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Modern subtle tech grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* ========================================================== */}
          {/* 1. AZ LOGO REVEAL & BRAND EMBLEM (MD Phone Experience)      */}
          {/* ========================================================== */}
          <motion.div variants={emblemVariants} className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#0A0F1D]/80 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.18)]">
              {/* Glowing AZ Monogram Icon */}
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/25 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center text-white shadow-inner">
                <span className="font-black text-sm tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-200">
                  AZ
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                AZ Digital Services
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Tagline Pill */}
          <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
            <Badge
              variant="default"
              className="px-3.5 py-1 rounded-full text-xs font-semibold border-cyan-500/30 bg-cyan-950/40 text-cyan-300 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400 animate-pulse" />
              <span>{BRAND.tagline} • {BRAND.taglineArabic}</span>
            </Badge>
          </motion.div>

          {/* ========================================================== */}
          {/* 2. MAIN HEADLINE                                           */}
          {/* ========================================================== */}
          <motion.h1
            variants={itemVariants}
            className="text-[27px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.14] sm:leading-[1.08] max-w-3xl"
          >
            Your Idea. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Our Digital Solutions.
            </span>
          </motion.h1>

          {/* ========================================================== */}
          {/* 3. SHORT SUPPORTING DESCRIPTION                            */}
          {/* ========================================================== */}
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Web • Mobile • Desktop • Design • Digital Marketing • Creative Services
          </motion.p>

          {/* Multilingual Supporting Line (French + Arabic) */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xl my-4 sm:my-5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          >
            <div className="flex flex-col gap-1.5 text-center">
              <p className="text-xs sm:text-sm font-medium text-slate-200 flex items-start justify-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span>Envoyez vos fichiers • Demandez un service • Parlons de votre projet</span>
              </p>
              <p
                dir="rtl"
                className="text-xs sm:text-sm font-medium text-cyan-300/90 font-arabic flex items-start justify-center gap-2"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                <span>أرسل ملفاتك • اطلب خدمتك • تواصل معنا</span>
              </p>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* 4. PRIMARY CONTACT & EXPLORE ACTIONS (First Screen Visible) */}
          {/* WhatsApp + Email + Explore Services                        */}
          {/* ========================================================== */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5 mt-2 max-w-2xl"
          >
            {/* BUTTON 1: WhatsApp */}
            <motion.a
              id="hero-whatsapp-btn"
              href={CONTACT_CONFIG.whatsapp.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact AZ Digital Services on WhatsApp"
              whileHover={buttonHover}
              whileTap={buttonTap}
              transition={buttonTransition}
              className={cn(
                buttonVariants({ variant: "whatsapp", size: "lg" }),
                "group relative w-full sm:w-auto min-h-[50px] sm:min-h-[54px] px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_4px_22px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.55)] border border-emerald-400/40 backdrop-blur-md transition-all duration-300"
              )}
            >
              <motion.span
                className="shrink-0"
                whileHover={shouldReduceMotion ? undefined : { rotate: [0, -10, 10, 0], scale: 1.12 }}
                transition={{ duration: 0.35 }}
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </motion.span>
              <span>Contact on WhatsApp</span>
            </motion.a>

            {/* BUTTON 2: Email */}
            <motion.a
              id="hero-gmail-btn"
              href={CONTACT_CONFIG.email.getUrl()}
              aria-label="Send an email to AZ Digital Services"
              whileHover={buttonHover}
              whileTap={buttonTap}
              transition={buttonTransition}
              className={cn(
                buttonVariants({ variant: "gmail", size: "lg" }),
                "group relative w-full sm:w-auto min-h-[50px] sm:min-h-[54px] px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_4px_22px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.5)] border border-rose-400/40 backdrop-blur-md transition-all duration-300"
              )}
            >
              <motion.span
                className="shrink-0"
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.12 }}
                transition={{ duration: 0.25 }}
              >
                <Mail className="w-5 h-5" />
              </motion.span>
              <span>Send us an Email</span>
            </motion.a>

            {/* BUTTON 3: Explore Services */}
            <motion.a
              id="hero-explore-btn"
              href="#services"
              onClick={handleExploreClick}
              whileHover={buttonHover}
              whileTap={buttonTap}
              transition={buttonTransition}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group relative w-full sm:w-auto min-h-[50px] sm:min-h-[54px] px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 border-white/20 hover:border-cyan-400/50 bg-white/[0.04] text-slate-200 hover:text-white backdrop-blur-md transition-all duration-300"
              )}
            >
              <span>Explore Services</span>
              <motion.span
                animate={shouldReduceMotion ? undefined : { y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="text-cyan-400 group-hover:text-cyan-300"
              >
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* ========================================================== */}
          {/* 5. SUBTLE FLOATING DIGITAL ELEMENT CHIPS (MD Phone Feel)   */}
          {/* ========================================================== */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-white/[0.08] w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Fast Delivery</span>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Custom Development</span>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
            >
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span>Creative UI/UX</span>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-emerald-500/30 text-emerald-300 bg-emerald-950/20"
            >
              <FileUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Send Files & Discuss</span>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
