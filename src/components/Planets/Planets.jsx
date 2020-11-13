import React, { useState, useEffect } from 'react';
import { getPlanets } from '../../api/api';
import { Planet } from '../Planet';

export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets()
      .then(setPlanets);
  }, []);

  return (
    <div className="planets">
      {planets.map(planetX => (
        <Planet
          planets={planets}
          planet={planetX}
          key={planetX.id}
        />
      ))}
    </div>
  );
};
