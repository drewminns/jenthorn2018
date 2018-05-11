import React from 'react';

const WorkImage = ({ url = '', alt = '', caption = '' }) => {
  return (
    <div>
      <figure>
        <img src={url} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
};

export default WorkImage;
