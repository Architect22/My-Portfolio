/* YouTube, Itch.io or any other iframe embed. `ratio` is width / height. */
export default function EmbedBlock({ url, title, ratio = 16 / 9, caption }) {
  return (
    <div className="pblock">
      <figure className="pic">
        <div className="embed" style={{ aspectRatio: ratio }}>
          <iframe src={url} title={title || 'Embedded content'} loading="lazy" allowFullScreen />
        </div>
        {caption && <figcaption className="pic-caption">{caption}</figcaption>}
      </figure>
    </div>
  );
}
