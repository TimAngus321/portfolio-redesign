import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { RouteWithSubRoutes } from 'shared/components';
import { routeConstants } from 'shared/constants';

const { SKILLS } = routeConstants;
const { SETTINGS } = SKILLS.subroutes;

function Skills({ routes }) {
  return (
    <div>
    <h2>Skills</h2>
    <ul className="App-nav-list">
      <li className="App-nav-item">
        <Link to={SKILLS.route}>Details</Link>
      </li>
      <li className="App-nav-item">
        <Link to={SETTINGS.route}>{SETTINGS.name}</Link>
      </li>
    </ul>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
    </div>
  );
}

export default Skills;