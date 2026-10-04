/*
  Project page content for "featherborn".
  Everything on the page below the header is the `blocks` list, rendered in order.
  See src/data/pages/_template.js for every block type and its options.
  Replace the [bracketed] text with your own.
*/
export default {
  tagline: 'From startup studio to Steam demo and Kickstarter.',
  tags: ['Founder', 'Game', 'Unity', 'Steam demo'],

  // Extra rows next to Role / Tools / Type, e.g.
  // meta: [{ label: 'Team', value: '...' }, { label: 'Year', value: '2025' }],
  meta: [
    { label: 'Team', value: `Sound Designers Cutscene Animators Environment Artists Marketing Specialists` },
    { label: 'Year', value: '2025' },
  ],

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
        { value: '$6,000', label: 'Raised through Kickstarter for development' },
        { value: 'Steam', label: 'Public demo live, and pitched to multiple publishers' },
      ],
    },
  ],
};
