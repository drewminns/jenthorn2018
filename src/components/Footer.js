import React from 'react';
import Link from 'gatsby-link';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faMail from '@fortawesome/fontawesome-free-solid/faEnvelope';
const Footer = ({ data }) => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <ul className="Footer__nav">
              <li>
                <Link to="/#work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <ul className="Footer__social">
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
              <li>
                <a href="mailto:hello@jenthorn.ca">
                  <FontAwesomeIcon icon={faMail} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <p
              dangerouslySetInnerHTML={{ __html: data.content.content }}
              className="h2"
            />
            <p className="h2">
              <a href={data.resume.file.url} className="red" download>
                {data.featureText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
