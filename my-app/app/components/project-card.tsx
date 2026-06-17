type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href = "#",
  linkLabel = "View project",
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Project
          </p>
          <h3 className="mt-2 text-2xl font-bold text-neutral-900">{title}</h3>
        </div>

        <p className="text-sm leading-6 text-neutral-700">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-600"
        >
          {linkLabel}
        </a>
      </div>
    </article>
  );
}