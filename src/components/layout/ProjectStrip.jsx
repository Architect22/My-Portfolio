import { PROJECTS } from '../../data/projects';
import { P } from '../../constants/panels';
import ProjectImage from '../ProjectImage';

function Tile({ project, index, active, goTo, hidden }) {
  return (
    <button
      className="tile"
      onClick={() => goTo(P.first + index)}
      aria-current={active === P.first + index}
      tabIndex={hidden ? -1 : 0}
      aria-label={`Open case study: ${project.title}`}
    >
      <span className="thumb">
        <ProjectImage project={project} />
      </span>
      <span>
        <span className="block font-display font-semibold text-[15px] leading-tight whitespace-nowrap">
          {project.title}
        </span>
        <span className="block text-[13px] text-mute whitespace-nowrap">{project.kind}</span>
      </span>
    </button>
  );
}

/*
  The track holds two identical halves; the CSS marquee slides it by -50%
  so it loops seamlessly. Each half repeats the project list 3 times so it
  stays wider than ultra-wide screens. Only the very first copy is focusable.
*/
export default function ProjectStrip({ active, goTo }) {
  return (
    <div className="strip" role="region" aria-label="Projects">
      <div className="strip-view">
        <div className="track">
          {[0, 1].map((half) => (
            <div className="half" key={half} aria-hidden={half === 1 ? 'true' : undefined}>
              {[0, 1, 2].map((rep) =>
                PROJECTS.map((project, index) => (
                  <Tile
                    key={`${rep}-${project.id}`}
                    project={project}
                    index={index}
                    active={active}
                    goTo={goTo}
                    hidden={half === 1 || rep > 0}
                  />
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
