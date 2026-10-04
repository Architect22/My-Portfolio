import { useCallback, useState } from 'react';

/*
  Shows a project's whole image at its real proportions, as large as will fit.

  The frame's width is the smaller of
    - the space available (100% of its container), and
    - the tallest allowed height (--fit-h) times the image's width/height ratio,
  so a wide image fills the width, a tall image fills the height, and small
  files are scaled up to the same size. Nothing is cropped and there are no bars.

  Props
    as         element or component to render as (e.g. Link). Default 'div'.
    className  extra classes
    style      extra styles, e.g. { '--fit-h': '260px' }
    ...rest    passed to the element (to, aria-label, ...)
*/
export default function FitFrame({ project, as: Tag = 'div', className = '', style, ...rest }) {
  const [ratio, setRatio] = useState(project.image ? null : 4 / 3);

  // covers images that were already loaded before React attached onLoad
  const imgRef = useCallback((img) => {
    if (img && img.complete && img.naturalWidth) setRatio(img.naturalWidth / img.naturalHeight);
  }, []);

  return (
    <Tag className={`fit-frame ${className}`} style={{ ...style, ...(ratio ? { '--ratio': ratio } : null) }} {...rest}>
      {project.image ? (
        <img
          ref={imgRef}
          src={project.image}
          alt=""
          decoding="async"
          onLoad={(e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)}
        />
      ) : (
        <Art motif={project.motif} palette={project.palette} />
      )}
    </Tag>
  );
}