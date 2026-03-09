"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed right-0 top-0 h-full w-1/4 flex-col px-6 py-8 border-l bg-background/80 backdrop-blur z-30 gap-6">
      {/* Fixed top section */}
      <div className="flex flex-col items-center gap-3 text-center">
        <Avatar className="size-80 border ring-20 ring-muted">
          <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-2xl mt-10">{DATA.name}</p>
          <p className="text-xl text-muted-foreground">{DATA.description}</p>
        </div>
        {/* Social links */}
        <div className="flex gap-3">
          {Object.entries(DATA.contact.social)
            .filter(([_, s]) => s.navbar)
            .map(([name, s]) => (
              <Link key={name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors">
                <s.icon className="size-10" />
              </Link>
            ))}
        </div>
        {/* CV Download */}
        <a href="/djp_cv.pdf" download
          className="text-xs border rounded-lg px-30 py-2 hover:bg-muted transition-colors">
          Download CV
        </a>
      </div>
    </aside>
  );
}