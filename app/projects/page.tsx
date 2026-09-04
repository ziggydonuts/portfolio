import content from "@/content.json";

export default function ProjectsPage() {
  return (
    <section className="space-y-14">
      <h1 className="text-2xl text-ink">Projects</h1>
      <ul className="space-y-12">
        {content.projects.map((project) => (
          <li key={project.title}>
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent"
              >
                {project.title}
              </a>
              <span className="shrink-0 text-base text-faint">
                {project.year}
              </span>
            </div>
            <p className="mt-3 text-ink/80">{project.description}</p>
            {project.tags?.length ? (
              <p className="mt-3 italic text-muted">
                {project.tags.join(", ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
