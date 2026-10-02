import React from "react"
import { BrandLogo } from "./BrandLogo"
import { MessageCircle, Mail, ArrowUp } from "lucide-react"
import { BRAND } from "@/constants/content"
import { WHATSAPP_LINK, GMAIL_LINK } from "@/config/contact"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why AZ", href: "#why-az" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#03050b] pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col items-start">
            <BrandLogo size="md" showTagline className="sm:hidden" />
            <BrandLogo size="lg" showTagline className="hidden sm:inline-flex" />
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              Premium digital solutions studio crafting modern web, mobile, and desktop applications, UI/UX systems, academic research projects, and creative digital media.
            </p>
            <p className="mt-2 text-xs font-mono text-cyan-400/80">
              {BRAND.tagline} • {BRAND.taglineArabic}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span>WhatsApp Channel</span>
              </a>

              <a
                href={GMAIL_LINK}
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Gmail / File Send</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-top */}
        <div className="pt-8 pb-6 sm:pb-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
