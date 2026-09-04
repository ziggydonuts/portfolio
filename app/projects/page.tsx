import content from "@/content.json";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-base text-ink">Projects</h1>
      <ul className="space-y-7">
        {content.projects.map((project) => (
          <li key={project.title} className="border-t border-line pt-5">
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink hover:text-accent"
              >
                {project.title}
              </a>
              <span className="shrink-0 text-xs text-faint">
                {project.year}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-ink/80">
              {project.description}
            </p>
            {project.tags?.length ? (
              <p className="mt-2 text-xs text-muted">
                {project.tags.join(" / ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
