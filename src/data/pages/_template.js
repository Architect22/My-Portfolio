/*
  TEMPLATE: every block type with all its options. Not imported anywhere.
  Copy what you need into a project's page file (src/data/pages/<id>.js).

  Images are always shown at their real proportions, nothing is cropped.
  Click any image on the page to open it full size.
*/
export default {
  tagline: 'One line that sells the project.',
  tags: ['Chip one', 'Chip two'],
  meta: [
    { label: 'Team', value: 'Who you worked with' },
    { label: 'Year', value: '2025' },
  ],
  cover: '/images/Folder/cover.png', // optional, defaults to the project's `image`
  links: [{ label: 'Itch.io page', href: 'https://example.com' }], // extra buttons, optional

  blocks: [
    // Heading on the left, text on the right.
    // `body` is a string or a list of strings. Inside the text:
    //   - a blank line starts a new paragraph
    //   - a single line break stays a line break
    //   - lines starting with "- " become bullets, "1. " become a numbered list
    {
      type: 'text',
      title: 'What was the problem?',
      body: `First paragraph.
This line sits right under it (a line break).

A new paragraph, followed by a list:
- First bullet
- Second bullet

1. Numbered step
2. Another step`,
    },

    // The same thing as a list of strings (each item is its own paragraph):
    // { type: 'text', title: 'Another way', body: ['First paragraph.', 'Second paragraph.', '- A bullet\n- Another bullet'] },

    // One image. width: 'full' (default) | 'narrow'.
    // natural: true  -> never stretch past the file's own size (good for small images)
    // pixelated: true -> keep pixel art crisp when scaled
    { type: 'image', src: '/images/Folder/shot.png', alt: 'Describe it', caption: 'Optional caption', width: 'full' },

    // Several images side by side. layout: 'row' (same height, widths follow each
    // image's shape) | 'grid' (two columns, natural heights). Stacks on phones.
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/Folder/a.png', alt: '' },
        { src: '/images/Folder/b.png', alt: '' },
        { src: '/images/Folder/c.png', alt: '' },
      ],
    },

    // Horizontal strip you can scroll through. Good for lots of screens.
    { type: 'gallery', title: 'More screens', items: [{ src: '/images/Folder/d.png' }, { src: '/images/Folder/e.png' }] },

    // Big numbers.
    {
      type: 'stats',
      title: 'Key results',
      items: [
        { value: '45%', label: 'What the number means' },
        { value: '2,000+', label: 'Another one' },
      ],
    },

    // A video file from /public. autoplay: true makes it a silent looping clip.
    { type: 'video', src: '/videos/demo.mp4', poster: '/images/Folder/poster.png', caption: 'Gameplay', autoplay: false },

    // YouTube / Itch.io / any iframe embed. ratio is width / height.
    { type: 'embed', url: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Trailer', ratio: 16 / 9 },
  ],
};
