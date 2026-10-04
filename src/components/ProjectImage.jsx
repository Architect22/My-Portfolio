/* Renders the image selected for a project in projects.js. */
import { assetUrl } from '../utils/assetUrl';

export default function ProjectImage({ project, className = '' }) {
  return <img src={assetUrl(project.image)} alt="" className={className} loading="lazy" />;
}
