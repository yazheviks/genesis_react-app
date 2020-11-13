import React from 'react';
import PropTypes from 'prop-types';

export const PlanetInfo = ({ planet, residents }) => (
  <>
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
      {residents && residents.length === 0 && (
        <div>We know nobody from here...</div>
      )}
      {residents ? (
        residents.length > 0 && (
          <div>
            You may know them:
            {residents.map(person => (
              <p
                className="planet-page__resident"
                key={person.name}
              >
                {person.name}
              </p>
            ))}
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </>
);

PlanetInfo.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    films: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(
        PropTypes.string,
      ),
    ]),
    population: PropTypes.string,
    residents: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(
        PropTypes.string,
      ),
    ]),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  residents: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
      hair_color: PropTypes.string,
      skin_color: PropTypes.string,
      eye_color: PropTypes.string,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
      homeworld: PropTypes.string,
      films: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.arrayOf(
          PropTypes.string,
        ),
      ]),
      species: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.arrayOf(
          PropTypes.string,
        ),
      ]),
      vehicles: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.arrayOf(
          PropTypes.string,
        ),
      ]),
      starships: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.arrayOf(
          PropTypes.string,
        ),
      ]),
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string,
    })),
  ]),
};

PlanetInfo.defaultProps = {
  residents: null,
};
