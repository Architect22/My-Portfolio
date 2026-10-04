/*
  Project page content for "gifts-of-hope".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'A clearer way for local families to find support and for the community to give.',
  tags: ['Web app', 'UI/UX design', 'Non-profit'],
  meta: [],

  blocks: [
    {
      type: 'text',
      title: 'The challenge',
      body: [
        'Gifts of Hope supports local families with first-year essentials for babies and caregivers. Families need to understand what support is available and how to apply, while potential donors and volunteers need a clear way to get involved.',
        'The project focused on bringing those paths together in one welcoming website, with the organization’s mission and practical next steps easy to find.',
      ],
    },
    {
      type: 'text',
      title: 'Designing around clear next steps',
      body: [
        'I worked on the UI/UX design and full-stack development. The site presents the mission first, explains the kinds of essentials available, and gives families a direct route to apply for assistance.',
        'For community members, the site also explains ways to volunteer and help sort donations. The design uses a calm, supportive visual tone and straightforward navigation to keep the focus on the organization and the people it serves.',
      ],
    },
    {
      type: 'image',
      src: '/images/GiftsOfHope/giftsOfHope1.png',
      alt: 'Gifts of Hope homepage describing its mission and baby essentials',
      caption: 'The homepage leads with the organization’s mission and a direct route to apply for assistance.',
    },
    {
      type: 'text',
      title: 'Support for families and volunteers',
      body: [
        'Clear entry points serve different needs: families can learn how to apply, while people who want to help can find ways to volunteer and contribute. The site explains how hands-on tasks such as sorting donations support the organization’s work.',
      ],
    },
    {
      type: 'image',
      src: '/images/GiftsOfHope/giftsOfHope2.png',
      alt: 'Volunteer page explaining ways to help and sort donations',
      width: 'narrow',
      caption: 'Volunteer information pairs practical ways to help with a view of the people doing the work.',
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'The finished website is in use by the non-profit to centralize information and help people take action. The organization has helped more than 230 mothers and raised over $7,000 in donations.',
      ],
    },
    {
      type: 'stats',
      title: 'Community impact',
      items: [
        { value: '230+', label: 'Mothers helped' },
        { value: '$7,000+', label: 'Raised in donations' },
      ],
    },
  ],
};
