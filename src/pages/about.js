import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import IntroAbout from '../components/introAbout';

const AboutPage = ({ data }) => {
  const education = data.allContentfulEducation.edges;
  const experience = data.allContentfulExperience.edges;
  const facts = data.allContentfulFacts.edges;
  const skills = data.allContentfulProfessionalSkills.edges;
  const content = data.contentfulAboutContent;
  const intro = data.contentfulAboutIntro;
  return (
    <div className="Page-section">
      <IntroAbout
        title={intro.title}
        paragraph={intro.paragraph.paragraph}
        backgroundImage={intro.backgroundImage}
      />
      <div className="About__content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="h2">{content.leadParagraph.leadParagraph}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-2">
              <div className="About__contentSection">
                <ReactMarkdown source={content.contentSection.contentSection} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About__experience">
        <div className="container">
          <div className="row">
            {experience.length && (
              <div className="About__experience-item col-md-4">
                <p className="h2 red">Experience</p>
                <ul className="About__experience-list">
                  {experience.map((node, i) => (
                    <li key={i}>
                      <span className="About__experience-content">
                        {node.node.title}
                      </span>
                      <span className="About__experience-details">
                        {node.node.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {skills.length && (
              <div className="About__experience-item col-md-4">
                <p className="h2 red">Professional Skills</p>
                <ul className="About__experience-list">
                  {skills.map((node, i) => (
                    <li key={i}>
                      <span className="About__experience-content">
                        {node.node.title}
                      </span>
                      <span className="About__experience-details">
                        {node.node.content.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {education.length && (
              <div className="About__experience-item col-md-4">
                <p className="h2 red">Education</p>
                <ul className="About__experience-list">
                  {education.map((node, i) => (
                    <li key={i}>
                      <span className="About__experience-content">
                        {node.node.title}
                      </span>
                      <span className="About__experience-details">
                        {node.node.timing}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="About__contact cf">
            <div className="row">
              <div className="col-md-12">
                <h3 className="h2 red">Contact</h3>
                <p>
                  <a href="mailto:hello@jenthorn.ca">hello@jenthorn.ca</a>
                </p>
                <p>Please email me! I'd love to hear from you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {facts.length && (
        <div className="About__fact">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h3 className="h2 red About__fact-title">
                  Fun Jen Thorn facts
                </h3>
              </div>
              {facts.map((node, i) => (
                <div
                  key={node.node.id}
                  className="col-md-10 offset-md-1 About__fact-item"
                  style={{
                    backgroundImage: `url(${node.node.image.file.url})`,
                  }}
                >
                  <p className="h2">{node.node.title}</p>
                  <p>{node.node.content.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPageContent {
    contentfulAboutIntro {
      title
      paragraph {
        id
        paragraph
      }
      backgroundImage {
        id
        file {
          url
        }
      }
    }
    contentfulAboutContent {
      leadParagraph {
        leadParagraph
      }
      contentSection {
        contentSection
      }
    }
    allContentfulFacts {
      edges {
        node {
          id
          title
          content {
            id
            content
          }
          image {
            id
            title
            file {
              url
            }
          }
        }
      }
    }
    allContentfulEducation {
      edges {
        node {
          title
          timing
        }
      }
    }
    allContentfulExperience {
      edges {
        node {
          title
          time
        }
      }
    }
    allContentfulProfessionalSkills {
      edges {
        node {
          title
          content {
            content
          }
        }
      }
    }
  }
`;
