import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/root.scss';
import Shareable from '../../src/images/shareable.jpg';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
        {
          href: '//fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
      meta={[
        { name: 'description', content: 'UX Designer in Toronto Canada' },
        {
          name: 'keywords',
          content: 'Jen Thorn, UX Designer, Toronto, Canada',
        },
        {
          name: 'og:title',
          content: 'Jen Thorn',
        },
        {
          name: 'twitter:title',
          content: 'Jen Thorn',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:site_name',
          content: 'Jen Thorn - UX Designer',
        },
        {
          name: 'og:image',
          content: Shareable,
        },
        {
          name: 'og:description',
          content: 'UX Designer in Toronto Canada',
        },
        {
          name: 'twitter:description',
          content: 'UX Designer in Toronto Canada',
        },
      ]}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
      resume={data.contentfulFooter.resume}
    />
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
      content {
        content
      }
      resume {
        id
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;
