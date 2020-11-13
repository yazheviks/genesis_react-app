/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { arrayOf } from 'prop-types';
// import { PlanetPage } from './PlanetPage';

export const Planet = ({ planet }) => (
  <div>
    <Link
      to={`/planets/${planet.id}`}
    >
      <div className="planets__planet planet card">
        <h1 className="planet__title card-title">
          {planet.name}
        </h1>
        <img
          src="./planet.svg"
          alt={planet.name}
          className="card-img-top"
        />
        <div className="planet__info">
          <span className="card-text">{`Climate: ${planet.climate}`}</span>
          <span className="card-text">
            {`Population: ${planet.population}`}
          </span>
        </div>
      </div>
    </Link>
  </div>
);
Planet.propTypes = {
  planet: PropTypes.shape({
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
    residents: arrayOf(PropTypes.string),
    films: arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
