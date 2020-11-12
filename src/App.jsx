/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getPlanets } from './api/api';
import { Planets } from './components/Planets';
import { PlanetPage } from './components/PlanetPage';

export const App = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets()
      .then(setPlanets);
  }, []);

  return (
    <div>
      <h1 className="page__title">Star wars universe</h1>
      <Switch>
        <Route
          path="/planets"
          component={Planets}
          exact
        />

        <Route
          path="/planets/:planetId"
          render={routerParams => (
            <PlanetPage
              {...routerParams}
              planets={planets}
              planetsLength={planets.length}
            />
          )}
        />

        <Redirect path="/" to="/planets" exact />

        <h1>Page is not found</h1>
      </Switch>
    </div>
  );
};
