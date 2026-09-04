import content from "@/content.json";

export default function LorePage() {
  return (
    <article className="space-y-6">
      <h1 className="text-base text-ink">{content.lore.title}</h1>
      <div className="space-y-5 text-sm leading-7 text-ink/90">
        {content.lore.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="text-sm leading-7 text-muted">
        Reach me at{" "}
        <a
          href={`mailto:${content.site.email}`}
          className="text-ink hover:text-accent"
        >
          {content.site.email}
        </a>
        .
      </p>
    </article>
  );
}
