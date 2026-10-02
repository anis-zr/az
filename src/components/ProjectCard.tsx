import React, { useState } from "react"
import { ProjectItem } from "@/constants/content"
import { CONTACT_CONFIG } from "@/config/contact"
import { Badge } from "./ui/badge"
import { Button, buttonVariants } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"
import { cn } from "@/lib/utils"
import {
  Eye,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Code,
  Layers,
  Sparkles,
} from "lucide-react"

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const projectWhatsAppUrl = CONTACT_CONFIG.whatsapp.getUrl(
    `Hello AZ Digital Services, I saw your project "${project.name}" and would like to build something similar.`
  )

  return (
    <>
      <div
        onClick={() => setDialogOpen(true)}
        className="group relative cursor-pointer w-full h-full flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_-10px_rgba(0,102,255,0.3)] hover:-translate-y-1"
      >
        {/* Subtle Ambient Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
        />

        <div>
          {/* Visual Header / Mockup Preview Representation */}
          <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-[#060a14] border border-white/[0.06] overflow-hidden mb-6 flex flex-col justify-between p-4 group-hover:border-cyan-500/30 transition-colors">
            
            {/* Window control dots */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <Badge variant="secondary" className="text-[10px] bg-white/10 text-slate-300">
                {project.category}
              </Badge>
            </div>

            {/* Futuristic schematic grid inside the mockup */}
            <div className="my-auto text-center py-2">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 mb-2 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <p className="text-xs font-mono text-slate-400 truncate px-4">
                az://projects/{project.id}
              </p>
            </div>

            {/* Quick View Button overlay on hover */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.05]">
              <span>View Specifications</span>
              <span className="flex items-center gap-1 text-cyan-400 font-medium group-hover:translate-x-0.5 transition-transform">
                <span>Details</span>
                <Eye className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Technology Stack Badges */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-center rounded-xl border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-semibold"
          >
            <Eye className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
            <span>Inspect Project Details</span>
          </Button>
        </div>
      </div>

      {/* Detail Dialog Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl bg-[#0A0F1D]/95 border-white/15">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="text-xs">
                {project.category}
              </Badge>
              <span className="text-xs font-mono text-slate-400">
                Verified Deliverable
              </span>
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              {project.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-300 mt-2">
              {project.details}
            </DialogDescription>
          </DialogHeader>

          {/* Key Deliverables & Tech Stack */}
          <div className="space-y-6 my-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Capabilities & Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Deliverables Provided</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((deliv, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action to build something similar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/[0.08]">
            <a
              href={projectWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "whatsapp" }),
                "w-full sm:flex-1 rounded-xl flex items-center justify-center gap-2"
              )}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Request Similar Project</span>
            </a>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              className="w-full sm:w-auto rounded-xl border-white/15"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
