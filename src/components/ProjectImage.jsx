/* Renders the image selected for a project in projects.js. */
export default function ProjectImage({ project, className = '' }) {
  return <img src={project.image} alt="" className={className} loading="lazy" />;
}
