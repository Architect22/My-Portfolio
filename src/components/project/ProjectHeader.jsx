/* Title, one-line pitch, tag chips and link buttons. */
export default function ProjectHeader({ project }) {
  const page = project.page ?? {};
  const links = [
    ...(project.liveUrl ? [{ label: project.liveLabel ?? 'View live project', href: project.liveUrl }] : []),
    ...(page.links ?? []),
  ];
  const tags = page.tags ?? [project.kind];

  return (
    <header>
      <h1 className="page-title m-0 enter" style={{ '--d': '.05s' }}>
        {project.title}
      </h1>
      <p className="page-tagline enter" style={{ '--d': '.15s' }}>
        {page.tagline ?? project.summary}
      </p>

      {tags.length > 0 && (
        <ul className="m-0 mt-7 flex list-none flex-wrap gap-2 p-0 enter" style={{ '--d': '.25s' }}>
          {tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      )}

      {links.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-3 enter" style={{ '--d': '.3s' }}>
          {links.map((link) => (
            <a key={link.href} className="btn-line" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
