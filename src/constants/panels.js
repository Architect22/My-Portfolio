import { PROJECTS } from '../data/projects';

/*
  Panel order along the horizontal track. Components and the scroll hook
  use these indexes, so adding a panel means adding it here and in App.jsx.
*/
export const P = {
  home: 0,
  about: 1,
  cases: 2,
  first: 3, // first project case study
  contact: 3 + PROJECTS.length,
};

export const TOTAL_PANELS = P.contact + 1;
