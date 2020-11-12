/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getPlanets } from '../api/api';
import { Button } from './Button';
import { PageError } from './PageError';
import { PlanetInfo } from './PlanetInfo';

export const PlanetPage = ({ match }) => {
  const [planet, setPlanet] = useState(null);
  const [planetsLength, setPlanetsLength] = useState(null);
  const [residents, setResidents] = useState(null);
  const planetId = +match.params.planetId;

  useEffect(() => {
    getPlanets()
      .then((res) => {
        const planetFound = res.find(pl => pl.id === planetId);

        setPlanet(planetFound);
        setPlanetsLength(res.length);

        return planetFound;
      })
      .then((pl) => {
        const people = [];

        if (!pl) {
          return;
        }

        if (pl.residents.length === 0) {
          setResidents([]);
        }

        pl.residents.forEach((personURL) => {
          fetch(personURL)
            .then(person => person.json())
            .then((personJSON) => {
              people.push(personJSON);
            })
            .then(() => {
              setResidents([...people]);
            });
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
        <div className="planet-page__error">Thant&apos;s all...</div>
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
