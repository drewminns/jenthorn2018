import React from 'react';
import Link from 'gatsby-link';

import Intro from '../components/intro';
import FeatureItem from '../components/FeatureItem';
import Process from '../components/Process';
import Highlight from '../components/Highlight';

const items = [];

const IndexPage = ({ data }) => {
  const intro = data.contentfulHomepageIntro;
  const process = data.contentfulProcess;
  const highlight = data.contentfulHomepageHighlight;

  return (
    <div>
      <Intro
        title={intro.title.title}
        paragraph={intro.paragraph.paragraph}
        backgroundImage={intro.backgroundImage}
      />
      <h2 className="red">Work</h2>
      {items.map((node, i) => (
        <FeatureItem
          key={i}
          title={node.title}
          meta={node.meta}
          content={node.content}
          link={node.link}
        />
      ))}
      <Process
        lead={process.lead}
        title={process.title}
        intro={process.intro.intro}
        processItems={process.processItem}
      />
      <Highlight
        lead={highlight.lead.lead}
        title={highlight.title.title}
        link={highlight.featureLink}
        linkText={highlight.featureText}
        listItems={highlight.items}
      />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageContent {
    contentfulHomepageIntro {
      title {
        title
      }
      paragraph {
        paragraph
      }
      backgroundImage {
        file {
          url
          fileName
          contentType
        }
      }
    }
    contentfulHomepageHighlight {
      lead {
        lead
      }
      title {
        title
      }
      featureLink
      featureText
      items
    }
    contentfulProcess {
      title
      lead
      intro {
        intro
      }
      processItem {
        title
        description {
          description
        }
        icon {
          id
          file {
            url
          }
        }
      }
    }
  }
`;
