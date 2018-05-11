import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Intro from '../components/intro';

const AboutPage = ({ data }) => {
  const education = data.allContentfulEducation.edges;
  const experience = data.allContentfulExperience.edges;
  const facts = data.allContentfulFacts.edges;
  const skills = data.allContentfulProfessionalSkills.edges;
  const content = data.contentfulAboutContent;
  const intro = data.contentfulAboutIntro;

  return (
    <div>
      <Intro
        title={intro.title}
        paragraph={intro.paragraph.paragraph}
        backgroundImage={''}
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
              <ReactMarkdown source={content.contentSection.contentSection} />
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
                {experience.map((node, i) => (
                  <div key={i}>
                    <p>{node.node.title}</p>
                    <p>{node.node.time}</p>
                  </div>
                ))}
              </div>
            )}

            {skills.length && (
              <div className="About__experience-item col-md-4">
                <p className="h2 red">Professional Skills</p>
                {skills.map((node, i) => (
                  <div key={i}>
                    <p>{node.node.title}</p>
                    <p>{node.node.content.content}</p>
                  </div>
                ))}
              </div>
            )}

            {education.length && (
              <div className="About__experience-item col-md-4">
                <p className="h2 red">Education</p>
                {education.map((node, i) => (
                  <div key={i}>
                    <p>{node.node.title}</p>
                    <p>{node.node.timing}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="col-md-12">
              <p className="h2 red">Contact</p>
              <p>
                <a href="mailto:hello@jenthorn.ca">hello@jenthorn.ca</a>
              </p>
              <p>Please email me! I'd love to hear from you!</p>
            </div>
          </div>
        </div>
      </div>
      {facts.length && (
        <div className="About__fact">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h3 className="h2 red">Facts</h3>
              </div>
              {facts.map((node, i) => (
                <div
                  key={node.node.id}
                  className="col-md-10 offset-md-1 About__fact-item"
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
