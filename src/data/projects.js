/*
  CONTENT: the list of projects.

  Each entry here is the "card" info used by the home page (strip tiles,
  hero backdrop, case study panels) plus the header of its project page.
  The long-form content of each project page lives in its own file in
  src/data/pages/ and is attached as `page`.

  Images live under /public/images/ and are referenced by their public URL.
  `liveUrl` adds a button on the project page (label from `liveLabel`).
*/
import featherborn from './pages/featherborn';
import lostDungeon from './pages/the-lost-dungeon';
import stomper from './pages/stomper';
import multiplayer from './pages/multiplayer-game';
import classDashboard from './pages/class-dashboard';
import giftsOfHope from './pages/gifts-of-hope';
import bugGladiator from './pages/bug-gladiator';

export const PROJECTS = [
  {
    id: 'featherborn',
    title: 'Featherborn',
    kind: 'Game',
    image: '/images/Featherborn/featherborn1.png',
    role: 'Founder and developer, Boku Studios',
    tools: 'Unity, C#, Photopea, GitHub, Audacity',
    summary: 'A commercial game developed by my own startup studio with a public demo on Steam.',
    result:
      'A full game demo that generated interest in a Kickstarter campaign raising $6,000 for development. The game was also pitched to multiple publishers and is currently in development for a full release.',
    liveUrl: '',
    page: featherborn,
  },
  {
    id: 'the-lost-dungeon',
    title: 'The Lost Dungeon',
    kind: 'Game',
    image: '/images/Dungeon/lost_dungeon_boss.png',
    role: 'Solo Developer',
    tools: 'Construct 3, Aseprite, Audacity',
    summary:
      'A personal game project for a game jam that later evolved into a commercial game. Shipped to Scirra Arcade and Itch.io.',
    result: 'A full game with over 4,200 players on Scirra Arcade.',
    liveUrl: 'https://www.construct.net/en/free-online-games/lost-dungeon-38261/play',
    liveLabel: 'Play on Scirra Arcade',
    page: lostDungeon,
  },
  {
    id: 'stomper',
    title: 'Stomper',
    kind: 'Game',
    image: '/images/Stomper/stomper1.png',
    role: 'Solo Developer',
    tools: 'Construct 3, Aseprite',
    summary: 'A personal game project shipped to Scirra Arcade and Itch.io.',
    result: 'A fully functional game with over 650 players on Scirra Arcade.',
    liveUrl: 'https://www.construct.net/en/free-online-games/stomper-33634/play',
    liveLabel: 'Play on Scirra Arcade',
    page: stomper,
  },
  {
    id: 'multiplayer-game',
    title: 'Multiplayer Class Project',
    kind: 'Game',
    image: '/images/Multiplayer/multiplayer3.png',
    role: 'Frontend Developer',
    tools: 'LibGDX, Java, Android Studio, Tiled, MySQL, GitLab',
    summary:
      'A project for a class on mobile development. A multiplayer fighter arena game about stomping, with a live-service backend.',
    result:
      'Full marks for the project, and a working first attempt at a multiplayer game. The project also earned a best coding award.',
    liveUrl: '',
    page: multiplayer,
  },
  {
    id: 'class-dashboard',
    title: '3090 Class Dashboard',
    kind: 'Web App',
    image: '/images/SeniorDesign/senior1.png',
    role: 'Frontend Developer',
    tools: 'React, TypeScript, Tailwind, Electron, MySQL, Figma, GitLab',
    summary:
      'My Senior Design project for a real client. A dashboard for the COMS 3090 class that centralizes all the information for the teams in the class.',
    result:
      'Full marks for the project, and high praise from the client. A working dashboard that is still in use today by the class.',
    liveUrl: '',
    page: classDashboard,
  },
  {
    id: 'gifts-of-hope',
    title: 'Gifts of Hope',
    kind: 'Web App',
    image: '/images/GiftsOfHope/giftsOfHope1.png',
    role: 'UI/UX Designer and Full Stack Developer',
    tools: 'Google Sites, HTML, CSS, JavaScript, Photopea, Figma',
    summary:
      'A project for a local non-profit organization aimed at sending aid to first-year mothers in need. The website was created to help them centralize their information and make it easier for people to get help or donate to their cause.',
    result:
      'A working full stack web app that is still in live-service use by the non-profit. The website has helped over 230 mothers and helped raise over $7,000 in donations.',
    liveUrl: 'https://www.giftsofhopeiowa.org/home',
    page: giftsOfHope,
  },
  {
    id: 'bug-gladiator',
    title: 'Bug Gladiator',
    kind: 'Product Design',
    image: '/images/Bug_Gladiator/gladiator4.png',
    role: 'Sole Designer and Developer',
    tools: 'Dextrous, Photopea',
    summary:
      'A card battler game about bugs. The project was created for a class on game narrative and was designed to be a fun and engaging experience for players.',
    result:
      'Full marks for the project and a playable prototype that was well received by the class and professor.',
    liveUrl: '',
    page: bugGladiator,
  },
];
