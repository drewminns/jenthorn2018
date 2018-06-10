import React from 'react';
import Link from 'gatsby-link';

const Intro = ({ title, paragraph, backgroundImage = '' }) => {
  const background = backgroundImage
    ? { backgroundImage: `url(${backgroundImage.file.url})` }
    : null;
  return (
    <div className="IntroHome" style={background}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="red">{title}</h2>
            <p className="h2">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
