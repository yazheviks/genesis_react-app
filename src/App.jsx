import React, { useState, useEffect } from 'react';
import './main.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getPlanets } from './api/api';
import { Planets } from './components/Planets';
import { PlanetPage } from './components/PlanetPage';
import { PageError } from './components/PageError';
import { Button } from './components/Button';

export const App = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets()
      .then(setPlanets);
  }, []);

  return planets ? (
    <div>
      <h1 className="page__title">Star wars universe</h1>
      <Switch>
        <Route
          path="/page/:pageId"
          render={routerParams => (
            <Planets
              {...routerParams}
            />
          )}
          exact
        />

        <Route
          path="/planets/:planetId"
          render={routerParams => (
            <PlanetPage
              {...routerParams}
              planets={planets}
            />
          )}
        />

        <Redirect path="/" to="/page/1/" exact />

        <div className="error-page">
          <PageError text="Page is not found" />
          <Button
            text="back to main"
            mission="return"
            href="/planets"
          />
        </div>
      </Switch>
    </div>
  ) : (
    <PageError text="Loading..." />
  );
};
