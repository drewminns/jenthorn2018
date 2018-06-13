import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faMail from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Navigation = ({ closeNav, resume }) => (
  <nav className="Navigation">
    <ul className="Navigation__list">
      <li>
        <Link
          className="link h4"
          to="/#work"
          onClick={() => {
            closeNav();
          }}
        >
          Work
        </Link>
      </li>
      <li>
        <div
          className="link h4"
          onClick={() => {
            navigateTo('/about');
            closeNav();
          }}
        >
          About
        </div>
      </li>
      <li>
        <a className="link h4" href={resume} download>
          Resume
        </a>
      </li>
      <li>
        <Link
          className="link h4 Navigation__contact"
          to="/about#contact"
          onClick={() => {
            closeNav();
          }}
        >
          Contact
        </Link>
        <div className="Navigation__contact-element">
          <div className="row">
            <div className="col-md-11 offset md-1">
              <p className="red h4">Oh Hello! 👋</p>
              <p className="h4">I’m looking forward to connecting with you!</p>
              <p className="green h4 Navigation__email">
                <a href="mailto:hello@jenthorn.ca" className="green">
                  hello@jenthorn.ca
                </a>
              </p>
              <ul className="Navigation__social">
                <li>
                  <a href="https://twitter.com/jenthorn_">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jenthorn_/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
);

export default Navigation;
