/*
  Project page content for "multiplayer-game".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'A mobile multiplayer platform fighter with player accounts and persistent game features.',
  tags: ['Mobile game', 'Multiplayer', 'Android', 'Class project'],
  meta: [],

  blocks: [
    {
      type: 'text',
      title: 'The challenge',
      body: [
        'This mobile-development class project was a first attempt at building a multiplayer game. The brief called for more than a playable arena: the experience also needed to connect players to accounts, friends, achievements, and game results.',
        'The core challenge was to make those supporting features feel like part of the same game rather than disconnected screens around a match.',
      ],
    },
    {
      type: 'text',
      title: 'From menu to match to results',
      body: [
        'I worked as the frontend developer using LibGDX and Java in Android Studio. The project paired the mobile game with a live-service backend using MySQL.',
        'The interface connects the player’s account and friends to the platform-fighter gameplay. After a match, a results screen surfaces the player score, berries collected, and total player deaths; an achievements screen recognizes milestones such as winning and defeating an opponent.',
      ],
    },
    {
      type: 'image',
      src: '/images/Multiplayer/multiplayer1.png',
      alt: 'Mobile game menu with account, friends, and player options',
      caption: 'The menu connects players to their account and friends before they enter a match.',
    },
    {
      type: 'text',
      title: 'The match is the main event',
      body: [
        'The two gameplay views show the platform-fighter loop across different moments: navigating the level, avoiding hazards, collecting berries, and competing with another player.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/Multiplayer/multiplayer2.png', alt: 'Multiplayer platform level with two players and on-screen controls' },
        { src: '/images/Multiplayer/multiplayer3.png', alt: 'Platform-fighter level with players navigating platforms and hazards' },
      ],
      caption: 'Two moments from a match, shown inside the mobile game frame.',
    },
    {
      type: 'text',
      title: 'A match with a clear ending',
      body: [
        'The results screen makes the outcome and individual performance visible, while achievements give players a record of milestones earned through play.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/Multiplayer/multiplayer4.png', alt: 'Match results screen showing a win and game statistics' },
        { src: '/images/Multiplayer/multiplayer5.png', alt: 'Achievements screen listing multiplayer and gameplay milestones' },
      ],
      caption: 'The post-match flow combines performance feedback with longer-term achievements.',
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'The project delivered a working first multiplayer game and its supporting account and progression screens. It received full marks and a best coding award.',
      ],
    },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: 'Full marks', label: 'Final project evaluation' },
        { value: 'Best coding', label: 'Project award' },
      ],
    },
  ],
};
