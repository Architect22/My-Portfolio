import { useState } from 'react';
import Pic from '../Pic';

/*
  Several images together.
  row:  same height, each image gets width in proportion to its shape (nothing cropped)
  grid: two columns, each image keeps its own height
*/
export default function ImagesBlock({ items = [], layout = 'row', caption }) {
  const [ratios, setRatios] = useState({});
  const setRatio = (i) => (r) => setRatios((prev) => (prev[i] === r ? prev : { ...prev, [i]: r }));

  return (
    <div className="pblock">
      <div className={layout === 'grid' ? 'img-grid' : 'img-row'}>
        {items.map((item, i) => (
          <div key={item.src} className="img-cell" style={layout === 'row' ? { flexGrow: ratios[i] ?? 1.5 } : undefined}>
            <Pic {...item} onRatio={setRatio(i)} />
          </div>
        ))}
      </div>
      {caption && <p className="pic-caption">{caption}</p>}
    </div>
  );
}
