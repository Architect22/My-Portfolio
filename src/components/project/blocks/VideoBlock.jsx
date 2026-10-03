/* A video file at its real proportions. autoplay makes it a silent, looping clip. */
export default function VideoBlock({ src, poster, caption, autoplay = false }) {
  const clip = autoplay ? { autoPlay: true, muted: true, loop: true } : { controls: true };
  return (
    <div className="pblock">
      <figure className="pic">
        <video className="pic-img" src={src} poster={poster} playsInline preload="metadata" {...clip} />
        {caption && <figcaption className="pic-caption">{caption}</figcaption>}
      </figure>
    </div>
  );
}
