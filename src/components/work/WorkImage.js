import React from 'react';

const WorkImage = ({ url = '', alt = '', caption = '' }) => {
  return (
    <div className="WorkImage">
      <figure>
        <img src={url} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default WorkImage;
