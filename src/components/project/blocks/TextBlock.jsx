import RichText from '../RichText';

/*
  Heading on the left, text on the right.
  `body` is a string or an array of strings; see RichText for the formatting
  (blank lines, line breaks, "- bullets", "1. numbers").
  `bullets` (list of strings) still works and is added after the body.
*/
export default function TextBlock({ title, body, bullets }) {
  const parts = Array.isArray(body) ? [...body] : body ? [body] : [];
  if (bullets?.length) parts.push(bullets.map((item) => `- ${item}`).join('\n'));

  return (
    <section className="pblock text-block">
      {title && <h2 className="block-title">{title}</h2>}
      <div className={`prose-block ${title ? '' : 'md:col-start-2'}`}>
        <RichText source={parts} />
      </div>
    </section>
  );
}
