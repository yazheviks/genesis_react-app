import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { PageError } from '../PageError';
import { PlanetInfo } from '../PlanetInfo';
import { planetType } from '../types/planetType';

export const PlanetPage = ({ match, planets }) => {
  const [residents, setResidents] = useState(null);
  const planetId = +match.params.planetId;
  const planet = planets.find(pl => pl.id === planetId);
  const planetsLength = planets.length;

  useEffect(() => {
    const people = [];

    if (!planet) {
      return;
    }

    if (planet.residents.length === 0) {
      setResidents([]);
    }

    planet.residents.forEach((personURL) => {
      const url = personURL.replace('http', 'https');

      fetch(url)
        .then(person => person.json())
        .then((personJSON) => {
          people.push(personJSON);
        })
        .then(() => {
          setResidents([...people]);
        });
    });
  }, [planetId]);

  const isErrorPage = (planetsLength !== null && planetId > planetsLength)
  || (planetId <= 0 && planetsLength !== null);

  if (isErrorPage) {
    return planetId > planetsLength ? (
      <div className="planet-page">
        <PageError text="Thant&apos;s all..." />
        <Button
          text="X"
          mission="return"
          href="/planets"
        />

        <Button
          text="<"
          mission="prev"
          href={`/planets/${planetId - 1}`}
        />
      </div>
    ) : (
      <div className="planet-page">
        <PageError text="Thant&apos;s all..." />
        <Button
          text="X"
          mission="return"
          href="/planets"
        />
        <Button
          text=">"
          mission="next"
          href={`/planets/${planetId + 1}`}
        />
      </div>
    );
  }

  return planet ? (
    <div className="planet-page">
      <Button
        text=">"
        mission="next"
        href={`/planets/${planetId + 1}`}
      />
      <Button
        text="<"
        mission="prev"
        href={`/planets/${planetId - 1}`}
      />
      <Button
        text="X"
        mission="return"
        href="/planets"
      />
      <PlanetInfo
        planet={planet}
        residents={residents}
      />
    </div>
  ) : (
    <PageError text="Loading..." />
  );
};

PlanetPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      planetId: PropTypes.string,
    }),
  }).isRequired,
  planets: PropTypes.arrayOf(planetType).isRequired,
};
