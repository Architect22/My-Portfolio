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
      title: 'Goal of the Project',
      body: ['The goal of Featherborn was to create a commercial game that could be pitched to publishers and potentially funded through Kickstarter. The project aimed to showcase the capabilities of my startup studio, Boku Studios, and to generate interest in a full game release.'],
    },
    // { type: 'image', src: '/images/Folder/name2.png', alt: 'What this shows', caption: 'Optional caption' },
    {
      type: 'text',
      title: 'How it came together',
      body: [`The game was built with Unity and C#, with all the environment and character art created by the team.
        
        The development process involved close collaboration with sound designers, cutscene animators, and marketing specialists to ensure a polished final product. The team worked diligently to create a compelling demo that would attract attention from both players and potential investors.`],
    },
    // {type: 'gallery', title: 'Game Screenshots', items: []},
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
