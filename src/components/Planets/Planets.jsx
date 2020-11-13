import React from 'react';
import PropTypes from 'prop-types';
import { Planet } from '../Planet';
import { planetType } from '../types/planetType';

export const Planets = ({ planets }) => (
  <div className="planets">
    {planets.map(planetX => (
      <Planet
        planets={planets}
        planet={planetX}
        key={planetX.id}
      />
    ))}
  </div>
);

Planets.propTypes = {
  planets: PropTypes.arrayOf(planetType).isRequired,
};
