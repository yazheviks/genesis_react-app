import React from 'react';
import PropTypes from 'prop-types';
import { Planet } from '../Planet';

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
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      residents: PropTypes.arrayOf(PropTypes.string),
      films: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};
