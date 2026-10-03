import { useEffect, useRef } from 'react';

/* Full-screen viewer. Shows the whole image, scaled down to fit, never cropped. */
export default function Lightbox({ src, alt, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);

    // stop the page behind from scrolling
    const page = document.querySelector('.page');
    const prev = page?.style.overflowY;
    if (page) page.style.overflowY = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      if (page) page.style.overflowY = prev ?? '';
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt || 'Image viewer'} onClick={onClose}>
      <button ref={closeRef} className="lightbox-close" onClick={onClose}>
        Close
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
