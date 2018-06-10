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
      <Intro title={intro.title.title} paragraph={intro.paragraph.paragraph} />
      <div className="container">
        <div className="row">
          <div className="Index__work cf">
            <div className="col-md-12">
              <h2 id="work" className="Index__work-title red">
                Work
              </h2>
            </div>
            {work.map((node, i) => (
              <div className="col-md-8 offset-md-2" key={node.node.slug}>
                <FeatureItem
                  key={node.node.slug}
                  title={node.node.title.title}
                  meta={node.node.typeOfWork}
                  content={node.node.brief.brief}
                  link={node.node.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Process
        lead={process.lead}
        title={process.title}
        intro={process.intro.intro}
        processItems={process.processItem}
      />
      <Highlight
        backgroundImage={highlight.backgroundImage.file.url}
        lead={highlight.lead.lead}
        title={highlight.title.title}
        link={'/about'}
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
      backgroundImage {
        id
        file {
          url
        }
      }
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
