import React from 'react';
import Link from 'gatsby-link';

import Intro from '../components/intro';
import FeatureItem from '../components/FeatureItem';
import Process from '../components/Process';
import Highlight from '../components/Highlight';

const IndexPage = ({ data }) => {
  const intro = data.contentfulHomepageIntro;
  const process = data.contentfulProcess;
  const highlight = data.contentfulHomepageHighlight;
  const work = data.allContentfulWork.edges;

  return (
    <div>
      <Intro
        title={intro.title.title}
        paragraph={intro.paragraph.paragraph}
        backgroundImage={intro.backgroundImage}
      />
      <h2 className="red" id="work">
        Work
      </h2>
      {work.map((node, i) => (
        <FeatureItem
          key={node.node.slug}
          title={node.node.title.title}
          meta={node.node.typeOfWork}
          content={node.node.brief.brief}
          link={node.node.slug}
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
    allContentfulWork {
      edges {
        node {
          slug
          title {
            title
          }
          brief {
            brief
          }
          typeOfWork
          id
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
