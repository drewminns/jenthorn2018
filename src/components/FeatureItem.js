import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../images/arrow.svg';
import Link from 'gatsby-link';

const FeatureItem = ({ title = '', meta = '', content = '', link = '#' }) => (
  <div className="FeatureItem">
    <h3 className="FeatureItem__title h2">
      <a href={link}>{title}</a>
    </h3>
    <div className="FeatureItem__details">
      <p className="FeatureItem__type">{meta} -</p>
      <div>
        <p className="FeatureItem__copy">{content}</p>
        <p className="FeatureItem__link">
          <Link className="green" to={link}>
            View Project <img src={Arrow} />
          </Link>
        </p>
      </div>
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
