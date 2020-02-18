import React from 'react';
import PropTypes from 'prop-types';
import './SocialLink.scss';

const SocialLink = ({ imageSrc, altText, link, isDownload }) => (
  <a className="social-link" href={link} download={isDownload}>
    <img src={imageSrc} alt={altText} />
  </a>
);

SocialLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string,
  isDownload: PropTypes.bool
};

export default SocialLink;
