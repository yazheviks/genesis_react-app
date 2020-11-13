import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const classNames = require('classnames');

export const Button = ({ text, mission, href }) => (
  <Link
    to={href}
    exact
  >
    <button
      className={classNames({
        'planet-page__arrow': true,
        btn: true,
        'btn-danger': mission === 'return',
        'btn-dark': mission === 'next' || mission === 'prev',
      }, `planet-page__arrow--${mission}`)}
      type="button"
    >
      {text}
    </button>
  </Link>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
