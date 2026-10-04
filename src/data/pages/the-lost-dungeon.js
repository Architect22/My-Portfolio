/*
  Project page content for "the-lost-dungeon".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'A pixel-art dungeon game that grew from a game-jam entry into a full release.',
  tags: ['Game development', 'Construct 3', 'Pixel art', 'Scirra Arcade'],
  meta: [],

  blocks: [
    {
      type: 'text',
      title: 'The challenge',
      body: [
        'The Lost Dungeon began as a game-jam project and continued beyond the initial prototype. Turning a short-form idea into a full release meant building a more complete experience while preserving the compact, atmospheric feel of its pixel-art world.',
        'The project was developed solo in Construct 3, with Aseprite for pixel art and Audacity for audio.',
      ],
    },
    {
      type: 'text',
      title: 'Extending the dungeon',
      body: [
        'The visual direction uses a limited, muted palette to give the dungeon a worn, mysterious atmosphere. Contrasting pools of light and small warm accents help guide attention through otherwise dark spaces.',
        'The project imagery captures both the world and its encounters: an exterior establishing scene, dungeon interiors, and a large boss confrontation. Together these views show how the game moved from a single jam concept toward a broader playable release.',
      ],
    },
    {
      type: 'image',
      src: '/images/Dungeon/dungeon1.png',
      alt: 'Pixel-art exterior with a distant castle and a message about the human kingdom declaring war',
      pixelated: true,
      caption: 'An exterior scene establishes the conflict that leads players into the dungeon.',
    },
    {
      type: 'text',
      title: 'Exploring by torchlight',
      body: [
        'Inside, pools of light break up the dark stone environment and help frame platforms and paths. The contrast keeps the pixel-art mood while making the playable space easier to read.',
      ],
    },
    {
      type: 'image',
      src: '/images/Dungeon/dungeon2.png',
      alt: 'Dark dungeon interior with stone platforms and pools of light',
      pixelated: true,
      width: 'narrow',
    },
    {
      type: 'image',
      src: '/images/Dungeon/lost_dungeon_boss.png',
      alt: 'Large pixel-art boss encounter inside a dark dungeon',
      pixelated: true,
      caption: 'A boss encounter raises the stakes with a larger silhouette and a more dangerous arena.',
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'The game evolved from a jam entry into a full release on Scirra Arcade and Itch.io. It reached more than 4,200 players on Scirra Arcade.',
      ],
    },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: '4,200+', label: 'Players on Scirra Arcade' },
        { value: 'Full release', label: 'Grew beyond the original game-jam entry' },
      ],
    },
  ],
};
