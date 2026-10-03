import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import PageNav from '../components/layout/PageNav';
import Pic from '../components/project/Pic';
import Reveal from '../components/project/Reveal';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectMeta from '../components/project/ProjectMeta';
import BlockRenderer from '../components/project/BlockRenderer';
import NextProject from '../components/project/NextProject';

/*
  Detailed case study at /projects/:id.
  Header and cover come from the project in data/projects.js;
  everything below is the project's `page.blocks` (see data/pages/).
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
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const page = project.page ?? {};
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const cover = page.cover ?? project.image;
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Tools', value: project.tools },
    { label: 'Type', value: project.kind },
    ...(page.meta ?? []),
  ];

  return (
    <div className="page" ref={pageRef}>
      <PageNav />

      <main className="page-main">
        <ProjectHeader project={project} />

        {cover && (
          <Reveal className="mt-12">
            <Pic src={cover} alt={`${project.title} cover`} eager />
          </Reveal>
        )}

        <Reveal className="mt-12">
          <ProjectMeta items={meta} />
        </Reveal>

        <BlockRenderer blocks={page.blocks} />

        <div className="mt-28">
          <NextProject project={next} />
          <Link className="btn-line mt-8" to="/">
            Back to case studies
          </Link>
        </div>
      </main>
    </div>
  );
}
