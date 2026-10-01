import { PROFILE } from '../../data/profile';

export default function About() {
  return (
    <section data-panel id="about" className="panel flex flex-col justify-center">
      <div className="grid gap-10 lg:gap-20 lg:grid-cols-[1.25fr_1fr] items-center">
        <h2 className="big m-0 px-a">{PROFILE.aboutStatement}</h2>

        <dl className="m-0 grid gap-6 px-b">
          {PROFILE.facts.map(([label, value]) => (
            <div key={label} className="border-t border-line pt-4">
              <dt className="text-mute text-sm mb-1">{label}</dt>
              <dd className="m-0 text-[17px] leading-snug">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
