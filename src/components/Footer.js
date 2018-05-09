import React from 'react';
import Link from 'gatsby-link';

const Footer = ({ data }) => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <ul className="Footer__nav">
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <ul className="Footer__social">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Mail</a>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <p
              dangerouslySetInnerHTML={{ __html: data.content.content }}
              className="h2"
            />
            <p className="h2">
              <a href={data.featureLink} className="red">
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

export const query = graphql`
  query FooterContent {
    contentfulFooter {
      featureText
      featureLink
      content {
        content
      }
    }
  }
`;
