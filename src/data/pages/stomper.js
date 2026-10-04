/*
  Project page content for "stomper".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'A compact platform game built around one satisfying move: stomping enemies.',
  tags: ['Game development', 'Construct 3', 'Pixel art'],
  meta: [],

  blocks: [
    {
      type: 'text',
      title: 'The challenge',
      body: [
        'Stomper is a solo-developed arcade platformer released on Scirra Arcade and Itch.io. Its central action is immediately legible: jump onto enemies to defeat them.',
        'The level design needed to make that action work in motion, giving players a reason to time jumps while navigating platforms, hazards, and collectibles.',
      ],
    },
    {
      type: 'text',
      title: 'Making the core action readable',
      body: [
        'I built the game in Construct 3 and created its pixel-art presentation in Aseprite. The controls and environment are kept visually clear so players can read platforms, enemies, and hazards while moving through each space.',
        'The screenshots show different moments in that loop: enemies and gems in the dungeon, a more demanding obstacle layout, and an in-game instruction that teaches the key action and restart control.',
      ],
    },
    {
      type: 'image',
      src: '/images/Stomper/stomper1.png',
      alt: 'Pixel-art dungeon gameplay with the player, an enemy, and collectibles',
      pixelated: true,
      caption: 'A level combines readable platforms, enemies, and collectibles in a compact dungeon space.',
    },
    {
      type: 'text',
      title: 'Teach the move, then test it',
      body: [
        'The game builds around one simple rule: land on enemies to defeat them. A short instruction in the level introduces the mechanic and restart control, while later layouts ask players to apply it around tighter spaces and hazards.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/Stomper/stomper2.png', alt: 'Platforming challenge with hazards, gems, and an enemy being stomped', pixelated: true },
        { src: '/images/Stomper/stomper3.png', alt: 'Gameplay instruction explaining that stomping defeats enemies and R restarts the level', pixelated: true },
      ],
      caption: 'A more demanding obstacle room and the in-game instruction that introduces the core action.',
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'Stomper shipped as a playable game on Scirra Arcade and Itch.io, where it reached more than 650 players on Scirra Arcade.',
      ],
    },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: '650+', label: 'Players on Scirra Arcade' },
        { value: '2', label: 'Platforms: Scirra Arcade and Itch.io' },
      ],
    },
  ],
};
