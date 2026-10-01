import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import PageNav from '../components/layout/PageNav';
import ProjectImage from '../components/ProjectImage';
import Section from '../components/project/Section';
import NextProject from '../components/project/NextProject';

/*
  Detailed case study at /projects/:id.
  This is a scaffold: the layout is in place, the design is next.
*/
export default function ProjectPage() {
  const { id } = useParams();
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[index];
  const pageRef = useRef(null);

  // start at the top when opening a project or jumping to the next one
  useEffect(() => {
    pageRef.current?.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!project) return undefined;
    const previous = document.title;
    document.title = `${project.title} | Benjamin`;
    return () => { document.title = previous; };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const meta = [
    ['Role', project.role],
    ['Tools', project.tools],
    ['Type', project.kind],
  ];

  return (
    <div className="page" ref={pageRef}>
      <PageNav />

      <main className="page-main">
        <header>
          <p className="m-0 mb-4 text-mute text-[15px]">{project.kind}</p>
          <h1 className="page-title m-0">{project.title}</h1>
          <p className="mt-6 mb-0 max-w-[48ch] text-[19px] leading-relaxed">{project.summary}</p>
        </header>

        <dl className="m-0 mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-3">
          {meta.map(([label, value]) => (
            <div key={label} className="border-t border-line pt-3">
              <dt className="mb-1 text-sm text-mute">{label}</dt>
              <dd className="m-0 text-[16px] leading-snug">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="frame mt-12 aspect-[16/10]">
          <ProjectImage project={project} />
        </div>

        <Section title="The challenge">
          <p className="m-0">{project.challenge}</p>
        </Section>

        <Section title="How I approached it">
          <div className="grid gap-7">
            {project.approach.map((step) => (
              <div key={step.title}>
                <h3 className="m-0 mb-1 font-display text-lg font-semibold">{step.title}</h3>
                <p className="m-0 text-mute">{step.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="The outcome">
          <p className="m-0">{project.outcome}</p>
          {project.liveUrl && (
            <a className="btn-line mt-6" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View live project
            </a>
          )}
        </Section>

        <div className="mt-20">
          <NextProject project={next} />
          <Link className="btn-line mt-8" to="/">
            Back to case studies
          </Link>
        </div>
      </main>
    </div>
  );
}
