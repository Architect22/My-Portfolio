/*
  Project page content for "bug-gladiator".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'A tactical card battler where bugs fight for glory in the arena.',
  tags: ['Game design', 'Card game', 'Game narrative'],
  meta: [],

  blocks: [
    {
      type: 'text',
      title: 'The challenge',
      body: [
        'Bug Gladiator was created for a game narrative class. The goal was to turn a playful premise—bugs competing as arena fighters—into a game concept with enough character and tactical depth to make each card feel worth considering.',
        'The cards needed to do more than describe an action. Their names, art, and rules all had to work together so a player could understand the move and imagine its effect in the arena.',
      ],
    },
    {
      type: 'text',
      title: 'Designing the cards',
      body: [
        'I designed the prototype around distinct moves and their consequences. “Combo Starter” creates an opening by sending an opponent airborne; “Taunt” changes the crowd-favor balance; and “Sparrow” lets a player reposition an enemy.',
        'Each card pairs a short, evocative title with a clear rules description. The illustrations keep the bug-gladiator setting present while giving players a quick visual cue for the action.',
      ],
    },
    { 
      type: 'gallery', title: 'Card Designs', items: [
        { src: '/images/Bug_Gladiator/gladiator1.png' }, 
        { src: '/images/Bug_Gladiator/gladiator2.png' },
        { src: '/images/Bug_Gladiator/gladiator3.png' }] 
    },
    {
      type: 'text',
      title: 'Three cards, three kinds of control',
      body: [
        'The card set explores different ways to influence a fight: start a combo, shift crowd favor, or reposition an opponent. Pairing each ability with a distinct illustration makes the cards easier to scan and gives the mechanics a clear personality.',
      ],
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'The final deliverable was a playable card-game prototype presented for the class. It received full marks and was well received by the class and professor.',
      ],
    },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: 'Full marks', label: 'Final grade for the project' },
        { value: 'Playable', label: 'Card-game prototype completed' },
      ],
    },
  ],
};
