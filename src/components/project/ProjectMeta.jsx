/* Row of labelled facts (Role, Tools, Type, plus anything in page.meta). */
export default function ProjectMeta({ items }) {
  const shown = items.filter((item) => item.value);
  return (
    <dl className="meta-grid">
      {shown.map(({ label, value }) => (
        <div key={label} className="meta-item">
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
