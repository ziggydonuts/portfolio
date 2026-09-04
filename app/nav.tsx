"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import content from "@/content.json";

const pages = [
  { href: "/", label: "Lore" },
  { href: "/projects", label: "Projects" },
  { href: "/bookshelf", label: "Bookshelf" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="space-y-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="text-ink">{content.site.name}</span>
        <div className="flex gap-6 text-muted">
          <a
            href={content.site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            github
          </a>
          <a
            href={content.site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            resume
          </a>
        </div>
      </div>

      <nav className="flex gap-6">
        {pages.map((page) => {
          const active = pathname === page.href;
          return (
            <Link
              key={page.href}
              href={page.href}
              className={
                active
                  ? "italic text-ink"
                  : "text-muted hover:text-ink transition-colors"
              }
            >
              {page.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
