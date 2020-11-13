import React from 'react';
import './main.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Planets } from './components/Planets';
import { PlanetPage } from './components/PlanetPage';
import { PageError } from './components/PageError';
import { Button } from './components/Button';

export const App = () => (
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
          />
        )}
      />

      <Redirect path="/" to="/page/1/" exact />

      <div className="error-page">
        <PageError text="Page is not found" />
        <Button
          text="back to main"
          mission="return"
          href="/page/1"
        />
      </div>
    </Switch>
  </div>
);
