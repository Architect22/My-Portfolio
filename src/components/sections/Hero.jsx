import { useRef } from 'react';
import { PROJECTS } from '../../data/projects';
import { PROFILE } from '../../data/profile';
import { P } from '../../constants/panels';
import ProjectImage from '../ProjectImage';

function RingIcon() {
  return (
    <svg className="ring-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="50" cy="50" r="47" />
      <circle cx="50" cy="50" r="35" />
      <circle cx="50" cy="50" r="23" />
      <circle cx="50" cy="50" r="11" />
    </svg>
  );
}

function Avatar({ size }) {
  return (
    <div
      className="avatar rounded-full p-[3px]"
      style={{ width: size, height: size, background: 'linear-gradient(135deg, var(--accent), #e7c27a)' }}
    >
      <img
        className="h-full w-full rounded-full object-cover"
        src="/images/portfolio%20picture.jpg"
        alt="Benjamin"
        style={{ objectPosition: 'center 34%' }}
      />
    </div>
  );
}

/* Dim project tiles drifting behind the headline. */
function BackdropTiles() {
  const pool = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  return (
    <div
      className="px-bg pointer-events-none absolute -left-[10vw] w-[130vw] top-0 bottom-0 grid grid-cols-5 gap-5 px-[2vw] pt-24 opacity-[.17]"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4].map((col) => (
        <div key={col} className="flex flex-col gap-5" style={{ transform: `translateY(${col % 2 ? '-8vh' : '6vh'})` }}>
          {[0, 1].map((row) => (
            <div key={row} className="fit-frame fit-frame--fill">
              <ProjectImage project={pool[(col * 2 + row) % pool.length]} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Hero({ goTo }) {
  const ref = useRef(null);

  // mouse position as -0.5..0.5, read by the avatar's CSS
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--mx', (e.clientX / window.innerWidth - 0.5).toFixed(3));
    el.style.setProperty('--my', (e.clientY / window.innerHeight - 0.5).toFixed(3));
  };

  return (
    <section ref={ref} data-panel id="home" className="panel flex flex-col" onMouseMove={onMove}>
      <BackdropTiles />

      <div className="relative flex-1 flex flex-col justify-center">
        <div className="relative w-fit">
          <h1 className="hero-title m-0">
            <span className="line">
              <span style={{ '--d': '.35s' }}>Game, web,</span>
            </span>
            <span className="line">
              <span style={{ '--d': '.5s' }}>
                <RingIcon />
                UI/UX developer
              </span>
            </span>
          </h1>

          <div
            className="avatar-wrap hidden md:block absolute"
            style={{ left: '100%', marginLeft: '1.4vw', top: '64%' }}
          >
            <Avatar size={88} />
          </div>
        </div>

        <div className="md:hidden mt-8 avatar-wrap w-fit">
          <Avatar size={72} />
        </div>
      </div>

      <div
        className="relative flex flex-wrap items-end justify-between gap-x-10 gap-y-6 enter"
        style={{ '--d': '1s' }}
      >
        <p className="m-0 basis-full md:basis-auto max-w-[34ch] text-[17px] leading-relaxed text-ink">{PROFILE.intro}</p>

        <div className="flex items-center gap-2 text-mute text-[15px]" aria-hidden="true">
          <span className="hint-mouse">Scroll</span>
          <span className="hint-touch">Swipe</span>
          <svg className="nudge" width="34" height="14" viewBox="0 0 34 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 7h32M26 1l6 6-6 6" />
          </svg>
        </div>

        <button className="cta" onClick={() => goTo(P.contact)}>
          Contact
        </button>
      </div>
    </section>
  );
}
