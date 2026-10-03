import { useRef } from 'react';
import Pic from '../Pic';

/* A horizontal strip of images at equal height, scrolled with arrows, swipe or trackpad. */
export default function GalleryBlock({ title, items = [] }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="pblock">
      <div className="mb-6 flex items-end justify-between gap-4">
        {title ? <h2 className="block-title m-0">{title}</h2> : <span />}
        <div className="flex gap-2">
          <button type="button" className="gallery-btn" onClick={() => scroll(-1)} aria-label="Scroll left">
            ←
          </button>
          <button type="button" className="gallery-btn" onClick={() => scroll(1)} aria-label="Scroll right">
            →
          </button>
        </div>
      </div>
      <div className="gallery" ref={ref} tabIndex={0} aria-label={title || 'Image gallery'}>
        {items.map((item) => (
          <Pic key={item.src} {...item} />
        ))}
      </div>
    </section>
  );
}
