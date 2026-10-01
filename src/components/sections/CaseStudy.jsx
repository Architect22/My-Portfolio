import { Link } from 'react-router-dom';
import ProjectImage from '../ProjectImage';

export default function CaseStudy({ project }) {
  const to = `/projects/${project.id}`;
  // Outcome is left for the project page on phones, where space is tight
  const rows = [
    ['Role', project.role, false],
    ['Tools', project.tools, false],
    ['Outcome', project.result, true],
  ];

  return (
    <section data-panel id={project.id} className="panel panel-center">
      <div className="w-full grid gap-6 lg:gap-14 lg:grid-cols-[5fr_6fr] items-center">
        <div className="px-a order-2 lg:order-1">
          <p className="m-0 mb-3 text-mute text-[15px]">{project.kind}</p>
          <h2 className="case-title m-0">{project.title}</h2>
          <p className="mt-4 mb-6 max-w-[44ch] text-[17px] leading-relaxed">{project.summary}</p>

          <dl className="case-meta m-0 grid gap-3 max-w-[46ch]">
            {rows.map(([label, value, phoneHidden]) => (
              <div
                key={label}
                className={`${phoneHidden ? 'hidden sm:grid' : 'grid'} grid-cols-[72px_1fr] sm:grid-cols-[84px_1fr] gap-3 border-t border-line pt-3 text-[15px]`}
              >
                <dt className="text-mute">{label}</dt>
                <dd className="m-0">{value}</dd>
              </div>
            ))}
          </dl>

          <Link className="btn-line mt-7" to={to}>
            Go to project
          </Link>
        </div>

        <Link
          to={to}
          className="frame frame-link order-1 lg:order-2 aspect-[4/3] max-h-[26vh] lg:max-h-[62vh] w-full justify-self-center"
          aria-label={`Go to project: ${project.title}`}
        >
          <ProjectImage project={project} className="px-img" />
        </Link>
      </div>
    </section>
  );
}
