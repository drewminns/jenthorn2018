import React from 'react';
import PropTypes from 'prop-types';

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

FeatureItem.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  isPortfolio: PropTypes.bool,
  link: PropTypes.string,
};

export default FeatureItem;
