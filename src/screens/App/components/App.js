import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { RouteWithSubRoutes } from 'shared/components';
import './App.scss';
import routeConstants from 'shared/constants/routes';
import NavBar from './NavBar'
import routes from '../route';
import Hamburger from './Hamburger/index.js';
import { useState, useRef } from 'react';
import Menu from './Menu/index.js';
import { useOnClickOutside } from './hooks.js';
// import { history } from './history.js'; 


const {
  HOME,
  ABOUT,
  SKILLS,
  WORK,
  CONTACT,
} = routeConstants;

const navItems = [HOME, ABOUT, SKILLS, WORK, CONTACT];

function App() {

const [open, setOpen] = useState(false);

const node = useRef(); 
useOnClickOutside(node, () => setOpen(false)); {
  return (
    <div className="App">
        <HashRouter>  
          <NavBar navItems={navItems} />
          <div ref={node} className="mobile-nav">
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>  
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route
                path="/"
                exact
                render={() => {
                    return (
                      <Redirect to="/home" />
                    )
                }}
              />
            </Switch> 
        </HashRouter>
      </div>
    );
  }
}

export default App;