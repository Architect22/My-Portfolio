import { P } from '../../constants/panels';

export default function Nav({ active, goTo }) {
  const items = [
    ['About', P.about, active === P.about],
    ['Case studies', P.cases, active >= P.cases && active < P.cv],
    ['My CV', P.cv, active === P.cv],
    ['Contact', P.contact, active === P.contact],
  ];

  return (
    <nav className="nav enter" style={{ '--d': '.1s' }} aria-label="Sections">
      <button onClick={() => goTo(P.home)} aria-current={active === P.home}>
        Home
      </button>
      <div className="flex items-center gap-4 sm:gap-8">
        {items.map(([label, index, on]) => (
          <button key={label} onClick={() => goTo(index)} aria-current={on}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
