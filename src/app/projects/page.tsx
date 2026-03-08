"use client";
import { useState, useRef } from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function getYoutubeEmbedUrl(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0` : null;
}

function ProjectCard({ project, index }: { project: typeof DATA.projects[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const embedUrl = getYoutubeEmbedUrl(project.video ?? "");

  const linkedPublications = (project.publicationIds ?? [])
    .map((pid) => DATA.publications.find((p) => p.id === pid))
    .filter(Boolean);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border bg-background/80 backdrop-blur cursor-pointer transition-all duration-300 ${
        hovered ? "scale-[1.02] shadow-xl z-10" : "scale-100 shadow-md"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image / video */}
      <div className="relative w-full aspect-video overflow-hidden">
        {/* Static image always present */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${hovered && embedUrl ? "opacity-0" : "opacity-100"}`}
        />

        {/* YouTube iframe on hover */}
        {hovered && embedUrl && (
          <iframe
            ref={iframeRef}
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
        )}

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-60"}`} />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          <div className="text-xs text-white/60 font-mono">{project.dates}</div>
          <h3 className="font-semibold text-white text-sm leading-snug">{project.title}</h3>

          {/* Technologies */}
          <div className={`flex flex-wrap gap-1.5 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs bg-white/20 text-white rounded-md px-2 py-0.5 backdrop-blur">
                {tech}
              </span>
            ))}
          </div>

          {/* Links row */}
          <div className={`flex flex-wrap items-center gap-3 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            {/* Publication links */}
            {linkedPublications.map((pub,i) => pub && (
              <Link
                key={pub.id}
                href={`/publications?highlight=${pub.id}`}
                className="flex items-center gap-1 text-xs text-cyan-400 hover:underline decoration-cyan-400 underline-offset-4"
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="size-3" />
                {/* {pub.title.length > 40 ? pub.title.slice(0, 40) + "…" : pub.title} */}
                Pub {i + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Projects</h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.projects.map((project, index) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * (index + 2)}>
            <ProjectCard project={project} index={index} />
          </BlurFade>
        ))}
      </div>
    </main>
  );
}