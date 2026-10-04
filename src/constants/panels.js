import { PROJECTS } from '../data/projects';

/*
  Panel order along the horizontal track. Components and the scroll hook
  use these indexes, so adding a panel means adding it here and in App.jsx.
*/
export const P = {
  home: 0,
  about: 1,
  first: 2, // first project case study
  contact: 2 + PROJECTS.length,
};

export const TOTAL_PANELS = P.contact + 1;
