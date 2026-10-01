import { useEffect, useState } from 'react';
import { P } from '../../constants/panels';

/* Top bar for the home page. Inline links on desktop, a menu sheet on phones. */
export default function Nav({ active, goTo }) {
  const [open, setOpen] = useState(false);

  const links = [
    ['About', P.about, active === P.about],
    ['Case studies', P.cases, active >= P.cases && active < P.cv],
    ['My CV', P.cv, active === P.cv],
    ['Contact', P.contact, active === P.contact],
  ];

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (index) => {
    setOpen(false);
    goTo(index);
  };

  return (
    <>
      <nav className="nav enter" style={{ '--d': '.1s' }} aria-label="Sections">
        <button onClick={() => go(P.home)} aria-current={active === P.home}>
          Home
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, index, on]) => (
            <button key={label} onClick={() => go(index)} aria-current={on}>
              {label}
            </button>
          ))}
        </div>

        <button
          className="menu-btn md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="nav-sheet md:hidden">
          {links.map(([label, index, on]) => (
            <button key={label} onClick={() => go(index)} aria-current={on}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
