import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Card;
