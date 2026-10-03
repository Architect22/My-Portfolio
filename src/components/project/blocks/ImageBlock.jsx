import Pic from '../Pic';

/* One image. width: 'full' (default) or 'narrow'. */
export default function ImageBlock({ src, alt, caption, width = 'full', natural, pixelated }) {
  return (
    <div className={`pblock ${width === 'narrow' ? 'block-narrow' : ''}`}>
      <Pic src={src} alt={alt} caption={caption} natural={natural} pixelated={pixelated} />
    </div>
  );
}
