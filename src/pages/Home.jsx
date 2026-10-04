import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projects';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import { assetUrl } from '../utils/assetUrl';

import Nav from '../components/layout/Nav';
import ProgressBar from '../components/layout/ProgressBar';
import ProjectStrip from '../components/layout/ProjectStrip';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import CaseStudy from '../components/sections/CaseStudy';
import Contact from '../components/sections/Contact';

function WalkAnimation({ direction, isScrolling }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !direction) return undefined;

    if (isScrolling) {
      video.play().catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Could not play the walking animation.', error);
        }
      });
    } else {
      video.pause();
    }
  }, [direction, isScrolling]);

  if (!direction) return null;

  return (
    <video
      ref={videoRef}
      className="walk-animation"
      key={direction}
      src={assetUrl(`/videos/walk_${direction}.mp4`)}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}

/*
  The horizontal-scrolling home page.
  Panel order here must match src/constants/panels.js:
  Hero, About, one CaseStudy per project, Contact.
*/
export default function Home() {
  const { scrollerRef, active, goTo, scrollDirection, isScrolling } = useHorizontalScroll();

  return (
    <>
      <ProgressBar />
      <Nav active={active} goTo={goTo} />

      <main ref={scrollerRef} className="hscroll" aria-label="Portfolio. Scrolls horizontally.">
        <Hero goTo={goTo} />
        <About />
        {PROJECTS.map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}
        <Contact goTo={goTo} />
      </main>

      <WalkAnimation direction={scrollDirection} isScrolling={isScrolling} />
      <ProjectStrip active={active} goTo={goTo} />
    </>
  );
}
