import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RouteWithSubRoutes } from 'shared/components';
import './App.scss';
import routeConstants from 'shared/constants/routes';
import NavBar from './NavBar'
import routes from '../route';

const {
  HOME,
  ABOUT,
  SKILLS,
  WORK,
  CONTACT,
} = routeConstants;

const navItems = [HOME, ABOUT, SKILLS, WORK, CONTACT];

function App() {
  return (
    <div className="App">
       
        <Router>  
        <NavBar navItems={navItems} />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
       
        </Router>
      </div>
  );
}

export default App;