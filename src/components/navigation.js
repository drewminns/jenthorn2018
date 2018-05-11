import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <nav className="Navigation">
    <ul className="Navigation__list">
      <li>
        <Link to="/#work" className="h5">
          Work
        </Link>
      </li>
      <li>
        <Link to="/about" className="h5">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="h5 green">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
