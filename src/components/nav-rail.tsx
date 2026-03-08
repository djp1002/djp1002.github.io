"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";

export default function NavRail() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center py-8 gap-6 border-r bg-background/80 backdrop-blur z-30">
      {DATA.navbar.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 text-xs transition-colors ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
      <div className="mt-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}