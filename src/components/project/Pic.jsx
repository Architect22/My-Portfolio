import { useCallback, useState } from 'react';
import Lightbox from './Lightbox';
import { assetUrl } from '../../utils/assetUrl';

/*
  An image at its real proportions: full width of its container, height
  follows the file, nothing is cropped. Click to open full size.

  Props
    natural    never scale up past the file's own size
    pixelated  keep pixel art crisp
    zoom       set false to disable the viewer
    onRatio    called with width/height once the image has loaded
  A missing file is skipped (with a console warning) instead of showing a broken icon.
*/
export default function Pic({
  src,
  alt = '',
  caption,
  natural = false,
  pixelated = false,
  zoom = true,
  eager = false,
  className = '',
  onRatio,
}) {
  const [state, setState] = useState('loading'); // loading | ok | error
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const resolvedSrc = assetUrl(src);

  const done = useCallback(
    (img) => {
      if (img.naturalWidth && img.naturalHeight) onRatio?.(img.naturalWidth / img.naturalHeight);
      setState('ok');
    },
    [onRatio]
  );

  // covers images that finished loading before React attached its handler
  const refCallback = useCallback(
    (img) => {
      if (img && img.complete && img.naturalWidth) done(img);
    },
    [done]
  );

  if (state === 'error') return null;

  const img = (
    <img
      ref={refCallback}
      src={resolvedSrc}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`pic-img ${natural ? 'pic-natural' : ''} ${pixelated ? 'pic-pixel' : ''}`}
      onLoad={(e) => done(e.currentTarget)}
      onError={() => {
        console.warn(`[portfolio] image not found: ${resolvedSrc}`);
        setState('error');
      }}
    />
  );

  return (
    <figure className={`pic ${className}`} data-state={state}>
      {zoom ? (
        <button type="button" className="pic-btn" onClick={() => setOpen(true)} aria-label={`View full size: ${alt || caption || resolvedSrc}`}>
          {img}
        </button>
      ) : (
        img
      )}
      {caption && <figcaption className="pic-caption">{caption}</figcaption>}
      {open && <Lightbox src={resolvedSrc} alt={alt} onClose={close} />}
    </figure>
  );
}
