import { useEffect, useRef } from 'react';
import { PROJECTS } from '../../data/projects';
import { P } from '../../constants/panels';
import ProjectImage from '../ProjectImage';

function Tile({ project, index, active, goTo, tileRef }) {
  return (
    <button
      ref={tileRef}
      className="tile"
      onClick={() => goTo(P.first + index)}
      aria-current={active === P.first + index}
      aria-label={`Jump to ${project.title}`}
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
  Each project appears exactly once. If they don't all fit, the strip scrolls
  sideways (swipe, drag, or trackpad) and follows the page: the tile for the
  project you're viewing slides into the middle.
*/
export default function ProjectStrip({ active, goTo }) {
  const viewRef = useRef(null);
  const tileRefs = useRef([]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const i = active - P.first;
    const tile = tileRefs.current[i];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let left = 0;
    if (tile && i >= 0 && i < PROJECTS.length) {
      left = tile.offsetLeft - (view.clientWidth - tile.offsetWidth) / 2;
    }
    view.scrollTo({ left: Math.max(0, left), behavior: reduce ? 'auto' : 'smooth' });
  }, [active]);

  return (
    <div className="strip" role="region" aria-label="Projects">
      <div className="strip-view" ref={viewRef}>
        <div className="strip-list">
          {PROJECTS.map((project, index) => (
            <Tile
              key={project.id}
              project={project}
              index={index}
              active={active}
              goTo={goTo}
              tileRef={(node) => { tileRefs.current[index] = node; }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
