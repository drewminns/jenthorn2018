import React from 'react';
import Link from 'gatsby-link';

import Navigation from './navigation';

import Logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="container">
      <div className="row">
        <div className="col-md-12 Header__row">
          <h1 className="Header__Logo">
            <Link to="/">
              <img src={Logo} alt="" />
              <span>Jen Thorn</span>
            </Link>
          </h1>
          <Navigation />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
