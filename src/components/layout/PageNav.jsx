import { Link } from 'react-router-dom';

/* Top bar for project pages. Going back returns to the panel you left. */
export default function PageNav() {
  return (
    <nav className="nav" aria-label="Site">
      <Link to="/">Home</Link>
      <Link to="/">← All case studies</Link>
    </nav>
  );
}
