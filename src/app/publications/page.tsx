"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ChevronDown, ChevronUp, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Suspense } from "react";

const BLUR_FADE_DELAY = 0.04;
export default function PublicationsPage() {
  return (
    <Suspense fallback={null}>
      <PublicationsContent />
    </Suspense>
  );
}

// export default function PublicationsPage() {
function PublicationsContent() {
  const authorMap = Object.fromEntries(DATA.authors.map((a) => [a.id, a]));
  const searchParams = useSearchParams();                              // ← ADD
  const highlightIds = searchParams.get("highlight")?.split(",") ?? []; // ← ADD
  return (
    <main className="min-h-dvh flex flex-col gap-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold">Publications</h2>
      </BlurFade>

      <div className="flex flex-col gap-6">
        {DATA.publications.map((pub, index) => {
          const linkedProject = pub.projectId
            ? DATA.projects.find((p) => p.id === pub.projectId)
            : null;

          return (
            <BlurFade key={pub.id} delay={BLUR_FADE_DELAY * (index + 2)}>
              <PublicationCard
                pub={pub}
                authorMap={authorMap}
                linkedProject={linkedProject}
                isHighlighted={highlightIds.includes(pub.id)}  // ← ADD
              />
            </BlurFade>
          );
        })}
      </div>
    </main>
  );
}

function PublicationCard({ pub, authorMap, linkedProject, isHighlighted }: {
  pub: typeof DATA.publications[number];
  authorMap: Record<string, typeof DATA.authors[number]>;
  linkedProject: typeof DATA.projects[number] | null | undefined;
  isHighlighted: boolean;   // ← ADD
}) {
  const [expanded, setExpanded] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);  // ← ADD

  // ← ADD this effect
  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isHighlighted]);

  return (
    <div className="flex gap-4 items-start">
        
        {/* Image — unchanged inside, just wrapper updated */}
        {pub.image && (
            <button
            className="w-1/3 flex-none aspect-video bg-white rounded-xl overflow-hidden flex items-center justify-center cursor-pointer border border-border"
            onClick={() => { if (pub.video) setVideoOpen(true); }}>
            <img src={pub.image} alt={pub.title} className="w-full h-full object-contain" />
            </button>
        )}

        <div
        ref={cardRef}
        className={`flex-1 border rounded-2xl p-5 bg-background/80 backdrop-blur hover:shadow-md transition-all duration-700 flex flex-col gap-3 ${
          isHighlighted ? "ring-2 ring-cyan-500" : ""
        }`}>
            
            {/* Right — Content */}

            {/* Venue + Year */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <span className="border rounded-md px-2 py-0.5">{pub.venue}</span>
                <span>{pub.year}</span>
            </div>

            {/* <h3 className="font-semibold text-base leading-snug">{pub.title}</h3> */}
            {pub.doi ? (
                <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-base leading-snug hover:underline underline-offset-4 hover:text-primary transition-colors cursor-pointer">
                    {pub.title}
                </a>
                ) : (
                <h3 className="font-semibold text-base leading-snug">{pub.title}</h3>
            )}
            <div className="flex flex-wrap gap-2 items-center">
                {pub.authors.map((authorId) => {
                const author = authorMap[authorId];
                if (!author) return null;
                const isSelf = authorId === "djp";
                return (
                    <div key={authorId} className="relative group inline-block">
                    {author.scholar ? (
                        <Link href={author.scholar} target="_blank" rel="noopener noreferrer"
                        className={`text-xs px-2 py-0.5 rounded-full border transition-colors hover:bg-muted ${
                            isSelf ? "border-primary text-primary font-semibold" : "text-muted-foreground"
                        }`}>
                        {author.name}
                        </Link>
                    ) : (
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        isSelf ? "border-primary text-primary font-semibold" : "text-muted-foreground"
                        }`}>
                        {author.name}
                        </span>
                    )}

                    {author.image && (
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border shadow-lg flex-shrink-0">
                                <img src={author.image} alt={author.name}
                                className="w-full h-full object-cover object-top" />
                            </div>
                        </div>
                    )}
                </div>
            );
            })}
            </div>

            <button onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit">
                {expanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                {expanded ? "Hide Abstract" : "Show Abstract"}
            </button>

            {expanded && (
                <p className="text-sm text-muted-foreground leading-relaxed border-l-2 pl-3">
                {pub.abstract}
                </p>
            )}

            <div className="flex flex-wrap gap-1.5">
                {pub.tags.map((tag) => (
                <span key={tag} className="text-xs bg-muted rounded-md px-2 py-0.5 text-muted-foreground">
                    {tag}
                </span>
                ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
                {/* {pub.doi && (
                <Link href={pub.doi} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline">
                    <ExternalLink className="size-3" /> DOI / Paper
                </Link>
                )} */}
                {linkedProject && (
                <Link href={linkedProject.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-foreground hover:text-primary hover:underline decoration-cyan-500 underline-offset-4 transition-colors">
                    <ArrowUpRight className="size-3" /> View Project
                </Link>
                )}
            </div>
            
        </div>
        {/* Modal via Portal — stays here in JSX but renders on body */}
        {videoOpen && createPortal(
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                onClick={() => setVideoOpen(false)}>
                <div className="w-[80vw] max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
                <iframe
                    src={`https://www.youtube.com/embed/${getYoutubeId(pub.video)}?autoplay=1`}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                    allow="autoplay"
                />
                </div>
            </div>,
            document.body
        )}

    </div>
  );
}

function getYoutubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
  return match ? match[1] : "";
}