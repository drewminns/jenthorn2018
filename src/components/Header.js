import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

import Navigation from './navigation';

import Logo from '../images/logo.svg';
import Menu from '../images/menu.svg';
import Close from '../images/close.svg';

class Header extends Component {
  state = {
    menuOpen: false,
  };

  handleMenuOpen = e => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      menuOpen: true,
    });
  };

  handleMenuClose = e => {
    if (e) {
      e.preventDefault();
    }
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
                <div className="link" onClick={() => navigateTo('/')}>
                  <img src={Logo} alt="" />
                  <span>{this.props.siteTitle}</span>
                </div>
              </h1>
              <button className="Header__menu" onClick={this.handleMenuOpen}>
                Open Menu
              </button>
              <div className={navClass}>
                <a
                  className="Header__close"
                  href="#"
                  onClick={this.handleMenuClose}
                >
                  Close Menu
                </a>
                <Navigation
                  closeNav={this.handleMenuClose}
                  resume={this.props.resume.file.url}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
