import React from 'react';
import PropTypes from 'prop-types';

export const PageError = ({ text }) => (
  <div className="planet-page__error">
    {text}
  </div>
);

PageError.propTypes = {
  text: PropTypes.string.isRequired,
};
