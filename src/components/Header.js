import React, { Component } from 'react';
import Link from 'gatsby-link';

import Navigation from './navigation';

import Logo from '../images/logo.svg';
import Menu from '../images/menu.svg';
import Close from '../images/close.svg';

class Header extends Component {
  state = {
    menuOpen: false,
  };

  handleMenuOpen = e => {
    e.preventDefault();
    this.setState({
      menuOpen: true,
    });
  };

  handleMenuClose = () => {
    e.preventDefault();
    this.setState({
      menuOpen: false,
    });
  };

  render() {
    let navClass = 'Header__nav';

    if (this.state.menuOpen) {
      navClass = 'Header__nav Header__nav--active';
    }

    return (
      <header className="Header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Header__row">
              <h1 className="Header__Logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                  <span>{this.props.siteTitle}</span>
                </Link>
              </h1>
              <a
                className="Header__menu"
                href="#"
                onClick={this.handleMenuOpen}
              >
                Open Menu
              </a>
              <div className={navClass}>
                <a
                  className="Header__close"
                  href="#"
                  onClick={this.handleMenuClose}
                >
                  Close Menu
                </a>
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
