import React from "react"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"
import {
  Globe,
  Smartphone,
  Monitor,
  Layout,
  Palette,
  Layers,
  Sparkles,
  Presentation,
  FileCheck,
  TrendingUp,
  Film,
  Camera,
  Megaphone,
  GraduationCap,
  FileText,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
} from "lucide-react"
import { ServiceItem } from "@/constants/content"
import { CONTACT_CONFIG } from "@/config/contact"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Monitor,
  Layout,
  Palette,
  Layers,
  Sparkles,
  Presentation,
  FileCheck,
  TrendingUp,
  Film,
  Camera,
  Megaphone,
  GraduationCap,
  FileText,
}

interface ServiceCardProps {
  service: ServiceItem
  index: number
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = iconMap[service.iconName] || Globe

  const serviceWhatsAppUrl = CONTACT_CONFIG.whatsapp.getUrl(
    `مرحبًا AZ Digital Services، أود الاستفسار وطلب خدمة: ${service.title}`
  )

  return (
    <div
      dir="rtl"
      className="h-full flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0A0F1D] to-[#070b16] p-5 sm:p-7 relative group overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_-15px_rgba(0,102,255,0.25)] hover:-translate-y-1 text-right"
    >
      {/* Background ambient lighting per service */}
      <div
        className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-bl ${service.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Top Header & Number Badge */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          {/* Service Icon with Glow container */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_-3px_rgba(0,240,255,0.4)]"
            style={{
              backgroundColor: "rgba(10, 15, 29, 0.9)",
              borderColor: `${service.accentColor}40`,
              color: service.accentColor,
            }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            {service.badge && (
              <Badge
                variant="default"
                className="text-[11px] font-arabic font-semibold border-white/10 bg-white/5 text-slate-300 px-2.5 py-0.5"
              >
                {service.badge}
              </Badge>
            )}
            <span className="font-mono text-xs text-slate-400 font-bold">
              {service.number}
            </span>
          </div>
        </div>

        {/* Arabic Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-arabic text-white tracking-tight leading-snug mb-1 group-hover:text-cyan-300 transition-colors">
          {service.title}
        </h3>

        {/* Small English/Latin Subtitle */}
        {service.subtitleEn && (
          <p className="text-[11px] text-cyan-400/80 font-mono tracking-wider uppercase mb-3.5 dir-ltr text-right">
            {service.subtitleEn}
          </p>
        )}

        {/* Arabic Summary Description */}
        <p className="text-sm font-arabic text-slate-300 leading-relaxed mb-6">
          {service.summary}
        </p>

        {/* Features Checklist in Arabic */}
        <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-6">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: service.accentColor }}
              />
              <span className="leading-snug font-arabic">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct WhatsApp Action Button */}
      <div className="pt-2">
        <a
          href={serviceWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full justify-between rounded-xl border-white/10 bg-white/[0.03] hover:bg-emerald-500/10 hover:border-emerald-400/50 hover:text-emerald-300 text-slate-200 flex items-center transition-all duration-200 py-2.5 px-3.5"
          )}
        >
          <span className="flex items-center gap-2 text-xs sm:text-sm font-arabic font-medium">
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
            <span>طلب الخدمة عبر واتساب</span>
          </span>
          <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        </a>
      </div>

    </div>
  )
}
