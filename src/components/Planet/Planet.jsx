/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { planetType } from '../types/planetType';

function cutNumber(url) {
  const split = url.split('/');
  const { length } = split;
  const res = split[length - 2];

  return res;
}

export const Planet = ({ planet }) => (
  <div>
    <Link
      to={`/planets/${cutNumber(planet.url)}`}
      style={{ textDecoration: 'none' }}
    >
      <div className="planets__planet planet card">
        <h1 className="planet__title card-title">
          {planet.url}
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
