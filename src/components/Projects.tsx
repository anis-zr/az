import React from "react"
import { motion, useReducedMotion } from "motion/react"
import { SELECTED_PROJECTS } from "@/constants/content"
import { ProjectCard } from "./ProjectCard"
import { Badge } from "./ui/badge"
import { Layers } from "lucide-react"

export const Projects = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4 px-3.5 py-1 text-xs">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            Our Portfolio & Work
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Build
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A curated showcase of our engineering and creative work across enterprise web platforms, mobile applications, academic project suites, and branding.
          </p>
        </div>

        {/* Projects Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SELECTED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card-item h-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
