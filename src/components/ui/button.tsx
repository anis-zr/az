import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050811] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:brightness-110 border border-cyan-300/30",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline:
          "border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/50 text-slate-200 hover:text-white backdrop-blur-md",
        secondary:
          "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80 border border-slate-700/50 shadow-sm",
        ghost:
          "hover:bg-white/[0.06] hover:text-cyan-300 text-slate-300",
        link:
          "text-cyan-400 underline-offset-4 hover:underline",
        whatsapp:
          "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:brightness-110 border border-emerald-400/30",
        gmail:
          "bg-gradient-to-r from-rose-600 via-red-500 to-amber-500 text-white shadow-lg shadow-red-600/25 hover:shadow-rose-500/40 hover:brightness-110 border border-rose-400/30",
        glow:
          "relative bg-[#0A0F1D] text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_-3px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_0px_rgba(0,240,255,0.6)] hover:text-white hover:bg-cyan-950/30",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-8 py-3.5 text-base font-bold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
