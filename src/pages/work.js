import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

import WorkTitle from '../components/work/WorkTitle';
import WorkFull from '../components/work/WorkFull';
import WorkImage from '../components/work/WorkImage';

const WorkPage = props => {
  const work = props.data.contentfulWork;
  return (
    <div className="WorkPage">
      <WorkTitle title={work.title.title} description={work.brief.brief} />
      <div className="container">
        <div className="row">
          {work.problemContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={work.problemContent.problemContent}
                className="WorkPage__content"
                escapeHtml={false}
              />
            </div>
          )}
          {work.approachContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={work.approachContent.approachContent}
                className="WorkPage__content"
                escapeHtml={false}
              />
            </div>
          )}
          {work.solutionContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={work.solutionContent.solutionContent}
                className="WorkPage__content"
                escapeHtml={false}
              />
            </div>
          )}
          {work.futureConsiderationsContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={
                  work.futureConsiderationsContent.futureConsiderationsContent
                }
                className="WorkPage__content"
                escapeHtml={false}
              />
            </div>
          )}
        </div>
      </div>
      {work.bottomFullImage && (
        <WorkFull backgroundImage={work.bottomFullImage.file.url} />
      )}
    </div>
  );
};

export default WorkPage;

export const query = graphql`
  query blogPostQuery($slug: String) {
    contentfulWork(slug: { eq: $slug }) {
      title {
        title
      }
      slug
      brief {
        brief
      }
      typeOfWork
      id
      problemContent {
        problemContent
      }
      approachContent {
        approachContent
      }
      solutionContent {
        solutionContent
      }
      futureConsiderationsContent {
        futureConsiderationsContent
      }
      bottomFullImage {
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
