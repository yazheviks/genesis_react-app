import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { PageError } from '../PageError';
import { PlanetInfo } from '../PlanetInfo';
import { request } from '../../api/api';

export const PlanetPage = ({ match }) => {
  const [residents, setResidents] = useState(null);
  const [planet, setPlanet] = useState(null);
  const planetId = +match.params.planetId;

  useEffect(() => {
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
              people.push(personJSON);
            })
            .then(() => {
              setResidents([...people]);
            });
        });
      })
      .catch(() => {
        setPlanet('none');
      });
  }, [planetId]);

  const isErrorPage = planetId > 60 || planetId <= 0;

  if (isErrorPage) {
    return planetId > 60 ? (
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
