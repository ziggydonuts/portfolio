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
    <header className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 text-sm">
        <span className="text-ink">{content.site.name}</span>
        <div className="flex gap-4 text-muted">
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

      <nav className="flex gap-5 border-t border-line pt-4 text-sm">
        {pages.map((page) => {
          const active = pathname === page.href;
          return (
            <Link
              key={page.href}
              href={page.href}
              className={
                active
                  ? "text-accent"
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
