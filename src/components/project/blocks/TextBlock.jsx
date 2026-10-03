/* Heading on the left, paragraphs and optional bullets on the right. */
export default function TextBlock({ title, body, bullets }) {
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];
  return (
    <section className="pblock text-block">
      {title && <h2 className="block-title">{title}</h2>}
      <div className={`prose-block ${title ? '' : 'md:col-start-2'}`}>
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        {bullets?.length > 0 && (
          <ul>
            {bullets.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
