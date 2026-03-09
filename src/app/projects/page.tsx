"use client";
import { useState, useRef } from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createPortal } from "react-dom";

const BLUR_FADE_DELAY = 0.04;

function getYoutubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
  return match ? match[1] : "";
}

function ProjectCard({ project }: { project: typeof DATA.projects[number] }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const linkedPublications = (project.publicationIds ?? [])
    .map((pid) => DATA.publications.find((p) => p.id === pid))
    .filter(Boolean);

  const youtubeId = getYoutubeId(project.video ?? "");

  return (
    // <div className="border rounded-2xl overflow-hidden bg-background/80 backdrop-blur hover:shadow-md transition-shadow flex flex-col h-full">
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-fit hover:scale-[1.02]"
      style={{
        background: hovered
          ? `radial-gradient(circle at ${glowPos.x}px ${glowPos.y}px, rgb(0, 217, 255) 0%, rgba(100,100,100,0.2) 60%, transparent 100%)`
          : "rgba(100,100,100,0.2)",
        padding: "1px",
      }}>
      <div className="rounded-2xl overflow-hidden bg-background flex flex-col h-full">
      {/* Image with play button — fixed aspect */}
      <button
        className="group relative w-full h-52 bg-muted flex items-center justify-center overflow-hidden flex-none"
        onClick={() => { if (project.video) setVideoOpen(true); }}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
        {project.video && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-130">
              <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </button>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
        <div className="text-xs text-muted-foreground font-mono">{project.dates}</div>
        <h3 className="font-semibold text-sm leading-snug">{project.title}</h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-muted rounded-md px-2 py-0.5 text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        {/* Description toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          {expanded ? "▲ Hide Description" : "▼ Show Description"}
        </button>

        {expanded && (
          <p className="text-sm text-muted-foreground leading-relaxed border-l-2 pl-3">
            {project.description}
          </p>
        )}

        {/* Publication links */}
        {linkedPublications.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {linkedPublications.map((pub, i) => pub && (
              <Link key={pub.id} href={`/publications?highlight=${pub.id}`}
                className="flex items-center gap-1 text-xs text-cyan-500 hover:underline decoration-cyan-500 underline-offset-4">
                <ArrowUpRight className="size-3" />
                Pub {i + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* Video modal */}
      {videoOpen && createPortal(
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setVideoOpen(false)}>
          <div className="w-[80vw] max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              className="w-full h-full rounded-xl"
              allowFullScreen allow="autoplay"
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Projects</h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {DATA.projects.map((project, index) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * (index + 2)}>
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </main>
  );
}