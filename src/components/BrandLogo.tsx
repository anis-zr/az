import React from "react"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  showText?: boolean
  showTagline?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

export const BrandLogo = ({
  className,
  showText = true,
  showTagline = false,
  size = "md",
}: BrandLogoProps) => {
  const sizeMap = {
    sm: { icon: "w-8 h-8", text: "text-lg", sub: "text-[10px]" },
    md: { icon: "w-10 h-10", text: "text-xl", sub: "text-xs" },
    lg: { icon: "w-12 h-12", text: "text-2xl", sub: "text-xs" },
    xl: { icon: "w-16 h-16", text: "text-3xl", sub: "text-sm" },
  }

  const currentSize = sizeMap[size]

  return (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      {/* Brand Monogram Icon */}
      <div
        className={cn(
          "relative shrink-0 flex items-center justify-center rounded-xl p-1 bg-gradient-to-br from-[#00F0FF]/20 via-[#0066FF]/20 to-[#8B5CF6]/30 border border-cyan-400/40 shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_0px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all duration-300",
          currentSize.icon
        )}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="azLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="azGlowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.9" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Futuristic Hexagonal Framing */}
          <polygon
            points="50,6 90,28 90,72 50,94 10,72 10,28"
            stroke="url(#azLogoGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="#050811"
            fillOpacity="0.7"
          />

          {/* Stylized Geometric 'A' */}
          <path
            d="M32 68 L50 26 L68 68"
            stroke="url(#azGlowGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#logoGlow)"
          />

          {/* Dynamic 'Z' Cross-bar that cuts through */}
          <path
            d="M30 48 H70 L34 68 H70"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />

          {/* Accent Electric Core Dot */}
          <circle cx="50" cy="48" r="3.5" fill="#00F0FF" filter="url(#logoGlow)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={cn("font-black tracking-tight text-white", currentSize.text)}>
              AZ
            </span>
            <span
              className={cn(
                "font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500",
                currentSize.text
              )}
            >
              Digital Services
            </span>
          </div>
          {showTagline && (
            <span
              className={cn(
                "text-slate-400 font-medium tracking-wider uppercase mt-1",
                currentSize.sub
              )}
            >
              Your Idea • Our Skills
            </span>
          )}
        </div>
      )}
    </div>
  )
}
