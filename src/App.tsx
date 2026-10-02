import React from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { WhyAZ } from "./components/WhyAZ"
import { ProjectCTASection } from "./components/ProjectCTASection"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { FloatingWhatsApp } from "./components/FloatingWhatsApp"

export function App() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header / Glassmorphism Navbar */}
      <Navbar />

      {/* Main Page Landmark: Hero -> Services -> Why AZ -> Contact / Send Files -> Footer */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services */}
        <Services />

        {/* 3. Why AZ */}
        <WhyAZ />

        {/* 4. Have a project in mind? — Send Your Files + WhatsApp + Email */}
        <ProjectCTASection />

        {/* 5. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Action for Mobile & Desktop */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
