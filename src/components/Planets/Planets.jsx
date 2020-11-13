import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Planet } from '../Planet';
import { Button } from '../Button';
import { request } from '../../api/api';
import { PageError } from '../PageError';

export const Planets = ({ match }) => {
  const pageId = +match.params.pageId;
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    request(`planets/?page=${pageId}`)
      .then(result => result.results)
      .then((result) => {
        setPlanets(result);

        return result;
      })
      .catch(() => {
        setPlanets('none');
      });
  }, [pageId]);

  const isBigger = pageId >= 7;

  return planets ? (
    <div className="planets">
      {planets === 'none' ? (
        <>
          <PageError text="Planets are over" />
          <Button
            text={isBigger ? '<' : '>'}
            mission={isBigger ? 'prev' : 'next'}
            href={isBigger ? `/page/${pageId - 1}/` : '/page/1/'}
          />
        </>
      ) : (
        <>
          {planets.map(planet => (
            <Planet
              planet={planet}
              key={planet.name}
            />
          ))}

          <Button
            text=">"
            mission="next"
            href={`/page/${pageId + 1}`}
          />
          <Button
            text="<"
            mission="prev"
            href={`/page/${pageId - 1}`}
          />
        </>
      )}
    </div>
  ) : (
    <PageError text="Loading..." />
  );
};

Planets.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageId: PropTypes.string,
    }),
  }).isRequired,
};
