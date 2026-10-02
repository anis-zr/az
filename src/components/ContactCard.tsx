import React, { useState } from "react"
import { Button, buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { MessageCircle, Mail, ArrowRight, Check, Copy, ExternalLink, Clock, Shield } from "lucide-react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"

interface ContactCardProps {
  type: "whatsapp" | "gmail"
  title: string
  description: string
  buttonLabel: string
  actionUrl: string
  displayInfo: string
  rawInfo: string
  subtitle: string
}

export const ContactCard = ({
  type,
  title,
  description,
  buttonLabel,
  actionUrl,
  displayInfo,
  rawInfo,
  subtitle,
}: ContactCardProps) => {
  const [copied, setCopied] = useState(false)

  const isWhatsApp = type === "whatsapp"

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(rawInfo)
    setCopied(true)
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: isWhatsApp ? ["#25D366", "#128C7E", "#FFFFFF"] : ["#EA4335", "#00F0FF", "#FFFFFF"],
    })
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div
      className={`h-full flex flex-col justify-between rounded-3xl p-7 sm:p-10 relative group border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        isWhatsApp
          ? "border-emerald-500/25 bg-gradient-to-b from-[#0a1815] to-[#0A0F1D] shadow-[0_15px_40px_-15px_rgba(16,185,129,0.25)] hover:border-emerald-400/50"
          : "border-cyan-500/25 bg-gradient-to-b from-[#081525] to-[#0A0F1D] shadow-[0_15px_40px_-15px_rgba(0,102,255,0.25)] hover:border-cyan-400/50"
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg group-hover:scale-105 transition-transform duration-300 ${
              isWhatsApp
                ? "bg-emerald-950/60 border-emerald-400/40 text-emerald-400 shadow-emerald-950/40"
                : "bg-cyan-950/60 border-cyan-400/40 text-cyan-400 shadow-cyan-950/40"
            }`}
          >
            {isWhatsApp ? (
              <MessageCircle className="w-7 h-7 fill-current" />
            ) : (
              <Mail className="w-7 h-7" />
            )}
          </div>

          <Badge
            variant={isWhatsApp ? "emerald" : "default"}
            className="text-xs uppercase tracking-wider font-semibold"
          >
            {isWhatsApp ? "Instant Chat" : "Direct Dispatch"}
          </Badge>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        {/* Address / Phone Display with Quick Copy */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] mb-8 flex items-center justify-between gap-3">
          <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
            {displayInfo}
          </span>

          <Button
            onClick={handleCopy}
            variant="ghost"
            size="sm"
            className="h-8 px-2.5 rounded-lg text-xs hover:bg-white/[0.08] shrink-0"
            title="Copy to clipboard"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-cyan-400">
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Main Action Button */}
      <div className="space-y-4">
        <a
          href={actionUrl}
          target={isWhatsApp ? "_blank" : undefined}
          rel={isWhatsApp ? "noopener noreferrer" : undefined}
          className={cn(
            buttonVariants({ variant: isWhatsApp ? "whatsapp" : "default", size: "lg" }),
            "w-full justify-center rounded-2xl font-bold text-base shadow-xl flex items-center gap-2"
          )}
        >
          {isWhatsApp ? (
            <MessageCircle className="w-5 h-5 fill-current" />
          ) : (
            <Mail className="w-5 h-5" />
          )}
          <span>{buttonLabel}</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>

        {/* Response Guarantee info */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>
            {isWhatsApp ? "Typical reply time: Within a few minutes" : "File review: Same day response"}
          </span>
        </div>
      </div>
    </div>
  )
}
