import React from 'react';
import Link from 'gatsby-link';

const FeatureItem = ({
  title = '',
  meta = '',
  content = '',
  image = null,
  imageAlt = '',
  isPortfolio = true,
  link = '#',
}) => (
  <div>
    <h3>
      <a href={link}>{title}</a>
    </h3>
    <div>
      {isPortfolio ? (
        <div>{meta} -</div>
      ) : (
        <div>
          <img src={image} alt={imageAlt} />
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

export default FeatureItem;
