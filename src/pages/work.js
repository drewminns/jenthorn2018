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
              />
            </div>
          )}
          {work.problemImage && (
            <div className="col-md-12">
              <WorkImage
                url={work.problemImage.file.url}
                alt={work.problemImage.description}
                caption={work.problemImageCaption}
              />
            </div>
          )}

          {work.processContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={work.processContent.processContent}
                className="WorkPage__content"
              />
            </div>
          )}
          {work.processImage && (
            <WorkImage
              url={work.processImage.file.url}
              alt={work.processImage.description}
              caption={work.processImageCaption}
            />
          )}
          {work.processDetailContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={work.processDetailContent.processDetailContent}
                className="WorkPage__content"
              />
            </div>
          )}
          {work.solutionContent && (
            <div className="col-md-8">
              <ReactMarkdown
                source={work.solutionContent.solutionContent}
                className="WorkPage__content"
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
      problemImage {
        id
        description
        file {
          url
          fileName
          contentType
        }
      }
      problemImageCaption
      approachContent {
        approachContent
      }
      processContent {
        processContent
      }
      processImage {
        id
        description
        file {
          url
          fileName
          contentType
        }
      }
      processImageCaption
      processDetailContent {
        processDetailContent
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
