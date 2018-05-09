import React from 'react';
import Link from 'gatsby-link';

import Arrow from '../images/arrow.svg';

const Highlight = ({ lead, title, link, linkText, listItems = [] }) => (
  <div className="Highlight">
    <div className="container">
      <div className="row">
        <div className="col-md-11 offset-md-1">
          <h2>
            <span className="Highlight__lead">{lead}</span>
            <span className="red Highlight__title">{title}</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-2">
          {listItems.length > 0 && (
            <ul className="Highlight__list">
              {listItems.map((node, i) => (
                <li key={i} className="Highlight__list-item">
                  {node}
                </li>
              ))}
            </ul>
          )}
          {link && (
            <p>
              <Link to={link} className="Highlight__link h5">
                {linkText} <img src={Arrow} />
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Highlight;
