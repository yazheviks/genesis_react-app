/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlanets } from '../api/api';

export const PlanetPage = ({ match }) => {
  const [planet, setPlanet] = useState(null);
  const [planetsLength, setPlanetsLength] = useState(null);
  const planetId = +match.params.planetId;

  useEffect(() => {
    getPlanets()
      .then((res) => {
        const planetFound = res.find(pl => pl.id === planetId);

        setPlanet(planetFound);
        setPlanetsLength(res.length);
      });
  }, [planetId]);

  if ((planetsLength !== null && planetId > planetsLength)
    || (planetId <= 0 && planetsLength !== null)) {
    return planetId > planetsLength ? (
      <div className="planet-page">
        <div className="planet-page__error">Thant&apos;s all...</div>
        <Link
          to="/planets"
          exact
        >
          <button
            className="planet-page__arrow planet-page__arrow--return btn btn-dark"
            type="button"
          >
            Return to main page
          </button>
        </Link>
        <Link
          to={`/planets/${planetId - 1}`}
        >
          <button
            type="button"
            className="planet-page__arrow--prev planet-page__arrow btn btn-dark"
          >
            {'<'}
          </button>
        </Link>
      </div>
    ) : (
      <div className="planet-page">
        <div className="planet-page__error">Thant&apos;s all...</div>
        <Link
          to="/planets"
          exact
        >
          <button
            className="planet-page__arrow planet-page__arrow--return btn btn-dark"
            type="button"
          >
            Return to main page
          </button>
        </Link>
        <Link
          to={`/planets/${planetId + 1}`}
        >
          <button
            type="button"
            className="planet-page__arrow--next planet-page__arrow btn btn-dark"
          >
            {'>'}
          </button>
        </Link>
      </div>
    );
  }

  return planet ? (
    <div className="planet-page">
      <Link
        to={`/planets/${planetId + 1}`}
      >
        <button
          type="button"
          className="planet-page__arrow--next planet-page__arrow btn btn-dark"
        >
          {'>'}
        </button>
      </Link>
      <Link
        to={`/planets/${planetId - 1}`}
      >
        <button
          type="button"
          className="planet-page__arrow--prev planet-page__arrow btn btn-dark"
        >
          {'<'}
        </button>
      </Link>
      <Link
        to="/planets"
        exact
        className="btn btn-dark planet-page__arrow--return planet-page__arrow"
      >
        {'< to main page'}
      </Link>
      <h1 className="planet-page__title">{planet.name}</h1>
      <p className="planet-page__rotation-period">
        {`Rotation period: ${planet.rotation_period}`}
      </p>
      <p className="planet-page__diameter">
        {`Diameter: ${planet.diameter}`}
      </p>
      <p className="planet-page__climate">
        {`Climate: ${planet.climate}`}
      </p>
      <p className="planet-page__gravity">
        {`GRavity: ${planet.gravity}`}
      </p>
      <p className="planet-page__terrain">
        {`Terrain: ${planet.terrain}`}
      </p>
      <p className="planet-page__population">
        {`Population: ${planet.population}`}
      </p>
      <div className="planet-page__residents">
        <p>in progress...</p>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};
