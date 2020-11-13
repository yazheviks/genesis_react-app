import React from 'react';
import { planetType } from '../types/planetType';
import { residentType } from '../types/residentType';

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
  planet: planetType.isRequired,
  residents: residentType,
};

PlanetInfo.defaultProps = {
  residents: null,
};
