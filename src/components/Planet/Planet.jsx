import React from 'react';
import { Link } from 'react-router-dom';
import { planetType } from '../types/planetType';

export const Planet = ({ planet }) => (
  <div>
    <Link
      to={`/planets/${planet.id}`}
      style={{ textDecoration: 'none' }}
    >
      <div className="planets__planet planet card">
        <h1 className="planet__title card-title">
          {planet.name}
        </h1>
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
  planet: planetType.isRequired,
};
