import { PROFILE } from '../../data/profile';
import { P } from '../../constants/panels';

export default function Contact({ goTo }) {
  return (
    <section data-panel id="contact" className="panel flex flex-col justify-center">
      <h2 className="big m-0 px-a">Have something in mind? Let's talk.</h2>
      <div className="mt-10 flex flex-wrap gap-4 px-b">
        <a className="cta" href={`mailto:${PROFILE.email}`}>
          Send an email
        </a>
        <a className="btn-line" href={PROFILE.linksHref} target="_blank" rel="noopener noreferrer">
          All my links
        </a>
        <button className="btn-line" onClick={() => goTo(P.home)}>
          Back to start
        </button>
      </div>
    </section>
  );
}
