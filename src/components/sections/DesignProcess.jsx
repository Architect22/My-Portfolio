import { P } from '../../constants/panels';

const STEPS = [
  {
    number: '01',
    title: 'Understand the goal',
    description:
      'I start with the people, problem, and purpose behind the project. Clear goals and constraints help the team focus on what matters. I then parse out what it really is that the client wants so we both have a clear picture of the project',
  },
  {
    number: '02',
    title: 'Explore the possibilities',
    description:
      'I research the space, sketch ideas, and compare approaches before settling on a direction. The best solution is not always the first one. Feedback is very important during this phase, so I communicate ideas often',
  },
  {
    number: '03',
    title: 'Shape the experience',
    description:
      'I map the important flows and prototype the key interactions so we can see how the experience feels before investing in a full build. Changes are best addressed early on in the project lifecycle',
  },
  {
    number: '04',
    title: 'Build in small steps',
    description:
      'I turn the direction into working software, keeping the implementation organized and sharing progress early so feedback can shape the work.',
  },
  {
    number: '05',
    title: 'Test, refine, and ship',
    description:
      'I test the experience, fix rough edges, and keep improving it based on what people need. A project is not finished until it works for them.',
  },
];

export default function DesignProcess({ goTo }) {
  return (
    <section data-panel id="design-process" className="panel panel-center">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="px-a mb-8 lg:mb-10">
          <p className="m-0 mb-3 text-mute text-[15px]">A thoughtful, practical loop</p>
          <h2 className="case-title m-0">My Design Process</h2>
          <p className="mt-4 mb-0 max-w-[62ch] text-[16px] sm:text-[17px] leading-relaxed text-mute">
            Every project is different, but I bring the same curiosity and care to each one: understand the need,
            make ideas tangible, and work with others to make the result better.
          </p>
        </div>

        <ol className="m-0 p-0 list-none grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step) => (
            <li key={step.number} className="px-b min-w-0 border-t border-line pt-4 sm:pt-5">
              <span className="text-accent font-display text-sm">{step.number}</span>
              <h3 className="mt-3 mb-2 font-display font-semibold text-[19px] leading-tight">{step.title}</h3>
              <p className="m-0 text-[14px] leading-relaxed text-mute">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="px-a mt-7 lg:mt-9 flex flex-wrap items-center gap-5">
          <p className="m-0 text-[14px] text-mute">Open communication and useful feedback are part of every step.</p>
          <button className="btn-line" onClick={() => goTo(P.contact)}>
            Let's talk
          </button>
        </div>
      </div>
    </section>
  );
}
