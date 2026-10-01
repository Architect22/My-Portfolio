import ProjectImage from '../ProjectImage';

export default function CaseStudy({ project }) {
  const rows = [
    ['Role', project.role],
    ['Tools', project.tools],
    ['Outcome', project.result],
  ];

  return (
    <section data-panel id={project.id} className="panel flex items-center">
      <div className="w-full grid gap-8 lg:gap-14 lg:grid-cols-[5fr_6fr] items-center">
        <div className="px-a order-2 lg:order-1">
          <p className="m-0 mb-3 text-mute text-[15px]">{project.kind}</p>
          <h2 className="case-title m-0">{project.title}</h2>
          <p className="mt-5 mb-8 max-w-[44ch] text-[17px] leading-relaxed">{project.summary}</p>

          <dl className="m-0 grid gap-4 max-w-[46ch]">
            {rows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[84px_1fr] gap-3 border-t border-line pt-3 text-[15px]">
                <dt className="text-mute">{label}</dt>
                <dd className="m-0">{value}</dd>
              </div>
            ))}
          </dl>

          <a className="btn-line mt-8" href={project.href}>
            Visit project
          </a>
        </div>

        <div className="frame order-1 lg:order-2 aspect-[4/3] max-h-[52vh] lg:max-h-[62vh] w-full justify-self-center">
          <ProjectImage project={project} className="px-img" />
        </div>
      </div>
    </section>
  );
}
