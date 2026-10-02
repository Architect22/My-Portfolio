/*
  CONTENT: edit this file to change what shows up in the strip, the hero
  background, the case study panels on the home page, and each project's
  own page at /projects/<id>.

  Project images live under /public/images/ and are referenced by their
  public URL in each project's `image` field.
  Set `liveUrl` to show a "View live project" button on the project page.
*/
const PLACEHOLDER_DETAILS = {
  challenge: 'Describe the problem or goal this project started from, and who it was for.',
  approach: [
    { title: 'Research', body: 'What you looked into before building: users, constraints, existing solutions.' },
    { title: 'Design', body: 'Key decisions, sketches or prototypes, and why you made them.' },
    { title: 'Build', body: 'How you built it, the tools you used, and the hardest problem you solved.' },
  ],
  outcome: 'Say what happened: numbers, feedback, what shipped, what you would do differently.',
};

export const PROJECTS = [
  {
    id: 'featherborn',
    title: 'Featherborn',
    kind: 'Game',
    image: '/images/Featherborn/featherborn1.png',
    role: 'Founder and developer, Boku Studios',
    tools: 'Unity, C#, Photopea, Github, Audacity',
    summary: 'A commercial game with a public demo on Steam.',
    result: 'Add launch numbers, player feedback, or what shipping it taught you.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'the-lost-dungeon',
    title: 'The Lost Dungeon',
    kind: 'Game',
    image: '/images/Dungeon/dungeon1.webp',
    role: 'Solo Developer',
    tools: 'Construct3, Aesprite, Audacity',
    summary: 'A personal game project for a game jam later evolved into a commercial game. Shipped to Scirra Arcade and Itch.io.',
    result: 'A full game with over 4200 players on Scirra Arcade.',
    liveUrl: 'https://www.construct.net/en/free-online-games/lost-dungeon-38261/play',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'stomper',
    title: 'Stomper',
    kind: 'Game',
    image: '/images/Stomper/stomper1.webp',
    role: 'Solo Developer',
    tools: 'Construct3, Aesprite',
    summary: 'A personal game project shipped to Scirra Arcade and Itch.io.',
    result: 'A fully functional game with over 650 players on Scirra Arcade',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'multiplayer-game',
    title: 'Multiplayer Class Project',
    kind: 'Game',
    image: '/images/Multiplayer/multiplayer1.png',
    role: 'Frontend Developer',
    tools: 'LibGDX, Java, Android Studio, Tiled, mySQL, Gitlab',
    summary: 'A project for a class on mobile development. A multiplayer game fighter arena about stompingwith a live service backend.',
    result: 'Full marks for the project, and a working first attempt at a multiplayer game. The project also got best coding awards.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'class-dashboard',
    title: '3090 Class Dashboard',
    kind: 'Web App',
    image: '/images/SeniorDesign/senior1.png',
    role: 'Frontend Developer',
    tools: 'React, Typescript, Tailwind, Electron, mySQL, Figma, Gitlab',
    summary: 'My Senior Design Project for a legitimate client. A dashboard for the COMS 3090 class to centralize all the information for the teams in the class.',
    result: 'Full marks for the project, and high praise from the client. A working dashboard that is still in use today by the class.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'gifts-of-hope',
    title: 'Gifts of Hope',
    kind: 'Web App',
    image: '/images/GiftsOfHope/giftsOfHope1.png',
    role: 'UI/UX Designer and Full Stack Developer',
    tools: 'Google Sites, HTML, CSS, Javascript, Photopea, Figma',
    summary: 'A project for a local non-profit organization aimed at sending aid to first year mothers in need. The website was created to help them centralize their information and make it easier for people to get help or donate to their cause.',
    result: 'Working full stack web app that is still in live-service use by the non-profit. The website has helped over 230 mothers and helped raise over $7000 in donations.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'bug-gladiator',
    title: 'Bug Gladiator',
    kind: 'Product Design',
    image: '/images/Bug_Gladiator/gladiator1.png',
    role: 'Sole Designer and Developer',
    tools: 'Dextrous, Photopea',
    summary: 'A card battler game about bugs. The project was created for a class on game narrative and was designed to be a fun and engaging experience for players.',
    result: 'Full marks for the project and a playable prototype that was well recieved by the class and professor. ',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
];
