/*
  Project page content for "gifts-of-hope".
  Everything on the page below the header is the `blocks` list, rendered in order.
  See src/data/pages/_template.js for every block type and its options.
  Replace the [bracketed] text with your own.
*/
export default {
  tagline: 'A website that makes it easier to ask for help, or to give.',
  tags: ['Web app', 'UI/UX', 'Non-profit'],

  // Extra rows next to Role / Tools / Type, e.g.
  // meta: [{ label: 'Team', value: '...' }, { label: 'Year', value: '2025' }],
  meta: [],

  // Cover image under the title. Defaults to the project's `image`.
  // cover: '/images/Folder/name.png',

  blocks: [
    {
      type: 'text',
      title: 'What was the problem?',
      body: ['[Describe the problem or goal this project started from, and who it was for.]'],
    },
    // { type: 'image', src: '/images/Folder/name2.png', alt: 'What this shows', caption: 'Optional caption' },
    {
      type: 'text',
      title: 'How it came together',
      body: ['[Walk through the key decisions, the tools you used, and the hardest problem you solved.]'],
    },
    // { type: 'images', layout: 'row', items: [{ src: '/images/Folder/a.png' }, { src: '/images/Folder/b.png' }] },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: '230+', label: 'Mothers helped' },
        { value: '$7,000+', label: 'Raised in donations' },
      ],
    },
  ],
};
