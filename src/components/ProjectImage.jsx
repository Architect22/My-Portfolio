import Art from './Art';

/*
  One place that decides how a project is pictured: a real image when
  `project.image` is set, generated placeholder art otherwise.
*/
export default function ProjectImage({ project, className = '' }) {
  if (project.image) {
    return <img src={project.image} alt="" className={className} loading="lazy" />;
  }
  return <Art motif={project.motif} palette={project.palette} className={className} />;
}
