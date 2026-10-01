import { PROFILE } from '../../data/profile';

export default function CV() {
  return (
    <section data-panel id="cv" className="panel panel-center">
      <h2 className="big m-0 px-a">My CV</h2>
      <p className="mt-6 max-w-[42ch] text-[18px] text-mute leading-relaxed px-b">
        Education, experience, and skills on one page.
      </p>
      <a className="btn-line mt-8 w-fit px-b" href={PROFILE.cvHref} download>
        Download PDF
      </a>
    </section>
  );
}
