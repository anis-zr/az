import React from "react"
import { MessageCircle, Mail, Sparkles, ArrowRight } from "lucide-react"
import { buttonVariants } from "./ui/button"
import { CTAButton } from "./CTAButton"
import { Badge } from "./ui/badge"
import { WHATSAPP_LINK, GMAIL_LINK } from "@/config/contact"
import { cn } from "@/lib/utils"

export const FinalCTA = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glowing sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0A0F1D]/90 via-[#0a1226]/80 to-[#0A0F1D]/90 backdrop-blur-2xl p-8 sm:p-14 text-center shadow-[0_20px_60px_-15px_rgba(0,102,255,0.35)] relative overflow-hidden">
          
          {/* Subtle Cyber Grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <Badge variant="default" className="mb-6 px-3.5 py-1 text-xs">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              Start Your Journey
            </Badge>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let's build something great.
            </h2>

            {/* Multilingual Text */}
            <div className="mt-4 space-y-1.5">
              <p className="text-cyan-300 font-arabic text-xl sm:text-2xl dir-rtl font-bold">
                لنبنِ مشروعك معًا
              </p>
              <p className="text-slate-400 italic text-sm sm:text-base">
                Construisons votre projet ensemble.
              </p>
            </div>

            <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you are launching a new enterprise platform, building a graduation project, or revitalizing your brand, AZ Digital Services brings your ideas to reality.
            </p>

            {/* Direct Dual CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "whatsapp", size: "lg" }),
                  "w-full sm:w-auto text-base rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]"
                )}
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contact on WhatsApp</span>
              </a>

              <a
                href={GMAIL_LINK}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto text-base rounded-2xl border-white/20 hover:border-cyan-400/50 bg-white/5 text-slate-200 flex items-center justify-center gap-2"
                )}
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Send an Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
