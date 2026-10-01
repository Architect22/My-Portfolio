/*
  CONTENT: edit this file to change what shows up in the strip, the hero
  background, the case study panels on the home page, and each project's
  own page at /projects/<id>.

  To use real screenshots instead of the generated placeholder art, add
  `image: '/projects/name.jpg'` (file in /public/projects/).
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
    motif: 'feathers',
    palette: ['#1b2a4a', '#3f7f86', '#e7c27a'],
    role: 'Founder and developer, Boku Studios',
    tools: 'Unity, C#',
    summary: 'A commercial game with a public demo on Steam.',
    result: 'Add launch numbers, player feedback, or what shipping it taught you.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'project-2',
    title: 'Project 2',
    kind: 'Web app',
    motif: 'grid',
    palette: ['#2a2150', '#5a6bff', '#9db0ff'],
    role: 'Your role on the project',
    tools: 'React, TypeScript, Tailwind',
    summary: 'One or two sentences on the problem this solved and who it was for.',
    result: 'What changed because of it: a number, a quote, a shipped feature.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'project-3',
    title: 'Project 3',
    kind: 'UI/UX',
    motif: 'rings',
    palette: ['#3a1f3d', '#c2577a', '#f3b8a0'],
    role: 'Your role on the project',
    tools: 'Figma, user testing',
    summary: 'One or two sentences on the problem this solved and who it was for.',
    result: 'What changed because of it: a number, a quote, a shipped feature.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
  {
    id: 'project-4',
    title: 'Project 4',
    kind: 'Game',
    motif: 'shards',
    palette: ['#10312b', '#2f9a74', '#d6f06a'],
    role: 'Your role on the project',
    tools: 'Unity, C#',
    summary: 'One or two sentences on the problem this solved and who it was for.',
    result: 'What changed because of it: a number, a quote, a shipped feature.',
    liveUrl: '',
    ...PLACEHOLDER_DETAILS,
  },
];
