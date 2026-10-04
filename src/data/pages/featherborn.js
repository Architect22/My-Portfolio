/*
  Project page content for "featherborn".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'Building an atmospheric adventure game from an indie studio into a public demo.',
  tags: ['Founder', 'Game development', 'Unity', 'Steam demo'],
  meta: [
    { label: 'Team', value: 'Sound designers, cutscene animators, environment artists, and marketing specialists' },
    { label: 'Year', value: '2024' },
  ],

  blocks: [
    {
      type: 'text',
      title: 'The goal',
      body: [
        'Featherborn was created to showcase the work of Boku Studios and build a foundation for a commercial game. The team needed a polished, playable demo that could introduce the game to players, publishers, and potential backers.',
        'As founder and developer, I helped take the project from studio ambition to a public-facing experience while collaborating across art, sound, cutscenes, and marketing.',
      ],
    },
    {
      type: 'text',
      title: 'Building a world to explore',
      body: [
        'The game was built in Unity with C#. The screenshots show the range of spaces that make up the experience: a quiet village hub, an interior shop with character dialogue, and a forest encounter framed by environmental landmarks.',
        'I worked with environment artists, sound designers, cutscene animators, and marketing specialists to bring the demo together. The aim was to make the world feel cohesive and give players a useful sample of the larger game.',
      ],
    },
    { type: 'video', src: '/videos/Featherborn Kickstarter Trailer.mp4', poster: '/images/Featherborn/featherborn2.png', caption: 'Featherborn Kickstarter Trailer', autoplay: false },
    {
      type: 'text',
      title: 'A place to pause and explore',
      body: [
        'The village square gives players a quieter space to orient themselves between encounters. Shared architectural details, cobbled paths, and warm windows help the town read as a connected place.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/Featherborn/featherborn3.png', alt: 'Shop interior with the shopkeeper greeting the player' },
        { src: '/images/Featherborn/featherborn4.png', alt: 'Forest clearing marked by standing stones and a large creature' },
      ],
      caption: 'A character-led shop scene alongside a forest encounter that shifts the mood toward adventure.',
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'The project produced a public Steam demo that could be used to introduce the game and support conversations with publishers. The demo also helped generate interest in a Kickstarter campaign for development.',
      ],
    },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: '$6,000', label: 'Raised through Kickstarter for development' },
        { value: 'Steam', label: 'Public demo available and pitched to publishers' },
      ],
    },
    {
      type: 'text',
      title: 'Links',
      body: [
        '- [Game Design Doc](https://docs.google.com/document/d/1z4WgnZqFgJuGBmLDFSqjFXH8HN6bEt9mVZFjGLOpYys/edit?tab=t.0#heading=h.s0zb9vvb841f)',
        '- [Steam Page](https://store.steampowered.com/app/3082940/Featherborn/)',
        '- [Kickstarter Campaign](https://www.kickstarter.com/projects/featherborn/featherborn-a-2d-isometric-openworld-game?ref=nav_search&result=project&term=featherborn&total_hits=7)',
        '- [Featherborn Pitchdeck](https://impress.games/press-kit/boku-studios/featherborn)',
        '- [Boku Studios Website](https://boku-studios.itch.io/)'
      ],
    },
  ],
};
