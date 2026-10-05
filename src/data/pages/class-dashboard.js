/*
  Project page content for "class-dashboard".
  See src/data/pages/_template.js for the available block types.
*/
export default {
  tagline: 'A shared workspace for the teams, staff, and day-to-day work of COMS 3090.',
  tags: ['Senior Design', 'Web app', 'Real client'],
  meta: [],

  blocks: [
    {
      type: 'text',
      title: 'The challenge',
      body: [
        'COMS 3090 brings together many student teams, teaching assistants, and staff. Class information and team activity can be difficult to manage when the people responsible for it have to move between separate tools and views.',
        'As a Senior Design project for a real client, our team built a class dashboard to bring important class workflows together and make team status easier to review.',
      ],
    },
    {
      type: 'text',
      title: 'One dashboard, different workflows',
      body: [
        'I contributed as a frontend developer, working with React, TypeScript, Tailwind, and Electron alongside a MySQL-backed application. The interface organizes information around the tasks staff and students need to complete.',
        'The dashboard includes team and member overviews, task assignment, staff and student management, attendance, comments, and GitLab activity. This gives staff a place to move from a class-wide overview to the details of a particular team or student.',
      ],
    },
    {
      type: 'image',
      src: '/images/SeniorDesign/senior1.png',
      alt: 'Class Teams view with team cards, members, and status indicators',
      caption: 'The teams overview makes class-wide status and membership visible at a glance.',
    },
    {
      type: 'text',
      title: 'Tools for the day-to-day',
      body: [
        'Beyond the overview, staff need to communicate and follow up on work. The dashboard brings class chat and task assignment into the same application.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/SeniorDesign/senior2.png', alt: 'Staff chat view with class channels and messages' },
        { src: '/images/SeniorDesign/senior3.png', alt: 'Dark theme version of the staff chat view' },
      ],
      caption: 'The staff chat in light and dark themes.',
    },
    {
      type: 'image',
      src: '/images/SeniorDesign/senior4.png',
      alt: 'Task assignment screen with a form and assigned task list',
      caption: 'Task assignment pairs a focused creation form with a view of work already in progress.',
    },
    {
      type: 'text',
      title: 'From team status to individual progress',
      body: [
        'Team and student views connect project activity with performance and attendance information. Staff can move from a team snapshot to the details that help them identify where follow-up is needed.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/SeniorDesign/senior5.png', alt: 'Team dashboard showing members and GitLab analytics' },
        { src: '/images/SeniorDesign/senior6.png', alt: 'Student profile with performance, attendance, and GitLab statistics' },
      ],
    },
    {
      type: 'image',
      src: '/images/SeniorDesign/senior7.png',
      alt: 'Attendance calendar, GitLab statistics, and member comments',
      caption: 'Attendance, GitLab activity, and member comments in a single staff workspace.',
    },
    {
      type: 'text',
      title: 'Designed for desktop and mobile',
      body: [
        'The same team and staff workflows are available in compact mobile layouts, keeping core class information accessible away from a desktop.',
      ],
    },
    {
      type: 'images',
      layout: 'row',
      items: [
        { src: '/images/SeniorDesign/senior8.png', alt: 'Mobile Class Teams list with search, filters, and status summaries' },
        { src: '/images/SeniorDesign/senior9.png', alt: 'Mobile TA management screen with a searchable staff list' },
      ],
      caption: 'Mobile views for browsing class teams and managing teaching assistants.',
    },
    {
      type: 'text',
      title: 'Outcome',
      body: [
        'The team delivered a working dashboard for the class. The project received full marks and positive feedback from the client, and the dashboard remains in use by the class.',
      ],
    },
    {
      type: 'stats',
      title: 'Results',
      items: [
        { value: '400+ Students', label: 'Dashboard is currently in use by over 400 students and 15 TA\'s in the class' },
        { value: 'Full marks', label: 'Final project evaluation' },
      ],
    },
  ],
};
