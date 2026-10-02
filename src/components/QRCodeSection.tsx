import React, { useState } from "react"
import { QrCode, Scan, Sparkles, Check, Copy, ExternalLink, Smartphone } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { QR_CODE_PLACEHOLDER, BRAND } from "@/constants/content"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"

export const QRCodeSection = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(QR_CODE_PLACEHOLDER)
    setCopied(true)
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00F0FF", "#0066FF", "#8B5CF6"],
    })
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="qr-code" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#050811] via-[#080d1a] to-[#050811]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4 px-3.5 py-1 text-xs">
            <Scan className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            Scan • Discover • Contact
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything you need, in one place.
          </h2>

          {/* Multilingual Subheadings */}
          <div className="mt-4 space-y-1.5">
            <p className="text-cyan-300 font-arabic text-lg sm:text-xl dir-rtl font-semibold">
              امسح الكود وتواصل معنا بسهولة
            </p>
            <p className="text-slate-400 italic text-sm sm:text-base">
              Scannez le QR Code et contactez-nous.
            </p>
          </div>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Scan from your smartphone to access our complete suite of digital services, explore our latest work, or start an immediate WhatsApp consultation.
          </p>
        </div>

        {/* QR Interactive Display Frame */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group p-6 sm:p-8 rounded-3xl bg-[#0A0F1D]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_50px_-10px_rgba(0,102,255,0.3)] hover:shadow-[0_0_70px_0px_rgba(0,240,255,0.4)] transition-all duration-500 max-w-md w-full">
            
            {/* Cybernetic Corner Brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg pointer-events-none" />

            {/* Glowing Scanning Box */}
            <div className="relative aspect-square w-full rounded-2xl bg-white p-4 sm:p-5 flex items-center justify-center overflow-hidden shadow-inner">
              
              {/* Laser Scanning Line with animation */}
              <div className="scan-laser z-20" />

              {/* High-fidelity Vector QR Code */}
              <svg
                viewBox="0 0 256 256"
                className="w-full h-full text-slate-950 select-none relative z-10"
                fill="currentColor"
              >
                {/* QR Finder Corners */}
                {/* Top-Left */}
                <rect x="16" y="16" width="64" height="64" rx="10" fill="#0A0F1D" />
                <rect x="24" y="24" width="48" height="48" rx="6" fill="#FFFFFF" />
                <rect x="36" y="36" width="24" height="24" rx="4" fill="#0066FF" />

                {/* Top-Right */}
                <rect x="176" y="16" width="64" height="64" rx="10" fill="#0A0F1D" />
                <rect x="184" y="24" width="48" height="48" rx="6" fill="#FFFFFF" />
                <rect x="196" y="36" width="24" height="24" rx="4" fill="#0066FF" />

                {/* Bottom-Left */}
                <rect x="16" y="176" width="64" height="64" rx="10" fill="#0A0F1D" />
                <rect x="24" y="184" width="48" height="48" rx="6" fill="#FFFFFF" />
                <rect x="36" y="196" width="24" height="24" rx="4" fill="#0066FF" />

                {/* Timing patterns & Data Matrix modules */}
                <rect x="96" y="24" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="120" y="24" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="144" y="24" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="96" y="48" width="12" height="12" rx="2" fill="#0066FF" />
                <rect x="144" y="48" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="24" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="48" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="72" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="96" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="120" y="96" width="12" height="12" rx="2" fill="#0066FF" />
                <rect x="144" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="168" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="192" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="216" y="96" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="24" y="120" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="48" y="120" width="12" height="12" rx="2" fill="#0066FF" />
                <rect x="72" y="120" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="168" y="120" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="192" y="120" width="12" height="12" rx="2" fill="#0066FF" />
                <rect x="216" y="120" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="24" y="144" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="72" y="144" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="96" y="144" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="144" y="144" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="192" y="144" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="96" y="168" width="12" height="12" rx="2" fill="#0066FF" />
                <rect x="120" y="168" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="144" y="168" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="168" y="168" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="216" y="168" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="96" y="192" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="120" y="192" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="168" y="192" width="12" height="12" rx="2" fill="#0066FF" />
                <rect x="192" y="192" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="216" y="192" width="12" height="12" rx="2" fill="#0A0F1D" />

                <rect x="96" y="216" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="144" y="216" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="168" y="216" width="12" height="12" rx="2" fill="#0A0F1D" />
                <rect x="192" y="216" width="12" height="12" rx="2" fill="#0A0F1D" />

                {/* Center Brand Badge on QR Code */}
                <rect x="100" y="100" width="56" height="56" rx="12" fill="#050811" stroke="#00F0FF" strokeWidth="2.5" />
                <text
                  x="128"
                  y="136"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="22"
                  fontWeight="900"
                  fontFamily="sans-serif"
                >
                  AZ
                </text>
              </svg>
            </div>

            {/* Target URL Info & Quick Actions */}
            <div className="mt-6 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.08] mb-4">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{QR_CODE_PLACEHOLDER}</span>
              </div>

              <div className="flex items-center gap-2 w-full">
                <Button
                  onClick={handleCopyLink}
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl border-white/15 bg-white/5 hover:bg-white/10 text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      <span>Copy Landing URL</span>
                    </>
                  )}
                </Button>

                <a
                  href={QR_CODE_PLACEHOLDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "flex-1 rounded-xl text-xs flex items-center gap-1.5"
                  )}
                >
                  <span>Open Direct</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
