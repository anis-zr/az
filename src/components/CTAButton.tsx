import React from "react"
import { Button, ButtonProps } from "./ui/button"
import { cn } from "@/lib/utils"

interface CTAButtonProps extends ButtonProps {
  glowEffect?: boolean
  icon?: React.ReactNode
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  className,
  glowEffect = false,
  icon,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        glowEffect && "hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]",
        className
      )}
      {...props}
    >
      {/* Subtle shimmer sweep on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

      {icon && (
        <span className="mr-2 inline-flex items-center transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
