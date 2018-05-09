import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/root.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
        {
          href:
            '//fonts.googleapis.com/css?family=Cabin:700,400i|Merriweather:700,400',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>{children()}</div>
    <Footer data={data.contentfulFooter} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query PageContent {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFooter {
      featureText
      featureLink
      content {
        content
      }
    }
  }
`;
