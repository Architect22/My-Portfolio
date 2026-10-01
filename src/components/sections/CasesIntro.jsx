import { PROJECTS } from '../../data/projects';
import { P } from '../../constants/panels';

export default function CasesIntro({ goTo }) {
  return (
    <section data-panel id="cases" className="panel flex flex-col justify-center">
      <h2 className="big m-0 px-a">Case studies</h2>
      <p className="mt-6 max-w-[40ch] text-[18px] text-mute leading-relaxed px-b">
        {PROJECTS.length} projects. Each one covers the problem, what I built, and how it turned out.
      </p>
      <button className="btn-line mt-8 w-fit px-b" onClick={() => goTo(P.first)}>
        Start with {PROJECTS[0].title}
      </button>
    </section>
  );
}
