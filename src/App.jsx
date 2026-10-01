import { PROJECTS } from './data/projects';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

import Nav from './components/layout/Nav';
import ProgressBar from './components/layout/ProgressBar';
import ProjectStrip from './components/layout/ProjectStrip';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CasesIntro from './components/sections/CasesIntro';
import CaseStudy from './components/sections/CaseStudy';
import CV from './components/sections/CV';
import Contact from './components/sections/Contact';

/*
  Panel order here must match src/constants/panels.js.
  Hero, About, CasesIntro, one CaseStudy per project, CV, Contact.
*/
export default function App() {
  const { scrollerRef, active, goTo } = useHorizontalScroll();

  return (
    <>
      <ProgressBar />
      <Nav active={active} goTo={goTo} />

      <main ref={scrollerRef} className="hscroll" aria-label="Portfolio. Scrolls horizontally.">
        <Hero goTo={goTo} />
        <About />
        <CasesIntro goTo={goTo} />
        {PROJECTS.map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}
        <CV />
        <Contact goTo={goTo} />
      </main>

      <ProjectStrip active={active} goTo={goTo} />
    </>
  );
}
