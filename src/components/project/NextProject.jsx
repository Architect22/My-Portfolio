import { Link } from 'react-router-dom';
import ProjectImage from '../ProjectImage';

export default function NextProject({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="next-link" aria-label={`Next project: ${project.title}`}>
      <div>
        <p className="m-0 mb-3 text-mute text-[15px]">Next project</p>
        <span className="case-title block">{project.title}</span>
        <span className="mt-2 block text-mute text-[15px]">{project.kind}</span>
      </div>
      <div className="fit-frame justify-self-start md:justify-self-end" style={{ '--fit-h': '260px' }}>
        <ProjectImage project={project} />
      </div>
    </Link>
  );
}
