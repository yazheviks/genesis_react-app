/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { PageError } from '../PageError';
import { PlanetInfo } from '../PlanetInfo';
import { request } from '../../api/api';

export const PlanetPage = ({ match }) => {
  const [residents, setResidents] = useState(null);
  const [planetsCount, setPlanetsCount] = useState(null);
  const [planet, setPlanet] = useState(null);
  const planetId = +match.params.planetId;

  useEffect(() => {
    request('planets/')
      .then(result => result.count)
      .then(setPlanetsCount)
      .catch(() => {
        setPlanetsCount(60);
      });

    request(`${match.url.slice(1)}/`)
      .then((result) => {
        setPlanet(result);

        return result;
      })
      .then((resultPlanet) => {
        const people = [];

        if (!resultPlanet) {
          return;
        }

        if (resultPlanet.residents.length === 0) {
          setResidents([]);
        }

        resultPlanet.residents.forEach((personURL) => {
          const url = personURL.replace('http', 'https');

          fetch(url)
            .then(person => person.json())
            .then((personJSON) => {
              people.push(personJSON.name);
            })
            .then(() => {
              setResidents([...people]);
            })
            .catch(() => {
              setResidents(['We did not find famous people. Try again later.']);
            });
        });
      })
      .catch(() => {
        setPlanet('none');
      });
  }, [planetId]);

  const isErrorPage = planetId > planetsCount || planetId <= 0;

  if (isErrorPage) {
    return planetId > planetsCount ? (
      <div className="planet-page">
        <PageError text="Thant&apos;s all..." />
        <Button
          text="X"
          mission="return"
          href="/page/1/"
        />

        <Button
          text="<"
          mission="prev"
          href={`/planets/${planetId - 1}`}
          className="right"
        />
      </div>
    ) : (
      <div className="planet-page">
        <PageError text="Thant&apos;s all..." />
        <Button
          text="X"
          mission="return"
          href="/page/1"
        />
        <Button
          text=">"
          mission="next"
          href={`/planets/${planetId + 1}`}
          className="left"
        />
      </div>
    );
  }

  return planet ? (
    <div className="planet-page">
      <div>
        <Button
          text="<"
          mission="prev"
          href={`/planets/${planetId - 1}`}
        />
        <Button
          text=">"
          mission="next"
          href={`/planets/${planetId + 1}`}
        />
      </div>
      <Button
        text="X"
        mission="return"
        href="/page/1"
      />
      {residents ? (
        <PlanetInfo
          planet={planet}
          residents={residents}
        />
      ) : (
        <PageError text="Loading..." />
      )}
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
    url: PropTypes.string,
  }).isRequired,
};
