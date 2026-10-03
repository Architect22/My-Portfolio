/* Big numbers with a short label. */
export default function StatsBlock({ title, items = [] }) {
  return (
    <section className="pblock">
      {title && <h2 className="block-title mb-8">{title}</h2>}
      <ul className="stats">
        {items.map(({ value, label }) => (
          <li key={label} className="stat">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
