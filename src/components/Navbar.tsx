import React, { useState, useEffect } from "react"
import { BrandLogo } from "./BrandLogo"
import { buttonVariants } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet"
import { Menu, ArrowRight, MessageCircle, Mail, Sparkles, X } from "lucide-react"
import { WHATSAPP_LINK, GMAIL_LINK } from "@/config/contact"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onNavigate?: (id: string) => void
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#why-az" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    if (onNavigate) {
      onNavigate(href.replace("#", ""))
    }
  }

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050811]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo: AZ */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
          aria-label="AZ Digital Services — Return to Top"
        >
          <BrandLogo size="sm" showTagline={false} className="sm:hidden" />
          <BrandLogo size="md" showTagline={false} className="hidden sm:inline-flex" />
        </a>

        {/* Desktop Navigation Links (Home, Services, Projects, About, Contact) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/[0.08]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Direct Contact CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "whatsapp", size: "sm" }),
              "rounded-full shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center gap-1.5 px-4"
            )}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full border-white/20 hover:border-cyan-400/50 flex items-center gap-1.5 px-4"
            )}
          >
            <span>Contact</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Mobile Hamburger Menu via shadcn Sheet */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open mobile menu"
                className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="w-5 h-5 text-cyan-400" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#050811]/95 backdrop-blur-2xl border-l border-white/10 w-[85vw] max-w-sm flex flex-col justify-between p-6"
            >
              <div>
                <SheetHeader className="text-left mb-6 pb-4 border-b border-white/[0.08]">
                  <SheetTitle className="text-white flex items-center gap-2">
                    <BrandLogo size="sm" showTagline={false} />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/[0.04] transition-all flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Direct Contact Actions */}
              <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-1">
                  Instant Contact
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "whatsapp" }),
                    "w-full justify-center rounded-xl flex items-center gap-2"
                  )}
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                  <span>Contact on WhatsApp</span>
                </a>
                <a
                  href={GMAIL_LINK}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "gmail" }),
                    "w-full justify-center rounded-xl flex items-center gap-2"
                  )}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Send us an Email</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
