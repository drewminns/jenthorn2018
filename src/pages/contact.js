import React from 'react';
import Link from 'gatsby-link';

const ContactPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="green">Hi from the Contact page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
);

export default ContactPage;
