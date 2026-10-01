import { useId } from 'react';

/* Generated placeholder artwork, one composition per `motif`. */
export default function Art({ motif, palette, className = '' }) {
  const id = 'g' + useId().replace(/[^a-zA-Z0-9]/g, '');
  const [a, b, c] = palette;

  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />

      {motif === 'feathers' && (
        <g transform="translate(200 340)">
          {[-48, -24, 0, 24, 48].map((r, i) => (
            <g key={r} transform={`rotate(${r})`}>
              <ellipse cx="0" cy="-150" rx="28" ry="150" fill={c} opacity={0.5 + i * 0.08} />
              <line x1="0" y1="0" x2="0" y2="-290" stroke={a} strokeWidth="2" opacity=".5" />
            </g>
          ))}
        </g>
      )}

      {motif === 'grid' && (
        <g>
          <rect x="50" y="46" width="300" height="208" rx="12" fill={c} opacity=".16" />
          <rect x="50" y="46" width="300" height="30" rx="12" fill={c} opacity=".3" />
          <rect x="68" y="94" width="120" height="70" rx="8" fill={c} opacity=".55" />
          <rect x="200" y="94" width="132" height="32" rx="8" fill={c} opacity=".3" />
          <rect x="200" y="134" width="132" height="30" rx="8" fill={c} opacity=".3" />
          <rect x="68" y="178" width="264" height="56" rx="8" fill={c} opacity=".22" />
        </g>
      )}

      {motif === 'rings' && (
        <g fill="none" stroke={c}>
          {[30, 55, 80, 105, 130].map((r, i) => (
            <circle key={r} cx="200" cy="150" r={r} strokeWidth="2" opacity={1 - i * 0.14} />
          ))}
          <circle cx="200" cy="150" r="14" fill={c} stroke="none" />
        </g>
      )}

      {motif === 'shards' && (
        <g fill={c}>
          <polygon points="70,250 150,60 210,250" opacity=".55" />
          <polygon points="170,250 260,90 340,250" opacity=".8" />
          <polygon points="250,250 320,150 380,250" opacity=".4" />
        </g>
      )}
    </svg>
  );
}
